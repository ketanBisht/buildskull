'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Zap, Target, Clock, Coins } from 'lucide-react';

const comparisons = [
  {
    icon: Target,
    title: 'Precision Focus',
    us: 'Strategic growth engineering tailored to your specific business goals.',
    them: 'Generic templates that look like everyone else.',
  },
  {
    icon: Clock,
    title: 'Speed to Market',
    us: 'Rapid 2-week delivery without compromising on premium quality.',
    them: 'Months of delays and endless back-and-forth communication.',
  },
  {
    icon: Coins,
    title: 'ROI Driven',
    us: 'Built to convert visitors into paying customers from day one.',
    them: 'Purely decorative sites with no conversion strategy.',
  },
  {
    icon: Zap,
    title: 'Tech Stack',
    us: 'Next.js 16, React 19, and ultra-fast edge deployments.',
    them: 'Outdated Wordpress or slow drag-and-drop builders.',
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">
            The BuildSkull Edge
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-foreground mb-8">
            Why settle for <br />
            <span className="gradient-text">mediocrity?</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            We&apos;ve redefined the agency experience to be faster, cleaner, and significantly more effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {comparisons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative rounded-3xl bg-card border border-border p-8 shadow-apple hover:shadow-apple-lg transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-secondary flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-foreground mb-4">{item.title}</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-foreground/5 flex items-center justify-center mt-1">
                          <Check size={12} className="text-secondary" />
                        </div>
                        <p className="text-sm font-bold text-foreground/80">{item.us}</p>
                      </div>
                      <div className="flex items-start gap-3 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                        <div className="w-5 h-5 rounded-full bg-foreground/5 flex items-center justify-center mt-1">
                          <X size={12} className="text-foreground/20" />
                        </div>
                        <p className="text-sm font-medium text-foreground/40 italic">{item.them}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Eye-catchy CTA area */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-12"
          >
             <div className="rounded-[48px] bg-black p-12 text-white shadow-apple-lg relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay grid-bg" />
                
                <div className="relative z-10">
                   <h3 className="text-4xl font-black mb-6 leading-tight">
                      Ready to build something <br /> world-class?
                   </h3>
                   <p className="text-lg font-medium text-white/80 mb-10 leading-relaxed">
                      Stop wasting time with generic builders. Partner with an agency that understands growth.
                   </p>
                   <a
                     href="#contact"
                     className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
                   >
                      Book Your Audit →
                   </a>
                   
                   <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-6">
                      <div className="flex -space-x-3">
                         {[1,2,3].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md" />
                         ))}
                      </div>
                      <p className="text-sm font-bold text-white/60">Joined by 200+ ambitious brands</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
