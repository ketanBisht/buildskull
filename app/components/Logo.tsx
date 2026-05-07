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
    <div className={`${sizeClasses[size]} flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src="/logo.png"
        alt="BuildSkull Logo"
        className="w-full h-full object-contain"
        style={{
          filter: isDark ? 'invert(1)' : 'none',
          mixBlendMode: isDark ? 'multiply' : 'screen',
        }}
      />
    </div>
  );
}
