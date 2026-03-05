import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";

const services = [
    {
        value: "15",
        description: "Over 15 Years in Business"
    },
        {
        value: "9,100+",
        description: "Happy Customers"
    },
    {
        value: "128",
        description: "Licensed Staff"
    },

        {
        value: "80M+",
        description: "Assets Protected"
    },


]

export default function Stats() {
  return (
    <section className="py-16 bg-gray-900 px-10 lg:p-20 lg:px-40">

     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
            <div key={index} className="bg-white py-10 rounded shadow text-center">
                <h2 className="text-6xl font-bold text-blue-600">{service.value}</h2>
                <p>{service.description}</p>
            </div>
        ))}
     </div>
    </section>
  );
}
