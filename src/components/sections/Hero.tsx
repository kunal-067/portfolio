import React from 'react'
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
} from "lucide-react";
import {SOCIAL} from '@/lib/socials.js'

const Hero = () => {
  return (
    <header className="max-w-6xl mx-auto px-6 lg:px-8 py-6 md:py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <p className="text-sm uppercase tracking-wide text-cyan-400 font-medium">Freelance Full-Stack Developer</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                  I build <span className="text-cyan-400">fast</span>, <span className="text-purple-400">scalable</span> web apps with
                  modern stacks.
                </h1>
    
                <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg">
                  Specializing in Next.js, Nest.js, Fastify, Express.js and MongoDB — I ship production-ready systems with focus on
                  performance and maintainability.
                </p>
    
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#projects" className="inline-block bg-cyan-500 text-black px-5 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
                    View Work
                  </a>
                  <a href="#contact" className="inline-block border border-cyan-500 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition">
                    Hire Me
                  </a>
                  <a href="/resume.pdf" className="inline-block px-5 py-3 rounded-lg font-medium hover:underline">
                    Download Resume
                  </a>
                </div>
    
                <div className="mt-8 flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-400">
                    <Github />
                  </a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400">
                    <Linkedin />
                  </a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-cyan-400">
                    <Instagram />
                  </a>
                  <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-cyan-400">
                    <MessageSquare />
                  </a>
                </div>
              </motion.div>
    
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex justify-center">
                {/* Replace placeholder below with your own portrait or an illustration */}
                <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <img src="/tech.jpg" alt="Hero mock" className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>
          </header>
  )
}

export default Hero