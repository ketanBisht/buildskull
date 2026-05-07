'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.03] rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-[#fcfcfc] rounded-[64px] border border-black/[0.04] shadow-apple-lg p-12 md:p-24 text-center overflow-hidden relative group">
           {/* Animated blobs within the card */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />

           <motion.div
             initial={{ opacity: 0, scale: 0.8, y: 30 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative z-10"
           >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-apple border border-black/[0.02] text-sm font-black text-primary mb-12">
                <Sparkles size={16} />
                Limited availability for Q2 2026
              </div>

              <h2 className="text-6xl md:text-8xl font-[1000] tracking-tight text-black mb-10 leading-[0.9]">
                Ready to build <br />
                <span className="gradient-text">your legacy?</span>
              </h2>

              <p className="text-xl md:text-2xl text-black/60 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                Book a free 30-minute discovery call. No sales pressure. Just an honest conversation about your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                 <a
                   href="#"
                   className="w-full sm:w-auto px-12 py-6 rounded-[24px] bg-black text-white font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                 >
                    <Calendar size={20} />
                    Schedule a Call
                    <ArrowRight size={20} />
                 </a>
                 <a
                   href="#"
                   className="w-full sm:w-auto px-12 py-6 rounded-[24px] bg-white text-black border border-black/5 font-black text-xl shadow-apple hover:bg-black/[0.02] transition-all duration-300 flex items-center justify-center gap-3"
                 >
                    <MessageCircle size={20} className="text-primary" />
                    WhatsApp Us
                 </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8">
                 {['Free 30-min audit', 'No lock-in contracts', 'Global delivery', 'Post-launch support'].map((t) => (
                   <div key={t} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="text-sm font-black text-black/40 uppercase tracking-widest">{t}</span>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
