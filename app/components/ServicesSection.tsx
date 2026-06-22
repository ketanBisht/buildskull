'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, BarChart, Rocket, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    desc: 'High-conversion websites for modern brands and local businesses. Fast, beautiful, and built to rank.',
    icon: Monitor,
    tag: 'WEB DESIGN',
  },
  {
    title: 'Web Applications',
    desc: 'Custom SaaS and enterprise apps built with scale in mind. From MVP to production-ready.',
    icon: Rocket,
    tag: 'ENGINEERING',
  },
  {
    title: 'E-commerce',
    desc: 'Seamless shopping experiences that drive real revenue — with payments, inventory, and order flows built in.',
    icon: Smartphone,
    tag: 'E-COMMERCE',
  },
  {
    title: 'SEO & Performance',
    desc: 'Rank on page #1 and pass every Core Web Vital. We build with speed and discoverability from day one.',
    icon: BarChart,
    tag: 'GROWTH',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Your site is a living product. We provide ongoing updates, monitoring, and improvements post-launch.',
    icon: Shield,
    tag: 'SUPPORT',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-foreground mb-0">
              Modern builds for <br />
              <span className="gradient-text">modern brands.</span>
            </h2>
          </div>
          <p className="text-xl text-foreground/40 font-medium max-w-sm mb-2">
            High-performance digital products — designed to convert, built to last, and delivered fast.
          </p>
        </motion.div>

        {/* Services Grid: 3 top + 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
      className="group relative rounded-[32px] bg-card border border-border p-10 hover:border-foreground/20 transition-all duration-500 overflow-hidden flex flex-col gap-6"
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center text-foreground/60 group-hover:scale-110 group-hover:text-foreground transition-all duration-300">
          <service.icon size={22} />
        </div>
        <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-x-1 group-hover:translate-x-0">
          <ArrowUpRight size={16} className="text-foreground/60" />
        </div>
      </div>

      {/* Tag */}
      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-foreground/30">
        {service.tag}
      </span>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-black text-foreground mb-3 leading-tight">{service.title}</h3>
        <p className="text-foreground/50 text-base font-medium leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
}
