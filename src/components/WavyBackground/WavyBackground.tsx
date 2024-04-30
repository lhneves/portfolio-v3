'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { createNoise3D } from 'simplex-noise';

import { cn } from '@/lib/cn';
import { useTheme } from 'next-themes';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
}) => {
  const { theme } = useTheme();

  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001;
      case 'fast':
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    if (canvasRef.current === null) return;

    canvas = canvasRef.current;

    if (canvas.getContext('2d') === null) return;

    ctx = canvas.getContext('2d')!;

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    w = ctx.canvas.width;
    h = ctx.canvas.height;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      w = window.innerWidth;
      h = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? ['#936DFF', '#7647f6', '#44c2fd', '#ec55d3', '#4377FF'];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.47); // adjust for height, currently at 47% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = theme === 'dark' ? 'black' : 'white';
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'),
    );
  }, []);

  return (
    <div
      className={cn(
        'h-[calc(100vh_-_4rem)] flex flex-col items-center justify-center',
        containerClassName,
      )}
    >
      <canvas
        className="absolute inset-0 z-0 h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
