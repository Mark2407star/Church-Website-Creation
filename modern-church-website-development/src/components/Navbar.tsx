"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/offering", label: "Offering" },
  { href: "/prayer", label: "Prayer Request" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong mx-5 mt-5 px-8 py-5 rounded-2xl shadow-2xl shadow-indigo-950/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo — pure text, no icon */}
        <Link href="/" className="group">
          <h2 className="font-cormorant font-bold text-2xl tracking-wide text-gold-light leading-none">
            Living Word
          </h2>
          <p className="text-[11px] text-indigo-300/70 font-jost uppercase tracking-[0.22em] mt-0.5">
            A.G Church
          </p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-jost font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-gold-light bg-white/8"
                    : "text-indigo-200/70 hover:text-gold-light hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-gold-light transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-gold-light transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-gold-light transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-80 mt-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 pb-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-sm font-jost font-medium transition-all duration-300 ${
                  isActive
                    ? "text-gold-light bg-white/8"
                    : "text-indigo-200/70 hover:text-gold-light hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
