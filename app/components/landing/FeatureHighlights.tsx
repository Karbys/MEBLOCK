"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const FeatureHighlights: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection id="features" className="gap-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500">{t.features.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t.features.title}
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">{t.features.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {t.features.items.map((feature) => (
          <article
            key={feature.title}
            className="group relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/60 p-8 text-left shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] transition hover:border-indigo-200/60 hover:bg-white"
          >
            <span className="inline-flex w-max items-center rounded-full border border-slate-200/70 bg-white px-4 py-1 text-xs font-medium tracking-wide text-slate-500">
              {feature.meta}
            </span>
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            <div className="mt-auto h-[1px] w-16 bg-gradient-to-r from-indigo-500/60 via-sky-500/50 to-transparent transition group-hover:w-24" />
          </article>
        ))}
      </div>
    </PageSection>
  );
};

export default FeatureHighlights;

