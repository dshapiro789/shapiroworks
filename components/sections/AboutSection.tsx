"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";

const teamMembers = [
    {
        name: "David Shapiro",
        image: "/team/jenna-shapiro.png",
    },
    {
        name: "Jenna Shapiro",
        image: "/team/david-shapiro.jpg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Ambient glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-blue">
                        <span className="text-xs font-medium tracking-widest uppercase text-primary">
                            Chapter IV: Meet the Team
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                        The <GradientText>Architects</GradientText>
                        <br />
                        Behind Your Vision
                    </h2>

                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Every great story needs skilled storytellers—meet the duo
                        dedicated to bringing your digital narrative to life.
                    </p>
                </motion.div>

                {/* Team Members Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center"
                        >
                            <GlassCard
                                className="p-8 w-full group cursor-pointer relative overflow-hidden"
                                hover={true}
                            >
                                {/* Decorative corner accents */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Headshot Container */}
                                <div className="relative mx-auto mb-8">
                                    {/* Image container with blue glow outline on hover */}
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                                        />

                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl sm:text-3xl font-bold text-center group-hover:text-gradient transition-all duration-300">
                                    {member.name}
                                </h3>

                                {/* Hover decoration line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
