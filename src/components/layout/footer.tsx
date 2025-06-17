
import { CodeXml, Briefcase, Mail, MapPin, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const GlowingIcon = ({ icon: Icon, href, label }: { icon: React.ElementType, href?: string, label: string }) => {
    const content = (
      <>
        <Icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
        <span className="text-sm">{label}</span>
      </>
    );
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:text-glow-accent"
          aria-label={label}
        >
          {content}
        </a>
      );
    }
    return (
      <div className="group flex items-center gap-2 text-muted-foreground" aria-label={label}>
        {content}
      </div>
    );
  };

  return (
    <footer className="bg-card border-t border-border/60 py-12">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            {/* Placeholder for MTU Logo */}
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" data-ai-hint="university logo">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            {/* Placeholder for NACOS Logo */}
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center" data-ai-hint="student association logo">
              <CodeXml className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            MTU NACOS Tech Fair - Igniting Innovation.
          </p>
          <p className="mt-2 text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} NACOS MTU Chapter. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Contact Us</h3>
          <div className="space-y-3">
            <GlowingIcon icon={Mail} href="mailto:nacosmtu@mtu.edu.ng" label="nacosmtu@mtu.edu.ng" />
            <GlowingIcon icon={MapPin} label="Mountain Top University, Prayer City, Ogun State" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Event Details</h3>
          <div className="space-y-3">
            <GlowingIcon icon={LinkIcon} href="https://mtunacostechfair.vercel.app" label="mtunacostechfair.com" />
            <p className="font-bold text-accent text-lg animate-glow">#MTUNacosTechFair2025</p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-muted-foreground/80">
        Designed with <span className="text-red-500 animate-pulse">❤</span> by EWI DAMILOLA
      </div>
    </footer>
  );
}
