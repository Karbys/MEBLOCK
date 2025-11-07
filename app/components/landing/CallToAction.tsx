"use client";

import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const CallToAction: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection
      id="connect"
      className="items-start justify-between gap-8 overflow-hidden rounded-[36px] border border-strong bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 text-white shadow-elevated transition-colors duration-500 lg:flex-row"
    >
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">{t.cta.eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.cta.title}</h2>
        <p className="text-base text-white/80 sm:text-lg">{t.cta.description}</p>
      </div>
      <div className="flex flex-col items-start gap-4 lg:items-end">
        <Link
          href="mailto:hello@meblock.co"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-indigo-700 shadow-md transition hover:-translate-y-[1px]"
        >
          {t.cta.primaryCta}
        </Link>
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          {t.cta.secondaryLabel}
        </span>
      </div>
    </PageSection>
  );
};

export default CallToAction;

