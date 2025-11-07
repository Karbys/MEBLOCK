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
      className="items-center justify-between gap-8 rounded-[32px] border border-strong gradient-cta text-cta-primary shadow-elevated transition-colors duration-500 lg:flex-row"
    >
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-cta-muted">{t.cta.eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.cta.title}</h2>
        <p className="text-base text-cta-muted sm:text-lg">{t.cta.description}</p>
      </div>
      <div className="flex flex-col items-start gap-3 lg:items-end">
        <Link
          href="mailto:hello@meblock.co"
          className="btn-contrast inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-card transition hover:translate-y-[1px]"
        >
          {t.cta.primaryCta}
        </Link>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-cta-muted">
          {t.cta.secondaryLabel}
        </span>
      </div>
    </PageSection>
  );
};

export default CallToAction;

