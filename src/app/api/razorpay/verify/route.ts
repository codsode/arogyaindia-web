import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { z } from "zod";
import { getRazorpayKeySecret } from "@/lib/razorpay";

export const runtime = "nodejs";

const verifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = verifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Missing payment verification fields" },
      { status: 400 }
    );
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    parsed.data;

  try {
    const expected = crypto
      .createHmac("sha256", getRazorpayKeySecret())
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const expectedBuf = Buffer.from(expected, "hex");
    const receivedBuf = Buffer.from(razorpay_signature, "hex");

    const valid =
      expectedBuf.length === receivedBuf.length &&
      crypto.timingSafeEqual(expectedBuf, receivedBuf);

    if (!valid) {
      return NextResponse.json(
        { message: "Payment signature verification failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Razorpay signature verification error:", error);
    return NextResponse.json(
      { message: "Unable to verify payment. Please contact us." },
      { status: 500 }
    );
  }
}
