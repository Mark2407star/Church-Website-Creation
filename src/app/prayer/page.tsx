"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";
import { useState } from "react";

function PrayerContent() {
  const lang = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          language: lang,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", request: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

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
              {lang === "en" ? "We Care For You" : "உங்களை நாங்கள் கவனிக்கிறோம்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Prayer Request" : "ஜெப கோரிக்கை"}
            </h1>
            <p className="font-dm text-white/60 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "Share your prayer needs with us. Our prayer team will intercede for you with faith and love."
                : "உங்கள் ஜெப தேவைகளை எங்களுடன் பகிருங்கள். எங்கள் ஜெப குழு விசுவாசத்துடனும் அன்போடும் உங்களுக்காக மத்தியஸ்தம் செய்யும்."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prayer Form & Info */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              {submitted ? (
                <div className="glass-warm rounded-3xl p-8 md:p-12 text-center">
                  <div className="text-6xl mb-4">🙏</div>
                  <h3 className="font-heading text-3xl font-bold text-gradient-golden mb-4">
                    {lang === "en" ? "Thank You!" : "நன்றி!"}
                  </h3>
                  <p className="font-dm text-white/70 text-lg mb-6">
                    {lang === "en"
                      ? "Your prayer request has been submitted. Our prayer team will lift you up in prayer."
                      : "உங்கள் ஜெப கோரிக்கை சமர்ப்பிக்கப்பட்டது. எங்கள் ஜெப குழு உங்களுக்காக ஜெபிக்கும்."}
                  </p>
                  <p className="font-accent text-amber-300/80 text-lg italic mb-6">
                    &quot;Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.&quot; — Matthew 7:7
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    {lang === "en" ? "Submit Another Request" : "இன்னொரு கோரிக்கை சமர்ப்பிக்கவும்"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 border border-amber-400/10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-gradient-golden mb-6">
                    {lang === "en" ? "Share Your Prayer Need" : "உங்கள் ஜெப தேவையை பகிருங்கள்"}
                  </h3>

                  {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-400/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm font-dm mb-2">
                        {lang === "en" ? "Your Name *" : "உங்கள் பெயர் *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20"
                        placeholder={lang === "en" ? "Enter your name" : "உங்கள் பெயரை உள்ளிடுங்கள்"}
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm font-dm mb-2">
                        {lang === "en" ? "Email (Optional)" : "மின்னஞ்சல் (விருப்பத்திற்கு)"}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm font-dm mb-2">
                        {lang === "en" ? "Phone (Optional)" : "தொலைபேசி (விருப்பத்திற்கு)"}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm font-dm mb-2">
                        {lang === "en" ? "Prayer Request *" : "ஜெப கோரிக்கை *"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.request}
                        onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20 resize-none"
                        placeholder={
                          lang === "en"
                            ? "Share your prayer request here..."
                            : "உங்கள் ஜெப கோரிக்கையை இங்கே பகிருங்கள்..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting
                        ? lang === "en"
                          ? "Submitting..."
                          : "சமர்ப்பிக்கிறது..."
                        : lang === "en"
                          ? "Submit Prayer Request 🙏"
                          : "ஜெப கோரிக்கை சமர்ப்பிக்கவும் 🙏"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[380px] space-y-6"
            >
              {/* Confidential Note */}
              <div className="glass rounded-2xl p-6 border border-amber-400/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h4 className="font-heading text-lg font-bold text-white">
                    {lang === "en" ? "Confidential" : "ரகசியமானது"}
                  </h4>
                </div>
                <p className="text-white/60 font-dm text-sm">
                  {lang === "en"
                    ? "Your prayer requests are private and will only be seen by our pastor and prayer team. We treat every request with utmost confidentiality."
                    : "உங்கள் ஜெப கோரிக்கைகள் தனிப்பட்டவை மற்றும் எங்கள் பாஸ்டர் மற்றும் ஜெப குழுவால் மட்டுமே பார்க்கப்படும். ஒவ்வொரு கோரிக்கையையும் மிகவும் ரகசியமாக நடத்துகிறோம்."}
                </p>
              </div>

              {/* Verse Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-sm opacity-30" />
                <div className="relative glass rounded-2xl p-6 border border-purple-400/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-amber-400/60 mb-3">
                    <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="font-accent text-white/80 text-base italic mb-2">
                    &quot;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.&quot;
                  </p>
                  <p className="text-amber-400/60 text-sm font-dm">— Philippians 4:6</p>
                </div>
              </div>

              {/* Another Verse */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur-sm opacity-30" />
                <div className="relative glass rounded-2xl p-6 border border-rose-400/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-amber-400/60 mb-3">
                    <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="font-accent text-white/80 text-base italic mb-2">
                    &quot;Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.&quot;
                  </p>
                  <p className="text-amber-400/60 text-sm font-dm">— James 5:16</p>
                </div>
              </div>

              {/* Pastor Note */}
              <div className="glass-warm rounded-2xl p-6 border border-amber-400/10">
                <p className="font-dm text-white/70 text-sm italic">
                  {lang === "en"
                    ? "\"We believe in the power of prayer. No request is too small or too big for our God. Let us stand with you in faith.\" — Pastor Vincent"
                    : "\"ஜெபத்தின் வல்லமையில் நாங்கள் நம்புகிறோம். எங்கள் தேவனுக்கு எந்த கோரிக்கையும் சிறியதோ பெரியதோ அல்ல. விசுவாசத்துடன் உங்களுடன் நிற்க விடுங்கள்.\" — பாஸ்டர் வின்சென்ட்"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function PrayerPage() {
  return (
    <LangProvider>
      <PrayerContent />
    </LangProvider>
  );
}
