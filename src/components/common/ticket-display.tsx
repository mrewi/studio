"use client";

import QRCode from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { Download, Printer, CodeXml } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

interface TicketData {
  name: string;
  email: string;
  ticketId: string;
}

interface TicketDisplayProps {
  ticketData: TicketData;
}

export function TicketDisplay({ ticketData }: TicketDisplayProps) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const qrValue = JSON.stringify({
    ticketId: ticketData.ticketId,
    name: ticketData.name,
    event: "MTU NACOS Tech Fair 2024",
  });

  const handleDownload = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2, // Increase scale for better quality
        backgroundColor: null, // Use element's background
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `MTU_NACOS_TechFair_Ticket_${ticketData.ticketId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handlePrint = () => {
    if (ticketRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Print Ticket</title>');
        // You might want to include some basic styling for printing
        printWindow.document.write('<style> body { font-family: sans-serif; margin: 20px; } .ticket-card { border: 1px solid #ccc; padding: 20px; max-width: 400px; margin: auto; text-align: center; } .qr-code { margin: 20px auto; display: block; } </style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(ticketRef.current.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        // Delay print to allow content to load
        setTimeout(() => {
          printWindow.print();
          // Optional: close window after print dialog
          // printWindow.close(); 
        }, 500);
      }
    }
  };


  return (
    <div className="mt-8 md:mt-12">
      <h3 className="text-2xl font-headline text-center mb-6 text-primary">Your Ticket is Ready!</h3>
      <Card ref={ticketRef} className="max-w-md mx-auto bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-xl border-primary/30 overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-headline uppercase">MTU NACOS Tech Fair</CardTitle>
            <CodeXml className="w-8 h-8" />
          </div>
          <p className="text-sm opacity-80">Official Event Ticket</p>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <QRCode value={qrValue} size={160} level="H" className="mx-auto border-4 border-accent p-1 rounded-lg shadow-md" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Name:</p>
            <p className="text-lg font-semibold text-foreground">{ticketData.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email:</p>
            <p className="text-lg font-semibold text-foreground">{ticketData.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Ticket ID:</p>
            <p className="text-lg font-mono text-accent">{ticketData.ticketId}</p>
          </div>
          <p className="text-xs text-center text-muted-foreground pt-4">
            Present this QR code at the event entrance. Valid for one entry.
          </p>
        </CardContent>
        <CardFooter className="bg-muted/50 p-4 flex items-center justify-center">
          <p className="text-xs text-muted-foreground">#MTUNacosTechFair2024</p>
        </CardFooter>
      </Card>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button onClick={handleDownload} variant="outline" className="group">
          <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Download Ticket
        </Button>
        <Button onClick={handlePrint} variant="outline" className="group">
          <Printer className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Print Ticket
        </Button>
      </div>
    </div>
  );
}
