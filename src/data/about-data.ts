import type { TeamMember } from "@/types/team";

export const missionData = {
  mission:
    "To make healthcare a reality for all by delivering awareness, hygiene education, and patient support to underserved communities across India, creating a healthier and more equitable tomorrow.",
  vision:
    "A world where every individual, regardless of their socioeconomic background or geographic location, has access to quality healthcare, hygiene education, and the support they need to live a healthy, dignified life.",
};

export const values = [
  {
    title: "Compassion",
    description:
      "We approach every individual and community with empathy, understanding their unique challenges and providing care that honors their dignity.",
    icon: "heart",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of transparency and accountability in all our operations, ensuring that every donation and effort creates maximum impact.",
    icon: "shield-check",
  },
  {
    title: "Inclusivity",
    description:
      "We believe healthcare is a universal right. Our programs are designed to reach the most marginalized communities without discrimination.",
    icon: "users",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the tangible difference we make in people's lives, continuously evolving our approach to maximize positive outcomes.",
    icon: "trending-up",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder & Director",
    bio: "A public health physician with over 15 years of experience in community healthcare. Dr. Sharma founded Arogya India with the vision of making healthcare accessible to every Indian.",
    image: "/images/team/placeholder-avatar.webp",
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Operations",
    bio: "With a background in non-profit management, Rajesh oversees the day-to-day operations of all programs and ensures efficient resource allocation across communities.",
    image: "/images/team/placeholder-avatar.webp",
  },
  {
    name: "Dr. Anita Desai",
    role: "Medical Director",
    bio: "A specialist in community medicine, Dr. Desai leads our health camp initiatives and ensures clinical quality across all medical programs.",
    image: "/images/team/placeholder-avatar.webp",
  },
  {
    name: "Vikram Singh",
    role: "Outreach Coordinator",
    bio: "Vikram coordinates community engagement and volunteer management, building bridges between Arogya India and the communities we serve.",
    image: "/images/team/placeholder-avatar.webp",
  },
];

export const milestones = [
  { year: "2018", title: "Founded", description: "Arogya India was established with a mission to bridge the healthcare gap in India." },
  { year: "2019", title: "First Health Camp", description: "Organized our first health camp serving 500+ individuals in rural Uttar Pradesh." },
  { year: "2020", title: "Pandemic Response", description: "Distributed 5,000+ hygiene kits and conducted awareness drives during COVID-19." },
  { year: "2021", title: "Rare Disease Initiative", description: "Launched our rare disease support program connecting patients with specialists." },
  { year: "2022", title: "Expanded Reach", description: "Extended operations to 5 states, impacting over 25,000 lives through various programs." },
  { year: "2023", title: "50,000 Lives", description: "Reached the milestone of impacting 50,000+ lives across India through our programs." },
  { year: "2024", title: "National Recognition", description: "Recognized as a leading grassroots health NGO for community-driven healthcare initiatives." },
];
