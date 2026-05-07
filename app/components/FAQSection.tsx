'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most projects are delivered in 2–4 weeks. Starter plans take ~10 days, while complex custom apps take 4–6 weeks. We provide a precise timeline after our initial discovery call.',
  },
  {
    q: 'Do I own the website after it\'s built?',
    a: 'Absolutely. You own 100% of the code, assets, and domain. We hand over the full GitHub repository and deployment access upon final payment.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Every project includes a 30-day support window for small tweaks and fixes. After that, we offer flexible maintenance retainers to keep your site updated and growing.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, we work with brands globally. We accept payments in multiple currencies including USD, GBP, and INR via Stripe or bank transfer.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes, redesigns are our specialty. We can rebuild your site on a modern stack while preserving your SEO and brand equity, but significantly improving conversion.',
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex items-center justify-between gap-6 group text-left"
      >
        <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${open ? 'text-secondary' : 'text-foreground/80 group-hover:text-foreground'}`}>
          {q}
        </span>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-secondary border-secondary text-white' : 'bg-foreground/[0.02] border-border text-foreground/20 group-hover:border-foreground/10'}`}>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-foreground/60 font-medium leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" ref={ref} className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">
            FAQ
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-foreground mb-8">
            Got questions? <br />
            <span className="gradient-text">We&apos;ve got answers.</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            Everything you need to know before we start building together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card rounded-[48px] border border-border shadow-apple p-8 md:p-12"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} i={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/40 font-bold">
            Still curious? {' '}
            <a href="#contact" className="text-secondary hover:underline underline-offset-4 transition-all">
              Book a free discovery call →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
