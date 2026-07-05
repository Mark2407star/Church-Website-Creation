import Image from "next/image";
import QRCode from "@/components/QRCode";

export default function OfferingPage() {
  const upiId = "Vincentpastor76@okicici";
  const upiUrl = `upi://pay?pa=${upiId}&pn=Living%20Word%20AG%20Church&mc=&tid=&tr=&tn=Offering%20to%20Living%20Word%20AG%20Church&am=&cu=INR`;

  return (
    <div className="pt-32 pb-20">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="fade-in-up">
          <p className="font-cormorant italic text-gold-light/70 text-xl mb-6 tracking-wide">
            Give, and it will be given to you
          </p>
          <h1 className="font-cormorant font-bold text-6xl sm:text-7xl md:text-8xl gradient-text mb-10 tracking-tight">
            Offering
          </h1>
        </div>
        <div className="fade-in-up delay-200 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </section>

      {/* ── Key Verse ── */}
      <section className="max-w-4xl mx-auto px-8 py-12">
        <div className="glass-card p-16 sm:p-20 text-center">
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
              <Image
                src="/images/bible-vector.png"
                alt="Scripture"
                width={44}
                height={44}
                className="opacity-75"
              />
            </div>
          </div>
          <blockquote className="font-cormorant italic text-3xl sm:text-4xl text-indigo-100 leading-relaxed mb-6 max-w-3xl mx-auto">
            <span className="verse-highlight">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </span>
          </blockquote>
          <p className="text-gold-light font-jost font-semibold text-lg tracking-[0.08em]">
            2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── QR Code & UPI ── */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* QR Code Card */}
          <div className="glass-card p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mx-auto mb-7 rounded-full bg-white/5 flex items-center justify-center">
              <Image
                src="/images/heart-giving-vector.png"
                alt="Giving"
                width={32}
                height={32}
                className="opacity-70"
              />
            </div>
            <h3 className="font-cormorant font-bold text-3xl text-gold-light mb-8 tracking-tight">
              Scan to Give
            </h3>
            <div className="bg-white p-5 rounded-2xl shadow-2xl shadow-gold/15 mb-6">
              <QRCode text={upiUrl} size={220} />
            </div>
            <p className="text-indigo-200/50 font-jost text-sm mt-5 leading-relaxed max-w-xs">
              Scan this QR code with any UPI app — Google Pay, PhonePe, Paytm, or your bank app — to give your offering.
            </p>
          </div>

          {/* UPI & Bank Details */}
          <div className="glass-card p-12 flex flex-col justify-center space-y-8">
            <h3 className="font-cormorant font-bold text-3xl text-gold-light mb-2 tracking-tight">
              Payment Details
            </h3>

            {/* UPI */}
            <div className="space-y-3">
              <p className="text-indigo-300/50 font-jost text-[11px] uppercase tracking-[0.2em]">
                UPI ID
              </p>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-white/3 border border-white/8">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-gold-light font-jost font-bold text-lg">UPI</span>
                </div>
                <div>
                  <p className="text-gold-light font-mono font-medium text-base break-all">
                    {upiId}
                  </p>
                  <p className="text-indigo-300/40 text-xs mt-0.5">ICICI Bank</p>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="space-y-3">
              <p className="text-indigo-300/50 font-jost text-[11px] uppercase tracking-[0.2em]">
                Bank Transfer
              </p>
              <div className="p-5 rounded-xl bg-white/3 border border-white/8 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-300/50 font-jost">Bank</span>
                  <span className="text-indigo-100 font-jost font-medium">ICICI Bank</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-300/50 font-jost">Account Name</span>
                  <span className="text-indigo-100 font-jost font-medium">Living Word A.G Church</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-300/50 font-jost">UPI ID</span>
                  <span className="text-indigo-100 font-mono text-xs">{upiId}</span>
                </div>
              </div>
            </div>

            {/* Verse Reminder */}
            <div className="p-5 rounded-xl bg-gold/8 border border-gold/15 text-center">
              <p className="text-gold-light/70 font-cormorant italic text-base leading-relaxed">
                &ldquo;God loves a cheerful giver.&rdquo;
              </p>
              <p className="text-gold-light/40 font-jost text-xs mt-1.5 tracking-[0.1em] uppercase">
                2 Corinthians 9:7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider my-8" />

      {/* ── Thank You ── */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="glass-card p-16 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/8 flex items-center justify-center">
            <Image
              src="/images/dove-vector.png"
              alt="Peace"
              width={40}
              height={40}
              className="opacity-65"
            />
          </div>
          <h3 className="font-cormorant font-bold text-3xl text-indigo-100 mb-6 tracking-tight">
            Thank You for Your Generosity
          </h3>
          <p className="text-indigo-200/50 font-jost text-sm leading-relaxed max-w-2xl mx-auto">
            Your generous offering helps us continue the work of the Lord — spreading the Gospel,
            supporting ministries, and serving the community. May God bless you abundantly for your
            faithful giving. Every offering, big or small, makes a difference in God&apos;s Kingdom.
          </p>
          <blockquote className="mt-8 font-cormorant italic text-xl text-gold-light/60 leading-relaxed">
            &ldquo;And my God will meet all your needs according to the riches of his glory in Christ Jesus.&rdquo;
          </blockquote>
          <p className="mt-3 text-gold-light/45 font-jost text-xs tracking-[0.12em] uppercase">
            Philippians 4:19
          </p>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
