'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useI18n, type Language } from '@/contexts/I18nContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();

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
    <nav className="sticky top-0 z-50 w-full border-b border-subtle bg-surface-nav backdrop-blur transition-colors duration-500">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-10">
        <Link href="/" className="group inline-flex items-center gap-3.5">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <Image
              src="/logo/Meblock_Logo.png"
              alt={`${t.navbar.brand?.toUpperCase?.() ?? 'MEBLOCK'} logo`}
              width={44}
              height={44}
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-primary uppercase">
            {t.navbar.brand.toUpperCase()}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#discover"
            className="btn-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition"
          >
            {t.navbar.contact}
          </Link>
          <div className="inline-flex items-center gap-1 rounded-full border border-subtle bg-surface-card p-1 text-xs font-semibold text-secondary shadow-card backdrop-blur">
            {(['th', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className={`rounded-full px-3 py-1 transition ${
                  language === lang
                    ? 'btn-primary shadow-sm'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="btn-secondary inline-flex h-9 w-9 items-center justify-center rounded-full border bg-surface-card text-secondary shadow-card transition hover:shadow-elevated"
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.07 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.14 0 1.41 1.41M6.34 17.66l-1.41 1.41" />
              </svg>
            )}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-xl border border-subtle bg-surface-card p-2 shadow-card transition md:hidden"
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
        <div className="border-t border-subtle bg-surface-nav px-6 py-4 backdrop-blur transition-colors md:hidden">
          <div className="mx-auto flex w-full flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-2 py-2 text-sm font-medium text-secondary transition hover:bg-surface-muted hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#discover"
              className="btn-primary mt-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.contact}
            </Link>
            <div className="mt-2 inline-flex items-center gap-1 rounded-xl border border-subtle bg-surface-card p-1 text-xs font-semibold text-secondary shadow-card">
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
                      ? 'btn-primary shadow-sm'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="btn-secondary mt-2 inline-flex items-center justify-center gap-2 rounded-xl border bg-surface-card px-4 py-2 text-sm font-medium text-secondary shadow-card"
            >
              {theme === 'dark' ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.07 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.14 0 1.41 1.41M6.34 17.66l-1.41 1.41" />
                  </svg>
                  <span>Light</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


