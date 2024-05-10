'use client';
import * as React from 'react';

import { cn } from '@/lib/cn';

import { Textarea as TextareaNextUI, TextAreaProps } from '@nextui-org/react';

import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(
      ${visible && !props.isInvalid && !props.isDisabled ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
      var(--blue-500),
      transparent 80%
    )`;

    return (
      <motion.div
        style={{
          background: background,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <TextareaNextUI
          type={type}
          classNames={{
            base: '!p-0 shadow-none',
            label: 'text-black/50 dark:text-white/90',
            inputWrapper:
              'rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-gray-50 group-hover/input:shadow-none shadow-input',
          }}
          className={cn(className)}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);

Textarea.displayName = 'Input';

export { Textarea };
