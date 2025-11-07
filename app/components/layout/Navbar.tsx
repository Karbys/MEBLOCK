'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useI18n, type Language } from '@/contexts/I18nContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, language, setLanguage } = useI18n();

  const navLinks = [
    { href: '#features', label: t.navbar.features },
    { href: '#discover', label: t.navbar.getStarted },
  ];

  const handleLanguageChange = React.useCallback(
    (next: Language) => {
      if (language !== next) {
        setLanguage(next);
      }
    },
    [language, setLanguage]
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/60 backdrop-blur">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-10">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <Image src="/logo/Meblock_Logo.png" alt={t.navbar.brand} fill sizes="32px" className="object-contain" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">{t.navbar.brand}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#discover"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            {t.navbar.contact}
          </Link>
          <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-600 shadow-sm">
            {(['th', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className={`rounded-full px-3 py-1 transition ${
                  language === lang
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            className="text-slate-700"
          >
            <path strokeWidth="1.5" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200/70 bg-white/80 px-6 py-4 backdrop-blur md:hidden">
          <div className="mx-auto flex w-full flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#discover"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.contact}
            </Link>
            <div className="mt-2 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-600">
              {(['th', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsOpen(false);
                  }}
                  className={`rounded-lg px-3 py-1 transition ${
                    language === lang
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


