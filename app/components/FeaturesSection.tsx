'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, BarChart3, Clock, Lock, Cloud } from 'lucide-react';

const features = [
  {
    title: 'High-Velocity Dev',
    desc: 'From concept to production in weeks. We specialize in rapid MVP iteration for ambitious startups.',
    icon: Zap,
    color: 'text-orange-500',
  },
  {
    title: 'Bespoke Branding',
    desc: 'Design-led engineering that creates a unique digital identity. We don\'t do generic templates.',
    icon: Smartphone,
    color: 'text-blue-500',
  },
  {
    title: 'Battle-Tested Scale',
    desc: 'Infrastructure built for growth. Our architectures handle millions of users without breaking a sweat.',
    icon: Globe,
    color: 'text-green-500',
  },
  {
    title: 'Conversion Logic',
    desc: 'Engineering that converts. We build user flows optimized for maximum ROI and retention.',
    icon: BarChart3,
    color: 'text-cyan-500',
  },
  {
    title: 'Full-Stack Precision',
    desc: 'Clean, maintainable code across the entire stack. From complex backends to pixel-perfect UIs.',
    icon: Shield,
    color: 'text-purple-500',
  },
  {
    title: 'Growth Partnership',
    desc: 'Beyond code. We act as your long-term technology partners to scale your business sustainably.',
    icon: Cloud,
    color: 'text-primary',
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
            Core Features
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-8">
            Engineered for <br />
            <span className="gradient-text">peak performance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group p-10 rounded-[40px] bg-[#fcfcfc] border border-black/[0.04] shadow-apple hover:shadow-apple-lg transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white border border-black/[0.03] shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform ${f.color}`}>
                <f.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">
                {f.title}
              </h3>
              <p className="text-black/60 text-lg font-medium leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
