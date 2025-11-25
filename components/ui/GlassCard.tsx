import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "strong";
    hover?: boolean;
}

export function GlassCard({
    children,
    className,
    variant = "default",
    hover = true
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl",
                variant === "default" ? "glass" : "glass-strong",
                hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                className
            )}
        >
            {children}
        </div>
    );
}
