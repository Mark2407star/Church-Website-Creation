"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function PrayerRequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !prayerRequest.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, prayerRequest, isUrgent }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20">
        <section className="max-w-2xl mx-auto px-8 py-20 text-center">
          <div className="glass-card p-16">
            <div className="w-24 h-24 mx-auto mb-10 rounded-full bg-heaven/10 flex items-center justify-center">
              <Image
                src="/images/prayer-hands-vector.png"
                alt="Prayer received"
                width={48}
                height={48}
                className="opacity-75"
              />
            </div>
            <h2 className="font-cormorant font-bold text-4xl gradient-text mb-6 tracking-tight">
              Prayer Request Received
            </h2>
            <p className="text-indigo-200/70 text-lg leading-relaxed mb-8 font-jost font-light max-w-lg mx-auto">
              Your prayer request has been submitted. Our church family and pastor will be praying for you.
              Remember, God hears every prayer and is faithful to answer according to His will.
            </p>
            <blockquote className="font-cormorant italic text-xl text-gold-light/70 mb-3 leading-relaxed">
              &ldquo;Do not be anxious about anything, but in every situation, by prayer and petition,
              with thanksgiving, present your requests to God.&rdquo;
            </blockquote>
            <p className="text-gold-light/45 font-jost text-xs tracking-[0.12em] uppercase">
              Philippians 4:6
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setPrayerRequest("");
                setIsUrgent(false);
              }}
              className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card text-gold-light font-jost font-medium text-sm hover:bg-white/10 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="fade-in-up">
          <p className="font-cormorant italic text-gold-light/70 text-xl mb-6 tracking-wide">
            We are here to pray for you
          </p>
          <h1 className="font-cormorant font-bold text-6xl sm:text-7xl md:text-8xl gradient-text mb-10 tracking-tight">
            Prayer Request
          </h1>
          <p className="text-indigo-200/50 font-jost text-base max-w-2xl mx-auto leading-relaxed">
            Whatever you&apos;re facing &mdash; sickness, financial struggles, family issues, or spiritual battles &mdash;
            we believe in the power of prayer. Share your request below and our church will stand with you in faith.
          </p>
        </div>
        <div className="fade-in-up delay-200 flex justify-center mt-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </section>

      {/* ── Form ── */}
      <section className="max-w-2xl mx-auto px-8 py-12">
        <div className="glass-card p-12 sm:p-14">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Image
                src="/images/prayer-hands-vector.png"
                alt="Prayer"
                width={40}
                height={40}
                className="opacity-70"
              />
            </div>
            <h2 className="font-cormorant font-bold text-3xl text-gold-light mb-3 tracking-tight">
              Share Your Prayer Need
            </h2>
            <p className="text-indigo-300/45 font-jost text-sm">
              All requests are kept confidential and seen only by the pastor.
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-300 text-sm font-jost">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Your Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all font-jost text-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all font-jost text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Phone Number <span className="text-indigo-400/30">(optional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all font-jost text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Prayer Request <span className="text-gold">*</span>
              </label>
              <textarea
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
                rows={5}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all resize-none font-jost text-sm"
                placeholder="Share your prayer need here..."
                required
              />
            </div>

            <label className="flex items-center gap-3.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-5 h-5 rounded-md border-white/15 bg-white/5 text-gold focus:ring-gold/30 cursor-pointer"
              />
              <span className="text-indigo-200/60 text-sm font-jost group-hover:text-indigo-100 transition-colors">
                <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2" />
                This is an urgent prayer request
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-deep-indigo font-jost font-bold text-base tracking-wide shadow-2xl shadow-amber-600/15 hover:shadow-amber-500/25 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-deep-indigo/30 border-t-deep-indigo rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Submit Prayer Request"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Encouragement ── */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              img: "/images/prayer-hands-vector.png",
              verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
              ref: "Matthew 7:7",
            },
            {
              img: "/images/cross-vector.png",
              verse: "I can do all this through him who gives me strength.",
              ref: "Philippians 4:13",
            },
            {
              img: "/images/dove-vector.png",
              verse: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
              ref: "Psalm 18:2",
            },
          ].map((item) => (
            <div key={item.ref} className="glass-card p-9 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center">
                <Image src={item.img} alt="" width={28} height={28} className="opacity-60" />
              </div>
              <p className="text-indigo-200/60 text-sm leading-relaxed italic mb-4 font-cormorant text-lg">
                &ldquo;{item.verse}&rdquo;
              </p>
              <span className="text-gold-light/50 font-jost text-xs tracking-[0.12em] uppercase">
                {item.ref}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
