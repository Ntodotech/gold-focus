import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import goldbars from "@/public/gold-bar.webp";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-20 bg-gray-50">
    <AnimatedSection direction="up">

          <div className="flex-grow flex flex-col items-center justify-center  px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
            About Us
          </h1>
          <p className="text-lg">Excellence in Gold Trading & Investment</p>
        </div>
    </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20 py-16">
          <div className="w-full md:w-3/6">
            <Image
              src={goldbars}
              alt="Gold investment background"
              priority
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/5">
            <h1 className="text-yellow-600 text-3xl font-bold mb-4">
              Who We Are
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="text-yellow-600 font-semibold">
                Imperial Gold Security
              </span>
              , we provide premium gold products with a commitment to quality,
              transparency, and integrity. Our gold is 100% authentic and
              certified, ensuring the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
