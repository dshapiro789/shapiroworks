import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";

export default function Home() {
    return (
        <>
            <AnimatedBackground />
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </>
    );
}
