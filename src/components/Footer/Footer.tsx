import Link from 'next/link';
import Image from 'next/image';

import { Divider } from '@nextui-org/react';

import { FooterScrollButton } from './FooterScrollButton';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full py-10 bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full px-10 max-w-6xl mx-auto ">
        <div className="flex justify-between">
          <FooterScrollButton />
          <div className="flex items-baseline space-x-4">
            <p className="hidden md:flex h-fit">{t('connect')}</p>
            <Link href="https://www.linkedin.com/in/luiz-doretto/">
              <Image src="/linkedin_4x.webp" width={26} height={26} alt="LinkedIn Link" />
            </Link>
            <Link href="https://github.com/lhneves">
              <Image src="/github_4x.webp" width={26} height={26} alt="LinkedIn Link" />
            </Link>
            <Link href="mailto:luiz.n.doretto@gmail.com">
              <Image src="/gmail_4x.webp" width={26} height={26} alt="LinkedIn Link" />
            </Link>
          </div>
        </div>
        <Divider className="my-4" />
        <p className="text-center">
          © 2024 | Designed and developed by
          <Link href="https://github.com/lhneves"> Luiz Doretto</Link>
        </p>
      </div>
    </footer>
  );
};
