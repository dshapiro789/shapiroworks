import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "accent";
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
    return (
        <span
            className={cn(
                variant === "primary" ? "text-gradient" : "text-gradient-accent",
                className
            )}
        >
            {children}
        </span>
    );
}
