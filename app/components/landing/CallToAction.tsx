"use client";

import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const CallToAction: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection
      id="discover"
      className="items-center justify-between gap-10 rounded-[40px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/90 text-white lg:flex-row"
    >
      <div className="max-w-xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/60">{t.cta.eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.cta.title}</h2>
        <p className="text-base text-white/70 sm:text-lg">{t.cta.description}</p>
      </div>
      <div className="flex flex-col items-start gap-4 lg:items-end">
        <Link
          href="mailto:hello@meblock.co"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-slate-900/20 transition hover:translate-y-[1px]"
        >
          {t.cta.primaryCta}
        </Link>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
          {t.cta.secondaryLabel}
        </span>
      </div>
    </PageSection>
  );
};

export default CallToAction;

