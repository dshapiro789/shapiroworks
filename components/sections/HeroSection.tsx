"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/GradientText";

import { useRef } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity, scale }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 md:pt-20"
        >
            {/* Artistic floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Story arc decorative elements */}
            <div className="absolute top-20 left-10 opacity-10">
                <Code className="w-32 h-32 text-primary animate-float" />
            </div>
            <div className="absolute bottom-40 right-20 opacity-10">
                <Palette className="w-24 h-24 text-accent animate-wave" />
            </div>

            {/* Main hero content */}
            <motion.div
                className="max-w-6xl mx-auto text-center relative z-10"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Chapter marker */}
                <motion.div variants={fadeInUp} className="mb-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-blue">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium tracking-wider uppercase">
                            Chapter I: Your Digital Journey
                        </span>
                        <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                </motion.div>

                {/* Storytelling headline */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
                >
                    We Provide
                    <br />
                    <span className="relative inline-block">
                        <GradientText variant="accent">Digital Solutions</GradientText>
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 5 Q25 0, 50 5 T100 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <br />
                    That <GradientText>Work</GradientText>
                </motion.h1>

                {/* Narrative description */}
                <motion.div
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                        Remote web services that combine clean design, smart strategy, and results you can see.
                    </p>
                </motion.div>

                {/* Journey CTAs */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <Button
                        size="lg"
                        className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white text-lg px-8 py-7 rounded-2xl"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10">Begin Your Story</span>
                        <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-7 rounded-2xl glass-strong border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-white transition-all"
                        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Our Work
                    </Button>
                </motion.div>



                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-muted-foreground"
                    >
                        <span className="text-sm">Discover More</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
