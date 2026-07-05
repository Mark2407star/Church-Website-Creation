import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-32 pb-20">
      {/* ── Hero Section ── */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="fade-in-up">
          <p className="font-cormorant italic text-gold-light/70 text-xl mb-6 tracking-wide">
            Welcome to the House of the Lord
          </p>
        </div>

        <div className="fade-in-up delay-100">
          <h1 className="font-cormorant font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] mb-8 tracking-tight">
            <span className="gradient-text">Living Word</span>
            <br />
            <span className="gradient-text-blue text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              A.G Church
            </span>
          </h1>
        </div>

        <div className="fade-in-up delay-200 max-w-3xl mx-auto">
          <p className="font-cormorant italic text-2xl sm:text-3xl text-indigo-200/70 mb-3 leading-relaxed">
            &ldquo;இது மனிதனால் உண்டானது அல்ல
          </p>
          <p className="font-cormorant italic text-2xl sm:text-3xl text-indigo-200/70 mb-8 leading-relaxed">
            இது தேவனுடைய ஈவு!&rdquo;
          </p>
          <p className="text-gold-light/55 font-jost text-xs tracking-[0.25em] uppercase">
            Ephesians 2:8
          </p>
        </div>

        {/* Cross vector */}
        <div className="fade-in-up delay-300 mt-14 flex justify-center">
          <div className="relative ring-decoration rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-amber-400/10 to-gold-light/15 blur-3xl" />
            <div className="relative w-40 h-40 flex items-center justify-center">
              <Image
                src="/images/cross-vector.png"
                alt="The Cross"
                width={160}
                height={160}
                className="drop-shadow-[0_0_40px_rgba(201,164,75,0.3)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-up delay-400 mt-14 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/prayer"
            className="shine inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-gold to-amber-500 text-deep-indigo font-jost font-semibold text-base tracking-wide shadow-2xl shadow-amber-600/20 hover:shadow-amber-500/35 transition-all duration-300 hover:scale-[1.03]"
          >
            <Image src="/images/prayer-hands-vector.png" alt="" width={22} height={22} className="invert brightness-0" />
            Send Prayer Request
          </Link>
          <Link
            href="/offering"
            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl glass-card text-gold-light font-jost font-semibold text-base tracking-wide hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]"
          >
            <Image src="/images/heart-giving-vector.png" alt="" width={22} height={22} />
            Give Offering
          </Link>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Today's Verse ── */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="glass-card p-14 sm:p-20 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-gold/12 border border-gold/20 text-gold-light/80 text-[11px] font-jost tracking-[0.2em] uppercase mb-10">
            Today&apos;s Verse &middot; இன்றைய வார்த்தை
          </span>
          <div className="flex justify-center mb-10">
            <Image
              src="/images/bible-vector.png"
              alt="Holy Bible"
              width={80}
              height={80}
              className="opacity-80"
            />
          </div>
          <blockquote className="font-cormorant italic text-3xl sm:text-4xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
            <span className="verse-highlight">
              &ldquo;For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.&rdquo;
            </span>
          </blockquote>
          <p className="mt-6 text-gold-light/60 font-jost text-sm tracking-[0.15em] uppercase">
            Ephesians 2:8
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Service Timings ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/church-vector.png"
              alt="Church"
              width={64}
              height={64}
              className="opacity-70"
            />
          </div>
          <h2 className="font-cormorant font-bold text-5xl sm:text-6xl gradient-text mb-5 tracking-tight">
            Service Timings
          </h2>
          <p className="text-indigo-200/50 font-jost text-base max-w-xl mx-auto leading-relaxed">
            Join us in worship throughout the week. Every gathering is an opportunity to encounter God.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              day: "Sunday",
              icon: "/images/worship-vector.png",
              events: [
                "Sunday Service — 7:00 AM",
                "Sunday School — 4:00 PM",
                "Evening Service — 6:30 PM",
              ],
              highlight: true,
            },
            {
              day: "Tuesday",
              icon: "/images/bible-vector.png",
              events: ["Bible Study — 7:00 PM"],
              highlight: false,
            },
            {
              day: "Wednesday",
              icon: "/images/flame-vector.png",
              events: ["Gospel Meeting — 7:00 PM"],
              highlight: false,
            },
            {
              day: "Friday",
              icon: "/images/dove-vector.png",
              events: [
                "Men's / Women's Fellowship — 8:00 PM",
                "Youth & Teens Meet — 8:30 PM",
                "Night Prayer — 10:30 PM (1st Week)",
              ],
              highlight: false,
            },
            {
              day: "Saturday",
              icon: "/images/prayer-hands-vector.png",
              events: ["Fasting Prayer — 10:30 AM"],
              highlight: false,
            },
            {
              day: "Every Day",
              icon: "/images/cross-vector.png",
              events: ["The Lord is always with you. Pray without ceasing."],
              highlight: false,
              special: true,
            },
          ].map((item) => (
            <div
              key={item.day}
              className={`glass-card p-8 ${
                item.highlight
                  ? "ring-1 ring-gold/25"
                  : item.special
                    ? "bg-gradient-to-br from-indigo-900/15 to-blue-900/15"
                    : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={28} height={28} className="opacity-75" />
                </div>
                <h3
                  className={`font-cormorant font-bold text-2xl ${
                    item.highlight ? "text-gold-light" : "text-indigo-100"
                  }`}
                >
                  {item.day}
                </h3>
                {item.highlight && (
                  <span className="ml-auto px-3 py-1 rounded-full bg-gold/15 border border-gold/25 text-gold-light/70 text-[10px] font-jost uppercase tracking-[0.15em]">
                    Main
                  </span>
                )}
              </div>
              <ul className="space-y-3">
                {item.events.map((event, i) => (
                  <li
                    key={i}
                    className="text-indigo-200/60 text-sm flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-gold-light/40 mt-0.5 text-xs">&#8212;</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Our Ministries ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/dove-vector.png"
              alt="Holy Spirit"
              width={56}
              height={56}
              className="opacity-65"
            />
          </div>
          <h2 className="font-cormorant font-bold text-5xl sm:text-6xl gradient-text mb-5 tracking-tight">
            Our Ministries
          </h2>
          <p className="text-indigo-200/50 font-jost text-base max-w-xl mx-auto leading-relaxed">
            Serving God by serving His people. Each ministry is a channel of His love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {[
            { img: "/images/church-vector.png", title: "Family Ministry", desc: "Strengthening families through God's Word and fellowship." },
            { img: "/images/flame-vector.png", title: "Youth Ministry", desc: "Empowering the next generation to walk with Christ." },
            { img: "/images/worship-vector.png", title: "Worship Team", desc: "Leading the congregation into God's presence through music." },
            { img: "/images/prayer-hands-vector.png", title: "Prayer Ministry", desc: "Interceding for the church, community, and the world." },
            { img: "/images/bible-vector.png", title: "Sunday School", desc: "Nurturing children in faith from a young age." },
            { img: "/images/dove-vector.png", title: "Women's Fellowship", desc: "Women growing together in faith and love." },
            { img: "/images/cross-vector.png", title: "Men's Fellowship", desc: "Men standing firm as spiritual leaders." },
            { img: "/images/heart-giving-vector.png", title: "Outreach", desc: "Taking the Gospel to every corner of the world." },
          ].map((ministry) => (
            <div key={ministry.title} className="glass-card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-300">
                <Image src={ministry.img} alt="" width={32} height={32} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-cormorant font-semibold text-gold-light text-xl mb-3 tracking-wide">
                {ministry.title}
              </h3>
              <p className="text-indigo-200/50 text-sm leading-relaxed font-jost">
                {ministry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Prayer & Offering CTA ── */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Prayer CTA */}
          <div className="glass-card p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-heaven/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-7 rounded-full bg-heaven/10 flex items-center justify-center">
                <Image src="/images/prayer-hands-vector.png" alt="" width={40} height={40} className="opacity-75" />
              </div>
              <h3 className="font-cormorant font-bold text-3xl text-indigo-100 mb-4 tracking-tight">
                We Are Here to Pray for You
              </h3>
              <p className="text-indigo-200/50 font-jost text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Whatever you&apos;re going through, we believe in the power of prayer. Share your request and our church will stand with you in faith.
              </p>
              <Link
                href="/prayer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-heaven to-blue-600 text-white font-jost font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300"
              >
                Submit Prayer Request
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Offering CTA */}
          <div className="glass-card p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-gold/15 to-transparent rounded-br-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-7 rounded-full bg-gold/10 flex items-center justify-center">
                <Image src="/images/heart-giving-vector.png" alt="" width={40} height={40} className="opacity-75" />
              </div>
              <h3 className="font-cormorant font-bold text-3xl text-indigo-100 mb-4 tracking-tight">
                Are You Blessed?
              </h3>
              <p className="text-indigo-200/50 font-jost text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                You may sow into our ministry. God loves a cheerful giver. Your offering helps us spread the Gospel further.
              </p>
              <Link
                href="/offering"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-deep-indigo font-jost font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-amber-600/20 transition-all duration-300"
              >
                Give Offering
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Watch Services ── */}
      <section className="max-w-5xl mx-auto px-8 py-16 text-center">
        <div className="glass-card p-14">
          <div className="w-16 h-16 mx-auto mb-7 rounded-full bg-white/5 flex items-center justify-center">
            <Image src="/images/worship-vector.png" alt="" width={32} height={32} className="opacity-65" />
          </div>
          <h3 className="font-cormorant font-bold text-3xl gradient-text mb-5 tracking-tight">
            Watch Our Services & Programs
          </h3>
          <p className="text-indigo-200/50 font-jost text-sm leading-relaxed max-w-lg mx-auto">
            Join us live or watch previous services online. Subscribe to our channel for spiritual nourishment.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-red-600/10 border border-red-500/20 text-red-300 font-jost font-medium text-sm hover:bg-red-600/20 transition-all cursor-pointer">
            <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
            Watch on YouTube
          </div>
        </div>
      </section>

      {/* ── Bottom Spacer ── */}
      <div className="h-16" />
    </div>
  );
}
