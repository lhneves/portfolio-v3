import { Hero } from '@/components/Sections/Hero';
import { About } from '@/components/Sections/About';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
    </main>
  );
}
