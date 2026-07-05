import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="fade-in-up">
          <p className="font-cormorant italic text-gold-light/70 text-xl mb-6 tracking-wide">
            Know more about our church
          </p>
          <h1 className="font-cormorant font-bold text-6xl sm:text-7xl md:text-8xl gradient-text mb-10 tracking-tight">
            About Us
          </h1>
        </div>
        <div className="fade-in-up delay-200 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="glass-card p-16 sm:p-20 text-center">
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center ring-decoration">
              <Image
                src="/images/cross-vector.png"
                alt="The Cross"
                width={56}
                height={56}
                className="opacity-80"
              />
            </div>
          </div>
          <h2 className="font-cormorant font-bold text-4xl sm:text-5xl gradient-text mb-8 tracking-tight">
            Our Mission
          </h2>
          <p className="text-indigo-200/70 text-lg leading-relaxed max-w-3xl mx-auto font-jost font-light">
            Living Word A.G Church is a vibrant community of believers committed to spreading the Gospel
            of Jesus Christ. We believe in the transforming power of God&apos;s Word and the moving of the
            Holy Spirit. Our mission is to lead souls to Christ, disciple believers, and equip them for
            the work of ministry.
          </p>
          <blockquote className="mt-10 font-cormorant italic text-2xl text-gold-light/70 leading-relaxed">
            &ldquo;Go into all the world and preach the gospel to all creation.&rdquo;
          </blockquote>
          <p className="mt-3 text-gold-light/45 font-jost text-xs tracking-[0.15em] uppercase">
            Mark 16:15
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── What We Believe ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/bible-vector.png"
              alt="Bible"
              width={56}
              height={56}
              className="opacity-65"
            />
          </div>
          <h2 className="font-cormorant font-bold text-5xl sm:text-6xl gradient-text mb-5 tracking-tight">
            What We Believe
          </h2>
          <p className="text-indigo-200/50 font-jost text-base max-w-xl mx-auto">
            The foundations of our faith, rooted in Scripture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Trinity",
              desc: "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
              verse: "Matthew 28:19",
            },
            {
              title: "Jesus Christ",
              desc: "We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His atoning death, and His bodily resurrection.",
              verse: "John 3:16",
            },
            {
              title: "The Holy Spirit",
              desc: "We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.",
              verse: "Acts 1:8",
            },
            {
              title: "The Bible",
              desc: "We believe the Bible to be the inspired, the only infallible, authoritative Word of God.",
              verse: "2 Timothy 3:16",
            },
            {
              title: "Salvation",
              desc: "We believe that salvation is by grace through faith in Jesus Christ alone, not by works.",
              verse: "Ephesians 2:8-9",
            },
            {
              title: "The Church",
              desc: "We believe in the spiritual unity of believers in our Lord Jesus Christ and the importance of the local church.",
              verse: "Hebrews 10:25",
            },
          ].map((belief) => (
            <div key={belief.title} className="glass-card p-9 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-amber-500/10 flex items-center justify-center mb-6">
                <span className="text-gold-light font-cormorant font-bold text-lg">&#10013;</span>
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-gold-light mb-4 tracking-wide">
                {belief.title}
              </h3>
              <p className="text-indigo-200/60 text-sm leading-relaxed mb-5 font-jost font-light">
                {belief.desc}
              </p>
              <span className="text-xs text-gold-light/40 font-jost tracking-[0.12em] uppercase">
                {belief.verse}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Our Pastor ── */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="glass-card p-16 sm:p-20 text-center">
          <div className="w-28 h-28 mx-auto mb-10 rounded-full bg-gradient-to-br from-gold/25 to-amber-500/10 flex items-center justify-center ring-decoration">
            <Image
              src="/images/dove-vector.png"
              alt="Pastoral Ministry"
              width={56}
              height={56}
              className="opacity-75"
            />
          </div>
          <h2 className="font-cormorant font-bold text-4xl gradient-text mb-6 tracking-tight">
            Our Pastor
          </h2>
          <p className="text-indigo-200/70 text-lg leading-relaxed max-w-2xl mx-auto font-jost font-light">
            Pastor Vincent leads Living Word A.G Church with a heart full of love for God and His people.
            With years of faithful ministry, he shepherds the congregation through preaching, teaching,
            and prayer, guiding souls toward a deeper relationship with Christ.
          </p>
          <blockquote className="mt-8 font-cormorant italic text-xl text-gold-light/65 leading-relaxed">
            &ldquo;Shepherd the flock of God that is among you...&rdquo;
          </blockquote>
          <p className="mt-3 text-gold-light/45 font-jost text-xs tracking-[0.15em] uppercase">
            1 Peter 5:2
          </p>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
