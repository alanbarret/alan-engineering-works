"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-industrial-slate text-white border-b border-industrial-steel/30 backdrop-blur-md bg-opacity-95 supports-[backdrop-filter]:bg-opacity-80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-industrial-orange p-1.5 rounded-sm group-hover:bg-white transition-colors duration-300">
                            <Hammer className="h-6 w-6 text-white group-hover:text-industrial-orange transition-colors duration-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg tracking-tight leading-none text-white">Alan</span>
                            <span className="text-xs uppercase tracking-widest text-industrial-steel font-semibold">Engineering works</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-industrial-steel/20 transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-industrial-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Request Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-industrial-steel/20 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-industrial-slate border-b border-industrial-steel/30"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-industrial-steel/20 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 bg-industrial-orange hover:bg-orange-600 text-white px-5 py-3 rounded-sm text-base font-bold uppercase transition-colors"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
