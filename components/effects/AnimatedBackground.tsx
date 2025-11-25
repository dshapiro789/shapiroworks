"use client";

import React from "react";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Animated gradient mesh */}
            <div className="absolute inset-0 gradient-mesh opacity-30" />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

            {/* Grid overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
}
