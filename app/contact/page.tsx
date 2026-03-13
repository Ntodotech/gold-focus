"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import { MailIcon, AiPhoneIcon, LocationIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, SentIcon } from "@hugeicons/core-free-icons";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const companyInfo = {
  name: "Imperial Gold Security",
  address: "Floor 16, Centre City Tower,\n7 Hill St, Birmingham B5 4UA,\nUnited Kingdom",
  phone: "+44 1234 567890",
  email: "info@imperialgoldsecurity.com",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM",
};

const socialLinks = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  { href: "#", icon: TwitterIcon, label: "Twitter" },
  { href: "#", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: LinkedinIcon, label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Contact Section */}
      <section className="pt-32 pb-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We’re here to help. Get in touch with us today!


              </p>
            </div>
          </AnimatedSection>

          {/* Contact Content - Address on Left, Form on Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Company Address */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={LocationIcon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 whitespace-pre-line">{companyInfo.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={AiPhoneIcon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">{companyInfo.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={MailIcon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">{companyInfo.email}</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={SentIcon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600 whitespace-pre-line">{companyInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                {/* <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-gray-100 hover:bg-amber-100 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <HugeiconsIcon icon={social.icon} className="w-5 h-5 text-gray-600 hover:text-amber-600" />
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </AnimatedSection>

            {/* Right Side - Contact Form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
          
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                      placeholder="How can we help you with your gold investment?"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-amber-600 text-white font-semibold py-5 px-6 rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-0 ">
        <h1 className="text-center my-10 text-5xl font-bold text-yellow-600">Our Location</h1>
        <div className="max-w-fullmx-auto">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-white  shadow-lg overflow-hidden">
             
              <div className="h-96 lg:h-[500px] w-full px-20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.926234587464!2d-1.8961696842244082!3d52.47762997981485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc4c4a6ab5e3%3A0x9e5a8e9e8e8e8e8e!2sCentre%20City%20Tower%2C%207%20Hill%20St%2C%20Birmingham%20B5%204UA%2C%20UK!5e0!3m2!1sen!2s!4v1645564654654!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
