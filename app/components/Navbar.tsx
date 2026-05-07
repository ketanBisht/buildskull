'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Logo from './Logo';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'border-b border-border shadow-md'
            : ''
        }`}
        style={{
          background: scrolled
            ? `color-mix(in srgb, var(--background) 85%, transparent)`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        {/* Thin gold accent line at top */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo size="md" className="group-hover:scale-105 transition-all duration-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-[0.12em] text-foreground uppercase">
                Build<span className="text-accent">Skull</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-foreground/30 uppercase font-medium">
                Web Agency
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-5 py-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-300 hover-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="relative w-12 h-6 rounded-full border border-border bg-foreground/5 flex items-center px-0.5 transition-all duration-300"
              >
                <motion.div
                  animate={{ x: isDark ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-background shadow-sm"
                >
                  {isDark ? <Sun size={10} /> : <Moon size={10} />}
                </motion.div>
              </button>
            )}

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative px-6 py-2.5 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--foreground)',
                color: 'var(--background)',
              }}
            >
              <span className="relative z-10 tracking-wide">Start a Project</span>
              {/* shimmer */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl border border-border text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[72px] z-40 rounded-2xl p-6 flex flex-col gap-3 border border-border shadow-apple-lg"
            style={{ background: 'var(--card)', backdropFilter: 'blur(40px)' }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-foreground/70 hover:text-foreground text-base font-medium py-2 border-b border-border last:border-0 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="mt-2 w-full text-center px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-transform active:scale-95"
              style={{ background: 'var(--foreground)', color: 'var(--background)' }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
