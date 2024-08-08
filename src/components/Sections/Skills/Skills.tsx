import { CardHoverEffect } from '@/components/CardHoverEffect';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('SkillsPage');

  const projects = [
    {
      id: 0,
      title: 'HTML',
      description: 'html',
      icon: <SiHtml5 size={24} className="text-primary" />,
    },
    {
      id: 1,
      title: 'CSS',
      description: 'css',
      icon: <SiCss3 size={24} className="text-primary" />,
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'javascript',
      icon: <SiJavascript size={24} className="text-primary" />,
    },
    {
      id: 3,
      title: 'TypeScript',
      description: 'typescript',
      icon: <SiTypescript size={24} className="text-primary" />,
    },
    {
      id: 4,
      title: 'React',
      description: 'react',
      icon: <SiReact size={24} className="text-primary" />,
    },
    {
      id: 5,
      title: 'Next',
      description: 'next',
      icon: <SiNextdotjs size={24} className="text-primary" />,
    },
    {
      id: 6,
      title: 'Styled Components',
      description: 'styled_components',
      icon: <SiStyledcomponents size={24} className="text-primary" />,
    },
    {
      id: 7,
      title: 'Jest',
      description: 'jest',
      icon: <SiJest size={24} className="text-primary" />,
    },
  ];

  return (
    <section id="skills" className="w-full py-20">
      <div className="w-full h-full px-10 max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-5xl">{t('title')}</h2>
        <p className="text-center py-10">{t('subtitle')}</p>
        <CardHoverEffect items={projects} />
      </div>
    </section>
  );
};
