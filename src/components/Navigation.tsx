"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", tamil: "முகப்பு" },
  { href: "/about", label: "About Us", tamil: "எங்களைப் பற்றி" },
  { href: "/services", label: "Services", tamil: "ஆராதனை நேரம்" },
  { href: "/ministries", label: "Ministries", tamil: "ஊழியங்கள்" },
  { href: "/offering", label: "Offering", tamil: "காணிக்கை" },
  { href: "/prayer", label: "Prayer Request", tamil: "ஜெப கோரிக்கை" },
  { href: "/contact", label: "Contact", tamil: "தொடர்பு" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "ta">("en");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("lwag-lang") as "en" | "ta" | null;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ta" : "en";
    setLang(newLang);
    localStorage.setItem("lwag-lang", newLang);
    window.dispatchEvent(new CustomEvent("lang-change", { detail: newLang }));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark py-2 shadow-2xl shadow-purple-900/20"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  className="cross-vector animate-cross-glow"
                >
                  <defs>
                    <linearGradient
                      id="crossGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f5af19" />
                      <stop offset="100%" stopColor="#f12711" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="18"
                    y="4"
                    width="8"
                    height="36"
                    rx="2"
                    fill="url(#crossGrad)"
                  />
                  <rect
                    x="10"
                    y="12"
                    width="24"
                    height="8"
                    rx="2"
                    fill="url(#crossGrad)"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-heading text-lg font-bold text-gradient-golden leading-tight">
                  Living Word
                </h1>
                <p className="font-tamil-heading text-xs text-amber-300/80">
                  ஜீவ வார்த்தை ஏ.ஜி சபை
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 shadow-lg shadow-amber-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {lang === "en" ? item.label : item.tamil}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="glass px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 border border-amber-400/30 text-amber-300"
              >
                {lang === "en" ? "தமிழ்" : "English"}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden glass p-2 rounded-lg hover:scale-105 transition-all"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`h-0.5 bg-amber-400 rounded transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-amber-400 rounded transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-amber-400 rounded transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-20 left-4 right-4 glass-dark rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang === "en" ? item.label : item.tamil}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
