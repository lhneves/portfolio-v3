'use client';

import { useTransition } from 'react';

import { Locale } from '@/config/i18n';
import { setUserLocale } from '@/services/locale';

import { MdTranslate } from 'react-icons/md';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { cn } from '@/lib/cn';

export const LangSwitch = () => {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <div
          className={cn(
            isPending && 'pointer-events-none opacity-60',
            'text-default-500 transition-opacity hover:opacity-80 cursor-pointer',
          )}
        >
          <MdTranslate size={20} />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => onChange(key as string)}
        variant="faded"
        aria-label="Dropdown menu with icons"
      >
        <DropdownItem key="en">English</DropdownItem>
        <DropdownItem key="pt_BR">Português</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
