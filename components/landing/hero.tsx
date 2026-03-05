"use client";

import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import { LinkButton } from "../ui/link-button";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Gold investment background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto text-center">
            {/* Headline */}
            <p className="text-white font-bold text-2xl mb-2">15+ Years of Experience</p>
            <h1 className="text-4xl  sm:text-5xl lg:text-3xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Secure Your Future with{" "}
              <span className="text-amber-400">Gold Investments</span>
            </h1>

            {/* Subheadline */}
            <p className="text-md sm:text-lg text-white font-semibold mb-8 tracking-tight max-w-5xl">
              Trusted & transparent gold trading for a brighter tomorrow.
            </p>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                <LinkButton
                  href="#contact"
                  size="lg"
                  className="bg-amber-400 tracking-tight  hover:bg-amber-600 text-white px-8 py-7 rounded-md font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 mx-auto  w-2/4 lg:w-1/5 animate-zoom-in-out"
                >
                  Access Vault Login
                </LinkButton>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
