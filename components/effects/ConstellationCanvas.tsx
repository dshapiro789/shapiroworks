"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export function ConstellationCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // EDIT HERE: Frame Rate Control
        // Controls how often physics updates occur. Higher = slower animation.
        // Current: Updates every 3 frames (~20fps for smooth graceful movement)
        let frameCount = 0;
        const updateEveryNFrames = 3;

        // Configuration - Optimize for mobile
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 30 : 60;
        const connectionDistance = isMobile ? 100 : 150;
        const mouseDistance = 200;
        const colors = [
            "hsla(217, 91%, 60%, 0.8)", // Electric Blue
            "hsla(191, 91%, 55%, 0.8)", // Cyan
            "hsla(0, 0%, 100%, 0.5)"    // White
        ];

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    // EDIT HERE: Initial Speed
                    // The multiplier (0.15) controls the starting speed.
                    // Higher = Faster, Lower = Slower.
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.15,
                    size: Math.random() * 2 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            frameCount++;
            const shouldUpdate = frameCount % updateEveryNFrames === 0;

            // Update and draw particles
            particles.forEach((p, i) => {
                // Only update physics every N frames AND only on desktop
                if (shouldUpdate && !isMobile) {
                    // Move
                    p.x += p.vx;
                    p.y += p.vy;

                    // EDIT HERE: Friction (Damping)
                    // Values closer to 1.0 (e.g., 0.99) mean less friction (particles slide longer).
                    // Lower values (e.g., 0.90) mean more friction (particles stop faster).
                    p.vx *= 0.995;
                    p.vy *= 0.995;

                    // EDIT HERE: Minimum Movement
                    // Ensures particles never completely stop.
                    // The 0.003 value controls this subtle drift.
                    if (Math.abs(p.vx) < 0.01) p.vx += (Math.random() - 0.5) * 0.003;
                    if (Math.abs(p.vy) < 0.01) p.vy += (Math.random() - 0.5) * 0.003;

                    // Bounce off walls
                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                    // Mouse interaction
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;

                        // EDIT HERE: Mouse Interaction Force
                        // The multiplier (0.03) controls how strongly particles react to the mouse.
                        // Increase to make them flee faster.
                        const directionX = forceDirectionX * force * 0.03;
                        const directionY = forceDirectionY * force * 0.03;

                        p.vx -= directionX;
                        p.vy -= directionY;
                    }
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", resize);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-[200px] sm:h-[300px] relative overflow-hidden rounded-3xl glass-blue mt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full touch-none" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                    <p className="text-sm font-medium tracking-[0.2em] text-primary/80 uppercase mb-2">
                        System Status
                    </p>
                    <p className="text-2xl font-bold text-white/90">
                        Operational
                    </p>
                </div>
            </div>
        </div>
    );
}
