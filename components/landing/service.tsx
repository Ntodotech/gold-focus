"use client";
import {
  GoldIcon,
  Handshake,
} from "@hugeicons/core-free-icons";
import { AnimatedSection } from "@/components/ui/animated-section";
import { HugeiconsIcon } from "@hugeicons/react";

const services = [
  {
    logo: GoldIcon,
    title: "Gold Trading",
    description: "Buy and sell gold with real-time market pricing.",
  },
  {
    logo: GoldIcon,
    title: "Investment Plans",
    description:
      "Secure your financial future with our tailored gold investment plans.",
  },
  {
    logo: Handshake,
    title: "Consultancy",
    description:
      "Expert guidance to help you make the best investment decisions.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 p-10 lg:p-20">
      <AnimatedSection>
        <h1 className="text-center text-3xl font-extrabold mb-6">
          Our Services
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection key={index} delay={index * 0.15} direction="up">
            <div className="bg-white p-4 rounded shadow text-center h-full hover:transform hover:scale-115 transition-transform duration-300">
              <div className="mb-4 inline-flex h-18 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <HugeiconsIcon icon={service.logo} className="h-10 w-10 text-amber-300" />
              </div>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
