
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HomeSection } from '@/components/sections/home-section';
import { AboutSection } from '@/components/sections/about-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { TicketSection } from '@/components/sections/ticket-section';
import { EventSchedule } from '@/components/sections/event-schedule';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <GallerySection />
        <TicketSection />
        <EventSchedule />
      </main>
      <Footer />
    </div>
  );
}
