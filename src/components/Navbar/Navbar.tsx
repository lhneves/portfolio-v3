import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';

import { NavbarLinks } from './NavbarLinks';

import NextLink from 'next/link';
import { Link } from '@nextui-org/link';

import { ThemeSwitch } from '@/components/ThemeSwitch';

import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { LangSwitch } from '../LangSwitch';

export const Navbar = () => {
  return (
    <NextUINavbar isBordered className="px-10" classNames={{ wrapper: ['px-0'] }}>
      <NavbarBrand as="li" className="max-w-fit">
        <NextLink className="flex justify-start items-center" href="/">
          <p className="font-bold text-inherit">DORETTO</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full gap-14" justify="end">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarLinks />
        </ul>
        <NavbarItem className="flex gap-2">
          <Link isExternal href={siteConfig.links.gmail} aria-label="Twitter">
            <SiGmail className="text-default-500" size={22} />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Discord">
            <FaLinkedin className="text-default-500" size={22} />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <FaGithub className="text-default-500" size={22} />
          </Link>
        </NavbarItem>
        <div className="flex items-center gap-4 ">
          <LangSwitch />
          <ThemeSwitch />
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4 gap-8" justify="end">
        <NavbarItem className="flex gap-2">
          <Link isExternal href={siteConfig.links.gmail} aria-label="Twitter">
            <SiGmail className="text-default-500" size={22} />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Discord">
            <FaLinkedin className="text-default-500" size={22} />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <FaGithub className="text-default-500" size={22} />
          </Link>
        </NavbarItem>
        <div className="flex items-center gap-4 ">
          <LangSwitch />
          <ThemeSwitch />
        </div>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarLinks />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
