"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-industrial-slate/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-industrial-slate/50 to-industrial-slate/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-industrial-blue/20 border border-industrial-blue/50 text-industrial-blue font-semibold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
                        ISO Certified Precision
                    </span>

                    <h1 className="text-4xl md:text-6xl kw-font-bold tracking-tight mb-6">
                        Precision Metalwork & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-orange-400">
                            Custom Fabrication
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                        Expert engineering solutions in Mulavukad, Ernakulam. From heavy-duty lathe machining to intricate welding and custom metal fabrication.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group relative flex items-center justify-center py-4 px-8 text-base font-bold text-white transition-all duration-200 bg-industrial-orange hover:bg-orange-600 rounded-sm shadow-lg hover:shadow-orange-500/25 overflow-hidden w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center">
                                Request a Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/services"
                            className="flex items-center justify-center py-4 px-8 text-base font-bold text-white transition-all duration-200 bg-transparent border-2 border-white/20 hover:bg-white/10 hover:border-white/40 rounded-sm backdrop-blur-sm w-full sm:w-auto"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </div>
    );
}
