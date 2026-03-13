import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Storage,
  Target01Icon,
  UserMultiple02Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const services = [
  {
    logo: Target01Icon,
    title: "Gold Trading",
    description:
      "We provide high-quality, certified gold for trading and investment purposes.",
  },
  {
    logo: Storage,
    title: "Gold Investment",
    description:
      "Secure your future with our trusted gold investment plans and financial guidance.",
  },
  {
    logo: UserMultiple02Icon,
    title: "Gold Security & Storage",
    description:
      "Your gold is safe with us! We offer secure storage solutions with full insurance.",
  },
  {
    logo: Target01Icon,
    title: "Market Analysis",
    description:
      "Stay updated with expert gold market insights and investment strategies..",
  },
  {
    logo: TruckDeliveryIcon,
    title: "Gold Delivery",
    description:
      "Fast and secure gold delivery services to your preferred location worldwide.",
  },
  {
    logo: UserMultiple02Icon,
    title: "Custom Gold Coins & Jewelry",
    description:
      "We craft customized gold coins, bars, and jewelry to your specifications.",
  },
];

export default function Service() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-20 bg-gray-50">
        <AnimatedSection>
          <h1 className="text-center text-yellow-600 text-4xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-center mb-10">
            Premium Gold Solutions for Your Investment & Trading Needs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction="up">
              <div className="bg-white p-4 rounded shadow text-center h-full">
                <div className="mb-4 inline-flex h-18 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon
                    icon={service.logo}
                    className="h-10 w-10 text-amber-300"
                  />
                </div>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
