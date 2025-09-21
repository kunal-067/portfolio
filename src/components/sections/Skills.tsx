'use client';
import React, { memo } from 'react';
import { BookOpen, Database, Server, Workflow, Code, Box } from 'lucide-react';
import Link from 'next/link';

interface Skill {
  name: string;
  desc: string;
  src: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skills: readonly Skill[] = [
  { name: 'Next.js', desc: 'Modern SSR & ISR', src: '/blogs/nextjs', icon: BookOpen },
  { name: 'Nest.js', desc: 'TypeScript backend', src: '/blogs/nestjs', icon: Server },
  { name: 'Fastify', desc: 'Fast Node.js APIs', src: '/blogs/fastify', icon: Server },
  { name: 'Express.js', desc: 'Robust Node.js framework', src: '/blogs/express', icon: Server },
  { name: 'MongoDB', desc: 'NoSQL database', src: '/blogs/mongodb', icon: Database },
  { name: 'Redis', desc: 'In-memory caching', src: '/blogs/redis', icon: Database },
  { name: 'RabbitMQ', desc: 'Message broker', src: '/blogs/rabbitmq', icon: Workflow },
  { name: 'Kafka', desc: 'Event streaming', src: '/blogs/kafka', icon: Workflow },
  { name: 'TypeScript', desc: 'Type-safe JavaScript', src: '#', icon: Code },
  { name: 'Prisma', desc: 'Modern ORM', src: '#', icon: Database },
  { name: 'Docker', desc: 'Containerized apps', src: '#', icon: Box },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 lg:px-8 py-12"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"
      >
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill) => {
          const tooltipId = `tooltip-${skill.name.toLowerCase().replace(/\./g, '-')}`;
          const tooltipText =
            skill.src === '#' ? `Coming soon: ${skill.name} guide` : `Read my ${skill.name} blog`;

          return (
            <article
              key={skill.name}
              role="link"
              tabIndex={0}
              className="group relative p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-400 focus-visible:outline-none"
              aria-describedby={tooltipId}
            >
              <Link
                href={skill.src}
                target={skill.src === '#' ? '_self' : '_blank'}
                rel={skill.src === '#' ? undefined : 'noopener noreferrer'}
                aria-label={`Learn more about ${skill.name}`}
                className="block"
              >
                <div className="flex items-center gap-3">
                  <skill.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400">{skill.name}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.desc}</p>
              </Link>

              {/* Tooltip */}
              <span
                id={tooltipId}
                className="absolute hidden group-hover:block top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                {tooltipText}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Skills);
