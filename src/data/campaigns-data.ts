import { IMAGES } from "@/constants/images";
import type { Campaign } from "@/types/campaign";

export const campaigns: Campaign[] = [
  // --- Health Awareness ---
  {
    id: "clean-water-initiative",
    title: "Clean Water for Rural India",
    category: "Health Awareness",
    description:
      "Providing access to clean and safe drinking water in rural communities across Uttar Pradesh and Bihar. This campaign installs water purification systems and educates villagers about waterborne diseases and prevention.",
    goalAmount: 500000,
    raisedAmount: 342000,
    icon: "droplets",
    image: IMAGES.campaigns.cleanWater,
    status: "active",
    highlights: [
      "50 villages targeted for water purification systems",
      "Over 10,000 families to benefit directly",
      "Partnering with local Panchayats for sustainability",
      "Training community volunteers for maintenance",
    ],
  },
  {
    id: "hygiene-awareness-drive",
    title: "National Hygiene Awareness Drive",
    category: "Health Awareness",
    description:
      "A nationwide campaign to promote hand hygiene, sanitation practices, and menstrual health awareness in schools and community centers. Reaches underserved areas through mobile education units.",
    goalAmount: 300000,
    raisedAmount: 300000,
    icon: "sparkles",
    image: IMAGES.campaigns.hygieneDrive,
    status: "completed",
    highlights: [
      "200 schools covered across 5 states",
      "50,000 hygiene kits distributed",
      "Menstrual health workshops for adolescent girls",
      "Community health volunteer training program",
    ],
  },
  {
    id: "mental-health-stigma",
    title: "Break the Stigma: Mental Health",
    category: "Health Awareness",
    description:
      "Addressing the critical gap in mental health awareness in rural India. This campaign conducts community workshops, trains local counselors, and establishes helpline support for mental health first aid.",
    goalAmount: 250000,
    raisedAmount: 89000,
    icon: "brain",
    image: IMAGES.campaigns.mentalHealth,
    status: "active",
    highlights: [
      "Community mental health workshops in 30 districts",
      "Training 100 local counselors",
      "24/7 helpline support establishment",
      "School-based mental wellness programs",
    ],
  },

  // --- Rare Disease Aid ---
  {
    id: "rare-disease-registry",
    title: "India Rare Disease Patient Registry",
    category: "Rare Disease Aid",
    description:
      "Building India's most comprehensive rare disease patient registry to connect patients with specialists, enable research, and advocate for better policy support from the government.",
    goalAmount: 400000,
    raisedAmount: 215000,
    icon: "ribbon",
    image: IMAGES.campaigns.rareDiseaseRegistry,
    status: "active",
    highlights: [
      "Cataloging over 450 rare diseases",
      "Connecting patients with 200+ specialists",
      "Data-driven policy advocacy at central level",
      "Partnership with ICMR for research support",
    ],
  },
  {
    id: "rare-disease-treatment-fund",
    title: "Treatment Fund for Rare Diseases",
    category: "Rare Disease Aid",
    description:
      "A dedicated fund to help rare disease patients access life-saving treatments that are often prohibitively expensive. Covers diagnostics, medication, and travel costs for specialist consultations.",
    goalAmount: 750000,
    raisedAmount: 520000,
    icon: "heart-pulse",
    image: IMAGES.campaigns.treatmentFund,
    status: "active",
    highlights: [
      "120 patients supported for treatment so far",
      "Covering genetic testing and diagnostics",
      "Travel assistance for specialist visits",
      "Medication subsidies for chronic conditions",
    ],
  },
  {
    id: "rare-disease-awareness-week",
    title: "Rare Disease Awareness Week 2025",
    category: "Rare Disease Aid",
    description:
      "A week-long awareness campaign held across major Indian cities to educate the public and medical professionals about rare diseases, early diagnosis, and available support systems.",
    goalAmount: 200000,
    raisedAmount: 200000,
    icon: "megaphone",
    image: IMAGES.campaigns.awarenessWeek,
    status: "completed",
    highlights: [
      "Events in 12 major cities",
      "500+ medical professionals attended",
      "Media coverage reaching 2 million people",
      "Patient story showcases and panel discussions",
    ],
  },

  // --- Child Health ---
  {
    id: "child-nutrition-program",
    title: "Nourish Every Child",
    category: "Child Health",
    description:
      "Combating child malnutrition in tribal areas by providing nutritional supplements, educating mothers on balanced diets, and setting up community nutrition centers for children under 5.",
    goalAmount: 600000,
    raisedAmount: 378000,
    icon: "baby",
    image: IMAGES.campaigns.childNutrition,
    status: "active",
    highlights: [
      "5,000 children receiving nutritional supplements",
      "Mother nutrition education workshops",
      "20 community nutrition centers established",
      "Growth monitoring and tracking system",
    ],
  },
  {
    id: "child-vaccination-drive",
    title: "Complete Vaccination for Every Child",
    category: "Child Health",
    description:
      "Ensuring every child in remote and underserved regions receives their complete vaccination schedule. Working with ASHA workers and primary health centers to reduce vaccine-preventable diseases.",
    goalAmount: 350000,
    raisedAmount: 350000,
    icon: "syringe",
    image: IMAGES.campaigns.vaccinationDrive,
    status: "completed",
    highlights: [
      "15,000 children vaccinated in remote areas",
      "Cold chain infrastructure support",
      "ASHA worker training and incentives",
      "Door-to-door awareness campaigns",
    ],
  },
  {
    id: "pediatric-care-camps",
    title: "Pediatric Care Camps",
    category: "Child Health",
    description:
      "Organizing free pediatric health check-up camps in urban slums and rural areas. Each camp provides screenings, basic treatment, referrals, and health education for parents.",
    goalAmount: 280000,
    raisedAmount: 156000,
    icon: "stethoscope",
    image: IMAGES.campaigns.pediatricCamps,
    status: "active",
    highlights: [
      "Monthly camps in 10 underserved locations",
      "Free health screenings for children 0-14",
      "Specialist referral network established",
      "Parent health education sessions",
    ],
  },
];
