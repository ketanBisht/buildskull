'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, FitForge Gym',
    avatar: 'AM',
    avatarColor: 'bg-amber-100 text-amber-600',
    rating: 5,
    text: 'BuildSkull completely transformed our online presence. Our member signups tripled in the first month after launch. The site is blazing fast and looks absolutely premium.',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, LaunchPad SaaS',
    avatar: 'PS',
    avatarColor: 'bg-blue-100 text-blue-600',
    rating: 5,
    text: 'We went from a generic landing page to a conversion machine. Our trial signups went from 2% to 8.4% conversion rate. The attention to detail is something else.',
  },
  {
    name: 'Rahul Nair',
    role: 'Owner, Brewed & Co.',
    avatar: 'RN',
    avatarColor: 'bg-cyan-100 text-cyan-600',
    rating: 5,
    text: 'Honestly didn\'t expect a website to make this much difference for a café. Online orders are up 320%. The booking system alone saved us hours every week.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Director, ChessMaster Pro',
    avatar: 'SK',
    avatarColor: 'bg-purple-100 text-purple-600',
    rating: 5,
    text: 'We needed a platform that could handle 2000+ players during live tournaments. BuildSkull delivered not just speed, but a UI that even non-technical players found intuitive.',
  },
  {
    name: 'Vikram Patel',
    role: 'Co-founder, GrowthStudio',
    avatar: 'VP',
    avatarColor: 'bg-emerald-100 text-emerald-600',
    rating: 5,
    text: 'The team\'s process was smooth from day one. Delivered on time, within budget, and the site ranked on page 1 of Google within 6 weeks.',
  },
  {
    name: 'Ananya Joshi',
    role: 'Founder, Creator Hub',
    avatar: 'AJ',
    avatarColor: 'bg-pink-100 text-pink-600',
    rating: 5,
    text: 'As a creator, I needed my site to stand out. BuildSkull built something that instantly communicates quality to brand partners. Closed 3 new sponsorships since launch.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#f59e0b" className="text-[#f59e0b]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
            Social Proof
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-8">
            Results that speak <br />
            <span className="gradient-text">for themselves.</span>
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto font-medium">
            Join 200+ businesses that have accelerated their growth with BuildSkull.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
              className="break-inside-avoid relative rounded-[40px] p-10 bg-[#fcfcfc] border border-black/[0.04] shadow-apple hover:shadow-apple-lg transition-all duration-500 group"
            >
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} className="text-black" />
              </div>

              <div className="mb-6">
                <StarRating count={t.rating} />
              </div>

              <p className="text-lg text-black/70 font-medium leading-relaxed mb-10 italic">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-sm ${t.avatarColor}`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-base font-black text-black">{t.name}</div>
                  <div className="text-sm font-bold text-black/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
