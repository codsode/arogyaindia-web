export interface CampaignStat {
  label: string;
  value: string;
}

export interface CampaignApproachStep {
  title: string;
  description: string;
}

export interface CampaignImpactTier {
  amount: number;
  impact: string;
  description: string;
}

export interface CampaignMilestone {
  date: string;
  title: string;
  description: string;
  status: "done" | "in-progress" | "upcoming";
}

export interface CampaignFaq {
  q: string;
  a: string;
}

export interface Campaign {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  emotionalDescription: string;
  whatItSupports: string[];
  suggestedAmounts: number[];
  defaultAmount: number;
  icon: "heart-pulse" | "sparkles" | "package" | "hand-heart";

  // Progress
  goalAmount: number;
  raisedAmount: number;
  donorsCount: number;
  daysLeft?: number;

  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];

  // Rich content
  whyItMatters: {
    heading: string;
    paragraphs: string[];
    stats: CampaignStat[];
  };
  approach: CampaignApproachStep[];
  impactBreakdown: CampaignImpactTier[];
  milestones: CampaignMilestone[];
  faqs: CampaignFaq[];
}

export const campaigns: Campaign[] = [
  {
    slug: "first-health-and-hygiene-initiative",
    title: "Support Our First Health & Hygiene Initiative",
    shortTitle: "First Health & Hygiene Initiative",
    tagline: "Help us launch our very first community health drive.",
    category: "Health & Hygiene",
    emotionalDescription:
      "This is our very first step toward bringing health and hygiene support to communities that need it most. Every contribution — no matter how small — helps us turn intention into impact and lay the foundation for a healthier tomorrow. By supporting this initiative, you become part of a movement that puts dignity, awareness, and care into action right from day one.",
    whatItSupports: [
      "Setting up our first community health & hygiene awareness camp",
      "Procuring basic hygiene supplies for distribution",
      "Printing educational materials in local languages",
      "Travel and logistics for volunteers and trainers",
      "Outreach to schools and underserved neighbourhoods",
    ],
    suggestedAmounts: [500, 1100, 2500, 5000, 10000],
    defaultAmount: 1100,
    icon: "sparkles",

    goalAmount: 200000,
    raisedAmount: 70000,
    donorsCount: 38,
    daysLeft: 45,

    seoTitle:
      "Support Arogya India's First Health & Hygiene Initiative | Donate Online",
    seoDescription:
      "Be part of Arogya India's very first community health & hygiene initiative. Donate online via UPI to fund awareness camps, hygiene supplies, and outreach in underserved communities. 80G tax exemption available.",
    keywords: [
      "donate to NGO India",
      "health and hygiene NGO",
      "community health initiative",
      "Arogya India donation",
      "80G donation",
      "hygiene awareness",
      "support healthcare NGO",
      "UPI donation India",
    ],

    whyItMatters: {
      heading: "Why This Initiative Matters",
      paragraphs: [
        "In many parts of India, basic health and hygiene awareness still remains a luxury. Preventable infections, untreated common illnesses, and a lack of timely health information continue to affect millions — especially in low-income households where access to even basic medical guidance is limited.",
        "Arogya Development Foundation was created to bridge that gap. This first initiative is the cornerstone of everything we plan to build: an on-the-ground, community-rooted model where awareness, support, and care reach the people who need them most. Your contribution does not just fund a single camp — it sets up the infrastructure for everything that follows.",
        "We are starting small, with focused outreach in a single community. But every kit distributed, every awareness session conducted, and every conversation started becomes the foundation of a healthier future for thousands.",
      ],
      stats: [
        { label: "Indians without regular health checkups", value: "70%" },
        { label: "Preventable illnesses linked to poor hygiene", value: "1 in 4" },
        { label: "Households below ₹15k/month income in target area", value: "60%" },
      ],
    },

    approach: [
      {
        title: "Identify the community",
        description:
          "We partner with local volunteers and community leaders to identify the area with the most pressing health and hygiene needs.",
      },
      {
        title: "Conduct awareness camps",
        description:
          "Our trained volunteers run interactive awareness sessions on hygiene, sanitation, common illnesses, and preventive care in local languages.",
      },
      {
        title: "Distribute essentials",
        description:
          "Hygiene kits and educational booklets are distributed to families, schools, and self-help groups during the camp.",
      },
      {
        title: "Follow up & measure impact",
        description:
          "We follow up with participating households and document the impact, ensuring transparency and continuous improvement.",
      },
    ],

    impactBreakdown: [
      {
        amount: 500,
        impact: "1 Family Hygiene Kit",
        description:
          "Sponsors a complete hygiene kit for one family in our target community.",
      },
      {
        amount: 1100,
        impact: "Awareness Session Materials",
        description:
          "Funds printed education booklets and supplies for one community awareness session.",
      },
      {
        amount: 2500,
        impact: "Volunteer Training",
        description:
          "Trains and equips one local volunteer to lead future awareness drives in their own community.",
      },
      {
        amount: 5000,
        impact: "School Outreach",
        description:
          "Supports a complete hygiene awareness program in one school, reaching dozens of children.",
      },
    ],

    milestones: [
      {
        date: "April 2026",
        title: "Foundation registered & 80G approved",
        description:
          "Arogya Development Foundation receives provisional 12A and 80G approval from the Income Tax Department.",
        status: "done",
      },
      {
        date: "May 2026",
        title: "Volunteer onboarding",
        description:
          "First batch of volunteers identified, oriented, and trained on outreach methodology.",
        status: "in-progress",
      },
      {
        date: "June 2026",
        title: "First community camp",
        description:
          "Launch our first on-ground health and hygiene awareness camp in the identified community.",
        status: "upcoming",
      },
      {
        date: "Aug 2026",
        title: "Impact report published",
        description:
          "Publish a detailed impact report and audited statement of how every contribution was utilised.",
        status: "upcoming",
      },
    ],

    faqs: [
      {
        q: "Where will this first initiative take place?",
        a: "We are finalising the target community in the Delhi-NCR region in partnership with local volunteers. Donors will receive a follow-up email once the location is confirmed and the camp is held.",
      },
      {
        q: "Is my donation tax-exempt?",
        a: "Yes. Arogya Development Foundation has provisional approval under Section 80G. Your receipt will be valid for tax deduction as per Income Tax Act, 1961.",
      },
      {
        q: "How will I know my contribution was used well?",
        a: "We commit to publishing a detailed impact report after the initiative — including photos, expense breakdown, and the number of beneficiaries reached.",
      },
      {
        q: "Can I volunteer instead of donating?",
        a: "Absolutely! Reach out to us at care@arogyaindia.org and we'll connect you with our volunteer coordinator.",
      },
    ],
  },

  {
    slug: "sanitary-aid-for-women-and-girls",
    title: "Sanitary Aid for Women & Girls",
    shortTitle: "Sanitary Aid for Women & Girls",
    tagline: "Period dignity is a basic right — let's make it a reality.",
    category: "Women's Health",
    emotionalDescription:
      "For millions of women and girls across India, managing their period with dignity is still a struggle. Stigma, misinformation, and the simple inability to afford sanitary products force many to miss school, work, and opportunities. Your contribution helps us put safe, hygienic period products into the hands of those who need them — and start the conversations that break the silence around menstrual health.",
    whatItSupports: [
      "Sanitary pads and reusable hygiene kits for adolescent girls",
      "Menstrual health awareness sessions in schools and communities",
      "Training of local women as menstrual health ambassadors",
      "Distribution of dignity kits in underserved areas",
      "Educational resources to dispel period stigma and misinformation",
    ],
    suggestedAmounts: [300, 500, 1100, 2100, 5000],
    defaultAmount: 500,
    icon: "heart-pulse",

    goalAmount: 150000,
    raisedAmount: 75000,
    donorsCount: 52,
    daysLeft: 60,

    seoTitle:
      "Sanitary Aid for Women & Girls | Period Dignity Campaign — Arogya India",
    seoDescription:
      "Help us provide sanitary pads, dignity kits, and menstrual health education to underserved women and girls in India. Donate online via UPI. 80G tax exemption.",
    keywords: [
      "sanitary pad donation",
      "period poverty India",
      "menstrual hygiene NGO",
      "women's health donation",
      "dignity kits for girls",
      "menstrual health awareness",
      "donate to women's health NGO",
      "Arogya India sanitary aid",
    ],

    whyItMatters: {
      heading: "Why Period Dignity Matters",
      paragraphs: [
        "Menstruation is a natural biological process, yet for many girls in India it is still wrapped in silence, shame, and lost opportunity. The lack of access to sanitary products and proper information forces millions to miss school, drop out of education, or use unsafe alternatives that put their health at risk.",
        "This campaign is built on a simple belief — every woman and every girl deserves to manage her period with safety, dignity, and confidence. By providing pads and dignity kits, and by running awareness sessions that address the stigma, we are not just distributing products. We are restoring choice, preserving education, and protecting health.",
        "When a girl can attend school during her period without fear or embarrassment, she stays in education longer, earns more in life, and contributes more to her community. Your donation directly enables that future.",
      ],
      stats: [
        {
          label: "Indian women using safe menstrual products",
          value: "Just 58%",
        },
        {
          label: "Girls who drop out of school after menarche",
          value: "23%",
        },
        {
          label: "Average annual cost of period products per woman",
          value: "₹3,500+",
        },
      ],
    },

    approach: [
      {
        title: "Procurement",
        description:
          "We source sanitary pads and reusable hygiene products in bulk from trusted suppliers to maximise reach per rupee.",
      },
      {
        title: "Distribution",
        description:
          "Dignity kits are distributed at schools, community centres, and through partner organisations to reach girls and women in underserved areas.",
      },
      {
        title: "Education",
        description:
          "Each distribution is paired with an awareness session — addressing menstrual health, hygiene, stigma, and reproductive well-being in age-appropriate terms.",
      },
      {
        title: "Ambassador training",
        description:
          "We train local women as menstrual health ambassadors so the conversation continues in their communities long after we leave.",
      },
    ],

    impactBreakdown: [
      {
        amount: 300,
        impact: "1 Month of Pads",
        description: "Sponsors safe sanitary protection for one girl for an entire month.",
      },
      {
        amount: 500,
        impact: "1 Dignity Kit",
        description:
          "Provides a complete dignity kit — pads, soap, underwear, and a discreet pouch — to one girl.",
      },
      {
        amount: 1100,
        impact: "Awareness Session",
        description:
          "Funds a full menstrual health awareness session for a group of adolescent girls in a school or community centre.",
      },
      {
        amount: 2100,
        impact: "Year of Pads for 1 Girl",
        description:
          "Sponsors safe sanitary protection for one girl for an entire year — keeping her in school and confident.",
      },
    ],

    milestones: [
      {
        date: "April 2026",
        title: "Campaign launched",
        description:
          "Sanitary Aid campaign goes live with the goal of reaching the first 100 girls.",
        status: "done",
      },
      {
        date: "May 2026",
        title: "First school partnership",
        description:
          "Tie up with a partner school in our target area to begin awareness sessions and kit distribution.",
        status: "in-progress",
      },
      {
        date: "July 2026",
        title: "Ambassador batch one",
        description:
          "Train the first batch of community menstrual health ambassadors.",
        status: "upcoming",
      },
      {
        date: "Sept 2026",
        title: "Impact report",
        description:
          "Publish detailed campaign impact report with photos, beneficiary count, and audited expense breakdown.",
        status: "upcoming",
      },
    ],

    faqs: [
      {
        q: "Why focus on sanitary aid?",
        a: "Lack of access to safe menstrual products is one of the biggest invisible barriers to women's education, health, and dignity in India. Solving it has a multiplier effect — on health, on schooling, and on confidence.",
      },
      {
        q: "Are the products safe and certified?",
        a: "Yes. We source only certified sanitary products that meet Indian safety and hygiene standards. We never compromise on quality.",
      },
      {
        q: "Can I donate products instead of money?",
        a: "We currently accept monetary contributions to maintain consistent quality and bulk-buying efficiency. For in-kind donations, please reach out to us directly at care@arogyaindia.org.",
      },
      {
        q: "Will my donation be used only for this campaign?",
        a: "Yes. Funds raised under this campaign are ring-fenced for sanitary aid and menstrual health activities only.",
      },
    ],
  },

  {
    slug: "sponsor-hygiene-kits",
    title: "Sponsor Hygiene Kits",
    shortTitle: "Sponsor Hygiene Kits",
    tagline: "One kit. One family. A healthier tomorrow.",
    category: "Hygiene",
    emotionalDescription:
      "Something as simple as a bar of soap can prevent infections, protect children from disease, and bring back daily dignity. For families in underserved communities, a basic hygiene kit can be life-changing. By sponsoring kits, you help us reach families who would otherwise go without — and you give them the tools to keep themselves and their loved ones safe.",
    whatItSupports: [
      "Soap, handwash, and basic personal hygiene supplies",
      "Sanitary products for women and adolescent girls",
      "Disinfectants and household sanitation items",
      "Toothbrushes, toothpaste, and oral hygiene basics",
      "Reusable cloth bags so kits can be carried with dignity",
    ],
    suggestedAmounts: [500, 1000, 2000, 5000, 10000],
    defaultAmount: 1000,
    icon: "package",

    goalAmount: 250000,
    raisedAmount: 87500,
    donorsCount: 41,
    daysLeft: 75,

    seoTitle:
      "Sponsor Hygiene Kits for Families in Need | Donate Online — Arogya India",
    seoDescription:
      "Sponsor a hygiene kit for a family in an underserved community. Each kit includes soap, sanitary products, oral care, and household sanitation essentials. Donate via UPI with 80G tax exemption.",
    keywords: [
      "hygiene kit donation India",
      "sponsor hygiene kit",
      "donate soap and hygiene supplies",
      "family hygiene kit NGO",
      "sanitation donation",
      "Arogya India hygiene drive",
      "underserved community donation",
      "80G hygiene donation",
    ],

    whyItMatters: {
      heading: "Why Hygiene Kits Make a Difference",
      paragraphs: [
        "Most preventable infections in low-income households trace back to one root cause — inadequate access to basic hygiene. Soap, clean water, and personal sanitation tools are not luxuries; they are the first line of defence against everything from diarrhoeal disease to skin infections to respiratory illness.",
        "When a family receives a hygiene kit, the impact compounds. Children fall sick less often. Parents miss fewer days of work. Schools see better attendance. Healthcare costs drop. The dignity of having a clean, well-stocked home returns. A simple kit becomes the start of a healthier daily routine that lasts well beyond the contents themselves.",
        "By sponsoring a kit, you are not handing out a one-time gift. You are helping a family start a sustainable hygiene habit that protects them for months to come.",
      ],
      stats: [
        { label: "Childhood illnesses linked to poor hygiene", value: "Up to 50%" },
        { label: "Reduction in diarrhoeal disease with handwashing", value: "~40%" },
        { label: "Cost of one complete family hygiene kit", value: "~₹1,000" },
      ],
    },

    approach: [
      {
        title: "Bulk procurement",
        description:
          "We buy hygiene supplies in bulk from trusted suppliers to maximise the number of families we can reach with every donation.",
      },
      {
        title: "Curated kits",
        description:
          "Each kit is assembled with carefully chosen essentials — covering personal hygiene, oral care, women's health, and household sanitation.",
      },
      {
        title: "Last-mile distribution",
        description:
          "Volunteers personally deliver kits to families in identified underserved areas, ensuring they reach the intended households.",
      },
      {
        title: "Hygiene awareness",
        description:
          "Distribution is paired with a short hygiene awareness session, so kits are used effectively and habits become sustainable.",
      },
    ],

    impactBreakdown: [
      {
        amount: 500,
        impact: "Half a Kit",
        description:
          "Sponsors half a family hygiene kit. Two donations = one full kit for a family.",
      },
      {
        amount: 1000,
        impact: "1 Family Kit",
        description:
          "Sponsors one complete family hygiene kit — covering soap, handwash, sanitary products, and more.",
      },
      {
        amount: 2000,
        impact: "2 Family Kits",
        description:
          "Sponsors hygiene essentials for two families in the same community.",
      },
      {
        amount: 5000,
        impact: "5 Family Kits + Awareness",
        description:
          "Sponsors kits for five families and funds the accompanying community hygiene awareness session.",
      },
    ],

    milestones: [
      {
        date: "April 2026",
        title: "Kit design finalised",
        description:
          "Hygiene kit contents and packaging finalised after consulting public health experts and community input.",
        status: "done",
      },
      {
        date: "May 2026",
        title: "First 50 kits assembled",
        description:
          "First batch of family hygiene kits assembled and ready for distribution.",
        status: "in-progress",
      },
      {
        date: "June 2026",
        title: "Community distribution drive",
        description:
          "First on-ground distribution drive in the identified community.",
        status: "upcoming",
      },
      {
        date: "Sept 2026",
        title: "Reach 250 families",
        description:
          "Cumulative goal of reaching 250 families with hygiene kits and awareness sessions.",
        status: "upcoming",
      },
    ],

    faqs: [
      {
        q: "What is included in one hygiene kit?",
        a: "Each kit includes soap, handwash, toothbrush + toothpaste, sanitary products for women, basic disinfectant, and a reusable cloth bag — covering personal hygiene, oral care, women's health, and household sanitation essentials.",
      },
      {
        q: "How are recipient families selected?",
        a: "We work with local volunteers and community organisations to identify families in underserved areas — based on household income, number of dependents, and access to existing supplies.",
      },
      {
        q: "Can I sponsor a kit in someone's name?",
        a: "Yes. After making your donation, please email us at care@arogyaindia.org with the dedication name and we will note it on your receipt.",
      },
      {
        q: "Do I get a tax receipt?",
        a: "Yes. You will receive an 80G-eligible receipt by email once the payment is verified.",
      },
    ],
  },

  {
    slug: "general-donation",
    title: "General Donation to Arogya India",
    shortTitle: "General Donation",
    tagline: "Support our work wherever the need is greatest.",
    category: "General",
    emotionalDescription:
      "Not sure which cause speaks to you most? A general donation lets us put your contribution exactly where it is needed today — whether that's emergency patient support, a hygiene drive, an awareness session, or laying the groundwork for our next initiative. Every rupee goes directly toward improving health outcomes and bringing care to those who need it most.",
    whatItSupports: [
      "Patient assistance for those facing serious health conditions",
      "Hygiene kit distribution to underserved families",
      "Health awareness and education programs",
      "Support for individuals affected by rare diseases",
      "Operational costs that keep our initiatives running",
    ],
    suggestedAmounts: [500, 1100, 2500, 5000, 10000, 25000],
    defaultAmount: 1100,
    icon: "hand-heart",

    goalAmount: 500000,
    raisedAmount: 165000,
    donorsCount: 124,
    daysLeft: 90,

    seoTitle:
      "Donate to Arogya India | General Donation for Healthcare NGO | 80G Tax Benefit",
    seoDescription:
      "Make a general donation to Arogya Development Foundation and help us support healthcare access, awareness, and patient assistance across India. Secure UPI payment, 80G tax exemption.",
    keywords: [
      "donate to Arogya India",
      "general donation NGO India",
      "healthcare NGO donation",
      "support patient care India",
      "rare disease donation",
      "80G donation India",
      "Arogya Development Foundation",
      "online donation UPI",
    ],

    whyItMatters: {
      heading: "Why General Donations Matter Most",
      paragraphs: [
        "Restricted, campaign-specific donations are wonderful — but the most powerful contributions to a young NGO are unrestricted, general donations. They let us respond to what is most urgent right now, support patients who walk in with unforeseen needs, and invest in the operational backbone that makes every other initiative possible.",
        "When you donate generally, you give us the freedom to act fast. A patient needing diagnostic support today doesn't have to wait for a fundraising cycle. A community recovering from an outbreak gets supplies the same week. A volunteer programme that needs equipment can scale immediately.",
        "This is the donation that builds the institution behind the impact. It's quiet, it's strategic, and it changes more lives than any single restricted campaign on its own.",
      ],
      stats: [
        {
          label: "Of every rupee that reaches direct programs",
          value: "92%+",
        },
        {
          label: "Average emergency response time targeted",
          value: "<7 days",
        },
        {
          label: "Lives we aim to touch in our first year",
          value: "5,000+",
        },
      ],
    },

    approach: [
      {
        title: "Allocate by urgency",
        description:
          "General donations are pooled and allocated to the area of greatest current need — patient aid, hygiene drives, or programmatic capacity.",
      },
      {
        title: "Maintain reserve",
        description:
          "A portion is held as a small emergency reserve so we can respond rapidly to unexpected patient or community needs.",
      },
      {
        title: "Strengthen operations",
        description:
          "A measured share funds essential operational costs — volunteer coordination, communication, and audit — that keep our impact transparent.",
      },
      {
        title: "Report transparently",
        description:
          "We publish how general funds were allocated each quarter, with clear breakdowns of programs and operations.",
      },
    ],

    impactBreakdown: [
      {
        amount: 500,
        impact: "Awareness Materials",
        description:
          "Funds printed materials and supplies for community awareness sessions.",
      },
      {
        amount: 1100,
        impact: "1 Family Hygiene Kit + Session",
        description:
          "Sponsors one family hygiene kit plus contributes to the awareness session held alongside.",
      },
      {
        amount: 2500,
        impact: "Patient Diagnostic Support",
        description:
          "Helps cover diagnostic test costs for one patient seeking medical assistance.",
      },
      {
        amount: 5000,
        impact: "Multi-program Support",
        description:
          "Sponsors a combination of hygiene kits, awareness materials, and partial patient aid in one stroke.",
      },
      {
        amount: 25000,
        impact: "Anchor Donor Contribution",
        description:
          "Becomes an anchor contribution that funds an entire community programme cycle from end to end.",
      },
    ],

    milestones: [
      {
        date: "April 2026",
        title: "Foundation operational",
        description:
          "Arogya Development Foundation operationally ready with 12A and 80G provisional approvals in place.",
        status: "done",
      },
      {
        date: "Q2 2026",
        title: "First quarterly allocation",
        description:
          "First quarterly allocation of general donations across patient aid, hygiene, and awareness programs.",
        status: "in-progress",
      },
      {
        date: "Q3 2026",
        title: "First impact report",
        description:
          "Publish a detailed first impact report with audited expense breakdown.",
        status: "upcoming",
      },
      {
        date: "Q4 2026",
        title: "Reach 5,000 lives milestone",
        description:
          "Cumulative goal of touching 5,000 lives across all our programs in our first operational year.",
        status: "upcoming",
      },
    ],

    faqs: [
      {
        q: "Where exactly will my donation go?",
        a: "General donations are pooled and allocated to the most urgent need at the time — usually patient assistance, hygiene drives, or awareness programs. We publish quarterly allocation reports for full transparency.",
      },
      {
        q: "Can I specify a use even within a general donation?",
        a: "Absolutely. Drop us a note at care@arogyaindia.org with your preference and we'll do our best to direct it accordingly.",
      },
      {
        q: "Is there a minimum donation amount?",
        a: "No. Every contribution counts. Our online minimum is just ₹10 and there is no maximum (though large donations may need direct bank transfer).",
      },
      {
        q: "Do recurring donations help more than one-time?",
        a: "Recurring contributions help us plan ahead and respond faster. Recurring donations on the website are coming soon — for now, please reach out to set up a standing instruction.",
      },
    ],
  },
];

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}

export function getCampaignProgress(campaign: Campaign) {
  const percent = Math.min(
    Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
    100,
  );
  return {
    percent,
    raised: campaign.raisedAmount,
    goal: campaign.goalAmount,
    donors: campaign.donorsCount,
    daysLeft: campaign.daysLeft,
  };
}
