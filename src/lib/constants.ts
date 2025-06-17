
import { Users, Mic, Cpu, Award, Coffee, Rocket, Code, CalendarDays, Clock, MapPin, BrainCircuit, Presentation, Clipboard, Lightbulb, AppWindow, Camera, Trophy, PartyPopper, Briefcase, FileText, Search, Laptop, Gamepad2, Smartphone, Brain, Dice5, Keyboard, Mic2, Target } from 'lucide-react';

export const galleryImages = [
  { id: 1, src: "https://i.ibb.co/LdmZ9Fy6/n1.jpg", alt: "Tech Fair Opening Ceremony", hint: "conference opening" },
  { id: 2, src: "https://i.ibb.co/WWCFYL82/n2.jpg", alt: "Students in a workshop", hint: "student workshop" },
  { id: 3, src: "https://i.ibb.co/GfyNch25/n3.jpg", alt: "Speaker presenting on stage", hint: "speaker stage" },
  { id: 4, src: "https://i.ibb.co/4gpKJtCq/n4.jpg", alt: "Attendees networking", hint: "people networking" },
  // { id: 5, src: "/public/images/nacos5.jpg", alt: "Close-up of a tech project", hint: "tech project" },
  // { id: 6, src: "/public/images/nacos6.jpg", alt: "Award presentation moment", hint: "award presentation" },
  // { id: 7, src: "/public/images/nacos7.jpg", alt: "Group photo of participants", hint: "team photo" },
  // { id: 8, src: "/public/images/nacos8.jpg", alt: "Participant using VR headset", hint: "virtual reality" },
  // { id: 9, src: "/public/images/nacos9.jpg", alt: "Networking during a break", hint: "networking break" },
];

