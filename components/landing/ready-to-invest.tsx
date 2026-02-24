import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { LinkButton } from "../ui/link-button";

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

export default function Invest() {
  return (
    <section className="py-16 bg-gray-600 text-white px-10 lg:p-16 lg:px-40">

     <div className="text-center mb-10">
       <h1 className="text-center text-3xl font-extrabold mb-6"> Ready to Invest?</h1>
       <p className="text-gray-300">Get in touch today to start your gold investment journey.</p>
     </div>
       <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                 <LinkButton
                   href="#contact"
                   size="lg"
                   className="bg-amber-400 tracking-tight  hover:bg-amber-600 text-white px-8 py-6 rounded-md font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 mx-auto  w-1/4 lg:w-1/10 "
                 >
                   Contact Us
                  
                 </LinkButton>
     
                
               </div>
             
    </section>
  );
}
