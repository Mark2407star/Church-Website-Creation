"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LangProvider, useLang } from "@/components/LangProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function OfferingContent() {
  const lang = useLang();
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    // Generate UPI QR code
    const generateQR = async () => {
      try {
        const QRCode = (await import("qrcode")).default;
        const upiString = `upi://pay?pa=Vincepastor76@okicici&pn=Living%20Word%20AG%20Church&cu=INR`;
        const qrDataUrl = await QRCode.toDataURL(upiString, {
          width: 300,
          margin: 2,
          color: {
            dark: "#1a0a2e",
            light: "#ffffff",
          },
        });
        setQrCode(qrDataUrl);
      } catch (err) {
        console.error("QR generation error:", err);
      }
    };
    generateQR();
  }, []);

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
              {lang === "en" ? "Give Generously" : "தாராளமாய் கொடுங்கள்"}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-golden mb-4">
              {lang === "en" ? "Offering" : "காணிக்கை"}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#150a25] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-3xl blur-sm opacity-50" />
            <div className="relative glass-warm rounded-3xl p-8 md:p-12 text-center">
              <svg width="50" height="50" viewBox="0 0 24 24" className="mx-auto mb-6 text-amber-400/60">
                <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-golden mb-6">
                2 Corinthians 9:7
              </h2>
              <p className="font-accent text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-4">
                {lang === "en"
                  ? "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                  : "ஒவ்வொருவனும் தன் இருதயத்தில் முன்குறித்தபடியே கொடுக்கக்கடவன்; வருத்தத்தோடோ நிர்ப்பந்தத்தாலோ கொடுக்காமல், ஏனெனில் சந்தோஷமாய்க் கொடுக்கிறவனை தேவன் நேசிக்கிறார்."}
              </p>
              <p className="font-tamil-body text-amber-300/60 text-lg">
                {lang === "en"
                  ? "ஒவ்வொருவனும் தன் இருதயத்தில் முன்குறித்தபடியே கொடுக்கக்கடவன் — 2 கொரிந்தியர் 9:7"
                  : "Each of you should give what you have decided in your heart to give — 2 Corinthians 9:7"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QR Code & Payment Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1025] to-[#0a0a1a]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-amber-400/10 text-center">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gradient-golden mb-6">
                  {lang === "en" ? "Scan to Give" : "ஸ்கேன் செய்து கொடுங்கள்"}
                </h3>

                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white rounded-2xl p-4 inline-block">
                    {qrCode ? (
                      <img
                        src={qrCode}
                        alt="UPI QR Code for Living Word AG Church"
                        width={250}
                        height={250}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="w-[250px] h-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
                        <div className="animate-pulse text-gray-400">Generating QR...</div>
                      </div>
                    )}
                  </div>
                </div>

                <p className="font-dm text-white/50 text-sm mt-4">
                  {lang === "en" ? "Scan with any UPI app" : "ஏதேனும் UPI ஆப்பில் ஸ்கேன் செய்யுங்கள்"}
                </p>
              </div>
            </motion.div>

            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-purple-400/10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gradient-royal mb-6">
                  {lang === "en" ? "Bank Details" : "வங்கி விவரங்கள்"}
                </h3>

                <div className="space-y-4">
                  <div className="glass rounded-xl p-4 border border-white/5">
                    <p className="text-white/50 text-xs font-dm uppercase tracking-wider mb-1">
                      {lang === "en" ? "UPI ID" : "UPI ஐடி"}
                    </p>
                    <p className="text-amber-400 font-semibold font-dm text-lg">
                      Vincepastor76@okicici
                    </p>
                  </div>

                  <div className="glass rounded-xl p-4 border border-white/5">
                    <p className="text-white/50 text-xs font-dm uppercase tracking-wider mb-1">
                      {lang === "en" ? "Account Name" : "கணக்கு பெயர்"}
                    </p>
                    <p className="text-white/90 font-semibold font-dm text-lg">
                      Living Word A.G Church
                    </p>
                  </div>

                  <div className="glass rounded-xl p-4 border border-white/5">
                    <p className="text-white/50 text-xs font-dm uppercase tracking-wider mb-1">
                      {lang === "en" ? "Bank" : "வங்கி"}
                    </p>
                    <p className="text-white/90 font-semibold font-dm text-lg">
                      ICICI Bank
                    </p>
                  </div>

                  <div className="glass rounded-xl p-4 border border-white/5">
                    <p className="text-white/50 text-xs font-dm uppercase tracking-wider mb-1">
                      {lang === "en" ? "UPI Handle" : "UPI ஹேண்டில்"}
                    </p>
                    <p className="text-white/90 font-semibold font-dm text-lg">
                      @okicici
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-xl border border-amber-400/10">
                  <p className="font-accent text-amber-300/80 text-sm italic text-center">
                    {lang === "en"
                      ? "\"God loves a cheerful giver\" — 2 Cor 9:7"
                      : "\"சந்தோஷமாய்க் கொடுக்கிறவனை தேவன் நேசிக்கிறார்\" — 2 கொரி 9:7"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offering Image Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/offering.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/80 to-[#0a0a1a]/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-golden mb-6">
              {lang === "en" ? "Your Seed Will Produce a Harvest" : "உங்கள் விதை அறுவடையை உண்டாக்கும்"}
            </h2>
            <p className="font-dm text-white/60 text-lg max-w-2xl mx-auto mb-8">
              {lang === "en"
                ? "When you sow into God's kingdom, you are investing in eternity. Your generosity helps us reach more people with the Gospel, support the needy, and build God's house."
                : "நீங்கள் தேவனுடைய ராஜ்யத்தில் விதைக்கும் போது, நித்தியத்தில் முதலீடு செய்கிறீர்கள். உங்கள் தாராளம் சுவிசேஷத்தை அதிகமானவர்களுக்கு அறிவிக்கவும், தேவையுள்ளவர்களுக்கு உதவவும், தேவனுடைய ஆலயத்தை கட்டவும் உதவுகிறது."}
            </p>
            <div className="glass rounded-2xl p-6 max-w-lg mx-auto border border-amber-400/10">
              <p className="font-accent text-amber-300/80 text-lg italic">
                {lang === "en"
                  ? "\"Whoever sows generously will also reap generously.\" — 2 Corinthians 9:6"
                  : "\"தாராளமாய் விதைக்கிறவன் தாராளமாயவும் அறுவடை செய்வான்.\" — 2 கொரிந்தியர் 9:6"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function OfferingPage() {
  return (
    <LangProvider>
      <OfferingContent />
    </LangProvider>
  );
}
