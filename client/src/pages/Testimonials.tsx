import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SectionHeader } from '@/components/SectionHeader';
import { Quote } from 'lucide-react';
import { FeedbackSection } from '@/components/FeedbackSection';

type Testimonial = {
  image: string | null;
  title: string;
  school: string | null;
  feedback: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      image: "/Testinonials/test1.jpg",
      title: "National Level Boxing Recognition",
      school: null,
      feedback: "NHRF has played a major role in shaping my boxing journey. Through Project Sporta, I received structured training, exposure, and the confidence to compete at the national level. This initiative has transformed our environment into a true sports-driven learning space. I'm grateful for the opportunity to grow as an athlete.",
    },
    {
      image: "/Testinonials/test2.jpg",
      title: "State Level Inter School Athletic Achievement",
      school: null,
      feedback: "Project Sporta gave me the platform and guidance I needed to excel in athletics. The support, coaching, and encouragement from NHRF helped me perform my best at the FSSA State Level Meet. This program has strengthened both my skills and confidence. I'm proud to be part of this initiative.",
    },
    {
      image: null,
      title: "Santhosh – 10th Std",
      school: "Indhra Gandhi High School",
      feedback: "Being part of Project Sporta has improved my discipline, fitness, and focus. The training sessions are motivating and push us to grow every day. NHRF has helped me balance sports and academics better. I now feel more confident in pursuing my goals.",
    },
    {
      image: null,
      title: "Karthi – 10th Std",
      school: "Indhra Gandhi High School",
      feedback: "Thanks to NHRF and Project Sporta, I discovered my interest in athletics and built better physical strength. The coaches guide us patiently and encourage us to give our best. This program has made sports an exciting part of my school life. It has truly changed the way I look at fitness and competition.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Testimonials</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hear from the people whose lives we've touched
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Student Voices"
            subtitle="Stories from the students we've empowered"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  {testimonial.image && (
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4">{testimonial.title}</h3>
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <Avatar>
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.title.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <Avatar>
                        <AvatarFallback>{testimonial.title.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className="font-semibold">{testimonial.title}</div>
                      {testimonial.school && (
                        <div className="text-sm text-muted-foreground">{testimonial.school}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />
    </div>
  );
}
