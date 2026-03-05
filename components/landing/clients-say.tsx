"use client";

import JamesImg from "@/public/32.jpg";
import LindaImg from "@/public/44.jpg";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

const services = [
    {
        logo: JamesImg,
        title: "James K.",
        description: `"Imperial Gold Security has helped me grow my investment portfolio significantly. Highly recommended!"`
    },
    {
        logo: LindaImg,
        title: "Linda M.",
        description: `"Their transparency and professionalism make them the best in the industry."`
    },
]

export default function Testimonial() {
  return (
    <section className="bg-gray-100 p-10 lg:p-20">
      <AnimatedSection>
        <h1 className="text-center text-3xl font-extrabold mb-6">What Our Clients Say</h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction="up">
                <div className="bg-white p-4 rounded shadow-b text-center h-full">
                    <Image src={service.logo} alt={service.title} className="w-18 mx-auto rounded-full h-18 border-2 border-amber-400 object-cover mb-2" />
                    <div>
                        <h1 className="text-amber-400 text-7xl  ">;;</h1>
                    <p>{service.description}</p>
                    <h2 className="text-md font-bold">{service.title}</h2>
                    </div>
                </div>
            </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
