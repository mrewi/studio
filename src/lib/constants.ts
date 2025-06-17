
import { Users, Mic, Cpu, Zap, Award, Coffee, Rocket, Code, CalendarDays, Clock, MapPin, BrainCircuit, Presentation } from 'lucide-react';

export const galleryImages = [
  { id: 1, src: "https://placehold.co/600x400.png", alt: "Tech Fair Opening Ceremony", hint: "conference opening" },
  { id: 2, src: "https://placehold.co/600x400.png", alt: "Students in Workshop", hint: "student workshop" },
  { id: 3, src: "https://placehold.co/600x400.png", alt: "Keynote Speaker", hint: "speaker stage" },
  { id: 4, src: "https://placehold.co/600x400.png", alt: "Networking Session", hint: "people networking" },
  { id: 5, src: "https://placehold.co/600x400.png", alt: "Project Showcase", hint: "tech project" },
  { id: 6, src: "https://placehold.co/600x400.png", alt: "Award Ceremony", hint: "award presentation" },
  { id: 7, src: "https://placehold.co/600x400.png", alt: "Group Photo", hint: "team photo" },
  { id: 8, src: "https://placehold.co/600x400.png", alt: "Interactive Demo", hint: "virtual reality" },
];

export const eventSchedule = {
  objectives: [
    "To showcase technological innovations from MTU students and local tech communities.",
    "To provide a platform for knowledge sharing and networking among tech enthusiasts, students, and professionals.",
    "To inspire students towards careers in technology and entrepreneurship.",
    "To foster collaboration between academia and industry in the tech sector.",
  ],
  days: [
    {
      day: "Day 1: Innovation Ignition",
      date: "October 26, 2025",
      icon: Zap,
      themeColor: "text-primary",
      activities: [
        { time: "09:00 AM", title: "Registration & Welcome Coffee", icon: Coffee, description: "Doors open, grab a coffee and network." },
        { time: "10:00 AM", title: "Opening Ceremony & Keynote", icon: Mic, speaker: "Prof. Akin O.", description: "Official launch and inspiring words from industry leader." },
        { time: "11:30 AM", title: "Panel: The Future of AI in Africa", icon: BrainCircuit, description: "Experts discuss AI trends and opportunities." },
        { time: "01:00 PM", title: "Lunch Break & Networking", icon: Users, description: "Enjoy lunch and connect with peers." },
        { time: "02:30 PM", title: "Workshop: Intro to Web3 Development", icon: Code, description: "Hands-on session on blockchain basics." },
        { time: "04:00 PM", title: "Student Project Showcase Part 1", icon: Presentation, description: "MTU students present their innovative projects." },
        { time: "05:30 PM", title: "Day 1 Wrap-up", icon: Clock, description: "Closing remarks for the day." },
      ],
    },
    {
      day: "Day 2: Code & Creation",
      date: "October 27, 2025",
      icon: Cpu,
      themeColor: "text-accent",
      activities: [
        { time: "09:00 AM", title: "Morning Coffee & Expo Opens", icon: Coffee, description: "Explore tech booths and demos." },
        { time: "10:00 AM", title: "Keynote: Cybersecurity in the Modern Age", icon: Mic, speaker: "Dr. Ifeoma E.", description: "Insights on protecting digital assets." },
        { time: "11:30 AM", title: "Workshop: Building Scalable Cloud Apps", icon: Rocket, description: "Practical guide to cloud architecture." },
        { time: "01:00 PM", title: "Lunch & Startup Pitch Session", icon: Users, description: "Lunch followed by exciting startup pitches." },
        { time: "02:30 PM", title: "Student Project Showcase Part 2", icon: Presentation, description: "More innovative projects from MTU's finest." },
        { time: "04:00 PM", title: "Awards Ceremony & Closing Remarks", icon: Award, description: "Recognizing top projects and concluding the fair." },
        { time: "05:00 PM", title: "Networking Reception", icon: Users, description: "Final opportunity to connect." },
      ],
    },
  ],
  generalInfo: {
    location: "CBAS BIG LECTURE HALL",
    mainIcon: MapPin,
  }
};
