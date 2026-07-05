import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="fade-in-up">
          <p className="font-cormorant italic text-gold-light/70 text-xl mb-6 tracking-wide">
            Get in touch with us
          </p>
          <h1 className="font-cormorant font-bold text-6xl sm:text-7xl md:text-8xl gradient-text mb-10 tracking-tight">
            Contact Us
          </h1>
        </div>
        <div className="fade-in-up delay-200 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </section>

      {/* ── Contact Details ── */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "/images/church-vector.png",
              title: "Address",
              lines: [
                "Living Word A.G Church",
                "[Church Address]",
                "Tamil Nadu, India",
              ],
            },
            {
              img: "/images/prayer-hands-vector.png",
              title: "Phone",
              lines: ["Pastor Vincent", "+91 [Phone Number]", "Call for prayer & enquiries"],
            },
            {
              img: "/images/dove-vector.png",
              title: "Email",
              lines: ["vincentpastor76@okicici", "Send us your prayer requests", "We'd love to hear from you"],
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="opacity-65"
                />
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-gold-light mb-5 tracking-wide">
                {item.title}
              </h3>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className={`${
                    i === 0
                      ? "text-indigo-100 font-jost font-medium"
                      : "text-indigo-300/45 font-jost text-sm"
                  } leading-relaxed`}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Map Placeholder ── */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="glass-card p-5 overflow-hidden">
          <div className="w-full h-72 rounded-xl bg-gradient-to-br from-indigo-900/40 to-blue-900/40 flex items-center justify-center border border-white/5">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center">
                <Image
                  src="/images/church-vector.png"
                  alt="Location"
                  width={32}
                  height={32}
                  className="opacity-50"
                />
              </div>
              <p className="text-indigo-300/35 font-jost text-sm">
                Church Location Map
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Quick Message ── */}
      <section className="max-w-3xl mx-auto px-8 py-16 text-center">
        <div className="glass-card p-14">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/8 flex items-center justify-center">
            <Image
              src="/images/heart-giving-vector.png"
              alt="Connect"
              width={40}
              height={40}
              className="opacity-65"
            />
          </div>
          <h2 className="font-cormorant font-bold text-3xl gradient-text mb-6 tracking-tight">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-indigo-200/50 font-jost text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you need prayer, have questions about our services, or want to know more about
            our ministries, feel free to reach out. You can also visit us during any of our service times.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/prayer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-deep-indigo font-jost font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-amber-600/20 transition-all"
            >
              Request Prayer
            </Link>
            <a
              href="mailto:vincentpastor76@okicici"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl glass-card text-gold-light font-jost font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
