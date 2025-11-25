"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    PenTool,
    Mail,
    MessageCircle,
    TestTube,
    TrendingUp,
    Users
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

const services = [
    {
        icon: Globe,
        title: "Website & Application Development",
        description: "Crafting digital experiences that breathe life into your brand's story.",
        narrative: "From concept to launch, we architect responsive, performance-optimized solutions that captivate and convert.",
        chapter: "I"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Stories that fit in your pocket, experiences that stay in your heart.",
        narrative: "Native and cross-platform applications designed with purpose, built with precision.",
        chapter: "II"
    },
    {
        icon: PenTool,
        title: "Content Strategy & Creation",
        description: "Every word matters. Every message resonates.",
        narrative: "Professional blogging, newsletters, and content marketing that speaks to your audience's soul.",
        chapter: "III"
    },
    {
        icon: Users,
        title: "Administrative & Virtual Assistance",
        description: "Behind every great story is seamless execution.",
        narrative: "Streamline your workflow with intelligent task management and dedicated support.",
        chapter: "IV"
    },
    {
        icon: TestTube,
        title: "Quality Assurance & Testing",
        description: "Perfection isn't optional—it's our standard.",
        narrative: "Comprehensive testing ensures your digital narrative runs flawlessly, every time.",
        chapter: "V"
    },
    {
        icon: TrendingUp,
        title: "Social Media & Digital Marketing",
        description: "Amplify your voice across the digital landscape.",
        narrative: "Strategic campaigns that turn followers into believers and believers into advocates.",
        chapter: "VI"
    },
    {
        icon: Mail,
        title: "Email Marketing Strategy",
        description: "Messages that matter, campaigns that convert.",
        narrative: "Targeted automation and design that transforms inboxes into opportunities.",
        chapter: "VII"
    },
    {
        icon: MessageCircle,
        title: "Technical Consulting",
        description: "Wisdom forged through years of digital craftsmanship.",
        narrative: "Expert guidance on architecture, technology, and digital transformation.",
        chapter: "VIII"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1
    }
};

export function ServicesSection() {
    return (
        <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header - Storytelling style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-blue">
                        <span className="text-xs font-medium tracking-widest uppercase text-primary">
                            Chapter II: Our Craft
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                        Eight Disciplines of
                        <br />
                        <GradientText>Digital Mastery</GradientText>
                    </h2>

                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Each service is a chapter in your journey—crafted with precision,
                        delivered with passion, designed to elevate your digital presence.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div key={index} variants={cardVariants}>
                                <GlassCard
                                    className="p-8 h-full group cursor-pointer relative overflow-hidden"
                                    hover={true}
                                >
                                    {/* Chapter number */}
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                                        {service.chapter}
                                    </div>

                                    {/* Icon with glow effect */}
                                    <div className="mb-6 relative">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                    </div>

                                    {/* Service title */}
                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-gradient transition-all relative z-10">
                                        {service.title}
                                    </h3>

                                    {/* Storytelling description */}
                                    <p className="text-sm text-foreground/90 mb-3 italic relative z-10">
                                        "{service.description}"
                                    </p>

                                    {/* Narrative detail */}
                                    <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                                        {service.narrative}
                                    </p>

                                    {/* Hover decoration - visible by default on mobile */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Pricing narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 text-center"
                >
                    <GlassCard variant="strong" className="max-w-3xl mx-auto p-12 relative overflow-hidden">
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />

                        <div className="relative z-10">
                            <div className="mb-6 text-sm tracking-widest uppercase text-primary">
                                Investment in Excellence
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                                Your Story, <GradientText>Your Budget</GradientText>
                            </h3>

                            <p className="text-muted-foreground mb-8 text-lg">
                                Starting at{" "}
                                <span className="text-4xl font-bold text-gradient mx-2">$45</span>
                                per hour
                            </p>

                            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                                Every project is unique. We craft custom packages tailored to your vision,
                                timeline, and ambitions. Let's discuss how we can bring your story to life.
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
