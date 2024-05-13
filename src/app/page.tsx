import { Hero } from '@/components/Sections/Hero';
import { About } from '@/components/Sections/About';
import { Skills } from '@/components/Sections/Skills';
import { Contact } from '@/components/Sections/Contact/Contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
