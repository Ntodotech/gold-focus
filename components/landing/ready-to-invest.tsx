"use client";

import { LinkButton } from "../ui/link-button";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Invest() {
  return (
    <section className="py-16 bg-gray-600 text-white px-10 lg:p-16 lg:px-40">

      <AnimatedSection>
        <div className="text-center mb-10">
          <h1 className="text-center text-3xl font-extrabold mb-6"> Ready to Invest?</h1>
          <p className="text-gray-300">Get in touch today to start your gold investment journey.</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                  <LinkButton
                    href="#contact"
                    size="lg"
                    className="bg-amber-400 tracking-tight  hover:bg-amber-600 text-white px-8 py-6 rounded-md font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 mx-auto  w-2/4 lg:w-2/10 "
                  >
                    Contact Us
                  </LinkButton>
                </div>
      </AnimatedSection>
              
    </section>
  );
}
