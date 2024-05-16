'use client';

import { Link } from 'react-scroll';
import { Button } from '@nextui-org/react';

export const HeroScrollButton = () => {
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
      Check it out
    </Button>
  );
};
