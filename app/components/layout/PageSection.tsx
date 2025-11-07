import React from 'react';

type PageSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const baseClassName =
  'relative mx-auto flex w-full flex-col gap-6 px-6 py-12 transition-colors duration-500 sm:px-10 sm:py-18';

const PageSection: React.FC<PageSectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`${baseClassName} ${className}`.trim()}>
      {children}
    </section>
  );
};

export default PageSection;

