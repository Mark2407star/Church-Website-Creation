"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider } from "@/components/LangProvider";
import { motion } from "framer-motion";
import { useLang } from "@/components/LangProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

function HomeContent() {
  const lang = useLang();
  const [verseIndex, setVerseIndex] = useState(0);

  const verses = [
    {
      en: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.",
      ta: "கிருபையினாலே விசுவாசத்தினாலே இரட்சிக்கப்பட்டீர்கள்; இது உங்களால் அல்ல, தேவனுடைய ஈவு.",
      ref: "Ephesians 2:8 | எபே 2:8",
    },
    {
      en: "The grass withers and the flowers fall, but the word of our God endures forever.",
      ta: "புல் உலரும், பூ வாடும்; ஆனால் நம்முடைய தேவனுடைய வார்த்தை என்றென்றும் நிலைத்திருக்கும்.",
      ref: "Isaiah 40:8 | ஏசாயா 40:8",
    },
    {
      en: "I can do all this through him who gives me strength.",
      ta: "என்னை ஬லப்படுத்துகிற கிறிஸ்துவின் மூலமாய் எல்லாவற்றையும் செய்ய எனக்கு வல்லமை உண்டு.",
      ref: "Philippians 4:13 | பிலி 4:13",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % verses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [verses.length]);

  const services = [
    {
      day: { en: "Sunday", ta: "ஞாயிறு" },
      times: [
        { en: "Morning Service - 7:00 AM", ta: "காலை ஆராதனை - 7:00 AM" },
        { en: "Sunday School - 4:00 PM", ta: "ஞாயிறு பள்ளி - 4:00 PM" },
        { en: "Evening Service - 6:30 PM", ta: "மாலை ஆராதனை - 6:30 PM" },
      ],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      day: { en: "Tuesday", ta: "செவ்வாய்" },
      times: [
        { en: "Bible Study - 7:00 PM", ta: "வேதபடிப்பு - 7:00 PM" },
      ],
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      day: { en: "Wednesday", ta: "புதன்" },
      times: [
        { en: "Gospel Meeting - 7:00 PM", ta: "சுவிசேஷக் கூட்டம் - 7:00 PM" },
      ],
      gradient: "from-rose-500 to-pink-600",
    },
    {
      day: { en: "Friday", ta: "வெள்ளி" },
      times: [
        { en: "Men's & Women's Fellowship - 8:00 PM", ta: "ஆண்கள் & பெண்கள் ஐக்கியம் - 8:00 PM" },
        { en: "Youth/Teens Meet - 8:30 PM", ta: "இளைஞர் கூட்டம் - 8:30 PM" },
        { en: "Night Prayer - 10:30 PM (1st week)", ta: "இரவு ஜெபம் - 10:30 PM (முதல் வாரம்)" },
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      day: { en: "Saturday", ta: "சனி" },
      times: [
        { en: "Fasting Prayer - 10:30 AM", ta: "உபவாச ஜெபம் - 10:30 AM" },
      ],
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const ministries = [
    {
      title: { en: "Worship Ministry", ta: "ஆராதனை ஊழியம்" },
      desc: {
        en: "Spirit-led worship that ushers in God's presence",
        ta: "தேவனுடைய சந்நிதியை கொண்டுவரும் ஆவியால் நடத்தப்படும் ஆராதனை",
      },
      icon: "🎵",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: { en: "Youth Ministry", ta: "இளைஞர் ஊழியம்" },
      desc: {
        en: "Raising a generation on fire for God",
        ta: "தேவனுக்காக தீப்பற்றிய தலைமுறையை உருவாக்குதல்",
      },
      icon: "🔥",
      color: "from-rose-400 to-red-500",
    },
    {
      title: { en: "Children's Ministry", ta: "பிள்ளைகள் ஊழியம்" },
      desc: {
        en: "Teaching kids to walk in God's ways",
        ta: "குழந்தைகளை தேவனுடைய வழியில் நடக்க பயிற்றுவித்தல்",
      },
      icon: "🌈",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: { en: "Women's Fellowship", ta: "பெண்கள் ஐக்கியம்" },
      desc: {
        en: "Empowering women through God's Word",
        ta: "தேவனுடைய வார்த்தையின் மூலம் பெண்களை வலுப்படுத்துதல்",
      },
      icon: "💐",
      color: "from-pink-400 to-purple-500",
    },
    {
      title: { en: "Men's Fellowship", ta: "ஆண்கள் ஐக்கியம்" },
      desc: {
        en: "Building godly men of integrity",
        ta: "நேர்மையுள்ள தேவபக்தி மனிதர்களை உருவாக்குதல்",
      },
      icon: "🛡️",
      color: "from-indigo-400 to-violet-500",
    },
    {
      title: { en: "Prayer Ministry", ta: "ஜெப ஊழியம்" },
      desc: {
        en: "Interceding for the church and community",
        ta: "சபை மற்றும் சமூகத்திற்காக மத்தியஸ்தம் செய்தல்",
      },
      icon: "🙏",
      color: "from-emerald-400 to-green-500",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Animated particles */}
        <div className="particles-overlay">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>

        {/* Animated Cross Vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="300" cy="300" r="280" stroke="rgba(245,175,25,0.3)" strokeWidth="1" fill="none" />
            <circle cx="300" cy="300" r="240" stroke="rgba(241,39,17,0.2)" strokeWidth="0.5" fill="none" />
            <circle cx="300" cy="300" r="200" stroke="rgba(245,175,25,0.15)" strokeWidth="0.5" fill="none" />
          </motion.svg>
        </div>

        {/* Light rays */}
        <div className="light-ray" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Animated Cross */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="mx-auto cross-vector animate-cross-glow"
            >
              <defs>
                <linearGradient id="heroCross" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5af19" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#f12711" />
                </linearGradient>
              </defs>
              <rect x="32" y="5" width="16" height="70" rx="3" fill="url(#heroCross)" />
              <rect x="15" y="20" width="50" height="16" rx="3" fill="url(#heroCross)" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-tamil-heading text-amber-300/80 text-lg md:text-xl mb-2"
          >
            இது மனிதனால் உண்டானது அல்ல இது தேவனுடைய ஈவு!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-accent text-amber-200/60 text-base mb-6"
          >
            &quot;It is not of yourselves, it is the gift of God&quot; - Eph 2:8
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-gradient-golden">Living Word</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="font-tamil-heading text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-royal mb-4"
          >
            ஜீவ வார்த்தை ஏ.ஜி சபை
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="font-dm text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            {lang === "en"
              ? "A Christ-centered ministry in Besant Nagar, Chennai — rooted in the living and unchanging Word of God."
              : "பெசன்ட் நகர், சென்னையில் உள்ள கிறிஸ்துவை மையமாகக் கொண்ட ஊழியம் — உயிருள்ளதும் மாறாததுமான தேவனுடைய வார்த்தையில் வேரூன்றியது."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/services"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
            >
              {lang === "en" ? "Join Our Service" : "ஆராதனையில் சேருங்கள்"}
            </Link>
            <Link
              href="/prayer"
              className="px-8 py-3 rounded-full glass border border-amber-400/30 text-amber-300 font-semibold text-lg hover:scale-105 transition-transform"
            >
              {lang === "en" ? "Send Prayer Request" : "ஜெப கோரிக்கை அனுப்புங்கள்"}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-amber-400/40 flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-amber-400/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Today's Verse */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400/60 font-dm text-sm uppercase tracking-[0.3em] mb-4">
              {lang === "en" ? "Today's Verse" : "இன்றைய வார்த்தை"}
            </p>
            <div className="glass-warm rounded-3xl p-8 md:p-12">
              <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto mb-4 text-amber-400/60">
                <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <motion.p
                key={verseIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-accent text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-4"
              >
                {lang === "en" ? verses[verseIndex].en : verses[verseIndex].ta}
              </motion.p>
              <p className="font-dm text-amber-400/70 text-sm">
                — {verses[verseIndex].ref}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Watch Services CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-rose-900/30 to-amber-900/40" />
          <div className="absolute inset-0 bg-[#0a0a1a]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Watch Our Services" : "எங்கள் ஆராதனைகளைப் பாருங்கள்"}
            </h2>
            <p className="font-dm text-white/60 mb-8 max-w-xl mx-auto">
              {lang === "en"
                ? "Join us online and experience the power of worship and the Word from anywhere."
                : "எங்கிருந்தும் ஆராதனை மற்றும் வார்த்தையின் வல்லமையை அனுபவிக்க ஆன்லைனில் எங்களுடன் சேருங்கள்."}
            </p>
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
              YouTube Channel
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Timings */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-amber-400/60 font-dm text-sm uppercase tracking-[0.3em] mb-2">
              {lang === "en" ? "Join Us" : "எங்களுடன் சேருங்கள்"}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-royal">
              {lang === "en" ? "Service Timings" : "ஆராதனை நேரங்கள்"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-amber-400/20">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                    {lang === "en" ? service.day.en : service.day.ta}
                  </div>
                  <ul className="space-y-2">
                    {service.times.map((time, j) => (
                      <li key={j} className="text-white/70 text-sm font-dm">
                        {lang === "en" ? time.en : time.ta}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-amber-400/30 text-amber-300 font-semibold hover:scale-105 transition-transform"
            >
              {lang === "en" ? "View Full Schedule →" : "முழு அட்டவணை பார்க்க →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-amber-400/60 font-dm text-sm uppercase tracking-[0.3em] mb-2">
              {lang === "en" ? "Our Ministries" : "எங்கள் ஊழியங்கள்"}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-golden">
              {lang === "en" ? "Ministries" : "ஊழியங்கள்"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((min, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-amber-400/20">
                  <div className="text-4xl mb-4">{min.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-gradient-golden mb-2">
                    {lang === "en" ? min.title.en : min.title.ta}
                  </h3>
                  <p className="text-white/60 font-dm text-sm">
                    {lang === "en" ? min.desc.en : min.desc.ta}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-amber-400/30 text-amber-300 font-semibold hover:scale-105 transition-transform"
            >
              {lang === "en" ? "Explore Ministries →" : "ஊழியங்களை ஆராயுங்கள் →"}
            </Link>
          </div>
        </div>
      </section>

      {/* We Are Here To Pray CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/prayer.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-black/80 to-rose-900/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
              {lang === "en" ? "We Are Here to" : "நாங்கள் இங்கே"}
            </h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold text-gradient-fire mb-8">
              {lang === "en" ? "Pray For You!" : "உங்களுக்காக ஜெபிக்கிறோம்!"}
            </h3>
            <p className="font-dm text-white/70 text-lg max-w-xl mx-auto mb-8">
              {lang === "en"
                ? "Share your prayer requests with us and our prayer team will stand with you in faith."
                : "உங்கள் ஜெப கோரிக்கைகளை எங்களுடன் பகிருங்கள், எங்கள் ஜெப குழு விசுவாசத்துடன் உங்களுக்காக ஜெபிக்கும்."}
            </p>
            <Link
              href="/prayer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
            >
              🙏 {lang === "en" ? "Submit Prayer Request" : "ஜெப கோரிக்கை அனுப்பு"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Offering CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a1020] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-warm rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Are You Blessed?" : "நீங்கள் ஆசீர்வதிக்கப்பட்டீர்களா?"}
            </h2>
            <p className="font-dm text-white/60 text-lg mb-6">
              {lang === "en"
                ? "You may sow into our ministry and be a part of God's work."
                : "நீங்கள் எங்கள் ஊழியத்தில் விதைத்து தேவனுடைய கிரியையில் பங்கு பெறலாம்."}
            </p>
            <Link
              href="/offering"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
            >
              💝 {lang === "en" ? "Sow Your Seed" : "உங்கள் விதையை விதையுங்கள்"}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function HomePage() {
  return (
    <LangProvider>
      <HomeContent />
    </LangProvider>
  );
}
