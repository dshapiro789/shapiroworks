import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const footerLinks = {
    services: [
        { name: "Web Development" },
        { name: "App Development" },
        { name: "Content Strategy" },
        { name: "Consulting" },
    ],
    company: [
        { name: "Contact", href: "mailto:contact@shapiroworks.com" },
    ],
    connect: [
        { name: "GitHub", href: "https://github.com/dshapiro789/", icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/davidshapiro7/", icon: Linkedin },
    ],
};

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            Shapiro Works
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Enterprise-grade freelance web services for the modern digital landscape.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <span className="text-sm text-muted-foreground">
                                        {link.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {footerLinks.connect.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <span className="sr-only">{link.name}</span>
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Shapiro Works. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
