"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketDisplay } from '@/components/common/ticket-display';
import { Ticket as TicketIcon, User, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ticketFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type TicketFormValues = z.infer<typeof ticketFormSchema>;

interface GeneratedTicketData {
  name: string;
  email: string;
  ticketId: string;
}

export function TicketSection() {
  const [generatedTicket, setGeneratedTicket] = useState<GeneratedTicketData | null>(null);
  const { toast } = useToast();

  const form = useForm<TicketFormValues>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(data: TicketFormValues) {
    // In a real app, you'd send this to a backend to register the user and get a unique ticket ID.
    // For this demo, we'll generate a pseudo-random ticket ID.
    const ticketId = `MTUTF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setGeneratedTicket({ ...data, ticketId });
    
    toast({
      title: "Ticket Generated!",
      description: "Your ticket has been successfully created below.",
      action: <CheckCircle className="text-green-500" />,
    });

    // Scroll to ticket display
    setTimeout(() => {
      const ticketElement = document.getElementById('ticketDisplay');
      if (ticketElement) {
        ticketElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }

  return (
    <section id="ticket" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Get Your <span className="text-primary">Free Ticket</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at the MTU NACOS Tech Fair. Fill out the form below to generate your digital ticket.
          </p>
        </div>

        <Card className="max-w-lg mx-auto shadow-2xl bg-card border border-primary/20">
          <CardHeader className="text-center">
            <TicketIcon className="w-12 h-12 mx-auto mb-4 text-primary text-glow-primary" />
            <CardTitle className="text-2xl font-headline">Event Registration</CardTitle>
            <CardDescription>Enter your details to receive your e-ticket.</CardDescription>
          </CardHeader>
          <CardContent>
            {!generatedTicket ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="e.g. Ada Lovelace" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Email Address</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input type="email" placeholder="e.g. ada@example.com" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg py-6 shadow-md hover:shadow-glow-accent transition-all duration-300" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Generating...' : 'Generate My Ticket'}
                  </Button>
                </form>
              </Form>
            ) : (
              <div id="ticketDisplay">
                <TicketDisplay ticketData={generatedTicket} />
                <Button 
                  onClick={() => {
                    setGeneratedTicket(null);
                    form.reset();
                  }} 
                  variant="link" 
                  className="mt-6 w-full text-accent"
                >
                  Register another person
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
