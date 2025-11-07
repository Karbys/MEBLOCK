"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const PlatformPillars: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection id="pillars" className="gap-12 text-primary">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-secondary">{t.pillars.eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.pillars.title}</h2>
        <p className="text-base text-secondary sm:text-lg">{t.pillars.description}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {t.pillars.items.map(
          (pillar: { title: string; subtitle: string; description: string; points: string[] }) => (
            <article
              key={pillar.title}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-subtle bg-surface-card p-7 text-left shadow-card transition hover:-translate-y-1 hover:border-strong"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden />
              <div className="relative space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-pill px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-secondary">
                  {pillar.subtitle}
                </span>
                <h3 className="text-2xl font-semibold text-primary">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{pillar.description}</p>
              </div>
              <ul className="relative mt-auto space-y-3 text-sm text-secondary">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </PageSection>
  );
};

export default PlatformPillars;

