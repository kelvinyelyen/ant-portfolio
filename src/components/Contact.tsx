"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-accent font-medium tracking-widest mb-2 uppercase">
                        Get in Touch
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Let's work together
                    </h3>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                        I'm currently available for freelance projects and open to full-time opportunities.
                        If you have a project that needs some creative touch, feel free to contact me.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                        <div className="bg-secondary/50 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-white font-bold text-xl mb-6">Send a Message</h4>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-slate-400 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-slate-400 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm text-slate-400 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-white transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col justify-center space-y-8 p-8">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">Contact Info</h4>
                                <a href="mailto:hello@anthony.dev" className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors text-lg">
                                    <Mail size={20} />
                                    hello@anthony.dev
                                </a>
                            </div>

                            <div>
                                <h4 className="text-white font-bold text-lg mb-4">Socials</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-slate-300 hover:bg-accent hover:text-primary transition-all duration-300">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-slate-300 hover:bg-accent hover:text-primary transition-all duration-300">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-slate-300 hover:bg-accent hover:text-primary transition-all duration-300">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} Anthony Amihere. All rights reserved.
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
