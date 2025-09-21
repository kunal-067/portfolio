'use client'
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  Database,
  Server,
  Code,
  Rocket,
} from "lucide-react";
import { SOCIAL } from '@/lib/socials'

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


type Snippet = string;
const CODE_SNIPPETS: Snippet[] = [
  `fetch('/api/auth')\n  .then(res => res.json())\n  .then(u => console.log(u));`,
  `const ai = async () => {\n  const r = await model.predict(input);\n  return r;\n}`,
  `SELECT * FROM users\nWHERE active = 1\nORDER BY last_seen DESC;`,
  `for (let i=0;i<items.length;i++) {\n  process(items[i]);\n}`,
  `// deploy: production\nRUN npm ci && npm run build && pm2 restart all`,
];
export function Hero2() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentSnippet, setCurrentSnippet] = useState<number>(0);
  const [typing, setTyping] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(() => {
      if (!mounted) return;
      setLines(prev => {
        const next = [...prev];
        const snippet = CODE_SNIPPETS[currentSnippet];
        const parts = snippet.split(/\n/).filter(Boolean);
        const pick = parts[Math.floor(Math.random() * parts.length)];
        next.push(pick);
        if (next.length > 18) next.shift();
        return next;
      });
    }, 600);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [currentSnippet]);

  useEffect(() => {
    const rotate = setInterval(() => {
      setTyping(true);
      setTimeout(() => setTyping(false), 1200);
      setCurrentSnippet(n => (n + 1) % CODE_SNIPPETS.length);
    }, 8000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", String((x * 18).toFixed(2)));
      el.style.setProperty("--my", String((y * -12).toFixed(2)));
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative max-w-6xl py-6 md:py-12 mx-auto overflow-hidden min-h-[72vh] h-fit flex items-center transition-colors duration-500"
      style={{
        backgroundImage: `url('/mnt/data/download.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <style>{`
  .neon-border { 
    box-shadow: 0 6px 30px rgba(6, 182, 212, 0.4), inset 0 0 40px rgba(6, 182, 212, 0.2); 
  }
  @keyframes flicker { 0% { opacity: 1; } 5% { opacity: 0.85; } 10% { opacity: 0.98; } 100% { opacity: 1; } }
  .matrix-lines { mix-blend-mode: screen; opacity: 0.18; filter: blur(0.4px); }
  .digit-stream { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace; letter-spacing: 0.06em; }
  .typing-cursor::after {
    content: "";
    display: inline-block;
    width: 9px;
    height: 1.2em;
    margin-left: 6px;
    background: linear-gradient(90deg, rgba(6,182,212,1), rgba(6,182,212,0.3));
    animation: blink 1s steps(2, start) infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }
  .parallax {
    transform: perspective(1100px) rotateY(calc(var(--mx, 0) * 0.2deg)) rotateX(calc(var(--my, 0) * 0.2deg)) translateZ(0);
    transition: transform 0.08s linear;
  }
  .code-line { animation: slideIn 0.7s cubic-bezier(.2,.9,.3,1); }
  @keyframes slideIn { from { transform: translateY(6px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .glow-pulse { animation: glowPulse 2s ease-in-out infinite alternate; }
  @keyframes glowPulse { from { text-shadow: 0 0 4px #06b6d4, 0 0 8px #06b6d4; } to { text-shadow: 0 0 16px #06b6d4, 0 0 32px #06b6d4; } }
  .floating { animation: floating 6s ease-in-out infinite; }
  @keyframes floating { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
`}</style>

      <div className="container mx-auto px-6 lg:px-12 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold leading-tight glow-pulse"
            >
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-100 dark:from-cyan-400 dark:to-cyan-200">high-performance</span> web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="max-w-xl text-slate-700 dark:text-slate-300"
            >
              I build Interactive UIs, scalable backends, Specializing in Next.js, Nest.js, Fastify, Express.js and MongoDB — I ship production-ready systems with focus on performance and maintainability.
            </motion.p>

            <div className="flex flex-col gap-4">
              <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <motion.a
                whileHover={{ scale: 1.03, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-block rounded-lg neon-border bg-gradient-to-r from-cyan-500/20 to-green-400/10 px-4 py-2 text-base font-semibold text-black dark:text-white border border-white/10 backdrop-blur-sm hover:shadow-md transition-all duration-300"
              >
                <Rocket className="inline-block mr-1" size={16} /> View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-block rounded-lg px-4 py-2 text-base font-semibold text-black dark:text-white border border-white/10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <MessageSquare className="inline-block mr-1" size={16} /> Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="/resume.pdf"
                className="inline-block rounded-lg px-4 py-2 text-base font-medium text-cyan-400 hover:text-purple-400 transition-colors duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Live Demo
              </span>
              <span className="text-cyan-400">·</span>
              <span>Animated Terminal</span>
              <span className="text-cyan-400">·</span>
              <span>Neon Design</span>
            </motion.div>

            {/* Simplified Skills and Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col gap-3 text-sm"
            >
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                  <Code className="mr-1" size={12} /> Next.js
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                  <Server className="mr-1" size={12} /> Nest.js
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                  <Database className="mr-1" size={12} /> MongoDB
                </span>
              </div>
            </motion.div>
            </div>
            
          </div>

          {/* Right Terminal */}
          <div className="relative">
            <motion.div
              className="parallax rounded-2xl border p-4 backdrop-blur-sm max-w-[720px] w-full floating border-white/6 dark:border-white/20 bg-black/5 dark:bg-black/80"
              style={{ transformOrigin: "center" }}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500 shadow-md animate-pulse" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-md animate-pulse" />
                  <span className="h-3 w-3 rounded-full bg-green-400 shadow-md animate-pulse" />
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-300">/dev/portfolio — running</div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 pointer-events-none matrix-lines animate-pulse">
                  <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none" className="opacity-60">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#06f6ff" stopOpacity="0.35" />
                      </linearGradient>
                    </defs>
                    {Array.from({ length: 40 }).map((_, i) => (
                      <text key={i} x={(i * 16) % 600} y={(i * 11) % 200} fontSize={8} fill="url(#g)">{"01 10 11"}</text>
                    ))}
                  </svg>
                </div>

                <div
                  className="relative z-10 h-[320px] overflow-hidden rounded-lg neon-border
             bg-gradient-to-b from-white/40 to-white/20 dark:from-black/25 dark:to-black/50 transition-colors duration-500"
                  style={{ color: "inherit" }}
                >
                  <div className="p-4 h-full flex flex-col justify-end animate-fadeIn">
                    <div className="text-[12px] font-mono text-gray-700 dark:text-slate-300 opacity-90">{`// live stream`}</div>

                    <div className="mt-3 space-y-1 text-[13px] font-mono leading-[1.25] max-h-[220px] overflow-hidden">
                      {lines.map((l, idx) => (
                        <motion.div
                          key={idx}
                          className={`code-line ${idx === lines.length - 1 && typing ? 'typing-cursor' : ''}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="digit-stream text-gray-800 dark:text-cyan-500">{l}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3 pt-3 border-t border-gray-300 dark:border-white/20">
                      <div className="text-xs text-gray-700 dark:text-slate-300">$</div>
                      <div className="flex-1 text-xs font-mono">
                        <span className="opacity-90 text-gray-800 dark:text-slate-200">user@portfolio</span>
                        <span className="mx-2 text-gray-500 dark:text-slate-500">:</span>
                        <span className="text-gray-900 dark:text-cyan-400">~</span>
                        <span className="mx-2 text-gray-500 dark:text-slate-500">$</span>
                        <span className="ml-1">{typing ? CODE_SNIPPETS[currentSnippet].slice(0, 40) + (CODE_SNIPPETS[currentSnippet].length > 40 ? '...' : '') : ''}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-slate-300 animate-pulse">{new Date().toLocaleTimeString()}</div>
                    </div>
                  </div>
                </div>


              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 2, -2, 0] }}
              transition={{ delay: 0.4, duration: 4, repeat: Infinity }}
              className="absolute -right-8 -top-8 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(closest-side, rgba(6,182,212,0.12), transparent 60%)",
                filter: "blur(14px)",
              }}
            />

            <div className="absolute -bottom-6 left-6 text-[11px] text-slate-400/70 dark:text-slate-300/70">Custom terminal renderer · parallax · svg weave · framer-motion</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute z-20 left-3 top-8 opacity-80 animate-pulse">
        <div className="digit-stream text-[11px] -rotate-2 tracking-wider select-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="block leading-tight h-full text-slate-400 dark:text-slate-300">{Math.random() > 0.5 ? '0' : '1'}{Math.random() > 0.6 ? Math.floor(Math.random() * 9) : ''}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/0 dark:from-black/0 to-transparent" />
    </section>
  );
}
