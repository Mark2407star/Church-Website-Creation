"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";
import Image from "next/image";

function AboutContent() {
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
              {lang === "en" ? "Who We Are" : "நாங்கள் யார்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "About Us" : "எங்களைப் பற்றி"}
            </h1>
            <h2 className="font-tamil-heading text-3xl md:text-4xl text-gradient-royal">
              ஜீவ வார்த்தை ஏ.ஜி சபை
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Church Image */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-amber-400/10"
          >
            <Image
              src="https://images.pexels.com/photos/4301775/pexels-photo-4301775.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Church silhouette at sunset"
              width={1200}
              height={627}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About Content - English */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-warm rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center text-2xl">
                🏛️
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-golden">
                LWAG Church
              </h2>
            </div>

            <div className="space-y-4 text-white/80 font-dm leading-relaxed text-lg">
              <p>
                Living Word A.G Church is a Christ-centered ministry rooted in the living and unchanging Word of God. We believe the Bible is God&apos;s inspired truth — powerful, relevant, and active in transforming lives today. Our passion is to teach and live out God&apos;s Word with clarity, faith, and love, so that individuals and families may grow into spiritual maturity and experience the fullness of life found in Jesus Christ.
              </p>
              <p>
                Located in the heart of Besant Nagar, our church exists to serve the local community with compassion and purpose. We are a welcoming family of believers committed to worship, prayer, discipleship, and outreach. Through Spirit-led worship, sound biblical teaching, and sincere fellowship, we seek to build a church that reflects God&apos;s love and grace to everyone.
              </p>
              <p>
                Our ministry is focused on sharing the Gospel, strengthening believers, and reaching out to those in need. We desire to be a light in Besant Nagar — bringing hope, healing, and truth through the power of God&apos;s Word and the work of the Holy Spirit.
              </p>
              <p className="font-accent text-amber-300/80 text-xl">
                At Living Word A.G Church, everyone is welcome. Together, we grow in faith, walk in love, and live out God&apos;s purpose for our lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Content - Tamil */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 border border-purple-400/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-2xl">
                🕊️
              </div>
              <h2 className="font-tamil-heading text-3xl md:text-4xl font-bold text-gradient-royal">
                ஜீவ வார்த்தை ஏ.ஜி சபை
              </h2>
            </div>

            <div className="space-y-4 text-white/80 font-tamil-body leading-relaxed text-lg">
              <p>
                Living Word A.G Church என்பது உயிருள்ளதும் என்றும் மாறாததும் ஆன தேவனுடைய வார்த்தையின் அடிப்படையில் நிறுவப்பட்ட கிறிஸ்துவை மையமாகக் கொண்ட ஒரு ஊழியம். வேதாகமம் தேவனால் ஊக்கமளிக்கப்பட்ட சத்தியம் என்றும், அது இன்றும் மனிதர்களின் வாழ்க்கையை மாற்ற வல்லமையுடையது என்றும் நாங்கள் நம்புகிறோம். தெளிவாகவும் விசுவாசத்துடனும் அன்போடும் தேவனுடைய வார்த்தையை கற்பித்து, அதை வாழ்ந்து காண்பிப்பதன் மூலம், தனிநபர்களும் குடும்பங்களும் ஆன்மீக வளர்ச்சியடைந்து, இயேசு கிறிஸ்துவில் காணப்படும் நிறைந்த வாழ்க்கையை அனுபவிக்க வேண்டும் என்பதே எங்கள் இதய விருப்பம்.
              </p>
              <p>
                பெசன்ட் நகர் மையமாகக் கொண்டு செயல்படும் எங்கள் சபை, அங்குள்ள சமூகத்தை அன்போடும் கருணையோடும் சேவிப்பதற்காக அழைக்கப்பட்டுள்ளது. ஆராதனை, ஜெபம், சீஷத்துவம் மற்றும் சுவிசேஷப் பணிகளில் அர்ப்பணிக்கப்பட்ட விசுவாசிகளின் ஒரு குடும்பமாக நாங்கள் இருக்கிறோம். ஆவியால் நடத்தப்படும் ஆராதனையும், தூய வேதாகமத்தின் அடிப்படையிலான போதனையும், உண்மையான ஐக்கியமும் மூலமாக, தேவனுடைய அன்பையும் கிருபையையும் பிரதிபலிக்கும் சபையாக வளர விரும்புகிறோம்.
              </p>
              <p>
                எங்கள் ஊழியம் சுவிசேஷத்தை அறிவிப்பதிலும், விசுவாசிகளை வலுப்படுத்துவதிலும், தேவையுள்ளவர்களை அணுகி உதவுவதிலும் கவனம் செலுத்துகிறது. தேவனுடைய வார்த்தையின் வல்லமையும் பரிசுத்த ஆவியின் செயல்களும் மூலம், பெசன்ட் நகரில் நம்பிக்கையும், சுகமளிப்பும், சத்தியமும் கொண்டு வருகிற ஒளியாக இருக்க வேண்டும் என்பதே எங்கள் நோக்கம்.
              </p>
              <p className="font-tamil-heading text-amber-300/80 text-xl">
                Living Word A.G Church-இல் அனைவரும் அன்புடன் வரவேற்கப்படுகிறார்கள். ஒன்றிணைந்து, நாங்கள் விசுவாசத்தில் வளர்ந்து, அன்பில் நடந்து, தேவன் நமக்குக் கொடுத்த நோக்கத்தை வாழ்ந்து காட்டுகிறோம்.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Church Values */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-royal">
              {lang === "en" ? "Our Foundation" : "எங்கள் அடித்தளம்"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📖",
                title: { en: "The Word", ta: "வார்த்தை" },
                desc: { en: "Rooted in God's unchanging truth", ta: "தேவனுடைய மாறாத சத்தியத்தில் வேரூன்றியது" },
                color: "from-amber-400 to-orange-500",
              },
              {
                icon: "🙏",
                title: { en: "Prayer", ta: "ஜெபம்" },
                desc: { en: "Seeking God's presence continually", ta: "தேவனுடைய சந்நிதியை தொடர்ந்து தேடுதல்" },
                color: "from-purple-400 to-indigo-500",
              },
              {
                icon: "🤝",
                title: { en: "Fellowship", ta: "ஐக்கியம்" },
                desc: { en: "Growing together in love", ta: "அன்பில் ஒன்றாக வளர்தல்" },
                color: "from-rose-400 to-pink-500",
              },
              {
                icon: "🌍",
                title: { en: "Outreach", ta: "சுவிசேஷம்" },
                desc: { en: "Sharing hope with our community", ta: "எங்கள் சமூகத்துடன் நம்பிக்கையைப் பகிர்தல்" },
                color: "from-cyan-400 to-blue-500",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-amber-400/20 h-full">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${val.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                    {val.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {lang === "en" ? val.title.en : val.title.ta}
                  </h3>
                  <p className="text-white/60 font-dm text-sm">
                    {lang === "en" ? val.desc.en : val.desc.ta}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 border border-amber-400/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-heading text-3xl font-bold text-gradient-golden mb-4">
                  📍 {lang === "en" ? "Find Us" : "எங்களைக் காணுங்கள்"}
                </h3>
                <div className="space-y-2 text-white/70 font-dm">
                  <p>1st Cross Street, Thiruvalluvar Nagar</p>
                  <p>Besant Nagar, Chennai - 600 090</p>
                  <p className="text-amber-400/80">📞 +91 9840306113</p>
                  <p className="text-amber-400/80">✉️ lwagchurch98@gmail.com</p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-amber-400/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d80.27!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBesant+Nagar+Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function AboutPage() {
  return (
    <LangProvider>
      <AboutContent />
    </LangProvider>
  );
}
