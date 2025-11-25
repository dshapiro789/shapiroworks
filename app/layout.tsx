import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
    title: "Shapiro Works | Enterprise-Grade Web Services",
    description: "Cutting-edge freelance remote web services platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable, playfair.variable)}>
                <Header />
                <main className="flex-1 pt-20">
                    {children}
                </main>
                <Footer />
                <CustomCursor />
            </body>
        </html>
    );
}
