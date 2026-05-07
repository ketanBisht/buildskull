'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Mail, Calendar, Sparkles, ShieldCheck, Globe, Activity, BarChart3, Search, Check } from 'lucide-react';

function FeatureOverlay({ icon: Icon, title, desc, progress, range, position, color }: any) {
  // Complex timeline:
  // 1. Reveal at range[0]
  // 2. Hide at 0.78 (for CTA)
  // 3. Stay hidden
  const opacity = useTransform(progress, 
    [range[0], range[0] + 0.05, 0.78, 0.82],
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(progress,
    [range[0], range[0] + 0.05, 0.78, 0.82],
    [0.8, 1, 1, 0.9]
  );

  const y = useTransform(progress,
    [range[0], range[0] + 0.05, 0.78, 0.82],
    [40, 0, 0, 20]
  );

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className={`absolute ${position} z-50 pointer-events-none w-[340px] md:w-[400px]`}
    >
      <div className={`glass-strong p-8 md:p-10 rounded-[32px] shadow-2xl border border-black/[0.08] pointer-events-auto backdrop-blur-3xl relative overflow-hidden group`}>
        {/* Aesthetic Glow */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 ${color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
        
        <div className={`w-14 h-14 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center mb-6`}>
          <Icon size={28} className={color.replace('bg-', 'text-')} />
        </div>
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-[1000] text-foreground mb-3 tracking-tighter leading-tight">{title}</h3>
          <p className="text-sm md:text-base text-foreground/40 font-medium leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const [vh, setVh] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVh(window.innerHeight);
      const handleResize = () => setVh(window.innerHeight);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Increased height to 500vh to give the "Alone" beats more breathing room
  const progress = useTransform(scrollY, [0, vh * 4 || 1000], [0, 1]);
  const smoothProgress = useSpring(progress, { damping: 25, stiffness: 120 });

  // Phase Animations
  const headlineOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const headlineY = useTransform(smoothProgress, [0, 0.1], [0, -40]);
  
  // Dashboard Timing:
  // Fades in and zooms early, then stays completely still for a segment
  const dashboardOpacity = useTransform(smoothProgress, [0.08, 0.15], [0, 1]);
  const dashboardScale = useTransform(smoothProgress, [0.08, 0.22], [0.6, 1]);
  
  // Dashboard Blur/Fade out sequence:
  // 1. Fade for CTA at 0.78
  // 2. Re-appear for final look at 0.94 (no features, just dashboard)
  const dashboardFinalOpacity = useTransform(smoothProgress, 
    [0.78, 0.82, 0.94, 0.97, 0.99, 1.0],
    [1, 0, 0, 1, 1, 0]
  );
  const dashboardBlur = useTransform(smoothProgress,
    [0.78, 0.82, 0.94, 0.97],
    [0, 20, 20, 0]
  );

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background" 
      style={{ height: '500vh' }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none animate-blob opacity-30"
           style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }} />
      <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none animate-blob animation-delay-2000 opacity-20"
           style={{ background: 'radial-gradient(circle, var(--foreground), transparent 70%)' }} />

      {/* Adaptive dot grid */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          
          {/* INTRO HEADLINE */}
          <motion.div 
            style={{ opacity: headlineOpacity, y: headlineY }} 
            className="absolute flex flex-col items-center text-center px-4"
          >
             <div className="flex flex-col items-center text-center gap-2">
               <p className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-foreground/30 mb-4">
                 — Web Development Agency —
               </p>
               <h1 className="text-5xl sm:text-7xl md:text-[130px] font-[800] leading-[0.88] md:leading-[0.82] tracking-[-0.04em] text-foreground">
                 Build the
               </h1>
               <h1 className="text-5xl sm:text-7xl md:text-[130px] font-[800] leading-[0.88] md:leading-[0.82] tracking-[-0.04em] mb-6 md:mb-8 relative"
                   style={{ color: 'var(--accent)' }}>
                 Future
                 {/* Animated gold underline */}
                 <motion.span
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute -bottom-3 left-0 right-0 h-[2px] origin-left"
                   style={{ background: 'var(--accent)', opacity: 0.5 }}
                 />
               </h1>
               <p className="text-sm md:text-lg text-foreground/35 font-light tracking-[0.1em] uppercase">
                 Engineering excellence for the next generation.
               </p>
             </div>
          </motion.div>

          {/* THE SCREEN */}
          <motion.div 
            style={{ 
              opacity: dashboardFinalOpacity,
              scale: dashboardScale,
              filter: `blur(${dashboardBlur}px)`,
              display: useTransform(smoothProgress, [0.08, 0.98], ["none", "block"])
            }}
            className="w-full max-w-5xl aspect-[1.6/1] rounded-[32px] border border-border shadow-2xl bg-card overflow-hidden relative z-20"
          >
             {/* Browser Header */}
             <div className="h-14 border-b border-border flex items-center px-6 gap-4 bg-background/50">
                <div className="flex gap-2">
                   <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]" />
                   <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                   <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]" />
                </div>
                 <div className="flex-1 max-w-xl mx-auto h-8 bg-foreground/5 rounded-lg flex items-center px-4 gap-3">
                    <Globe size={14} className="text-foreground/20" />
                    <span className="text-[13px] text-foreground/30 font-medium tracking-tight">buildskull.com/analytics/growth</span>
                 </div>
             </div>

             {/* Browser Content */}
             <div className="p-10 md:p-12 h-full flex flex-col gap-10">
                <div className="flex items-start gap-12">
                   <div className="w-24 h-24 rounded-full bg-foreground/[0.05] shrink-0" />
                   <div className="flex-1 space-y-4 pt-4">
                       <div className="h-4 w-1/3 bg-foreground/[0.05] rounded-full" />
                       <div className="h-4 w-1/2 bg-foreground/[0.03] rounded-full" />
                   </div>
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="p-8 rounded-[24px] border border-border bg-foreground/[0.02] flex flex-col gap-4">
                       <span className="text-[11px] font-black uppercase tracking-widest text-foreground/20">SEO Excellence</span>
                       <span className="text-4xl font-black text-foreground tracking-tighter">98/100</span>
                    </div>
                    <div className="p-8 rounded-[24px] border border-border bg-foreground/[0.02] flex flex-col gap-4">
                       <span className="text-[11px] font-black uppercase tracking-widest text-foreground/20">Core Web Vitals</span>
                       <span className="text-4xl font-black text-foreground tracking-tighter">Pass</span>
                    </div>
                    <div className="p-8 rounded-[24px] border border-border bg-foreground/[0.02] flex flex-col gap-4">
                       <span className="text-[11px] font-black uppercase tracking-widest text-foreground/20">Conversion Rate</span>
                       <span className="text-4xl font-black text-foreground tracking-tighter">+42%</span>
                    </div>
                </div>

                 <div className="flex-1 rounded-[24px] border border-border bg-foreground/[0.02] p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-foreground/40" />
                       <span className="text-[11px] font-black uppercase tracking-widest text-foreground/20">Real-time Performance</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-3">
                        {[40, 70, 45, 90, 60, 80, 50, 95, 75, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-foreground/[0.05] rounded-t-lg" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                 </div>
             </div>
          </motion.div>

          {/* STACKING FEATURE CARDS */}
          <FeatureOverlay 
            icon={Zap} 
            title="Rapid MVP Delivery" 
            desc="Concept to code in record time. High-velocity development for founders." 
            progress={smoothProgress} 
            range={[0.25, 0.85]} 
            position="left-[2%] md:left-[5%] top-[10%] md:top-[15%]"
            color="bg-blue-500"
          />
          <FeatureOverlay 
            icon={ShieldCheck} 
            title="Scalable Architecture" 
            desc="Infrastructure that grows with you. Battle-tested and ready." 
            progress={smoothProgress} 
            range={[0.40, 0.85]} 
            position="right-[2%] md:right-[5%] top-[10%] md:top-[15%]"
            color="bg-purple-500"
          />
          <FeatureOverlay 
            icon={Sparkles} 
            title="Design-Led Engineering" 
            desc="Bespoke experiences that WOW. Products that define your brand." 
            progress={smoothProgress} 
            range={[0.55, 0.85]} 
            position="left-[2%] md:left-[5%] bottom-[10%] md:bottom-[15%]"
            color="bg-emerald-500"
          />
          <FeatureOverlay 
            icon={BarChart3} 
            title="Conversion Logic" 
            desc="Data-driven user flows. Engineered to maximize ROI." 
            progress={smoothProgress} 
            range={[0.70, 0.85]} 
            position="right-[2%] md:right-[5%] bottom-[10%] md:bottom-[15%]"
            color="bg-orange-500"
          />

          {/* CONTACT REVEAL */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.82, 0.85, 0.92, 0.94], [0, 1, 1, 0]),
              scale: useTransform(smoothProgress, [0.82, 0.85, 0.92, 0.94], [0.9, 1, 1, 0.9]),
              y: useTransform(smoothProgress, [0.82, 0.85, 0.92, 0.94], [20, 0, 0, -20])
            }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
          >
             <div className="pointer-events-auto flex flex-col items-center gap-8 md:gap-12">
                <h2 className="text-6xl md:text-[130px] font-[1000] text-foreground tracking-[-0.06em] leading-none">Ready?</h2>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                   <a href="https://wa.me/qr/Z22T2DTNA3RHM1" target="_blank" rel="noopener noreferrer" className="px-10 md:px-16 py-6 md:py-8 rounded-[24px] md:rounded-[28px] bg-primary text-background font-black text-xl md:text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 md:gap-6">
                     <Calendar size={28} /> WhatsApp Us
                   </a>
                   <a href="mailto:buildskull.tech@gmail.com" className="px-10 md:px-16 py-6 md:py-8 rounded-[24px] md:rounded-[28px] bg-background text-foreground border border-foreground/10 font-black text-xl md:text-2xl shadow-apple hover:bg-foreground/5 transition-all flex items-center gap-4 md:gap-6">
                     <Mail size={28} /> Mail Us
                   </a>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
