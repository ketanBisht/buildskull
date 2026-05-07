'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-card rounded-[64px] border border-border shadow-apple-lg p-12 md:p-24 text-center overflow-hidden relative group">
           {/* Animated blobs within the card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-foreground/[0.02] rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-foreground/[0.02] rounded-full blur-3xl" />

           <motion.div
             initial={{ opacity: 0, scale: 0.8, y: 30 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative z-10"
           >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background shadow-apple border border-border text-sm font-black text-foreground mb-12">
                <Sparkles size={16} />
                Limited availability for Q2 2026
              </div>

              <h2 className="text-6xl md:text-8xl font-[1000] tracking-tight text-foreground mb-10 leading-[0.9]">
                Ready to build <br />
                <span className="gradient-text drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]">your legacy?</span>
              </h2>

              <p className="text-xl md:text-2xl text-foreground/60 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                Book a free 30-minute discovery call. No sales pressure. Just an honest conversation about your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                 <a
                   href="mailto:buildskull.tech@gmail.com"
                   className="w-full sm:w-auto px-12 py-6 rounded-[24px] bg-primary text-background font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group/btn"
                 >
                    <Calendar size={20} />
                    Email Us
                    <ArrowRight size={20} />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500" />
                 </a>
                 <a
                   href="https://wa.me/919098339887"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto px-12 py-6 rounded-[24px] bg-background text-foreground border border-border font-black text-xl shadow-apple hover:bg-foreground/[0.02] transition-all duration-300 flex items-center justify-center gap-3"
                 >
                    <MessageCircle size={20} className="text-foreground" />
                    WhatsApp Us
                 </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8">
                 {['Free 30-min audit', 'No lock-in contracts', 'Global delivery', 'Post-launch support'].map((t) => (
                   <div key={t} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                      <span className="text-sm font-black text-foreground/40 uppercase tracking-widest">{t}</span>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
