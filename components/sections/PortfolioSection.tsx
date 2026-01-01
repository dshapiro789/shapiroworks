"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

const projects = [
    {
        title: "Bonsai Web Design",
        url: "https://bonsaiwebdesign.com",
        description: "Premium web design agency portfolio."
    },
    {
        title: "AthleteXperience",
        url: "https://theathletexperience.com",
        description: "Feature rich mobile app for athletes (coming soon)."
    },
    {
        title: "Emerald Grove Digital",
        url: "https://emeraldgrovedigital.com",
        description: "Digital growth and marketing solutions."
    },
    {
        title: "UPrompt",
        url: "https://uprompt.me",
        description: "AI prompt engineering platform."
    },
    {
        title: "AI Bitcoin Tutor",
        url: "https://aibitcointutor.com",
        description: "Educational platform for learning Bitcoin."
    },
    {
        title: "Crypto Apparel",
        url: "https://cryptoapparel.net",
        description: "Modern e-commerce for crypto enthusiasts."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0
    }
};

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-blue">
                        <span className="text-xs font-medium tracking-widest uppercase text-primary">
                            Chapter III: Selected Works
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        Our <GradientText>Projects</GradientText>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A curated collection of impactful digital experiences.
                    </p>
                </motion.div>

                {/* Projects List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col space-y-8"
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className="group block relative pl-8 border-l-2 border-primary md:border-white/10 md:hover:border-primary transition-colors duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                                    {project.title}
                                    <ExternalLink className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                </h3>
                                <span className="text-sm text-primary/50 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
                                    {new URL(project.url).hostname}
                                </span>
                            </div>

                            <p className="text-lg text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors">
                                {project.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 rounded-lg" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
