"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Smartphone,
  ShieldCheck,
  BadgeCheck,
  Banknote,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { bankDetails } from "@/data/bank-details";
import type {
  RazorpayCheckoutOptions,
  RazorpayCheckoutResponse,
} from "@/lib/razorpay-types";

const DEFAULT_PRESET_AMOUNTS = [500, 1100, 1500, 2000, 5000, 10000, 20000];

const donorSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Please enter a valid phone number"),
});

type DonorValues = z.infer<typeof donorSchema>;

type Status =
  | { state: "idle" }
  | { state: "creating-order" }
  | { state: "verifying" }
  | { state: "success"; paymentId: string }
  | { state: "error"; message: string };

interface FieldProps {
  placeholder: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

function Field({
  placeholder,
  type = "text",
  inputMode,
  value,
  onChange,
  error,
  disabled = false,
}: FieldProps) {
  return (
    <div>
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={cn(
          "w-full rounded-lg bg-surface-muted px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted transition-colors focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary-500/30",
          error && "ring-2 ring-red-500/40",
          disabled && "cursor-not-allowed bg-surface-muted/50 text-text-muted",
        )}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

interface DonationFormSectionProps {
  defaultAmount?: number;
  presetAmounts?: number[];
  campaignId?: string;
  campaignTitle?: string;
  hideSidePanel?: boolean;
  heading?: string;
  subheading?: string;
}

export function DonationFormSection({
  defaultAmount = 1000,
  presetAmounts = DEFAULT_PRESET_AMOUNTS,
  campaignId,
  campaignTitle,
  hideSidePanel = false,
  heading = "Donate",
  subheading = "Pay instantly with UPI — secure and instant.",
}: DonationFormSectionProps = {}) {
  const [amountInput, setAmountInput] = useState<string>(String(defaultAmount));
  const [donor, setDonor] = useState<DonorValues>({
    name: "",
    email: "",
    phone: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof DonorValues | "amount", string>>
  >({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Razorpay) {
      setScriptReady(true);
    }
  }, []);

  const amount = parseInt(amountInput, 10) || 0;

  const handlePresetClick = (value: number) => {
    setAmountInput(String(value));
    setErrors((prev) => ({ ...prev, amount: undefined }));
  };

  const handleAmountChange = (raw: string) => {
    const cleaned = raw.replace(/[^0-9]/g, "");
    setAmountInput(cleaned);
    setErrors((prev) => ({ ...prev, amount: undefined }));
  };

  const validateInputs = () => {
    const nextErrors: typeof errors = {};

    // Anonymous donations require no donor info — no receipt will be issued
    // (80G receipts require donor identity), so we skip all donor validation.
    if (!isAnonymous) {
      const donorParse = donorSchema.safeParse(donor);
      if (!donorParse.success) {
        for (const issue of donorParse.error.issues) {
          const key = issue.path[0] as keyof DonorValues;
          if (!nextErrors[key]) nextErrors[key] = issue.message;
        }
      }
    }

    if (!amount || amount < 10) {
      nextErrors.amount = "Minimum donation is ₹10";
    } else if (amount > 500000) {
      nextErrors.amount =
        "For donations above ₹5,00,000 please contact us directly";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleDonate = async () => {
    if (!validateInputs()) return;

    if (!scriptReady || !window.Razorpay) {
      setStatus({
        state: "error",
        message:
          "Payment gateway is still loading. Please try again in a moment.",
      });
      return;
    }

    setStatus({ state: "creating-order" });
    try {
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          donor,
          anonymous: isAnonymous,
          campaignId,
          campaignTitle,
        }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData?.message ?? "Could not create order");
      }

      const options: RazorpayCheckoutOptions = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Arogya India",
        description: campaignTitle
          ? `Donation: ${campaignTitle}`
          : "Donation to Arogya Development Foundation",
        order_id: orderData.orderId,
        prefill: {
          name: isAnonymous ? "" : donor.name,
          email: donor.email,
          contact: donor.phone,
        },
        theme: { color: "#16a34a" },
        method: {
          upi: true,
          card: false,
          netbanking: false,
          wallet: false,
          emi: false,
          paylater: false,
        },
        handler: async (response: RazorpayCheckoutResponse) => {
          setStatus({ state: "verifying" });
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.verified) {
              throw new Error(verifyData?.message ?? "Verification failed");
            }
            setStatus({
              state: "success",
              paymentId: response.razorpay_payment_id,
            });
          } catch (err) {
            const message =
              err instanceof Error
                ? err.message
                : "Verification failed. If your money was deducted, please contact us with the payment ID.";
            setStatus({ state: "error", message });
          }
        },
        modal: {
          ondismiss: () => {
            setStatus((prev) =>
              prev.state === "creating-order" ? { state: "idle" } : prev
            );
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setStatus({
          state: "error",
          message:
            response?.error?.description ?? "Payment failed. Please try again.",
        });
      });
      rzp.open();
      setStatus({ state: "idle" });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setStatus({ state: "error", message });
    }
  };

  if (status.state === "success") {
    return (
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-2xl rounded-2xl bg-primary-50 p-12 text-center"
          >
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary-600" />
            <h2 className="text-2xl font-bold text-text-primary">
              Thank You for Your Donation
            </h2>
            <p className="mt-3 text-text-secondary">
              Your contribution helps us bring healthcare support and awareness
              to those who need it most.
            </p>
            <p className="mt-6 rounded-lg bg-surface p-4 text-sm text-text-secondary">
              Payment ID:{" "}
              <span className="font-mono font-medium text-text-primary">
                {status.paymentId}
              </span>
            </p>
            <p className="mt-4 text-xs text-text-muted">
              {isAnonymous
                ? "Anonymous donation recorded. No receipt will be issued for this contribution."
                : "An 80G receipt will be issued to your email shortly."}
            </p>
            <Button
              onClick={() => {
                setStatus({ state: "idle" });
                setDonor({ name: "", email: "", phone: "" });
                setIsAnonymous(false);
                setAmountInput("1000");
              }}
              variant="primary"
              className="mt-6"
            >
              Make Another Donation
            </Button>
          </motion.div>
        </Container>
      </section>
    );
  }

  const isProcessing =
    status.state === "creating-order" || status.state === "verifying";

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div
          className={cn(
            "grid gap-8",
            hideSidePanel
              ? "mx-auto max-w-2xl"
              : "lg:grid-cols-5",
          )}
        >
          {/* Donation form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={hideSidePanel ? "" : "lg:col-span-3"}
          >
            <div className="rounded-2xl bg-surface p-6 shadow-lg ring-1 ring-border sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-primary-700">
                    {heading}
                  </h2>
                  <p className="mt-1 text-sm text-text-secondary">
                    {subheading}
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 sm:flex">
                  <Smartphone className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Field
                  placeholder={isAnonymous ? "Name (not required)" : "Name"}
                  value={donor.name}
                  onChange={(value) =>
                    setDonor((prev) => ({ ...prev, name: value }))
                  }
                  error={isAnonymous ? undefined : errors.name}
                  disabled={isAnonymous}
                />
                <Field
                  placeholder={
                    isAnonymous ? "Mobile Number (not required)" : "Mobile Number"
                  }
                  type="tel"
                  inputMode="tel"
                  value={donor.phone}
                  onChange={(value) =>
                    setDonor((prev) => ({ ...prev, phone: value }))
                  }
                  error={isAnonymous ? undefined : errors.phone}
                  disabled={isAnonymous}
                />
                <Field
                  placeholder={
                    isAnonymous ? "Email Id (not required)" : "Email Id"
                  }
                  type="email"
                  inputMode="email"
                  value={donor.email}
                  onChange={(value) =>
                    setDonor((prev) => ({ ...prev, email: value }))
                  }
                  error={isAnonymous ? undefined : errors.email}
                  disabled={isAnonymous}
                />
                <Field
                  placeholder="Amount"
                  type="text"
                  inputMode="numeric"
                  value={amountInput}
                  onChange={handleAmountChange}
                  error={errors.amount}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {presetAmounts.map((value) => {
                  const active = amount === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handlePresetClick(value)}
                      className={cn(
                        "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary-600 text-white shadow-sm"
                          : "bg-accent-100 text-text-primary hover:bg-accent-200",
                      )}
                    >
                      ₹{value.toLocaleString("en-IN")}
                    </button>
                  );
                })}
              </div>

              <label
                className={cn(
                  "group mt-5 flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors select-none",
                  isAnonymous
                    ? "border-primary-600 bg-primary-50"
                    : "border-border bg-surface-muted/40 hover:border-primary-300 hover:bg-primary-50/40",
                )}
              >
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => {
                    setIsAnonymous(e.target.checked);
                    if (e.target.checked) {
                      setErrors((prev) => ({
                        ...prev,
                        name: undefined,
                        email: undefined,
                        phone: undefined,
                      }));
                    }
                  }}
                  className="peer sr-only"
                />
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
                    isAnonymous
                      ? "border-primary-600 bg-primary-600 text-white"
                      : "border-text-muted bg-surface group-hover:border-primary-500",
                  )}
                  aria-hidden="true"
                >
                  {isAnonymous && (
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M3 8.5l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isAnonymous ? "text-primary-700" : "text-text-primary",
                    )}
                  >
                    Make my donation anonymous
                  </p>
                  <p className="text-xs text-text-muted">
                    No personal details required. Note: 80G receipt cannot be
                    issued for anonymous donations.
                  </p>
                </div>
              </label>

              {status.state === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              <Button
                onClick={handleDonate}
                variant="primary"
                size="lg"
                className="mt-6 w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {status.state === "verifying"
                      ? "Verifying..."
                      : "Opening UPI..."}
                  </>
                ) : (
                  <>
                    <Smartphone className="h-5 w-5" />
                    Donate ₹{amount.toLocaleString("en-IN")} via UPI
                  </>
                )}
              </Button>

              <p className="mt-3 text-center text-xs text-text-muted">
                Secure UPI payment via Razorpay. Eligible for 80G tax
                deduction.
              </p>
            </div>
          </motion.div>

          {/* Right column: trust + bank details */}
          {!hideSidePanel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 lg:col-span-2"
          >
            {/* Trust card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white shadow-md">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">
                12A &amp; 80G Registered
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                Donations to Arogya Development Foundation are eligible for
                tax deduction under Section 80G of the Income Tax Act.
              </p>
              <a
                href="/documents"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
              >
                View documents
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Bank details card */}
            <BankDetailsCard />

            {/* Mini trust row */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-surface p-4 shadow-sm ring-1 ring-border">
                <ShieldCheck className="mb-2 h-5 w-5 text-primary-600" />
                <p className="text-sm font-semibold text-text-primary">
                  Secure
                </p>
                <p className="mt-0.5 text-xs text-text-muted">
                  Razorpay encryption
                </p>
              </div>
              <div className="rounded-xl bg-surface p-4 shadow-sm ring-1 ring-border">
                <BadgeCheck className="mb-2 h-5 w-5 text-primary-600" />
                <p className="text-sm font-semibold text-text-primary">
                  Transparent
                </p>
                <p className="mt-0.5 text-xs text-text-muted">
                  Every rupee tracked
                </p>
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

function BankDetailsCard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const rows: { label: string; value: string; copyable?: boolean }[] = [
    { label: "Account Name", value: bankDetails.accountName, copyable: true },
    {
      label: "Account Number",
      value: bankDetails.accountNumber,
      copyable: true,
    },
    { label: "IFSC", value: bankDetails.ifsc, copyable: true },
    { label: "Branch", value: bankDetails.branchName },
  ];

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
          <Banknote className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-primary">
            Direct Bank Transfer
          </h3>
          <p className="text-xs text-text-secondary">
            For NEFT, RTGS, or IMPS donations.
          </p>
        </div>
      </div>

      <dl className="space-y-2.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-3 rounded-lg bg-surface-muted px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <dt className="text-xs uppercase tracking-wide text-text-muted">
                {row.label}
              </dt>
              <dd className="mt-0.5 truncate text-sm font-semibold text-text-primary">
                {row.value}
              </dd>
            </div>
            {row.copyable && (
              <button
                type="button"
                onClick={() => copy(row.label, row.value)}
                aria-label={`Copy ${row.label}`}
                className="flex shrink-0 items-center gap-1 rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 transition-colors hover:bg-primary-100"
              >
                {copied === row.label ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
