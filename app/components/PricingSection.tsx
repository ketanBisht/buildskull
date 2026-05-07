'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹24,999',
    usd: '$299',
    period: 'one-time',
    desc: 'Perfect for local businesses and creators.',
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
    <section id="pricing" ref={ref} className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 text-center md:text-left px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">
                Pricing Plans
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
                Simple pricing,{' '}
                <span className="font-[800]" style={{ color: 'var(--accent)' }}>no surprises.</span>
              </h2>
            </div>
            <p className="text-xl text-foreground/40 font-medium max-w-sm mb-2">
              Choose the perfect plan for your business stage. All plans include our signature quality.
            </p>
          </div>
          
          {/* Currency toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              {(['inr', 'usd'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-8 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                    currency === c
                      ? 'bg-primary text-background shadow-lg'
                      : 'text-foreground/30 hover:text-foreground/60'
                  }`}
                >
                  {c === 'inr' ? '₹ INR' : '$ USD'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative rounded-[48px] p-12 flex flex-col border transition-all duration-500 ${
                plan.popular
                  ? 'bg-card border-foreground/20 shadow-apple-lg scale-[1.02]'
                  : 'bg-card border-border shadow-apple'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-primary text-background text-[11px] font-black uppercase tracking-widest shadow-xl">
                       Most Popular
                    </div>
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-3xl font-black text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/40 font-medium mb-8 uppercase tracking-widest text-xs">{plan.desc}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-[1000] text-foreground">
                    {currency === 'inr' ? plan.price : plan.usd}
                  </span>
                  <span className="text-foreground/30 font-bold text-sm">/{plan.period}</span>
                </div>
              </div>

              <div className="h-px bg-border mb-10" />

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-foreground/60 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-5 rounded-2xl font-black text-lg text-center transition-all duration-300 shadow-xl active:scale-95 ${
                  plan.popular
                    ? 'bg-primary text-background hover:opacity-90'
                    : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
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
