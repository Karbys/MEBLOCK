'use client';

import Link from 'next/link';
import React from 'react';

import PageSection from '@/components/layout/PageSection';
import { useI18n } from '@/contexts/I18nContext';

const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-subtle bg-surface-footer text-secondary transition-colors duration-500">
      <PageSection className="gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {t.footer.brand.eyebrow}
            </p>
            <h3 className="text-2xl font-semibold text-primary">{t.footer.brand.title}</h3>
            <p className="text-sm leading-relaxed">{t.footer.brand.description}</p>
          </div>
          <p className="text-xs text-tertiary">{t.footer.brand.legal}</p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.footer.navigation.title}
            </p>
            <ul className="space-y-2 text-sm">
              {t.footer.navigation.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.footer.contact.title}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${t.footer.contact.email.value}`} className="transition hover:text-primary">
                  {t.footer.contact.email.value}
                </a>
                <p className="text-xs text-tertiary">{t.footer.contact.email.label}</p>
              </li>
              <li>
                <a href={`tel:${t.footer.contact.phone.value}`} className="transition hover:text-primary">
                  {t.footer.contact.phone.value}
                </a>
                <p className="text-xs text-tertiary">{t.footer.contact.phone.label}</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.footer.headquarters.title}
            </p>
            <address className="not-italic text-sm leading-relaxed">
              {t.footer.headquarters.address.line1}
              <br />
              {t.footer.headquarters.address.line2}
              <br />
              {t.footer.headquarters.address.country}
            </address>
          </div>
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;


