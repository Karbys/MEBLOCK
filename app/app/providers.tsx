'use client';

import React from 'react';

import { I18nProvider } from '@/contexts/I18nContext';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nProvider>{children}</I18nProvider>;
};

export default Providers;


