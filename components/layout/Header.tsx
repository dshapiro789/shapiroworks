"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { scrollY } = useScroll();


    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "glass-strong shadow-lg py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient font-[family-name:var(--font-playfair)]">
                    Shapiro Works
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                const element = document.querySelector(item.href);
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden"
                >
                    <nav className="flex flex-col p-4 gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    const element = document.querySelector(item.href);
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary text-left",
                                    "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </button>
                        ))}
                        <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
