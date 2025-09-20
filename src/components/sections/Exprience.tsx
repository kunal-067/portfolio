import React from 'react';
import { Briefcase, Clock } from 'lucide-react';

const EXPERIENCE_DATA = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2021 - Present',
    description: 'Worked on real-time projects solving real-world problems for clients. Developed and deployed websites and web applications using Next.js, Nest.js, Fastify, Express.js, and MongoDB. Gained 2+ years of hands-on experience in full-stack development.',
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">Experience</h3>
        <div className="grid md:grid-cols-1 gap-8">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <exp.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="font-semibold text-lg mb-2">{exp.role}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-1">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
