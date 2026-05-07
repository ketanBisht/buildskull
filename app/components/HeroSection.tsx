'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Mail, Calendar, Sparkles, ShieldCheck, Globe, Activity, BarChart3, Search } from 'lucide-react';

function FeatureOverlay({ icon: Icon, title, desc, progress, range }: any) {
  // We make the range a bit tighter for quick pop-in/out
  const opacity = useTransform(progress, [range[0], range[0] + 0.03, range[1] - 0.03, range[1]], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0], range[0] + 0.03, range[1] - 0.03, range[1]], [0.8, 1, 1, 0.8]);
  const y = useTransform(progress, [range[0], range[0] + 0.03, range[1] - 0.03, range[1]], [20, 0, 0, -20]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <div className="glass-strong p-10 md:p-14 rounded-[40px] shadow-2xl border border-black/[0.08] max-w-xl w-full mx-6 pointer-events-auto backdrop-blur-3xl">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8">
          <Icon size={40} />
        </div>
        <div className="text-left">
          <h3 className="text-3xl md:text-4xl font-[1000] text-black mb-4 tracking-tighter">{title}</h3>
          <p className="text-lg md:text-xl text-black/40 font-medium leading-relaxed">{desc}</p>
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
  
  // Dashboard Blur/Fade out only at the very end
  const dashboardEffect = useTransform(smoothProgress, [0.85, 0.92], [0, 1]);
  const dashboardBlur = useTransform(dashboardEffect, [0, 1], [0, 25]);
  const dashboardFinalOpacity = useTransform(dashboardEffect, [0, 1], [1, 0.1]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#F8F9FA]" 
      style={{ height: '500vh' }}
    >
      {/* DOT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          
          {/* INTRO HEADLINE */}
          <motion.div 
            style={{ opacity: headlineOpacity, y: headlineY }} 
            className="absolute flex flex-col items-center text-center"
          >
             <h1 className="text-7xl md:text-[140px] font-[1000] leading-[0.75] tracking-[-0.05em] text-black mb-10">
                Build the <br /><span className="gradient-text">Future</span>
             </h1>
             <p className="text-xl md:text-3xl text-black/30 font-semibold tracking-tight">Engineering excellence for the next generation.</p>
          </motion.div>

          {/* THE SCREEN */}
          <motion.div 
            style={{ 
              opacity: dashboardFinalOpacity,
              scale: dashboardScale,
              filter: `blur(${dashboardBlur}px)`,
              display: useTransform(smoothProgress, [0.08, 0.98], ["none", "block"])
            }}
            className="w-full max-w-5xl aspect-[1.6/1] rounded-[32px] border border-black/[0.05] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white overflow-hidden relative z-20"
          >
             {/* Browser Header */}
             <div className="h-14 border-b border-black/[0.03] flex items-center px-6 gap-4 bg-[#FDFDFD]">
                <div className="flex gap-2">
                   <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]" />
                   <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                   <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 max-w-xl mx-auto h-8 bg-black/[0.03] rounded-lg flex items-center px-4 gap-3">
                   <Globe size={14} className="text-black/20" />
                   <span className="text-[13px] text-black/30 font-medium tracking-tight">buildskull.com/analytics/growth</span>
                </div>
             </div>

             {/* Browser Content */}
             <div className="p-10 md:p-12 h-full flex flex-col gap-10">
                <div className="flex items-start gap-12">
                   <div className="w-24 h-24 rounded-full bg-black/[0.03] shrink-0" />
                   <div className="flex-1 space-y-4 pt-4">
                      <div className="h-4 w-1/3 bg-black/[0.05] rounded-full" />
                      <div className="h-4 w-1/2 bg-black/[0.03] rounded-full" />
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/5 flex items-center justify-center text-blue-500">
                      <Activity size={24} />
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                   <div className="p-8 rounded-[24px] border border-black/[0.03] bg-[#FAFAFA] flex flex-col gap-4">
                      <span className="text-[11px] font-black uppercase tracking-widest text-black/20">SEO Excellence</span>
                      <span className="text-4xl font-black text-[#28C840] tracking-tighter">98/100</span>
                   </div>
                   <div className="p-8 rounded-[24px] border border-black/[0.03] bg-[#FAFAFA] flex flex-col gap-4">
                      <span className="text-[11px] font-black uppercase tracking-widest text-black/20">Core Web Vitals</span>
                      <span className="text-4xl font-black text-blue-500 tracking-tighter">Pass</span>
                   </div>
                   <div className="p-8 rounded-[24px] border border-black/[0.03] bg-[#FAFAFA] flex flex-col gap-4">
                      <span className="text-[11px] font-black uppercase tracking-widest text-black/20">Conversion Rate</span>
                      <span className="text-4xl font-black text-blue-600 tracking-tighter">+42%</span>
                   </div>
                </div>

                <div className="flex-1 rounded-[24px] border border-black/[0.03] bg-[#FAFAFA] p-8 flex flex-col gap-6">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-black/20">Real-time Performance</span>
                   </div>
                   <div className="flex-1 flex items-end justify-between gap-3">
                      {[40, 70, 45, 90, 60, 80, 50, 95, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-t-lg" style={{ height: `${h}%` }} />
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>

          {/* FEATURE OVERLAYS (WITH BREATHING ROOM) */}
          <FeatureOverlay 
            icon={Zap} 
            title="Rapid MVP Delivery" 
            desc="From concept to code in record time. We specialize in high-velocity development for ambitious founders." 
            progress={smoothProgress} 
            range={[0.30, 0.45]} 
          />
          <FeatureOverlay 
            icon={ShieldCheck} 
            title="Scalable Architecture" 
            desc="Infrastructure that grows with you. We build battle-tested systems ready for millions of users." 
            progress={smoothProgress} 
            range={[0.45, 0.60]} 
          />
          <FeatureOverlay 
            icon={Sparkles} 
            title="Design-Led Engineering" 
            desc="Products that define your brand. We craft bespoke experiences that don't just work—they WOW." 
            progress={smoothProgress} 
            range={[0.60, 0.75]} 
          />

          {/* CONTACT REVEAL */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.88, 0.95], [0, 1]),
              scale: useTransform(smoothProgress, [0.88, 0.95], [0.9, 1]),
              y: useTransform(smoothProgress, [0.88, 0.95], [20, 0])
            }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
          >
             <div className="pointer-events-auto flex flex-col items-center gap-12">
                <h2 className="text-7xl md:text-[130px] font-[1000] text-black tracking-[-0.06em] leading-none">Ready?</h2>
                <div className="flex flex-col sm:flex-row gap-8">
                   <a href="#contact" className="px-16 py-8 rounded-[28px] bg-black text-white font-black text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-6">
                     <Calendar size={32} /> Book a Call
                   </a>
                   <a href="mailto:hello@buildskull.com" className="px-16 py-8 rounded-[28px] bg-white text-black border border-black/10 font-black text-2xl shadow-apple hover:bg-black/[0.02] transition-all flex items-center gap-6">
                     <Mail size={32} className="text-primary" /> Mail Us
                   </a>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
