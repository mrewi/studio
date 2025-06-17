
import { typedEventSchedule } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase, CheckCircle, MapPin } from 'lucide-react';


export function EventSchedule() {
  const defaultTabValue = typedEventSchedule.days.length > 0 
    ? `day-${typedEventSchedule.days[0].dayName.replace(/\s+/g, '-').toLowerCase()}` 
    : 'day-1';

  return (
    <section id="schedule" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Event <span className="text-primary">Schedule</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your participation. Explore sessions, workshops, and networking opportunities across our 3-day event.
          </p>
        </div>

        <Card className="mb-12 shadow-xl bg-card border border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl font-headline">Event Objectives</CardTitle>
            </div>
            <CardDescription>What we aim to achieve with the MTU NACOS Tech Fair.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-inside">
              {typedEventSchedule.objectives.map((obj, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{obj}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="mb-8 flex items-center justify-center text-lg text-muted-foreground">
          <typedEventSchedule.generalInfo.mainIcon className="w-6 h-6 mr-2 text-primary" />
          <span>{typedEventSchedule.generalInfo.location}</span>
        </div>


        <Tabs defaultValue={defaultTabValue} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent p-0">
            {typedEventSchedule.days.map((dayData) => (
              <TabsTrigger 
                key={dayData.dayName} 
                value={`day-${dayData.dayName.replace(/\s+/g, '-').toLowerCase()}`}
                className="py-3 px-4 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg group border border-border hover:bg-muted/50 data-[state=active]:border-primary rounded-md"
              >
                <dayData.icon className={`w-5 h-5 mr-2 ${dayData.themeColor} group-data-[state=active]:text-primary-foreground transition-colors`} />
                {dayData.dayName} - <span className="ml-1 text-xs opacity-80">{dayData.date}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {typedEventSchedule.days.map((dayData, dayIndex) => (
            <TabsContent key={dayData.dayName} value={`day-${dayData.dayName.replace(/\s+/g, '-').toLowerCase()}`}>
              <h3 className={`text-2xl font-headline mb-6 text-center ${dayData.themeColor}`}>
                {dayData.dayTheme}
              </h3>
              <Accordion type="single" collapsible className="w-full" defaultValue={`item-${dayIndex}-0`}>
                {dayData.activities.map((activity, activityIndex) => (
                  <AccordionItem key={activityIndex} value={`item-${dayIndex}-${activityIndex}`} className="border-b border-border/50">
                    <AccordionTrigger className="hover:bg-muted/50 px-4 py-4 text-left text-base md:text-lg rounded-t-md group">
                      <div className="flex items-center gap-3 w-full">
                        <activity.icon className={`w-6 h-6 ${dayData.themeColor} flex-shrink-0 transition-colors group-hover:text-primary`} />
                        <div className="flex-grow">
                          <span className="font-semibold text-foreground">{activity.title}</span>
                          <span className={`block text-sm ${dayData.themeColor} font-medium`}>{activity.time}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 bg-muted/30 rounded-b-md">
                      <p className="text-muted-foreground mb-1">{activity.description}</p>
                      {activity.speaker && (
                        <p className="text-sm text-primary font-semibold">Speaker(s): {activity.speaker}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
