import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";

export default function contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
  <div className="flex-grow text-2xl font-bold text-center mt-40">
        this is contact
      </div>
  <Footer/>
    </main>
  );
}
