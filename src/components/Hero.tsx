"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary py-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-primary to-primary opacity-50" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-accent font-medium tracking-widest mb-4 uppercase">
                            Data Analyst
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Anthony Amihere
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
                            I transform complex data into actionable insights and compelling visual stories.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            I am a dedicated Data Analyst with a keen eye for patterns. I specialize
                            in interpreting complex datasets and visualizing them to drive business decisions
                            using modern tools and technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <Link
                                href="#showcase"
                                className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
                            >
                                View Work
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 border border-slate-700 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full max-w-lg mx-auto aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl flex items-center justify-center group">
                                <Image
                                    src="/assets/profile.jpg"
                                    alt="Anthony Amihere"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
