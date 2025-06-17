import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/common/countdown';
import { ArrowRight, Cpu } from 'lucide-react';
import Link from 'next/link';

export function HomeSection() {
  // Set eventDate to 9 AM tomorrow
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 1); // Move to tomorrow
  eventDate.setHours(9, 0, 0, 0); // Set time to 9:00:00 AM

  return (
    <section id="home" className="relative py-20 md:py-32 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
        {/* Decorative background elements */}
        {[...Array(5)].map((_, i) => (
          <Cpu
            key={i}
            className="absolute text-primary animate-pulse"
            size={Math.random() * 100 + 50}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-primary">MTU NACOS</span>
            <span className="block text-accent">Tech Fair 2025</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/80">
            Experience the future of technology. Discover innovation, connect with experts, and ignite your passion.
          </p>
        </div>

        <div className="mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Countdown targetDate={eventDate} />
        </div>

        <div className="mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="#ticket">
            <Button size="lg" className="group text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-glow-primary transition-all duration-300 ease-out transform hover:scale-105">
              Get Your Free Ticket
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
