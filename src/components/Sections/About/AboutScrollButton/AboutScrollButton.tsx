'use client';

import { Link } from 'react-scroll';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const AboutScrollButton = () => {
  const t = useTranslations('AboutPage');

  return (
    <Button
      as={Link}
      to="contact"
      smooth
      duration={500}
      size="sm"
      color="secondary"
      variant="shadow"
      className="violet-blue-gradient lg:h-10 lg:px-4 lg:text-small"
    >
      {t('about_button')}
    </Button>
  );
};
