import { IMAGES } from "@/constants/images";
import type { Program } from "@/types/program";

export const programs: Program[] = [
  {
    id: "health-camps",
    title: "Health Camps",
    shortDescription:
      "Through our health camps, Arogya India aims to provide basic medical check-ups, early disease screening, and healthcare consultations to individuals who may not regularly receive medical attention.",
    description:
      "Health camps are one of the most effective ways to bring essential healthcare services directly to communities that may have limited access to medical facilities. Through our health camps, Arogya India aims to provide basic medical check-ups, early disease screening, and healthcare consultations to individuals who may not regularly receive medical attention. These camps help identify potential health issues at an early stage and guide patients toward appropriate treatment. Our health camps also serve as an opportunity to educate communities about preventive healthcare practices, healthy lifestyles, and the importance of timely medical care.",
    icon: "stethoscope",
    image: IMAGES.programs.healthCamps,
  },
  {
    id: "hygiene-education",
    title: "Hygiene Education",
    shortDescription:
      "Arogya India conducts hygiene education programs to raise awareness about essential practices such as handwashing, sanitation, clean drinking water, and disease prevention.",
    description:
      "Good hygiene practices are fundamental to preventing many common illnesses and improving overall public health. Arogya India conducts hygiene education programs to raise awareness about essential practices such as handwashing, sanitation, clean drinking water, and disease prevention. These initiatives focus on schools, community groups, and underserved areas where access to health education may be limited. By promoting proper hygiene habits, we aim to reduce the spread of infections and help communities build healthier daily practices.",
    icon: "book-open",
    image: IMAGES.programs.hygieneEducation,
  },
  {
    id: "patient-support",
    title: "Patient Support",
    shortDescription:
      "Through our patient support initiatives, Arogya India aims to assist patients who require medical help but lack sufficient financial resources.",
    description:
      "Many families struggle to afford medical treatment when faced with serious illnesses or rare diseases. Medical expenses, diagnostic tests, and medicines can place a significant financial burden on households. Through our patient support initiatives, Arogya India aims to assist patients who require medical help but lack sufficient financial resources. This support may include assistance with treatment costs, access to medicines, and guidance in navigating healthcare services. Our goal is to ensure that individuals facing health challenges receive the support they need during difficult times.",
    icon: "hand-heart",
    image: IMAGES.programs.patientSupport,
  },
  {
    id: "hygiene-kits",
    title: "Hygiene Kit Distribution",
    shortDescription:
      "Arogya India distributes hygiene kits to individuals and families in underserved communities, particularly in areas where access to sanitation products is limited.",
    description:
      "Access to basic hygiene supplies is essential for maintaining personal health and preventing disease. Arogya India distributes hygiene kits to individuals and families in underserved communities, particularly in areas where access to sanitation products is limited. These kits may include items such as soap, sanitary products, disinfectants, and other essential hygiene materials. Through this initiative, we aim to support healthier living conditions and encourage better hygiene practices among communities.",
    icon: "package",
    image: IMAGES.programs.hygieneKits,
  },
  {
    id: "rare-disease-support",
    title: "Rare Disease Support",
    shortDescription:
      "Arogya India is committed to supporting individuals and families affected by rare diseases by raising awareness about these conditions and providing assistance wherever possible.",
    description:
      "Patients suffering from rare diseases often face unique challenges, including delayed diagnosis, limited treatment options, and high medical costs. Arogya India is committed to supporting individuals and families affected by rare diseases by raising awareness about these conditions and providing assistance wherever possible. Our efforts focus on spreading knowledge about rare diseases, helping connect patients with available resources, and supporting families navigating complex medical journeys. By highlighting rare disease challenges, we hope to bring greater attention to the needs of these patients and encourage broader community support.",
    icon: "ribbon",
    image: IMAGES.programs.rareDiseaseSupport,
  },
  {
    id: "community-health-education",
    title: "Community Health Education",
    shortDescription:
      "Arogya India organizes educational initiatives designed to improve public understanding of important health topics such as disease prevention, nutrition, sanitation, and general wellness.",
    description:
      "Community health education is a key part of building healthier societies. Arogya India organizes educational initiatives designed to improve public understanding of important health topics such as disease prevention, nutrition, sanitation, and general wellness. These programs aim to empower individuals with the knowledge they need to make informed health decisions for themselves and their families. Through awareness sessions, informational resources, and outreach programs, we work to promote healthier communities and improve long-term health outcomes.",
    icon: "graduation-cap",
    image: IMAGES.programs.healthEducation,
  },
];
