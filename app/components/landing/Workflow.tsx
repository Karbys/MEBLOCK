"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Workflow: React.FC = () => {
  const { t } = useI18n();
  const steps = t.workflow.steps as { title: string; description: string }[];

  return (
    <PageSection id="workflow" className="gap-12 text-primary">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-secondary">{t.workflow.eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.workflow.title}</h2>
        <p className="text-base text-secondary sm:text-lg">{t.workflow.note}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-subtle bg-surface-card p-6 text-left shadow-card"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface-pill text-sm font-semibold text-secondary">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-indigo-400 to-transparent lg:block" />
              )}
            </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Workflow;

