'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, BarChart, Rocket, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    desc: 'High-conversion websites for modern brands and local businesses.',
    icon: Monitor,
    span: 'md:col-span-2 md:row-span-2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Web Applications',
    desc: 'Custom SaaS and enterprise apps built with scale in mind.',
    icon: Rocket,
    span: 'md:col-span-2',
  },
  {
    title: 'SEO Mastery',
    desc: 'Rank on page #1 with our data-driven growth strategies.',
    icon: BarChart,
    span: 'md:col-span-1',
  },
  {
    title: 'Performance',
    desc: 'Blazing fast load times that pass every Core Web Vital.',
    icon: Shield,
    span: 'md:col-span-1',
  },
  {
    title: 'E-commerce',
    desc: 'Seamless shopping experiences that drive real revenue.',
    icon: Smartphone,
    span: 'md:col-span-2',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
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
            We specialize in high-performance digital products that help you scale faster and look better doing it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`${s.span} group relative rounded-[40px] bg-card border border-border p-10 hover:border-foreground/20 transition-all duration-500 overflow-hidden flex flex-col`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 text-foreground group-hover:scale-110 transition-transform">
                  <s.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">{s.title}</h3>
                <p className="text-foreground/50 text-base font-medium leading-relaxed mb-8 flex-1">{s.desc}</p>
              </div>

              {/* Decorative Arrow */}
              <div className="absolute top-10 right-10 w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight size={18} className="text-foreground" />
              </div>

              {/* Optional Image for larger cards */}
              {s.image && (
                <div className="absolute bottom-0 right-0 w-3/4 h-1/2 rounded-tl-[40px] overflow-hidden border-l border-t border-border translate-y-6 group-hover:translate-y-0 transition-transform duration-700 hidden md:block">
                   <div className="absolute inset-0 bg-gradient-to-tr from-card via-card/40 to-transparent z-10" />
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
