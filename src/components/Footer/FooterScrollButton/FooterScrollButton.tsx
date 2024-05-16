'use client';

import Link from 'next/link';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';

export const FooterScrollButton = () => {
  return (
    <Link href="/" className="flex items-center space-x-2" onClick={() => scroll.scrollToTop()}>
      <FaRegArrowAltCircleUp />
      <p>Back to top</p>
    </Link>
  );
};
