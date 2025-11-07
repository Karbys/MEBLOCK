'use client';

import React from 'react';

import en from '@/locales/en.json';
import th from '@/locales/th.json';

const translations = {
  en,
  th,
} as const;

export type Language = keyof typeof translations;
type Translation = (typeof translations)[Language];

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
};

const I18nContext = React.createContext<I18nContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'meblock.language';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = React.useState<Language>('th');

  React.useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : null;
    if (stored && stored in translations) {
      setLanguageState(stored as Language);
    }
  }, []);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const persist = React.useCallback((value: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }
  }, []);

  const setLanguage = React.useCallback(
    (next: Language) => {
      setLanguageState(next);
      persist(next);
    },
    [persist]
  );

  const toggleLanguage = React.useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'th' : 'en';
      persist(next);
      return next;
    });
  }, [persist]);

  const value = React.useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};


