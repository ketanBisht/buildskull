'use client';

import { Zap, X, Briefcase, CodeXml, Camera } from 'lucide-react';

const nav = {
  Services: ['Business Websites', 'Landing Pages', 'Booking Systems', 'Dashboards', 'Web Apps', 'SEO Optimization'],
  Company: ['About', 'Process', 'Portfolio', 'Testimonials', 'Pricing'],
  Resources: ['Blog', 'Case Studies', 'Free Audit', 'Style Guide', 'FAQ'],
};

const socials = [
  { icon: X, href: '#', label: 'Twitter' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
  { icon: CodeXml, href: '#', label: 'GitHub' },
  { icon: Camera, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#a855f7] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Zap size={20} fill="white" stroke="white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-black">
                Build<span className="gradient-text">Skull</span>
              </span>
            </a>
            <p className="text-lg text-black/40 font-medium leading-relaxed max-w-xs mb-10">
              We build fast, premium, growth-focused websites for businesses that deserve better online presence.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-black/[0.03] border border-black/[0.03] flex items-center justify-center text-black/40 hover:text-black hover:border-black/10 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-apple hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 mb-8">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base font-bold text-black/40 hover:text-black transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-sm font-bold text-black/20">
            © {new Date().getFullYear()} BuildSkull. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-black text-black/20 hover:text-black/40 transition-colors duration-200 uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs font-black text-black/10 uppercase tracking-widest">
            <span>Built with</span>
            <span className="text-primary/40">Next.js</span>
            <span>+</span>
            <span className="text-secondary/40">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
