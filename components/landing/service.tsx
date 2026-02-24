import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";

const services = [
    {
        logo: "https://via.placeholder.com/150",
        title: "Gold Trading",
        description: "Buy and sell gold with real-time market pricing."
    },
        {
        logo: "https://via.placeholder.com/150",
        title: "Investment Plans",
        description: "Secure your financial future with our tailored gold investment plans."
    },
    {
        logo: "https://via.placeholder.com/150",
        title: "Consultancy",
        description: "Expert guidance to help you make the best investment decisions."
    },


]

export default function Services() {
  return (
    <section className="bg-gray-100 p-10 lg:p-20">
     <h1 className="text-center text-3xl font-extrabold mb-6">Our Services</h1>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded shadow text-center">
                <img src={service.logo} alt={service.title} className="w-full h-32 object-cover mb-2" />
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        ))}
     </div>
    </section>
  );
}
