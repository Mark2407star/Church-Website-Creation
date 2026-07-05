import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-28 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Church Info */}
          <div className="space-y-5">
            <div>
              <h3 className="font-cormorant font-bold text-2xl text-gold-light tracking-wide">
                Living Word A.G Church
              </h3>
            </div>
            <p className="text-indigo-200/55 text-sm leading-relaxed max-w-xs">
              A place of worship, fellowship, and spiritual growth. Every soul is precious in the eyes of God.
            </p>
            <p className="text-gold/50 text-sm font-cormorant italic leading-relaxed">
              &ldquo;For it is by grace you have been saved, through faith&rdquo;
              <br />
              <span className="text-xs tracking-wider not-italic font-jost text-indigo-300/40">Ephesians 2:8</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-jost font-semibold text-gold-light/80 text-xs uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/offering", label: "Give Offering" },
                { href: "/prayer", label: "Prayer Request" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-indigo-200/50 hover:text-gold-light text-sm font-jost transition-colors duration-200 hover-line"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-5">
            <h4 className="font-jost font-semibold text-gold-light/80 text-xs uppercase tracking-[0.2em]">
              Service Times
            </h4>
            <ul className="space-y-3.5 text-sm text-indigo-200/50">
              <li className="leading-relaxed">
                <span className="text-gold-light/65 font-jost font-medium">Sunday</span>
                <br />Service 7:00 AM &middot; Sunday School 4:00 PM &middot; Evening 6:30 PM
              </li>
              <li className="leading-relaxed">
                <span className="text-gold-light/65 font-jost font-medium">Tuesday</span>
                <br />Bible Study 7:00 PM
              </li>
              <li className="leading-relaxed">
                <span className="text-gold-light/65 font-jost font-medium">Wednesday</span>
                <br />Gospel Meeting 7:00 PM
              </li>
              <li className="leading-relaxed">
                <span className="text-gold-light/65 font-jost font-medium">Friday</span>
                <br />Fellowship 8:00 PM &middot; Youth 8:30 PM
              </li>
              <li className="leading-relaxed">
                <span className="text-gold-light/65 font-jost font-medium">Saturday</span>
                <br />Fasting Prayer 10:30 AM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 text-center">
          <p className="text-indigo-300/30 text-xs font-jost tracking-wide">
            &copy; {new Date().getFullYear()} Living Word A.G Church &middot; All rights reserved &middot; Built for the glory of God
          </p>
        </div>
      </div>
    </footer>
  );
}
