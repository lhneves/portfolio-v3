import Image from 'next/image';
import DevCartoon from '@/assets/dev-cartoon.webp';

import { cn } from '@/lib/cn';

import { AboutScrollButton } from './AboutScrollButton';
import { Card, CardBody } from '@nextui-org/react';

export const About = () => {
  return (
    <section id="about" className="w-full py-20">
      <div className="w-full px-10 max-w-6xl mx-auto">
        <Card className="bg-background/60 dark:bg-default-100/50 p-0" isBlurred shadow="sm">
          <CardBody className="p-6">
            <div
              className={cn(
                'flex flex-col gap-8',
                'lg:grid lg:grid-cols-12 lg:items-center lg:justify-cente',
              )}
            >
              <div className="w-full lg:col-span-6">
                <Image
                  alt="Album cover"
                  className={cn(
                    'object-cover object-[50%_60%] rounded-xl w-full',
                    'h-[12rem] md:h-[22rem] lg:h-[33rem]',
                  )}
                  height={2048}
                  width={2048}
                  src={DevCartoon}
                  placeholder="blur"
                />
              </div>

              <div className="flex flex-col gap-5 font-light text-sm md:text-base lg:col-span-6">
                <h3 className="font-semibold text-violet-blue-gradient w-fit text-2xl">
                  Who am I?
                </h3>
                <p>
                  I&apos;m a<span className="text-blue-600 font-semibold"> Frontend Developer</span>
                  , with a 3+ years of experience, passionate about performance and design, creating
                  delightful user experiences.
                </p>
                <p>
                  Focusing on creating fast and modern applications, I&apos;ve been creating high
                  quality interfaces, applying{' '}
                  <span className="text-blue-600 font-semibold">
                    animations, responsiveness and SEO
                  </span>
                  .
                </p>
                <p>
                  My main formula is:
                  <br />
                  <span className="text-blue-600 font-semibold">
                    Performance + UX/UI = Amazing Interfaces
                  </span>
                </p>
                <p>I love to collaborate, connect and exchange experiences with others.</p>
                <p className="text-blue-600 font-semibold">Feel free to contact me.</p>
                <div className="flex justify-end">
                  <AboutScrollButton />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
