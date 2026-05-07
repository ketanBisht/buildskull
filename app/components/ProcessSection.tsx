'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    desc: 'We dive deep into your business, goals, and target audience to build a solid strategic foundation.',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
    tag: 'STRATEGY',
  },
  {
    title: 'Design',
    desc: 'Our design team crafts a premium, high-converting UI that perfectly represents your brand identity.',
    icon: PenTool,
    color: 'from-purple-500 to-purple-600',
    tag: 'AESTHETICS',
  },
  {
    title: 'Development',
    desc: 'We build your site using Next.js 16 and React 19 for industry-leading speed and performance.',
    icon: Code2,
    color: 'from-cyan-500 to-cyan-600',
    tag: 'ENGINEERING',
  },
  {
    title: 'Launch',
    desc: 'After rigorous testing, we deploy your site to the edge and monitor its performance for growth.',
    icon: Rocket,
    color: 'from-orange-500 to-orange-600',
    tag: 'GROWTH',
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="process" ref={ref} className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
              Our Workflow
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-0">
              Four steps to <br />
              <span className="gradient-text">digital dominance.</span>
            </h2>
          </div>
          <p className="text-xl text-black/60 font-medium max-w-sm mb-2">
            A streamlined process designed to deliver exceptional results without the typical agency friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -top-6 left-10 text-[120px] font-black text-black/[0.03] select-none group-hover:text-primary/10 transition-colors duration-500">
                {i + 1}
              </div>
              
              <div className="relative z-10 p-10 rounded-[40px] bg-white border border-black/[0.04] shadow-apple hover:shadow-apple-lg transition-all duration-500 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <s.icon size={28} />
                </div>
                
                <span className="text-[10px] font-black tracking-widest text-primary mb-3">
                  {s.tag}
                </span>
                
                <h3 className="text-2xl font-black text-black mb-4">
                  {s.title}
                </h3>
                
                <p className="text-black/60 text-base font-medium leading-relaxed mb-8 flex-1">
                  {s.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-black/[0.04] shadow-sm items-center justify-center z-20 group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={14} className="text-black/20" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
