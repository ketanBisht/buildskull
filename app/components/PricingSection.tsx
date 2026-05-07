'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹24,999',
    usd: '$299',
    period: 'one-time',
    desc: 'Perfect for local businesses and creators.',
    color: 'bg-blue-500',
    popular: false,
    features: [
      'Up to 5 pages',
      'Mobile-first design',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics',
      'Vercel deployment',
    ],
  },
  {
    name: 'Growth',
    price: '₹59,999',
    usd: '$699',
    period: 'one-time',
    desc: 'For businesses that need a growth engine.',
    color: 'bg-primary',
    popular: true,
    features: [
      'Up to 12 pages',
      'Custom UI/UX (Figma)',
      'Advanced SEO',
      'Booking system',
      'Payment integration',
      'Admin dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: '₹1,19,999',
    usd: '$1,399',
    period: 'one-time',
    desc: 'Full-scale custom applications.',
    color: 'bg-secondary',
    popular: false,
    features: [
      'Unlimited pages',
      'Custom web application',
      'Database architecture',
      'Auth system',
      'Multi-role panel',
      'API integrations',
      '90-day support',
    ],
  },
];

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [currency, setCurrency] = useState<'inr' | 'usd'>('inr');

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-[11px] font-black uppercase tracking-widest text-black/40 mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] tracking-tight text-black mb-8">
            The right investment <br />
            <span className="gradient-text">for your business.</span>
          </h2>
          
          {/* Currency toggle */}
          <div className="mt-12 inline-flex items-center gap-1 p-1.5 rounded-2xl bg-white border border-black/[0.04] shadow-apple">
            {(['inr', 'usd'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-8 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                  currency === c
                    ? 'bg-black text-white shadow-xl scale-105'
                    : 'text-black/30 hover:text-black/60'
                }`}
              >
                {c === 'inr' ? '₹ INR' : '$ USD'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`relative rounded-[48px] p-12 flex flex-col border transition-all duration-500 hover:scale-[1.02] ${
                plan.popular
                  ? 'bg-white border-primary shadow-apple-lg'
                  : 'bg-white border-black/[0.08] shadow-apple'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <div className="px-6 py-2 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-widest shadow-xl">
                      Most Popular
                   </div>
                </div>
              )}

              <div className="mb-10">
                <div className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-4">{plan.name}</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-[1000] text-black">
                    {currency === 'inr' ? plan.price : plan.usd}
                  </span>
                  <span className="text-black/30 font-bold text-sm">/{plan.period}</span>
                </div>
                <p className="text-black/70 font-medium leading-relaxed">{plan.desc}</p>
              </div>

              <div className="h-px bg-black/[0.04] mb-10" />

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-black" />
                    </div>
                    <span className="text-black/70 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-5 rounded-2xl font-black text-lg text-center transition-all duration-300 shadow-xl active:scale-95 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-black text-white hover:bg-black/80'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
