import { CardHoverEffect } from '@/components/CardHoverEffect';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
} from 'react-icons/si';

export const Skills = () => {
  const projects = [
    {
      id: 0,
      title: 'HTML',
      description: 'HTML is the standard markup language for creating web pages and applications',
      icon: <SiHtml5 size={24} className="text-primary" />,
    },
    {
      id: 1,
      title: 'CSS',
      description: 'CSS is the language used for styling the appearance of web pages',
      icon: <SiCss3 size={24} className="text-primary" />,
    },
    {
      id: 2,
      title: 'JavaScript',
      description:
        'JavaScript is a versatile programming language used for both front-end and back-end web development ',
      icon: <SiJavascript size={24} className="text-primary" />,
    },
    {
      id: 3,
      title: 'TypeScript',
      description:
        'Typescript is a statically-typed superset of JavaScript that enhances code quality and maintainability',
      icon: <SiTypescript size={24} className="text-primary" />,
    },
    {
      id: 4,
      title: 'React',
      description: 'React is a powerful JavaScrip library for building interactive user interfaces',
      icon: <SiReact size={24} className="text-primary" />,
    },
    {
      id: 5,
      title: 'Next',
      description:
        'Next is a framework that extends React for creating server-rendered applications',
      icon: <SiNextdotjs size={24} className="text-primary" />,
    },
    {
      id: 6,
      title: 'Styled Components',
      description:
        'Styled-Components is a CSS-in-JS library that allows you to write CSS styles directly in your JavaScript',
      icon: <SiStyledcomponents size={24} className="text-primary" />,
    },
    {
      id: 7,
      title: 'Jest',
      description:
        'Jest is a testing framework that provides a simple and efficient way to test code',
      icon: <SiJest size={24} className="text-primary" />,
    },
  ];

  return (
    <section id="skills" className="w-full py-20">
      <div className="w-full h-full px-10 max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-5xl">Skills</h2>
        <p className="text-center py-10">Some of my skills used in recent projects.</p>
        <CardHoverEffect items={projects} />
      </div>
    </section>
  );
};
