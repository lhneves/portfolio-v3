'use client';

import { useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/react';

import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/cn';

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    icon: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ', className)}>
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className={cn(
              'relative z-20 rounded-2xl h-full w-full p-2 overflow-hidden',
              'bg-white dark:bg-black',
              'border border-transparent dark:border-white/[0.2]',
              'group-hover:border-slate-400 ',
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between w-full">
                <h4 className={cn('text-lg font-bold tracking-wide ', className)}>{item.title}</h4>
                {item.icon}
              </div>
            </CardHeader>
            <CardBody>
              <p
                className={cn(
                  'mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm',
                  className,
                )}
              >
                {item.description}
              </p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};
