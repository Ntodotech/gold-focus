"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {  FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@hugeicons/core-free-icons";
import { AnimatedSection } from "@/components/ui/animated-section";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
  { href: "/", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },

  { href: "#", icon: TwitterIcon, label: "Twitter" },
  { href: "#", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: LinkedinIcon, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 ">
      <div className=" max-w-8cl  text-white px-6 lg:px-20 py-12">
          {/* Logo - Left */}
          <div className="grid gap-18 md:grid-cols-2 lg:grid-cols-6">
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div>
              <Link href="/" className="mb-4 inline-flex items-center gap-2">
                <span className="text-2xl font-bold">Imperial Gold Security</span>
              </Link>
              <p className="mb-4 max-w-sm text-sm text-gray-400">
                Your trusted partner in gold trading and investment. Secure,
                reliable, and transparent services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1} className="lg:col-span-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>


          <AnimatedSection direction="right" delay={0.2} className="col-1 lg:col-span-2 lg:w-full w-10/12  gap-4">
            <div className=" items-end gap-2 ">
              <h1 className=" font-bold text-xl transition-colors">
                Subscribe to our Newsletter
                <p className="text-sm text-gray-400">Stay updated with the latest gold market trends and offers.</p>
              </h1>
              <div className="flex items-center mt-5 gap-0">
                <input type="email" className="px-4 py-2 bg-white border-gray-300 rounded-l-md w-80 placeholder:text-gray-600 text-gray-900" placeholder="Enter your email" />
                <button className="bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors font-medium">Subscribe</button>
              </div>
            </div>
          </AnimatedSection>
        </div>

          <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700">
            <div className="text-sm text-white font-medium">
              © {new Date().getFullYear()} Imperial Gold Security. All rights reserved.
            </div>
                <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                  >
                    <HugeiconsIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
          </div>
      
      </div>
    </footer>
  );
}
