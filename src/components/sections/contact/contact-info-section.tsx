"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { contactInfo } from "@/data/contact-data";
import { staggerContainer, slideUp } from "@/animations/variants";

const contactCards = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    content: contactInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    content: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    content: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Working Hours",
    content: contactInfo.hours,
  },
];

export function ContactInfoSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.title}
              variants={slideUp}
              className="rounded-xl border border-border bg-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                {card.icon}
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">
                {card.title}
              </h3>
              {card.href ? (
                <a
                  href={card.href}
                  className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                  target={card.href.startsWith("https") ? "_blank" : undefined}
                  rel={card.href.startsWith("https") ? "noopener noreferrer" : undefined}
                >
                  {card.content}
                </a>
              ) : (
                <p className="text-sm text-text-secondary">{card.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
