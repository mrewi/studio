import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Code, Target, Lightbulb, BrainCircuit } from 'lucide-react';

const GlowingIcon = ({ icon: Icon, className }: { icon: React.ElementType, className?: string }) => (
  <Icon className={`w-10 h-10 mb-4 text-glow-accent ${className}`} />
);

const initiatives = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To foster a vibrant tech community at MTU, empowering students with cutting-edge knowledge, practical skills, and networking opportunities to excel in the global technology landscape.",
    bgColor: "bg-primary/10",
  },
  {
    icon: BrainCircuit,
    title: "Code Crafters Initiative",
    description: "A flagship program dedicated to nurturing software development talents. CCI offers workshops, mentorship, and real-world projects, transforming students into proficient code crafters.",
    bgColor: "bg-accent/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Encouraging creative problem-solving and entrepreneurial spirit through hackathons, ideation sessions, and support for student-led tech startups and projects.",
    bgColor: "bg-secondary/10",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-primary">NACOS MTU</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering tech excellence and innovation within the Mountain Top University community and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} className={`shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0 overflow-hidden ${item.bgColor} flex flex-col`}>
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-card rounded-full inline-block mb-2 shadow-md">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
