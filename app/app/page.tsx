import React from 'react';

import CallToAction from '@/components/landing/CallToAction';
import FeatureHighlights from '@/components/landing/FeatureHighlights';
import Hero from '@/components/landing/Hero';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_55%)]" aria-hidden />
      <Hero />
      <FeatureHighlights />
      <CallToAction />
    </main>
  );
};

export default Page;