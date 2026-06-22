'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
  };

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center overflow-hidden bg-transparent ${className}`}>
      <img
        src="/logo.png"
        alt="BuildSkull Logo"
        className="w-full h-full object-contain"
        style={{
          // Logo = dark skull on white bg
          // Light mode: multiply drops white bg → dark skull shows on light navbar
          // Dark mode: invert → light skull on black bg, then screen drops the black → light skull on dark navbar
          filter: isDark ? 'invert(1)' : 'none',
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
      />
    </div>
  );
}
