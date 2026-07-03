"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";

function ServicesContent() {
  const lang = useLang();

  const services = [
    {
      day: { en: "Sunday", ta: "ஞாயிறு" },
      icon: "☀️",
      times: [
        { en: "Morning Service", ta: "காலை ஆராதனை", time: "7:00 AM" },
        { en: "Sunday School", ta: "ஞாயிறு பள்ளி", time: "4:00 PM" },
        { en: "Evening Service", ta: "மாலை ஆராதனை", time: "6:30 PM" },
      ],
      gradient: "from-amber-400 via-orange-500 to-red-500",
      image: "/images/worship.jpg",
    },
    {
      day: { en: "Tuesday", ta: "செவ்வாய்" },
      icon: "📖",
      times: [
        { en: "Bible Study", ta: "வேதபடிப்பு", time: "7:00 PM" },
      ],
      gradient: "from-purple-400 via-indigo-500 to-blue-500",
      image: "/images/bible-study.jpg",
    },
    {
      day: { en: "Wednesday", ta: "புதன்" },
      icon: "✝️",
      times: [
        { en: "Gospel Meeting", ta: "சுவிசேஷக் கூட்டம்", time: "7:00 PM" },
      ],
      gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
      image: "/images/prayer.jpg",
    },
    {
      day: { en: "Friday", ta: "வெள்ளி" },
      icon: "🕯️",
      times: [
        { en: "Men's Fellowship", ta: "ஆண்கள் ஐக்கியம்", time: "8:00 PM" },
        { en: "Women's Fellowship", ta: "பெண்கள் ஐக்கியம்", time: "8:00 PM" },
        { en: "Youth/Teens Meet", ta: "இளைஞர் கூட்டம்", time: "8:30 PM" },
        { en: "Night Prayer (1st week only)", ta: "இரவு ஜெபம் (முதல் வாரம் மட்டும்)", time: "10:30 PM" },
      ],
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      image: "/images/youth.jpg",
    },
    {
      day: { en: "Saturday", ta: "சனி" },
      icon: "🙏",
      times: [
        { en: "Fasting Prayer", ta: "உபவாச ஜெபம்", time: "10:30 AM" },
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      image: "/images/prayer.jpg",
    },
  ];

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
              {lang === "en" ? "Join Us Every Week" : "ஒவ்வொரு வாரமும் எங்களுடன் சேருங்கள்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Service Timings" : "ஆராதனை நேரங்கள்"}
            </h1>
            <p className="font-dm text-white/60 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "Come and experience the presence of God in our weekly services and gatherings."
                : "எங்கள் வாராந்திர ஆராதனைகள் மற்றும் கூட்டங்களில் தேவனுடைய சந்நிதியை அனுபவியுங்கள்."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-hover"
            >
              <div className={`glass rounded-3xl overflow-hidden border border-white/5 hover:border-amber-400/20 ${i % 2 === 0 ? '' : ''}`}>
                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="md:w-1/3 relative">
                    <div
                      className="h-48 md:h-full min-h-[200px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-30`} />
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{service.icon}</span>
                      <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                          {lang === "en" ? service.day.en : service.day.ta}
                        </h2>
                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.gradient} mt-2`} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {service.times.map((time, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between glass rounded-xl px-4 py-3 border border-white/5"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            <span className="text-white/80 font-dm">
                              {lang === "en" ? time.en : time.ta}
                            </span>
                          </div>
                          <span className="text-amber-400 font-semibold font-dm">
                            {time.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-warm rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-fire mb-4">
              {lang === "en" ? "We Can't Wait to See You!" : "உங்களைப் பார்க்க ஆவலாய் காத்திருக்கிறோம்!"}
            </h2>
            <p className="font-dm text-white/60 text-lg mb-6">
              {lang === "en"
                ? "Come as you are. God's house is open for everyone."
                : "நீங்கள் இருக்கும் நிலையிலேயே வாருங்கள். தேவனுடைய ஆலயம் அனைவருக்கும் திறந்திருக்கிறது."}
            </p>
            <p className="font-accent text-amber-300/80 text-xl italic">
              &quot;For where two or three gather in my name, there am I with them.&quot; — Matthew 18:20
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ServicesPage() {
  return (
    <LangProvider>
      <ServicesContent />
    </LangProvider>
  );
}
