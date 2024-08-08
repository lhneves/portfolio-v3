'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';

export const FooterScrollButton = () => {
  const t = useTranslations('Footer');

  return (
    <Link href="/" className="flex items-center space-x-2" onClick={() => scroll.scrollToTop()}>
      <FaRegArrowAltCircleUp />
      <p>{t('back')}</p>
    </Link>
  );
};
