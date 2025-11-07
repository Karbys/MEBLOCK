"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const FeatureHighlights: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection id="features" className="gap-14 text-primary">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-secondary">{t.features.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {t.features.title}
        </h2>
        <p className="mt-4 text-base text-secondary sm:text-lg">{t.features.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {t.features.items.map((feature) => (
          <article
            key={feature.title}
            className="group relative flex h-full flex-col gap-5 rounded-3xl border border-subtle bg-surface-card p-8 text-left shadow-card transition hover:-translate-y-1 hover:border-strong"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface-pill text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              ●
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-secondary">{feature.meta}</p>
              <h3 className="mt-3 text-xl font-semibold text-primary">{feature.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-secondary">{feature.description}</p>
            <div className="mt-auto h-[1px] w-16 bg-gradient-to-r from-indigo-500/40 via-sky-500/40 to-transparent transition group-hover:w-24" />
          </article>
        ))}
      </div>
    </PageSection>
  );
};

export default FeatureHighlights;

