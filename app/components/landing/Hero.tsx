"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageSection className="items-center justify-between gap-12 lg:flex-row">
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6 self-stretch rounded-3xl border border-slate-200/80 bg-white/60 p-10 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)] backdrop-blur lg:mx-0">
        <div className="absolute -left-6 top-8 hidden h-10 w-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/25 blur-2xl lg:block" aria-hidden />
        <div className="absolute -right-6 bottom-8 hidden h-12 w-32 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/25 blur-3xl lg:block" aria-hidden />
        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 p-6 shadow-xl">
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
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500">{t.hero.logoTag}</p>
          <p className="mt-3 text-base text-slate-600">{t.hero.logoDescription}</p>
        </div>
      </div>
      <div className="relative isolate flex max-w-md flex-col gap-6 text-balance">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" aria-hidden />
          {t.hero.alert}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#discover"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-[1px] hover:bg-slate-800"
          >
            {t.hero.primaryCta}
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
        <dl className="grid gap-3 sm:grid-cols-3">
          {t.hero.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-slate-700">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageSection>
  );
};

export default Hero;

