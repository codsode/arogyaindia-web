import { IMAGES } from "@/constants/images";
import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Arogya India's health camp was the first time my family received proper medical check-ups. They not only treated us but taught us how to stay healthy. We are forever grateful for their compassion and care.",
    name: "Sunita Devi",
    location: "Lucknow, Uttar Pradesh",
    image: IMAGES.testimonials.sunitaDevi,
  },
  {
    quote:
      "When my daughter was diagnosed with a rare disease, we felt completely alone. Arogya India connected us with specialists, provided emotional support, and helped us navigate the treatment process. They gave us hope.",
    name: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
    image: IMAGES.testimonials.rameshPatel,
  },
  {
    quote:
      "The hygiene education program at our school transformed how our students think about health. Children now practice regular handwashing and understand the importance of menstrual hygiene. The impact has been incredible.",
    name: "Kavita Sharma",
    location: "Jaipur, Rajasthan",
    image: IMAGES.testimonials.kavitaSharma,
  },
];
