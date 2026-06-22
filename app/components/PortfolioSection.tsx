'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Iron Paradise Gym',
    cat: 'FITNESS & WELLNESS',
    badge: 'LIVE DEMO',
    desc: 'Full gym management platform — member portal, owner dashboard, membership plans & billing. A complete SaaS product built to drive memberships and retain clients.',
    stack: ['Next.js', 'Prisma', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=70',
    color: 'bg-foreground/[0.02]',
    accentClass: 'text-blue-400',
    demoUrl: 'https://gymproto.vercel.app/',
  },
  {
    title: 'Brewed & Co.',
    cat: 'FOOD & HOSPITALITY',
    badge: 'LIVE DEMO',
    desc: 'Premium café & bakery site with a curated menu, live table reservation form, animated marquee, and warm Playfair Display typography. Optimised for foot-traffic conversions.',
    stack: ['Next.js', 'CSS Tokens', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=70',
    color: 'bg-foreground/[0.04]',
    accentClass: 'text-amber-400',
    demoUrl: 'https://protobrew.vercel.app/',
  },
  {
    title: 'Glow & Co.',
    cat: 'BEAUTY & WELLNESS',
    badge: 'LIVE DEMO',
    desc: 'Luxury salon & spa landing page with a full services grid, online appointment booking form, client testimonials, and an elegant blush-noir design system.',
    stack: ['Next.js', 'CSS Tokens', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=70',
    color: 'bg-foreground/[0.06]',
    accentClass: 'text-pink-400',
    demoUrl: 'https://protoglow.vercel.app/',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative w-full rounded-[48px] overflow-hidden ${project.color} border border-border shadow-apple-lg mb-12 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} group`}
    >
      {/* Content */}
      <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6 flex-wrap"
        >
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-foreground/40 border border-border rounded-full px-4 py-1.5">
            {project.cat}
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
            {project.badge}
          </span>
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
          {project.title}
        </h3>

        <p className="text-lg md:text-xl text-foreground/60 font-medium mb-10 leading-relaxed max-w-lg">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-foreground/5 text-foreground/50 text-sm font-bold border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-base font-bold text-foreground group-hover:text-foreground/70 transition-colors self-start"
        >
          <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-300">
            <ExternalLink size={16} />
          </div>
          View Live Demo
        </a>
      </div>

      {/* Image / Mockup Area */}
      <div className="flex-1 relative min-h-[340px] lg:min-h-0 bg-foreground/[0.02] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-8 rounded-[28px] overflow-hidden shadow-2xl border border-border/60 group-hover:border-foreground/20 transition-colors duration-500"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>

        {/* Floating decorative */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ArrowUpRight size={16} className="text-foreground/60" />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">
              <Layers size={12} />
              Our Work
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-foreground mb-0">
              Built to show <br />
              <span className="gradient-text">what's possible.</span>
            </h2>
          </div>
          <p className="text-xl text-foreground/40 font-medium max-w-sm mb-2">
            We build concept projects across industries to demonstrate the quality and craft we bring to every engagement.
          </p>
        </div>

        {/* Honest disclaimer callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-start gap-4 px-8 py-6 rounded-[24px] bg-amber-500/5 border border-amber-500/15"
        >
          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <p className="text-base text-foreground/50 font-medium leading-relaxed">
            <span className="font-black text-foreground/70">These are concept projects</span> — built by us to demonstrate our design and engineering capabilities across real-world use cases. We're actively taking on new clients. Yours could be next.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-foreground/40 font-medium mb-6">Want to see something built for your industry?</p>
          <a
            href="https://wa.me/919098339887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-background font-black text-lg shadow-apple hover:opacity-90 active:scale-95 transition-all"
          >
            Let's Build Yours
            <ArrowUpRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
