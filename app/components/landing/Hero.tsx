"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection className="items-center justify-between gap-12 text-primary transition-colors duration-500 lg:flex-row">
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6 self-stretch rounded-3xl border border-subtle bg-surface-card p-10 shadow-card backdrop-blur lg:mx-0">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <Image
            src="/logo/Meblock_Logo.png"
            alt={`${t.hero.logoTag} logo`}
            fill
            sizes="128px"
            priority
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-secondary">{t.hero.logoTag}</p>
          <p className="mt-3 text-base text-secondary">{t.hero.logoDescription}</p>
        </div>
      </div>
      <div className="relative isolate flex max-w-md flex-col gap-6 text-balance">
        <div className="inline-flex items-center gap-3 rounded-full border border-subtle bg-surface-pill px-4 py-2 text-sm font-medium text-secondary shadow-card">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" aria-hidden />
          {t.hero.alert}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="text-lg leading-relaxed text-secondary sm:text-xl">
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
        <dl className="grid gap-3 sm:grid-cols-3">
          {t.hero.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-subtle bg-surface-muted p-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-secondary">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageSection>
  );
};

export default Hero;

