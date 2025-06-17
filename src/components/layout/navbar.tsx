
"use client";

import Link from 'next/link';
import { Users, Ticket, CalendarDays, HomeIcon,ImageIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import Image from 'next/image';


const navItems = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: Users },
  { href: '#gallery', label: 'Gallery', icon: ImageIcon },
  { href: '#ticket', label: 'Get Ticket', icon: Ticket },
  { href: '#schedule', label: 'Schedule', icon: CalendarDays },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, icon: Icon, onClick }: { href: string, label: string, icon: React.ElementType, onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors hover:shadow-glow-accent"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
      <span className="font-body">{label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2"
          aria-label="MTU NACOS Tech Fair Home"
        >
          <Image src="https://i.ibb.co/DH0LS7Jv/logo.png" alt="MTU NACOS Tech Fair Logo" width={32} height={32} className="h-8 w-8" />
          <span className="font-headline text-xl font-bold uppercase text-primary">
            MTU <span className="text-accent">NACOS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-4">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} onClick={() => setMobileMenuOpen(false)} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
