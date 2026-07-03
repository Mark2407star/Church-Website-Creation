"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";

function MinistriesContent() {
  const lang = useLang();

  const ministries = [
    {
      title: { en: "Worship Ministry", ta: "ஆராதனை ஊழியம்" },
      desc: {
        en: "Our worship ministry is dedicated to leading the congregation into the presence of God through Spirit-led worship. We believe in creating an atmosphere where hearts are opened and lives are transformed through praise and worship.",
        ta: "எங்கள் ஆராதனை ஊழியம் ஆவியால் நடத்தப்படும் ஆராதனையின் மூலம் சபையை தேவனுடைய சந்நிதிக்குள் கொண்டு வருவதற்காக அர்ப்பணிக்கப்பட்டுள்ளது. ஸ்துதி மற்றும் ஆராதனையின் மூலம் இருதயங்கள் திறக்கப்பட்டு வாழ்க்கைகள் மாற்றப்படும் சூழலை உருவாக்குவதை நாங்கள் நம்புகிறோம்.",
      },
      icon: "🎵",
      color: "from-amber-400 to-orange-600",
      image: "/images/worship.jpg",
      verse: { en: "Worship the Lord with gladness", ta: "ஆண்டவரை ஆனந்தத்தோடு ஆராதியுங்கள்", ref: "Psalm 100:2" },
    },
    {
      title: { en: "Youth Ministry", ta: "இளைஞர் ஊழியம்" },
      desc: {
        en: "Our youth ministry is raising a generation that is on fire for God. Through dynamic programs, Bible studies, and fellowship, we equip young people to stand firm in their faith and make an impact for Christ in their schools, colleges, and communities.",
        ta: "எங்கள் இளைஞர் ஊழியம் தேவனுக்காக தீப்பற்றிய ஒரு தலைமுறையை உருவாக்குகிறது. செயல்பாட்டு நிகழ்ச்சிகள், வேதபடிப்பு மற்றும் ஐக்கியம் மூலம், இளைஞர்களை தங்கள் விசுவாசத்தில் உறுதியாக நிற்கவும் கிறிஸ்துவுக்காக தாக்கத்தை ஏற்படுத்தவும் தயார்படுத்துகிறோம்.",
      },
      icon: "🔥",
      color: "from-rose-400 to-red-600",
      image: "/images/youth.jpg",
      verse: { en: "Let no one despise your youth", ta: "உன் வயதை யாரும் அற்பமாய் எண்ணட்டும்", ref: "1 Timothy 4:12" },
    },
    {
      title: { en: "Children's Ministry", ta: "பிள்ளைகள் ஊழியம்" },
      desc: {
        en: "Our children's ministry nurtures kids with the love of God through engaging Bible stories, fun activities, and creative learning. We teach them to walk in God's ways from a young age, building a strong spiritual foundation for their lives.",
        ta: "எங்கள் பிள்ளைகள் ஊழியம் குழந்தைகளை வேதாகமக் கதைகள், சுவாரஸ்யமான செயல்பாடுகள் மற்றும் படைப்பாற்றல் கற்றல் மூலம் தேவனுடைய அன்போடு வளர்க்கிறது. அவர்களை சிறு வயதிலிருந்தே தேவனுடைய வழியில் நடக்க பயிற்றுவித்து, அவர்கள் வாழ்க்கைக்கு வலுவான ஆன்மீக அடித்தளத்தை கட்டுகிறோம்.",
      },
      icon: "🌈",
      color: "from-cyan-400 to-blue-600",
      image: "/images/children-ministry.jpg",
      verse: { en: "Train up a child in the way he should go", ta: "பிள்ளையை அதற்கு ஒப்பான வழியில் படிப்பித்து", ref: "Proverbs 22:6" },
    },
    {
      title: { en: "Women's Fellowship", ta: "பெண்கள் ஐக்கியம்" },
      desc: {
        en: "Our Women's Fellowship empowers women through God's Word, prayer, and mutual support. We gather regularly for Bible study, prayer meetings, and fellowship, encouraging one another to grow in faith and fulfill God's calling in our lives.",
        ta: "எங்கள் பெண்கள் ஐக்கியம் தேவனுடைய வார்த்தை, ஜெபம் மற்றும் பரஸ்பர ஆதரவு மூலம் பெண்களை வலுப்படுத்துகிறது. வேதபடிப்பு, ஜெபக் கூட்டங்கள் மற்றும் ஐக்கியத்திற்காக தொடர்ந்து கூடி, விசுவாசத்தில் வளரவும் தேவனுடைய அழைப்பை நிறைவேற்றவும் ஒருவரையொருவர் ஊக்குவிக்கிறோம்.",
      },
      icon: "💐",
      color: "from-pink-400 to-purple-600",
      image: "/images/women-fellowship.jpg",
      verse: { en: "She is clothed with strength and dignity", ta: "அவள் பலத்தோடும் மானத்தோடும் வஸ்திரந்தரித்திருக்கிறாள்", ref: "Proverbs 31:25" },
    },
    {
      title: { en: "Men's Fellowship", ta: "ஆண்கள் ஐக்கியம்" },
      desc: {
        en: "Our Men's Fellowship builds godly men of integrity who lead their families and communities with faith and courage. Through Bible study, prayer, and accountability, we sharpen one another to be men after God's own heart.",
        ta: "எங்கள் ஆண்கள் ஐக்கியம் விசுவாசத்தோடும் தைரியத்தோடும் தங்கள் குடும்பங்களையும் சமூகங்களையும் வழிநடாத்தும் நேர்மையுள்ள தேவபக்தி மனிதர்களை உருவாக்குகிறது. வேதபடிப்பு, ஜெபம் மற்றும் பொறுப்புணர்வு மூலம், தேவனுடைய இதயத்திற்கு ஏற்ற மனிதர்களாக ஒருவரையொருவர் தீட்டுகிறோம்.",
      },
      icon: "🛡️",
      color: "from-indigo-400 to-violet-600",
      image: "/images/worship.jpg",
      verse: { en: "Be strong and courageous", ta: "பலப்பமாயும் தைரியமாயும் இரு", ref: "Joshua 1:9" },
    },
    {
      title: { en: "Prayer Ministry", ta: "ஜெப ஊழியம்" },
      desc: {
        en: "Our prayer ministry stands in the gap for the church and the community. We believe in the power of intercessory prayer and gather regularly to pray for the needs of individuals, families, our church, and the nation.",
        ta: "எங்கள் ஜெப ஊழியம் சபை மற்றும் சமூகத்திற்காக மத்தியஸ்தம் செய்கிறது. மத்தியஸ்த ஜெபத்தின் வல்லமையில் நம்புகிறோம் மற்றும் தனிநபர்கள், குடும்பங்கள், எங்கள் சபை மற்றும் நாட்டின் தேவைகளுக்காக தொடர்ந்து ஜெபிக்கிறோம்.",
      },
      icon: "🙏",
      color: "from-emerald-400 to-teal-600",
      image: "/images/prayer.jpg",
      verse: { en: "The prayer of a righteous person is powerful", ta: "நீதிமானுடைய ஜெபம் வல்லமையுள்ளது", ref: "James 5:16" },
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
              {lang === "en" ? "Serving Together" : "ஒன்றாக சேவித்தல்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Our Ministries" : "எங்கள் ஊழியங்கள்"}
            </h1>
            <p className="font-dm text-white/60 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "Each ministry is dedicated to serving God and building His kingdom. Find your place to serve and grow."
                : "ஒவ்வொரு ஊழியமும் தேவனை சேவித்து அவருடைய ராஜ்யத்தை கட்டுவதற்காக அர்ப்பணிக்கப்பட்டுள்ளது. சேவிக்கவும் வளரவும் உங்கள் இடத்தை கண்டுகொள்ளுங்கள்."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-16">
          {ministries.map((min, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-hover"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} glass rounded-3xl overflow-hidden border border-white/5 hover:border-amber-400/20`}>
                {/* Image */}
                <div className="md:w-2/5 relative">
                  <div
                    className="h-64 md:h-full min-h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${min.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${min.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-5xl">{min.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-golden mb-4">
                    {lang === "en" ? min.title.en : min.title.ta}
                  </h2>
                  <p className="text-white/70 font-dm leading-relaxed mb-6">
                    {lang === "en" ? min.desc.en : min.desc.ta}
                  </p>

                  {/* Verse */}
                  <div className={`bg-gradient-to-r ${min.color} p-[1px] rounded-2xl`}>
                    <div className="bg-[#0d0d2b] rounded-2xl p-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" className="text-amber-400/60 mb-2">
                        <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                      <p className="font-accent text-white/80 text-lg italic mb-1">
                        &quot;{lang === "en" ? min.verse.en : min.verse.ta}&quot;
                      </p>
                      <p className="text-amber-400/60 text-sm font-dm">— {min.verse.ref}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function MinistriesPage() {
  return (
    <LangProvider>
      <MinistriesContent />
    </LangProvider>
  );
}
