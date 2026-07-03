"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";

function ContactContent() {
  const lang = useLang();

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0a1a]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400/60 font-dm text-sm uppercase tracking-[0.3em] mb-4">
              {lang === "en" ? "Get In Touch" : "தொடர்பு கொள்ளுங்கள்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Contact Us" : "தொடர்பு"}
            </h1>
            <p className="font-dm text-white/60 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "We'd love to hear from you. Reach out to us through any of these channels."
                : "உங்களிடமிருந்து கேட்க விரும்புகிறோம். இந்த வழிகளில் எங்களைத் தொடர்பு கொள்ளுங்கள்."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="glass rounded-2xl p-8 border border-amber-400/10 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-3xl mb-4 shadow-lg">
                  📍
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {lang === "en" ? "Visit Us" : "எங்களைச் சந்தியுங்கள்"}
                </h3>
                <p className="text-white/60 font-dm leading-relaxed">
                  1st Cross Street,<br />
                  Thiruvalluvar Nagar,<br />
                  Besant Nagar,<br />
                  Chennai - 600 090
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-hover"
            >
              <div className="glass rounded-2xl p-8 border border-amber-400/10 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-3xl mb-4 shadow-lg">
                  📞
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {lang === "en" ? "Call Us" : "அழையுங்கள்"}
                </h3>
                <p className="text-white/60 font-dm">
                  +91 9840306113
                </p>
                <p className="text-white/40 font-dm text-sm mt-2">
                  {lang === "en" ? "Available during service hours" : "ஆராதனை நேரங்களில் கிடைக்கும்"}
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-hover"
            >
              <div className="glass rounded-2xl p-8 border border-amber-400/10 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center text-3xl mb-4 shadow-lg">
                  ✉️
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {lang === "en" ? "Email Us" : "மின்னஞ்சல் அனுப்புங்கள்"}
                </h3>
                <p className="text-amber-400/80 font-dm">
                  lwagchurch98@gmail.com
                </p>
                <p className="text-white/40 font-dm text-sm mt-2">
                  {lang === "en" ? "We'll respond as soon as possible" : "முடிந்தவுடன் பதிலளிப்போம்"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-warm rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-golden mb-6">
              {lang === "en" ? "Follow Us Online" : "ஆன்லைனில் எங்களைப் பின்தொடருங்கள்"}
            </h2>
            <p className="font-dm text-white/60 mb-8 max-w-lg mx-auto">
              {lang === "en"
                ? "Stay connected with us on social media for live streams, sermons, and updates."
                : "நேரடி ஒளிபரப்பு, போதனைகள் மற்றும் புதுப்பிப்புகளுக்கு சமூக ஊடகங்களில் எங்களுடன் இணைந்திருங்கள்."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@livingworda.gchurch9092/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-red-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="white" d="M9.545 15.568V8.432L15.818 12z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://www.instagram.com/lwag_church_besantnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-amber-400/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d80.27!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBesant+Nagar+Chennai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <LangProvider>
      <ContactContent />
    </LangProvider>
  );
}
