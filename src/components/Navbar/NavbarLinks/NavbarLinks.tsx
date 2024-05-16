'use client';

import { useState } from 'react';

import { Link } from '@nextui-org/link';
import { Link as ScrollLink } from 'react-scroll';

import { siteConfig } from '@/config/site';
import { NavbarItem } from '@nextui-org/react';

export const NavbarLinks = () => {
  const [activeLink, setActiveLink] = useState('');

  function handleSetActive(to: string) {
    setActiveLink(to);
  }

  return (
    <>
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href} isActive={activeLink === item.href}>
          <Link
            as={ScrollLink}
            className="cursor-pointer"
            color={activeLink === item.href ? 'primary' : 'foreground'}
            to={item.href}
            offset={-96}
            duration={500}
            spy
            smooth
            onSetActive={handleSetActive}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
};
