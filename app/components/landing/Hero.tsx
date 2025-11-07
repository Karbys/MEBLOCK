"use client";

import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection className="relative overflow-hidden text-primary transition-colors duration-500">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_rgba(15,23,42,0.02)_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_rgba(2,6,23,0.75)_70%)]"
        aria-hidden
      />
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.85fr)]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-max items-center gap-2 rounded-full border border-subtle bg-surface-pill px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
            {t.hero.pill}
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-[2.9rem]">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#connect"
              className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-elevated transition hover:translate-y-[1px]"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="#solutions"
              className="btn-secondary inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-card p-6 shadow-card backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.hero.highlightLabel}</p>
            <ul className="mt-4 grid gap-3 text-sm text-secondary sm:grid-cols-2">
              {t.hero.highlights.map((highlight: string) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-subtle bg-surface-card p-8 shadow-elevated backdrop-blur">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_60%)]"
            aria-hidden
          />
          <div className="relative inline-flex w-max items-center gap-2 rounded-full border border-subtle bg-surface-pill px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            {t.hero.statsLabel}
          </div>
          <div className="relative grid gap-4 sm:grid-cols-3">
            {t.hero.stats.map((stat: { value: string; label: string }) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-subtle bg-surface-muted p-4 text-left shadow-card"
              >
                <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="relative text-sm leading-relaxed text-secondary">{t.hero.statNote}</p>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;

