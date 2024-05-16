'use client';

import { Link } from 'react-scroll';
import { Button } from '@nextui-org/react';

export const AboutScrollButton = () => {
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
      Contact Me
    </Button>
  );
};
