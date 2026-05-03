import Link from "next/link";
import {
  HeartPulse,
  Sparkles,
  Package,
  HandHeart,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Receipt,
  BadgeCheck,
  Clock,
  CircleDot,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";
import { bankDetails } from "@/data/bank-details";
import { DonationFormSection } from "@/components/sections/donate/donation-form-section";
import { CampaignProgress } from "@/components/sections/campaigns/campaign-progress";
import { CampaignFaq } from "@/components/sections/campaigns/campaign-faq";
import {
  campaigns,
  getCampaignProgress,
  type Campaign,
} from "@/data/campaigns-data";

const iconMap = {
  "heart-pulse": HeartPulse,
  sparkles: Sparkles,
  package: Package,
  "hand-heart": HandHeart,
};

const milestoneIconMap = {
  done: CheckCircle2,
  "in-progress": CircleDot,
  upcoming: Clock,
};

const milestoneToneMap = {
  done: "bg-primary-100 text-primary-700",
  "in-progress": "bg-accent-100 text-accent-700",
  upcoming: "bg-surface-muted text-text-muted",
};

interface CampaignDetailSectionProps {
  campaign: Campaign;
}

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CampaignDetailSection({ campaign }: CampaignDetailSectionProps) {
  const Icon = iconMap[campaign.icon];
  const progress = getCampaignProgress(campaign);
  const otherCampaigns = campaigns
    .filter((c) => c.slug !== campaign.slug)
    .slice(0, 3);

  return (
    <>
      {/* Campaign intro + form */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: campaign story + progress */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
                <Icon className="h-4 w-4" />
                {campaign.category}
              </div>
              <h1 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                {campaign.title}
              </h1>
              <p className="mt-3 text-lg text-primary-700">
                {campaign.tagline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {campaign.emotionalDescription}
              </p>

              <div className="mt-8">
                <CampaignProgress
                  percent={progress.percent}
                  raised={progress.raised}
                  goal={progress.goal}
                  donors={progress.donors}
                  daysLeft={progress.daysLeft}
                />
              </div>

              <div className="mt-8 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
                <h2 className="text-xl font-semibold text-text-primary">
                  What Your Donation May Support
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Your contribution may go toward any of the following — based
                  on the most pressing need at the time.
                </p>
                <ul className="mt-5 space-y-3">
                  {campaign.whatItSupports.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span className="text-sm leading-relaxed text-text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: donation form */}
            <div className="lg:col-span-2">
              <DonationFormSection
                campaignId={campaign.slug}
                campaignTitle={campaign.shortTitle}
                defaultAmount={campaign.defaultAmount}
                presetAmounts={campaign.suggestedAmounts}
                hideSidePanel
                heading="Donate to this Campaign"
                subheading={campaign.shortTitle}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why It Matters */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
                <Lightbulb className="h-3.5 w-3.5" />
                The Context
              </span>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                {campaign.whyItMatters.heading}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {campaign.whyItMatters.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-surface p-6 text-center shadow-sm ring-1 ring-border"
                >
                  <p className="text-2xl font-bold text-primary-700 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
              {campaign.whyItMatters.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-text-secondary"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-secondary-100 px-4 py-1 text-sm font-semibold text-secondary-700">
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              How This Campaign Delivers Impact
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              A clear, transparent process from your contribution to measurable
              change on the ground.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {campaign.approach.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-base font-bold text-primary-700">
                  {idx + 1}
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Where Your Donation Goes */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-accent-100 px-4 py-1 text-sm font-semibold text-accent-700">
              Where Your Donation Goes
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              Real Impact, Tied to Real Amounts
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Each amount translates to a specific outcome on the ground.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campaign.impactBreakdown.map((tier) => (
              <div
                key={tier.amount}
                className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border"
              >
                <p className="text-2xl font-bold text-primary-700">
                  {formatINR(tier.amount)}
                </p>
                <h3 className="mt-1 text-base font-semibold text-text-primary">
                  {tier.impact}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
              Roadmap
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              Campaign Milestones
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Where we are, and where we&apos;re going. We commit to publishing
              honest progress updates as the campaign moves forward.
            </p>
          </div>

          <ol className="relative mx-auto max-w-3xl border-l-2 border-border pl-8">
            {campaign.milestones.map((m, idx) => {
              const MilestoneIcon = milestoneIconMap[m.status];
              const tone = milestoneToneMap[m.status];
              return (
                <li
                  key={idx}
                  className={`relative pb-8 ${idx === campaign.milestones.length - 1 ? "" : ""}`}
                >
                  <span
                    className={`absolute -left-[2.4rem] flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-surface ${tone}`}
                  >
                    <MilestoneIcon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-primary-700">
                    {m.date}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {m.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <CampaignFaq faqs={campaign.faqs} />

      {/* Trust + contact + receipt strip */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Legal & Trust */}
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Legal &amp; Trust Details
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Arogya Development Foundation is a registered Section 8 company
                under the Companies Act, 2013.
              </p>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-text-muted">CIN</dt>
                  <dd className="font-medium text-text-primary">
                    U88900HR2025NPL133489
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-text-muted">PAN</dt>
                  <dd className="font-medium text-text-primary">
                    ABDCA1814H
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-text-muted">12A URN</dt>
                  <dd className="font-medium text-text-primary">
                    ABDCA1814HE20251
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-text-muted">80G URN</dt>
                  <dd className="font-medium text-text-primary">
                    ABDCA1814HF20261
                  </dd>
                </div>
              </dl>
              <a
                href="/documents"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:underline"
              >
                View official documents →
              </a>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Contact Us
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Questions about this campaign or your donation?
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3 text-text-primary">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-primary-700 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-primary-700 hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>
              <p className="mt-5 rounded-lg bg-primary-50 p-3 text-xs text-text-secondary">
                For direct bank transfer: <strong>{bankDetails.accountName}</strong>,
                A/C {bankDetails.accountNumber}, IFSC {bankDetails.ifsc}.
              </p>
            </div>

            {/* Receipt note */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white shadow-md sm:p-8">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Receipt className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Receipt &amp; 80G Note</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Every donation receives an official receipt by email after
                payment is verified. Donations to Arogya Development Foundation
                are eligible for tax deduction under Section 80G of the Income
                Tax Act, 1961.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Receipt issued by email within 1–2 working days
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Includes 80G registration number
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Use it to claim deduction in your tax return
                </li>
              </ul>
              <p className="mt-5 text-xs text-white/70">
                Anonymous donations are welcome too. Note: 80G receipts cannot
                be issued for anonymous contributions, since the receipt
                requires donor identity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Campaigns */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Explore Other Campaigns
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Every cause matters. Discover other ways to make a difference.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherCampaigns.map((other) => {
              const OtherIcon = iconMap[other.icon];
              const otherProgress = getCampaignProgress(other);
              return (
                <Link
                  key={other.slug}
                  href={`/campaigns/${other.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <OtherIcon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {other.category}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-text-primary">
                    {other.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                    {other.tagline}
                  </p>
                  <div className="mt-4">
                    <CampaignProgress
                      percent={otherProgress.percent}
                      raised={otherProgress.raised}
                      goal={otherProgress.goal}
                      donors={otherProgress.donors}
                      variant="compact"
                    />
                  </div>
                  <div className="mt-auto flex items-center justify-end pt-4 text-sm font-semibold text-primary-700">
                    Donate
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
