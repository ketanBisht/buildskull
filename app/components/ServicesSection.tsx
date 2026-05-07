'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, Globe, BarChart, Rocket, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    desc: 'High-conversion websites for modern brands and local businesses.',
    icon: Monitor,
    color: 'bg-blue-500',
    span: 'md:col-span-2 md:row-span-2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Web Applications',
    desc: 'Custom SaaS and enterprise apps built with scale in mind.',
    icon: Rocket,
    color: 'bg-purple-500',
    span: 'md:col-span-2',
  },
  {
    title: 'SEO Mastery',
    desc: 'Rank on page #1 with our data-driven growth strategies.',
    icon: BarChart,
    color: 'bg-green-500',
    span: 'md:col-span-1',
  },
  {
    title: 'Performance',
    desc: 'Blazing fast load times that pass every Core Web Vital.',
    icon: Shield,
    color: 'bg-orange-500',
    span: 'md:col-span-1',
  },
  {
    title: 'E-commerce',
    desc: 'Seamless shopping experiences that drive real revenue.',
    icon: Smartphone,
    color: 'bg-cyan-500',
    span: 'md:col-span-2',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
            Elite Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-8">
            Digital solutions for <br />
            <span className="gradient-text">ambitious businesses</span>
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto font-medium">
            We don&apos;t just build websites; we craft digital experiences that redefine how customers perceive your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`${s.span} group relative rounded-[40px] bg-white border border-black/[0.04] p-10 shadow-apple hover:shadow-apple-lg transition-all duration-500 overflow-hidden flex flex-col`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center text-white shadow-xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <s.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-black/60 text-lg font-medium leading-relaxed max-w-[280px]">
                  {s.desc}
                </p>
              </div>

              {/* Decorative Arrow */}
              <div className="absolute top-10 right-10 w-10 h-10 rounded-full border border-black/[0.04] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} className="text-black" />
              </div>

              {/* Background Accent */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${s.color} opacity-[0.03] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]`} />

              {/* Optional Image for larger cards */}
              {s.image && (
                <div className="absolute bottom-0 right-0 w-3/4 h-1/2 rounded-tl-[40px] overflow-hidden border-l border-t border-black/[0.04] translate-y-6 group-hover:translate-y-0 transition-transform duration-700 hidden md:block">
                   <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-transparent z-10" />
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
