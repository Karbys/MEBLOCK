"use client";

import React from 'react';

import CallToAction from '@/components/landing/CallToAction';
import Essentials from '@/components/landing/Essentials';
import FeatureHighlights from '@/components/landing/FeatureHighlights';
import Hero from '@/components/landing/Hero';
import { useTheme } from '@/contexts/ThemeContext';

const Page = () => {
  const { theme } = useTheme();

  const gradientClass =
    theme === 'dark'
      ? 'bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_rgba(2,6,23,0.95)_70%)]'
      : 'bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.12),_rgba(255,255,255,0.9)_60%)]';

  return (
    <main className="relative min-h-screen overflow-hidden text-primary transition-colors duration-500">
      <div className={`absolute inset-x-0 top-0 -z-10 h-[680px] ${gradientClass}`} aria-hidden />
      <Hero />
      <FeatureHighlights />
      <Essentials />
      <CallToAction />
    </main>
  );
};

export default Page;