"use client";

import { motion } from "framer-motion";
import { Send, PenTool } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { useState } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setShowSuccessModal(true);
                setFormState({ name: "", email: "", service: "", message: "" });
            } else {
                setSubmitStatus('error');
            }
        } catch (_error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue">
                            <span className="text-xs font-medium tracking-widest uppercase text-primary">
                                Chapter IV: Begin Your Story
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Let&apos;s Write Your <br />
                        <GradientText>Next Chapter</GradientText>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Ready to bring your vision to life? Tell us about your project,
                        and let&apos;s create something extraordinary together.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <GlassCard className="p-8 sm:p-12 relative overflow-hidden">
                        {/* Artistic corner accent */}
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <PenTool className="w-24 h-24 text-primary transform rotate-12" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-muted-foreground ml-1">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    value={formState.service}
                                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 appearance-none"
                                >
                                    <option value="" disabled className="bg-background">Select a service...</option>
                                    <option value="web-design" className="bg-background">Website Design & Development</option>
                                    <option value="app-dev" className="bg-background">Mobile App Development</option>
                                    <option value="content" className="bg-background">Content Strategy</option>
                                    <option value="marketing" className="bg-background">Digital Marketing</option>
                                    <option value="other" className="bg-background">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">
                                    Project Vision
                                </label>
                                <textarea
                                    id="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                                    placeholder="Tell us about your goals..."
                                    required
                                />
                            </div>

                            <div className="flex flex-col items-end gap-4 pt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-6 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="mr-2">
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </Button>

                                {submitStatus === 'success' && (
                                    <p className="text-sm text-primary">Message sent successfully! We&apos;ll be in touch soon.</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-sm text-destructive">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />
        </section>
    );
}
