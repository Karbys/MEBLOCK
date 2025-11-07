"use client";

import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Essentials: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection id="playbook" className="gap-14 text-primary">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-secondary">{t.essentials.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.essentials.title}</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {t.essentials.items.map((item, index) => (
          <article
            key={item.title}
            className="group flex h-full flex-col gap-4 rounded-3xl border border-subtle bg-surface-card p-7 text-left shadow-card transition hover:-translate-y-1 hover:border-strong"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface-pill text-sm font-medium text-secondary">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
};

export default Essentials;


