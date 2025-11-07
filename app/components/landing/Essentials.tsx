"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const SolutionShowcase: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection id="solutions" className="gap-12 text-primary">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-secondary">{t.solutions.eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.solutions.title}</h2>
        <p className="text-base text-secondary sm:text-lg">{t.solutions.description}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {t.solutions.items.map(
          (solution: { title: string; audience: string; description: string; deliverables: string[] }) => (
            <article
              key={solution.title}
              className="group flex h-full flex-col gap-5 rounded-3xl border border-subtle bg-surface-card p-7 text-left shadow-card transition hover:-translate-y-1 hover:border-strong"
            >
              <div className="space-y-3">
                <div className="inline-flex w-max items-center gap-2 rounded-full border border-subtle bg-surface-pill px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-secondary">
                  {solution.audience}
                </div>
                <h3 className="text-2xl font-semibold text-primary">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{solution.description}</p>
              </div>
              <div className="mt-auto space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Key deliverables</p>
                <ul className="space-y-2 text-sm text-secondary">
                  {solution.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" aria-hidden />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        )}
      </div>
    </PageSection>
  );
};

export default SolutionShowcase;


