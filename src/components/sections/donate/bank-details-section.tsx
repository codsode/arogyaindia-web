"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Banknote, Building2, Copy, Check, ShieldCheck, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { bankDetails } from "@/data/bank-details";

interface BankRowProps {
  label: string;
  value: string;
  copyable?: boolean;
}

function BankRow({ label, value, copyable = false }: BankRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-text-secondary sm:w-1/3">
        {label}
      </span>
      <div className="flex items-center justify-between gap-3 sm:w-2/3">
        <span className="break-all text-base font-semibold text-text-primary">
          {value}
        </span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${label}`}
            className="flex shrink-0 items-center gap-1 rounded-lg bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 transition-colors hover:bg-primary-100"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function BankDetailsSection() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Bank Account Details"
          subtitle="Donate directly to our official bank account. Every contribution, big or small, helps us bring healthcare support to those who need it most."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-surface p-8 shadow-sm lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <Banknote className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  Bank Transfer
                </h3>
                <p className="text-sm text-text-secondary">
                  Use these details for NEFT, RTGS, or IMPS transfers.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-muted/50 px-6">
              <BankRow label="Account Name" value={bankDetails.accountName} copyable />
              <BankRow label="Account Number" value={bankDetails.accountNumber} copyable />
              <BankRow label="IFSC Code" value={bankDetails.ifsc} copyable />
              <BankRow label="Bank Name" value={bankDetails.bankName} />
              <BankRow label="Branch" value={bankDetails.branchName} />
            </div>

            <p className="mt-6 text-xs text-text-muted">
              After making a donation, please share your transaction details
              with us at{" "}
              <a
                href="mailto:care@arogyaindia.org"
                className="font-medium text-primary-600 hover:underline"
              >
                care@arogyaindia.org
              </a>{" "}
              so we can acknowledge your contribution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-surface p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-text-primary">
                80G Tax Exemption
              </h4>
              <p className="mt-2 text-sm text-text-secondary">
                Donations are eligible for tax deduction under Section 80G of
                the Income Tax Act.
              </p>
            </div>

            <div className="rounded-2xl bg-surface p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-text-primary">
                Direct Impact
              </h4>
              <p className="mt-2 text-sm text-text-secondary">
                Your support directly helps patients and families in need of
                healthcare assistance.
              </p>
            </div>

            <div className="rounded-2xl bg-surface p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-text-primary">
                Registered Foundation
              </h4>
              <p className="mt-2 text-sm text-text-secondary">
                Arogya Development Foundation is a registered nonprofit
                organization.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
