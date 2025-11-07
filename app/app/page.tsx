"use client";

import React from 'react';

import CallToAction from '@/components/landing/CallToAction';
import SolutionShowcase from '@/components/landing/Essentials';
import PlatformPillars from '@/components/landing/FeatureHighlights';
import Hero from '@/components/landing/Hero';
import Workflow from '@/components/landing/Workflow';
import { useTheme } from '@/contexts/ThemeContext';

const Page = () => {
  const { theme } = useTheme();

  const gradientClass =
    theme === 'dark'
      ? 'from-slate-950 via-slate-900 to-slate-950'
      : 'from-white via-indigo-50/60 to-white';

  return (
    <main className="relative min-h-screen overflow-hidden text-primary transition-colors duration-500">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-gradient-to-b ${gradientClass}`}
        aria-hidden
      />
      <Hero />
      <PlatformPillars />
      <SolutionShowcase />
      <Workflow />
      <CallToAction />
    </main>
  );
};

export default Page;