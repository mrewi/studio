
import { Users, Mic, Cpu, Target, Award, Coffee, Rocket, Code, CalendarDays, Clock, MapPin, BrainCircuit, Presentation, Clipboard, Lightbulb, AppWindow, Camera, Trophy, PartyPopper, Briefcase } from 'lucide-react';

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
    "To give students real-world exposure and connect them with industry professionals."
  ],
  days: [
    {
      day: "Day 1: Revolutionizing Tomorrow – PROJECT Q",
      date: "June 18, 2025",
      icon: Target,
      themeColor: "text-primary",
      activities: [
        { time: "09:00 AM - 09:30 AM", title: "Registration", icon: Clipboard, description: "Branded check-in desks, name tags, event guides, sponsor souvenirs. Sponsor booths active." },
        { 
          time: "09:30 AM - 11:30 AM", 
          title: "Opening Ceremony", 
          icon: Mic, 
          description: "Anthems, welcome address (NACOS MTU President), Keynote Speeches by Abah Emmanuel and the Director of Innovation (Nacos National), introduction of exhibitors and pitch judges.",
          speaker: "Abah Emmanuel (Keynote I) & Director Of Innovation, Nacos National (Keynote II)"
        },
        { time: "11:30 AM - 12:00 PM", title: "Innovation Pitch Competition", icon: Lightbulb, description: "5 student teams pitch original ideas (5 mins pitch + 3 mins Q&A). Judges: Faculty, alumni, industry reps. Prize: Best Pitch Award (sponsored)." },
        { time: "12:00 PM - 01:00 PM", title: "Tech & Startup Exhibitions", icon: AppWindow, description: "10+ booths: Student apps, AI tools, UI/UX, games, hardware. Fintech & blockchain demos. Sponsor/startup booths. Engagement: raffles, app trials, quick games, giveaways." },
        { time: "01:00 PM - 01:30 PM", title: "Networking Segment", icon: Users, description: "Designated networking zone. Guided speed networking, alumni meetups." },
        { time: "01:30 PM - 02:00 PM", title: "Closing & Group Photos", icon: Camera, description: "Vote of thanks, award recognition. Group photos, final remarks." },
      ],
    },
    {
      day: "Day 2: Code & Creation",
      date: "June 19, 2025",
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
    {
      day: "Day 3: Future Forward & Awards",
      date: "June 20, 2025",
      icon: Rocket, 
      themeColor: "text-secondary",
      activities: [
        { time: "09:00 AM", title: "Advanced Workshops (e.g., Machine Learning, IoT)", icon: BrainCircuit, description: "Deep dive into specialized tech fields." },
        { time: "11:00 AM", title: "Industry Connect: Career Fair & Mentorship", icon: Briefcase, description: "Connect with companies and find mentors." },
        { time: "01:00 PM", title: "Lunch & Final Networking", icon: Users, description: "Last chance for structured networking over lunch." },
        { time: "02:30 PM", title: "Grand Finale: Hackathon Winners & Closing Gala", icon: Trophy, description: "Announcement of hackathon winners and event celebration." },
        { time: "04:30 PM", title: "Vote of Thanks & Event End", icon: PartyPopper, description: "Concluding the tech fair with acknowledgements." },
      ],
    },
  ],
  generalInfo: {
    location: "CBAS BIG LECTURE HALL",
    mainIcon: MapPin,
  }
};

interface Activity {
  time: string;
  title: string;
  icon: React.ElementType;
  description: string;
  speaker?: string;
  speakers?: Array<{name: string, role: string}>;
}

interface DaySchedule {
  day: string;
  date: string;
  icon: React.ElementType;
  themeColor: string;
  activities: Activity[];
}

interface EventScheduleData {
  objectives: string[];
  days: DaySchedule[];
  generalInfo: {
    location: string;
    mainIcon: React.ElementType;
  };
}
export const typedEventSchedule: EventScheduleData = eventSchedule;
