'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, BarChart3, Cloud } from 'lucide-react';

const features = [
  {
    title: 'High-Velocity Dev',
    desc: 'From concept to production in weeks. We specialize in rapid MVP iteration for ambitious founders.',
    icon: Zap,
  },
  {
    title: 'Bespoke Branding',
    desc: 'Design-led engineering that creates a unique digital identity. Never generic, always distinctive.',
    icon: Smartphone,
  },
  {
    title: 'Battle-Tested Scale',
    desc: 'Infrastructure built for growth. Our architectures handle millions of users without breaking a sweat.',
    icon: Globe,
  },
  {
    title: 'Conversion Logic',
    desc: 'Engineering that converts. We build user flows optimized for maximum ROI and retention.',
    icon: BarChart3,
  },
  {
    title: 'Full-Stack Precision',
    desc: 'Clean, maintainable code across the entire stack — from complex backends to pixel-perfect UIs.',
    icon: Shield,
  },
  {
    title: 'Growth Partnership',
    desc: 'Beyond code. We act as your long-term technology partners to scale your business sustainably.',
    icon: Cloud,
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" ref={ref} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Subtle section separator */}
      <div className="accent-line absolute top-0 left-1/2 -translate-x-1/2 w-1/3" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            Core Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            Built for those who{' '}
            <span className="font-[800]" style={{ color: 'var(--accent)' }}>
              refuse to settle.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group p-10 bg-card hover:bg-muted transition-colors duration-500 flex flex-col gap-6"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                   style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)', color: 'var(--accent)' }}>
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-foreground/45 font-light leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
