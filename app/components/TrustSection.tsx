'use client';

import { motion } from 'framer-motion';

const clients = [
  'FitForge', 'SaaSly', 'Brewed & Co', 'GrowthStudio', 'LaunchPad', 'ChessMaster', 'CreatorHub', 'BuildSkull'
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
          Trusted by Industry Leaders Worldwide
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="text-2xl md:text-4xl font-black text-foreground/10 hover:text-foreground/30 transition-colors duration-500 cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
