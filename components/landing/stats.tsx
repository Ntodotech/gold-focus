"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { CountUp } from "@/components/ui/count-up";

const services = [
    {
        value: 15,
        suffix: "+",
        description: "Over 15 Years in Business"
    },
    {
        value: 9100,
        suffix: "+",
        description: "Happy Customers"
    },
    {
        value: 128,
        suffix: "+",
        description: "Licensed Staff"
    },
    {
        value: 80,
        suffix: "M+",
        description: "Assets Protected"
    },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gray-900 px-10 lg:p-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="bg-white py-10 rounded shadow text-center">
                    <CountUp end={service.value} suffix={service.suffix} duration={2} />
                    <p>{service.description}</p>
                </div>
            </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
