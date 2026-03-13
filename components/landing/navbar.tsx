"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.webp";
import { HugeiconsIcon } from "@hugeicons/react";
import {  Menu, Close } from "@hugeicons/core-free-icons";
import { LinkButton } from "../ui/link-button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed h-20 top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Gold Focus Logo" width={56} height={20} className=" w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-700 hover:text-amber-600  font-normal transition-colors duration-200 relative group ${
                    pathname === link.href ? "text-amber-600 font-bold" : ""
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <LinkButton
              href="/login"
              size="lg"
              className="bg-black hover:bg-amber-700 text-white px-6 py-2.5 rounded-sm font-normal transition-all duration-200 hover:shadow-lg hover:shadow-amber-600/25"
            >
              <span>Login</span>
            </LinkButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <HugeiconsIcon icon={isMenuOpen ? Close : Menu} className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#f1c40f] border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 text-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-gray-700 hover:text-amber-600 font-medium text-lg py-2 transition-colors duration-200 ${
                  pathname === link.href ? "text-amber-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mx-auto ">
              <LinkButton
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                size="lg"
                className="w-1/3 mx-auto bg-black hover:bg-amber-700 text-white justify-center py-3 rounded-sm font-semibold"
              >
                <span>Login</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
