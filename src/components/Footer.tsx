"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [lang, setLang] = useState<"en" | "ta">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lwag-lang") as "en" | "ta" | null;
    if (saved) setLang(saved);
    const handler = (e: Event) => setLang((e as CustomEvent).detail as "en" | "ta");
    window.addEventListener("lang-change", handler);
    return () => window.removeEventListener("lang-change", handler);
  }, []);

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600" />

      <div className="bg-gradient-to-b from-[#0d0d2b] to-[#050510] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Church Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="36" height="36" viewBox="0 0 44 44" className="cross-vector">
                  <defs>
                    <linearGradient id="crossGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5af19" />
                      <stop offset="100%" stopColor="#f12711" />
                    </linearGradient>
                  </defs>
                  <rect x="18" y="4" width="8" height="36" rx="2" fill="url(#crossGradF)" />
                  <rect x="10" y="12" width="24" height="8" rx="2" fill="url(#crossGradF)" />
                </svg>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gradient-golden">Living Word</h3>
                  <p className="font-tamil-heading text-xs text-amber-300/70">ஜீவ வார்த்தை ஏ.ஜி சபை</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-dm">
                {lang === "en"
                  ? "A Christ-centered ministry rooted in the living and unchanging Word of God."
                  : "உயிருள்ளதும் என்றும் மாறாததும் ஆன தேவனுடைய வார்த்தையின் அடிப்படையில் நிறுவப்பட்ட கிறிஸ்துவை மையமாகக் கொண்ட ஊழியம்."}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-amber-400 font-semibold mb-4">
                {lang === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/about", en: "About Us", ta: "எங்களைப் பற்றி" },
                  { href: "/services", en: "Service Timings", ta: "ஆராதனை நேரம்" },
                  { href: "/ministries", en: "Ministries", ta: "ஊழியங்கள்" },
                  { href: "/offering", en: "Offering", ta: "காணிக்கை" },
                  { href: "/prayer", en: "Prayer Request", ta: "ஜெப கோரிக்கை" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-amber-400 transition-colors text-sm font-dm"
                    >
                      {lang === "en" ? link.en : link.ta}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Times */}
            <div>
              <h4 className="font-heading text-amber-400 font-semibold mb-4">
                {lang === "en" ? "Service Times" : "ஆராதனை நேரம்"}
              </h4>
              <ul className="space-y-2 text-white/50 text-sm font-dm">
                <li>{lang === "en" ? "Sunday Morning" : "ஞாயிறு காலை"} - 7:00 AM</li>
                <li>{lang === "en" ? "Sunday School" : "ஞாயிறு பள்ளி"} - 4:00 PM</li>
                <li>{lang === "en" ? "Sunday Evening" : "ஞாயிறு மாலை"} - 6:30 PM</li>
                <li>{lang === "en" ? "Tuesday Bible Study" : "செவ்வாய் வேதபடிப்பு"} - 7:00 PM</li>
                <li>{lang === "en" ? "Wednesday Gospel" : "புதன் சுவிசேஷம்"} - 7:00 PM</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-amber-400 font-semibold mb-4">
                {lang === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}
              </h4>
              <div className="space-y-2 text-white/50 text-sm font-dm">
                <p>1st Cross Street, Thiruvalluvar Nagar</p>
                <p>Besant Nagar, Chennai - 600 090</p>
                <p className="text-amber-400/80">+91 9840306113</p>
                <p className="text-amber-400/80">lwagchurch98@gmail.com</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.youtube.com/@livingworda.gchurch9092/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                    <path fill="#0a0a1a" d="M9.545 15.568V8.432L15.818 12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lwag_church_besantnagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-sm font-dm">
              © {new Date().getFullYear()} Living Word A.G Church, Besant Nagar, Chennai. All rights reserved.
            </p>
            <p className="text-white/20 text-xs mt-2 font-tamil-body">
              &quot;இது மனிதனால் உண்டானது அல்ல இது தேவனுடைய ஈவு!&quot; - எபே 2:8
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
