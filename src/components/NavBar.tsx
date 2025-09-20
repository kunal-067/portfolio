'use client'
import React, { useEffect, useState } from 'react'
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
import { SOCIAL } from '@/lib/socials'
import { motion } from "framer-motion";
import Link from 'next/link';

const NavBar = () => {
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
        <nav className="sticky top-0 z-50 bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-transparent dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold">KS</div>
                            <span className="hidden md:inline font-semibold">Kunal Shroff</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#projects" className="hover:text-cyan-400 transition">
                            Projects
                        </Link>
                        <Link href="/blogs" target='_blank' className="hover:text-cyan-400 transition">
                            Blogs
                        </Link>
                        <Link href="/#about" className="hover:text-cyan-400 transition">
                            About
                        </Link>
                        <Link href="/#contact" className="hover:text-cyan-400 transition">
                            Contact
                        </Link>
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

                        <Link
                            href="/#contact"
                            className="hidden md:inline-block bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                        >
                            Hire Me
                        </Link>

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
                    className="fixed top-0 right-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md flex flex-col"
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

                    <div className="mt-4 mb-3 px-6 flex flex-col gap-2 text-lg">
                        <Link onClick={() => setMenuOpen(false)} href="/#projects" className="font-medium active:bg-gray-200 dark:active:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
                            Projects
                        </Link>
                        <Link onClick={() => setMenuOpen(false)} href="/blogs" target='_blank' className="font-medium active:bg-gray-200 dark:active:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
                            Blogs
                        </Link>
                        <Link onClick={() => setMenuOpen(false)} href="/#about" className="font-medium active:bg-gray-200 dark:active:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
                            About
                        </Link>
                        <Link onClick={() => setMenuOpen(false)} href="/#contact" className="font-medium active:bg-gray-200 dark:active:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
                            Contact
                        </Link>
                    </div>

                    <div className="mt-auto p-6 border-t border-gray-200 dark:border-white/20">
                        <p className="text-sm mb-3">Connect with me</p>
                        <div className="flex items-center gap-4">
                            <Link href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <Github />
                            </Link>
                            <Link href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Linkedin />
                            </Link>
                            <Link href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <Instagram />
                            </Link>
                            <Link href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                <MessageSquare />
                            </Link>
                            <Link href={SOCIAL.phone} aria-label="Phone">
                                <Phone />
                            </Link>
                            <Link href={SOCIAL.mail} aria-label="Email">
                                <Mail />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default NavBar