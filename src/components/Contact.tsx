import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Instagram, Linkedin, Mail, Github, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "shritisri07@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight">
                        Let's Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">
                            Something Extraordinary
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Open for collaborations, freelance projects, and exciting opportunities.
                        Let's turn your vision into reality.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full"
                >
                    {/* Email Card - Large Span */}
                    <motion.div
                        variants={item}
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <button
                                    onClick={handleCopyEmail}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                                    title="Copy Email"
                                >
                                    {copied ? <Check className="w-6 h-6 text-green-400" /> : <Copy className="w-6 h-6" />}
                                </button>
                            </div>

                            <div className="space-y-4 py-8">
                                <h3 className="text-3xl font-semibold">Get in touch via Email</h3>
                                <p className="text-muted-foreground text-lg group-hover:text-white transition-colors duration-300">
                                    {email}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for new projects
                                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>

                    {/* LinkedIn Card */}
                    <motion.a
                        variants={item}
                        href="https://www.linkedin.com/in/shriti-srivastava-12bbaa252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-3xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all duration-300 min-h-[240px] flex flex-col p-6"
                    >
                        <div className="mb-auto">
                            <div className="w-12 h-12 rounded-xl bg-[#0077b5] flex items-center justify-center mb-4 text-white shadow-lg">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                            <p className="text-white/60 text-sm">Professional Network</p>
                        </div>
                        <div className="flex items-center text-sm font-medium text-[#0077b5] group-hover:text-white transition-colors mt-4">
                            Connect
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                    </motion.a>

                    {/* GitHub Card */}
                    <motion.a
                        variants={item}
                        href="https://github.com/Shriti007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 min-h-[240px] flex flex-col p-6"
                    >
                        <div className="mb-auto">
                            <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center mb-4 text-white shadow-lg">
                                <Github className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">GitHub</h3>
                            <p className="text-muted-foreground text-sm">Code & Contributions</p>
                        </div>
                        <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-4">
                            Follow
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                    </motion.a>

                    {/* Instagram Card */}
                    <motion.a
                        variants={item}
                        href="https://www.instagram.com/_.shriti._7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 min-h-[240px] flex flex-col p-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="mb-auto relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 text-white shadow-lg">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Instagram</h3>
                            <p className="text-white/60 text-sm">Creative Portfolio</p>
                        </div>
                        <div className="relative z-10 flex items-center text-sm font-medium text-pink-500 group-hover:text-pink-300 transition-colors mt-4">
                            Follow
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                    </motion.a>

                    {/* Location Card */}
                    <motion.div
                        variants={item}
                        className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-3xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 min-h-[240px] flex flex-col p-6"
                    >
                        <div className="mb-auto">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500 shadow-lg">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Location</h3>
                            <p className="text-muted-foreground text-sm">Base of Operations</p>
                        </div>
                        <div className="flex items-center text-sm font-medium text-emerald-500/80 group-hover:text-emerald-400 transition-colors mt-4">
                            Chennai, India
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
