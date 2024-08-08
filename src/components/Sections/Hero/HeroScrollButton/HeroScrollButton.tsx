'use client';

import { Link } from 'react-scroll';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const HeroScrollButton = () => {
  const t = useTranslations('HeroPage');

  return (
    <Button
      as={Link}
      to="about"
      smooth
      duration={500}
      variant="ghost"
      color="secondary"
      className="border-violet-400"
    >
      {t('check_button')}
    </Button>
  );
};
