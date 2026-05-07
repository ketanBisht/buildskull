'use client';

import { X, Briefcase, CodeXml, Camera } from 'lucide-react';
import Logo from './Logo';

const nav = {
  Services: ['Business Websites', 'Landing Pages', 'Booking Systems', 'Dashboards', 'Web Apps', 'SEO Optimization'],
  Company: ['About', 'Process', 'Portfolio', 'Testimonials', 'Pricing'],
  Resources: ['Blog', 'Case Studies', 'Free Audit', 'Style Guide', 'FAQ'],
};

const socials = [
  { icon: X, href: 'https://wa.me/qr/Z22T2DTNA3RHM1', label: 'WhatsApp', external: true },
  { icon: Briefcase, href: 'mailto:buildskull.tech@gmail.com', label: 'Email', external: false },
  { icon: CodeXml, href: '#', label: 'GitHub', external: false },
  { icon: Camera, href: '#', label: 'Instagram', external: false },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-4 mb-12 group w-fit">
              <Logo size="lg" className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
              <span className="text-4xl font-extrabold tracking-tight text-foreground uppercase">
                BuildSkull
              </span>
            </a>
            <p className="text-lg text-foreground/40 font-medium leading-relaxed max-w-xs mb-10">
              We build fast, premium, growth-focused websites for businesses that deserve better online presence.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="w-11 h-11 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/10 hover:bg-card transition-all duration-300 shadow-sm hover:shadow-apple hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 mb-8">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base font-bold text-foreground/40 hover:text-foreground transition-colors duration-200"
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
        <div className="pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-sm font-bold text-foreground/20">
            © {new Date().getFullYear()} BuildSkull. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-black text-foreground/20 hover:text-foreground/40 transition-colors duration-200 uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs font-black text-foreground/10 uppercase tracking-widest">
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
