"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection className="items-center justify-between gap-16 text-primary transition-colors duration-500 lg:flex-row">
      <div className="flex max-w-2xl flex-col gap-8">
        <div className="inline-flex w-max items-center gap-2 rounded-full border border-subtle bg-surface-pill px-4 py-2 text-sm font-medium text-secondary">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" aria-hidden />
          {t.hero.pill}
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-secondary sm:text-xl">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#discover"
            className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-elevated transition hover:translate-y-[1px]"
          >
            {t.hero.primaryCta}
          </Link>
          <Link
            href="#features"
            className="btn-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
        <dl className="grid gap-6 sm:grid-cols-3">
          {t.hero.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-subtle bg-surface-muted p-5">
              <dd className="text-2xl font-semibold text-primary">{metric.value}</dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-secondary">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6 self-stretch overflow-hidden rounded-[34px] border border-subtle bg-surface-card/70 p-10 shadow-card backdrop-blur lg:mx-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_60%)]" aria-hidden />
        <div className="relative flex h-28 w-28 items-center justify-center">
          <Image
            src="/logo/Meblock_Logo.png"
            alt={`${t.hero.logoTag} logo`}
            fill
            sizes="112px"
            priority
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div className="relative text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-secondary">{t.hero.logoTag}</p>
          <p className="mt-3 text-base text-secondary">{t.hero.logoDescription}</p>
        </div>
        <div className="relative w-full rounded-2xl border border-subtle bg-surface-muted p-5 text-left">
          <p className="text-sm font-semibold text-primary">Design once, reuse everywhere</p>
          <p className="mt-2 text-xs text-secondary">
            Save variations, duplicate instantly, and keep updates flowing across every product surface.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;