export const eventSchedule = {
  objectives: [
    "To showcase technological innovations from MTU students and local tech communities.",
    "To provide a platform for knowledge sharing and networking among tech enthusiasts, students, and professionals.",
    "To inspire students towards careers in technology and entrepreneurship.",
    "To foster collaboration between academia and industry in the tech sector.",
    "To give students real-world exposure and connect them with industry professionals.",
    "To equip students for post-campus life with mentorship and career guidance.",
    "Build community through friendly competition and social interaction."
  ],
  days: [
    {
      dayName: "Day 1",
      dayTheme: "Revolutionizing Tomorrow – PROJECT Q",
      date: "June 18, 2025",
      icon: Target,
      themeColor: "text-primary",
      activities: [
        { time: "09:00 AM - 09:30 AM", title: "Registration", icon: Clipboard, description: "Branded check-in desks, name tags, event guides, sponsor souvenirs. Sponsor booths (e.g., PalmPay) active." },
        {
          time: "09:30 AM - 11:30 AM",
          title: "Opening Ceremony",
          icon: Mic,
          description: "Anthems, welcome address (NACOS MTU President), Citation for Keynote Speaker I (VP), Keynote I: Abah Emmanuel (Senior Software Developer, TradeGrid / Tech Lead, Kitaniz), Citation for Keynote Speaker II (VP), Keynote II: Director Of Innovation and Research Nacos National, introduction of exhibitors and pitch judges.",
          speakers: [
            { name: "Abah Emmanuel", role: "Senior Software Developer, TradeGrid / Tech Lead, Kitaniz (Keynote I)" },
            { name: "Director Of Innovation and Research Nacos National", role: "(Keynote II)" }
          ]
        },
        { time: "11:30 AM - 12:00 PM", title: "Innovation Pitch Competition", icon: Lightbulb, description: "5 student teams pitch original ideas (5 mins pitch + 3 mins Q&A). Judges: Faculty, alumni, industry reps. Prize: Best Pitch Award (sponsored)." },
        { time: "12:00 PM - 01:00 PM", title: "Tech & Startup Exhibitions", icon: AppWindow, description: "10+ booths: Student apps, AI tools, UI/UX, games, hardware. Fintech & blockchain demos. Sponsor/startup booths. Engagement: raffles, app trials, quick games, giveaways." },
        { time: "01:00 PM - 01:30 PM", title: "Networking Segment", icon: Users, description: "Designated networking zone. Guided speed networking, alumni meetups." },
        { time: "01:30 PM - 02:00 PM", title: "Closing & Group Photos", icon: Camera, description: "Vote of thanks, award recognition. Group photos, final remarks." },
      ],
    },
    {
      dayName: "Day 2",
      dayTheme: "Tech Meet & Awards - From Campus to Career",
      date: "June 19, 2025",
      icon: Award,
      themeColor: "text-accent",
      activities: [
        {
          time: "10:00 AM - 12:00 PM",
          title: "Alumni & Professional Panel: Navigating the Tech Industry",
          icon: Presentation,
          description: "Topic: “Navigating the Tech Industry as a Young Nigerian Graduate”. Moderator-led Q&A with Alumni + tech professionals, real-world tips.",
          speakers: [
            { name: "Successful Alumnus 1", role: "Software Engineer @ Big Tech" },
            { name: "Industry Professional 1", role: "HR Manager @ Tech Startup" },
            { name: "MTU Faculty Member", role: "Computer Science Dept." }
          ]
        },
        {
          time: "01:00 PM - 03:00 PM",
          title: "Career & Mentorship Hub",
          icon: Briefcase,
          description: "Breakout sessions on: CV writing & LinkedIn optimization, Interview techniques & job search strategies, Freelancing, internships, & remote jobs, Personal branding & online visibility."
        },
        {
          time: "03:30 PM - 05:00 PM",
          title: "Awards & Recognition Ceremony",
          icon: Trophy,
          description: "Celebrating excellence: Best Innovator of the Year, Tech Influencer Award, Best in Academics (Computer Science & Mathematics), Best Project (from Day 1 Pitch), Most Supportive Lecturer, Industry Partner Appreciation (Aquatic Waters), Alumni Contribution Award. Certificate & Souvenir Presentations."
        },
      ],
    },
    {
      dayName: "Day 3",
      dayTheme: "Unplug to Connect – Play, Compete, Bond",
      date: "June 20, 2025",
      icon: Gamepad2,
      themeColor: "text-secondary",
      activities: [
        { time: "Full Day", title: "Inter-level Games & Tournaments", icon: Gamepad2, description: "Console: FIFA, PES, Mortal Kombat. Mobile: PUBG, Call of Duty Mobile, Chess.com." },
        { time: "Full Day", title: "Brain Battles & Tech Trivia", icon: Brain, description: "Kahoot quizzes (tech & pop culture), “Who Wants to Be a Developer?” live quiz, Code puzzles, logic games." },
        { time: "Full Day", title: "Board Games & Chill Zone", icon: Dice5, description: "Chess, Monopoly, Uno, Whot, Scrabble. Music-powered chill space with NACOS playlist." },
        { time: "Scheduled Slots", title: "Typing & Speed Coding Challenges", icon: Keyboard, description: "Typing contest (10FastFingers), Timed mini-coding tasks (Python, HTML/CSS, JavaScript)." },
        { time: "Full Day", title: "Photo Booths & Social Wall", icon: Camera, description: "Branded backdrops + instant Polaroid-style prints. Live hashtag wall (#NACOSWeek2025)." },
        { time: "Afternoon", title: "Open Mic & Freestyle Corner (Optional)", icon: Mic2, description: "Spoken word, rap freestyle, light debates." },
        { time: "Throughout", title: "Refreshments", icon: Coffee, description: "Refreshments available throughout the day." }
      ],
    },
  ],
  generalInfo: {
    location: "MTU Campus: CBAS BIG LT, CBAS Car Park, CHMS Car Park, University Pavilion & Outdoor Game Zones",
    mainIcon: MapPin,
  }
};

interface Activity {
  time: string;
  title: string;
  icon: React.ElementType;
  description: string;
  speaker?: string;
  speakers?: Array<{name: string, role?: string}>;
}

interface DaySchedule {
  dayName: string;
  dayTheme: string;
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
