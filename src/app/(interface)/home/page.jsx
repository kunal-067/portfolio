"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Phone,
    Sun,
    Moon,
    Menu,
    X,
    MessageSquare,
} from "lucide-react";
import Hero from "@/components/sections/Hero"
import About from '@/components/sections/About'
import Achivements from '@/components/sections/Achivements'
import Contacts from '@/components/sections/Contacts'
import Projects from '@/components/sections/Projects'
import DevProcess from '@/components/sections/DevProcess'
import Services from '@/components/sections/Services'
import Skills from '@/components/sections/Skills'
import Testimonials from '@/components/sections/Testimonials'
import Exprience from '@/components/sections/Testimonials'

import {SOCIAL} from '@/lib/socials.js'

export default function Home() {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const stored = localStorage.getItem("theme");
        if (stored) {
            setTheme(stored);
            root.classList.toggle("dark", stored === "dark");
        } else {
            const prefers =
                window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefers ? "dark" : "light");
            root.classList.toggle("dark", prefers);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        root.classList.toggle("dark", next === "dark");
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-slate-900 dark:text-white transition-colors duration-300">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-transparent dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <a href="#" className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold">KS</div>
                                <span className="hidden md:inline font-semibold">Kunal Shroff</span>
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#projects" className="hover:text-cyan-400 transition">
                                Projects
                            </a>
                            <a href="#testimonials" className="hover:text-cyan-400 transition">
                                Testimonials
                            </a>
                            <a href="#about" className="hover:text-cyan-400 transition">
                                About
                            </a>
                            <a href="#contact" className="hover:text-cyan-400 transition">
                                Contact
                            </a>
                        </div>

                        {/* Right controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2 rounded-md hover:bg-gray-200/30 dark:hover:bg-white/5 transition"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <a
                                href="#contact"
                                className="hidden md:inline-block bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                            >
                                Hire Me
                            </a>

                            {/* Mobile menu button */}
                            <button
                                className="md:hidden p-2 rounded-md hover:bg-gray-200/30 dark:hover:bg-white/5 transition"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu overlay */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-md bg-cyan-400 flex items-center justify-center font-bold text-black">KS</div>
                                <span className="font-semibold">Kunal Shroff</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 rounded-md hover:bg-gray-200/30 dark:hover:bg-white/5 transition"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 px-6 flex flex-col gap-6 text-lg">
                            <a onClick={() => setMenuOpen(false)} href="#projects" className="font-medium">
                                Projects
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#testimonials" className="font-medium">
                                Testimonials
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#about" className="font-medium">
                                About
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#contact" className="font-medium">
                                Contact
                            </a>
                        </div>

                        <div className="mt-auto p-6 border-t border-gray-200/40 dark:border-white/5">
                            <p className="text-sm mb-3">Connect with me</p>
                            <div className="flex items-center gap-4">
                                <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <Github />
                                </a>
                                <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <Linkedin />
                                </a>
                                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                    <Instagram />
                                </a>
                                <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                    <MessageSquare />
                                </a>
                                <a href={SOCIAL.phone} aria-label="Phone">
                                    <Phone />
                                </a>
                                <a href={SOCIAL.mail} aria-label="Email">
                                    <Mail />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>

            
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Exprience/>
            <Services/>
            <DevProcess/>
            <Achivements/>
            <Testimonials />
            <Contacts />

            <footer className="mt-12 text-center py-8 text-sm text-gray-500">
                © {new Date().getFullYear()} Kunal Shroff — Built with Next.js & Tailwind CSS
            </footer>
        </main>
    );
}
