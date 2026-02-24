import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import Services from "@/components/landing/service";
import Stats from "@/components/landing/stats";
import Testimonial from "@/components/landing/clients-say";
import Invest from "@/components/landing/ready-to-invest";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Testimonial />
      <Invest />
      <Footer />
    </main>
  );
}
