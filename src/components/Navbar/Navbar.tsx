import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';

import NextLink from 'next/link';
import { Link } from '@nextui-org/link';

import { ThemeSwitch } from '@/components/ThemeSwitch';

import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
  return (
    <NextUINavbar
      isBordered
      className="px-10"
      classNames={{ wrapper: ['px-0'] }}
      shouldHideOnScroll
      motionProps={{
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -10, opacity: 0 },
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 35,
        },
      }}
    >
      <NavbarBrand as="li" className="max-w-fit">
        <NextLink className="flex justify-start items-center" href="/">
          <p className="font-bold text-inherit">DORETTO</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full gap-14" justify="end">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href} isActive={index === 0}>
              <Link color={index === 0 ? 'primary' : 'foreground'} href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
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
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
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
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} isActive={index === 0}>
              <Link color={index === 0 ? 'primary' : 'foreground'} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
