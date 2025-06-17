"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/lib/constants';
import { Maximize } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the vibrant moments and innovations from past events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <Dialog key={image.id} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                  data-ai-hint={image.hint}
                >
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="aspect-[4/3] object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize className="w-10 h-10 text-white" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              {selectedImage && selectedImage.id === image.id && (
                 <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] p-2 bg-card border-primary shadow-glow-primary">
                   <Image
                     src={selectedImage.src}
                     alt={selectedImage.alt}
                     width={1200}
                     height={900}
                     className="rounded-md object-contain max-h-[80vh] w-full"
                     data-ai-hint={selectedImage.hint}
                   />
                 </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
