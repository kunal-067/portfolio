'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database,Box } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Next.js', icon: <Code size={14} />, color: 'cyan' },
    { name: 'Nest.js', icon: <Server size={14} />, color: 'purple' },
    { name: 'MongoDB', icon: <Database size={14} />, color: 'green' },
    { name: 'Docker', icon: <Box size={14} />, color: 'blue' },
  ];

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 lg:px-8 py-4 sm:py-12 flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Left: Profile Box */}
      <motion.div
        className="w-80 lg:w-96"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ProfileBox />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        className="flex-1 space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m <span className="font-semibold">Kunal Shroff</span> — a freelance full-stack developer focused on building
          reliable, maintainable systems. I craft clean APIs, fast front-ends, and intuitive interfaces.
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          I specialize in building high-performance web applications using modern tools and frameworks, with an emphasis
          on <span className="text-cyan-400 font-medium">Next.js</span>, <span className="text-purple-400 font-medium">Nest.js</span>, and <span className="text-green-400 font-medium">MongoDB</span>.
        </p>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-${skill.color}-500/20 text-${skill.color}-400 shadow-md backdrop-blur-sm`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </div>

        {/* Testimonials / Highlights */}
        <motion.div
          className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="italic text-gray-600 dark:text-gray-300 text-sm">
            "Kunal transformed our project with his expertise in Next.js and Nest.js — the performance gains were incredible!"
          </p>
          <p className="mt-2 text-xs text-gray-400">— Jane Doe, CTO @ WebInnovate</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

const ProfileBox = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--mx', String((x * 25).toFixed(2)));
      el.style.setProperty('--my', String((y * -15).toFixed(2)));
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-visible parallax"
      style={{
        transform: 'rotateY(calc(var(--mx,0)*0.3deg)) rotateX(calc(var(--my,0)*0.3deg))',
      }}
    >
      {/* Main Profile Image */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500"
        initial={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/my_img2.jpg"
          alt="Kunal Shroff"
          className="w-full h-full object-cover rounded-full"
        />

        {/* Glow Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full border-2 border-purple-400/40 animate-spin-reverse-slow"></div>

        {/* Floating Neon Dots */}
        {Array.from({ length: 12 }).map((_, i) => {
          const size = 4 + Math.random() * 4; // 4px to 8px
          const distance = 60 + Math.random() * 40; // radius around profile
          const angle = (i / 12) * 2 * Math.PI;

          return (
            <motion.div
              key={i}
              className="absolute bg-cyan-400 rounded-full opacity-70 blur-sm"
              style={{
                width: size,
                height: size,
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
              }}
              animate={{
                x: [
                  Math.cos(angle) * distance,
                  Math.cos(angle + Math.PI) * distance,
                ],
                y: [
                  Math.sin(angle) * distance,
                  Math.sin(angle + Math.PI) * distance,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 + Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </motion.div>

      {/* Base Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
    </div>
  );
};
