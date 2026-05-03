import { NextResponse } from "next/server";
import { z } from "zod";
import { getRazorpayClient } from "@/lib/razorpay";

export const runtime = "nodejs";

// Treat empty strings as missing — donor fields are all optional, since
// anonymous donations send empty values for name/email/phone.
const optionalString = (schema: z.ZodString) =>
  z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    schema.optional(),
  );

const orderSchema = z.object({
  amount: z
    .number({ message: "Amount is required" })
    .int("Amount must be a whole number in INR")
    .min(10, "Minimum donation is ₹10")
    .max(500000, "Please contact us directly for donations above ₹5,00,000"),
  donor: z
    .object({
      name: optionalString(z.string().min(2).max(100)),
      email: optionalString(z.string().email()),
      phone: optionalString(z.string().min(7).max(20)),
    })
    .optional(),
  anonymous: z.boolean().optional(),
  campaignId: z.string().max(100).optional(),
  campaignTitle: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = orderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid request" },
      { status: 400 }
    );
  }

  const { amount, donor, anonymous, campaignId, campaignTitle } = parsed.data;

  // Non-anonymous donations need at least an email so we can issue the receipt.
  if (!anonymous && !donor?.email) {
    return NextResponse.json(
      {
        message:
          "Email is required for non-anonymous donations so we can send your 80G receipt.",
      },
      { status: 400 },
    );
  }

  try {
    const client = getRazorpayClient();
    const order = await client.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `aidn_${Date.now()}`,
      notes: {
        donor_name: anonymous ? "Anonymous" : (donor?.name ?? ""),
        donor_email: donor?.email ?? "",
        donor_phone: donor?.phone ?? "",
        anonymous: anonymous ? "yes" : "no",
        campaign_id: campaignId ?? "general",
        campaign_title: campaignTitle ?? "General Donation",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      { message: "Unable to create order. Please try again." },
      { status: 500 }
    );
  }
}
