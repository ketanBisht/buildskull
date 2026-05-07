'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart3, Globe, Smartphone, Laptop } from 'lucide-react';

const projects = [
  {
    title: 'FitForge Analytics',
    cat: 'SAAS DASHBOARD',
    desc: 'A comprehensive management platform for gym owners. Real-time metrics, member tracking, and automated billing.',
    stats: { growth: '+240%', users: '12k+' },
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    icon: BarChart3,
  },
  {
    title: 'Brewed & Co.',
    cat: 'E-COMMERCE',
    desc: 'Premium coffee subscription service with a custom booking engine and interactive shop experience.',
    stats: { revenue: '+180%', orders: '5.2k' },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60',
    color: 'bg-orange-50',
    accent: 'text-orange-600',
    icon: Globe,
  },
  {
    title: 'GrowthStudio',
    cat: 'MARKETING AGENCY',
    desc: 'High-performance portfolio for an elite marketing firm, optimized for extreme speed and conversion.',
    stats: { speed: '99/100', rank: '#1' },
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60',
    color: 'bg-purple-50',
    accent: 'text-purple-600',
    icon: Laptop,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative w-full rounded-[48px] overflow-hidden ${project.color} border border-black/[0.04] shadow-apple-lg mb-12 flex flex-col lg:flex-row group`}
    >
      {/* Content */}
      <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${project.accent}`}>
            <project.icon size={20} />
          </div>
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-black/60">
            {project.cat}
          </span>
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-xl text-black/70 font-medium mb-10 leading-relaxed max-w-lg">
          {project.desc}
        </p>

        {/* Stats Row */}
        <div className="flex gap-10 mb-12">
          {Object.entries(project.stats).map(([label, val]) => (
            <div key={label}>
              <div className="text-sm font-black uppercase tracking-widest text-black/50 mb-1">{label}</div>
              <div className={`text-3xl font-black ${project.accent}`}>{val}</div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-3 text-lg font-bold text-black group-hover:text-primary transition-colors"
        >
          View Case Study
          <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
            <ArrowUpRight size={18} />
          </div>
        </a>
      </div>

      {/* Image / Mockup Area */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-0 bg-white/40 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-10 rounded-[32px] overflow-hidden shadow-2xl border border-black/[0.05]">
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
           />
           {/* Glass Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
           <div className="absolute top-20 right-20 w-32 h-32 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl rotate-12 group-hover:rotate-6 transition-transform duration-700 hidden lg:block" />
           <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-xl -rotate-12 group-hover:-rotate-3 transition-transform duration-700 hidden lg:block" />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
              Selected Works
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-0">
              Projects that <br />
              <span className="gradient-text">move the needle.</span>
            </h2>
          </div>
          <p className="text-xl text-black/60 font-medium max-w-sm mb-2">
            A small collection of our favorite builds that delivered massive ROI for our clients.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-black/5 font-bold text-lg hover:bg-black/[0.02] transition-all shadow-apple"
          >
            Explore Full Portfolio
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
