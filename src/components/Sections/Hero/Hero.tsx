import { HeroScrollButton } from './HeroScrollButton';

import { WavyBackground } from '@/components/WavyBackground';

export const Hero = () => {
  return (
    <section id="home" className="relative h-[calc(100svh_-_4rem)] w-full">
      <WavyBackground className="max-w-4xl mx-auto pb-60">
        <div>
          <p className="mb-10 text-xl md:text-3xl lg:text-5xl mt-4 font-medium  text-center">
            Hi, there! 👋🏼
          </p>
          <p className="mb-7 text-3xl md:text-5xl lg:text-7xl font-bold  text-center">
            My name is Luiz Doretto
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-center font-light">
            And I&apos;m here to unlock the best of frontend development
          </p>
          <div className="absolute-center-bottom">
            <HeroScrollButton />
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};
