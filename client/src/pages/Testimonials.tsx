import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SectionHeader } from '@/components/SectionHeader';
import { Quote } from 'lucide-react';
import { FeedbackSection } from '@/components/FeedbackSection';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "NHRF's sports program has completely transformed our school. Our students are more active, confident, and disciplined. The professional coaching has helped many of our students discover their athletic potential.",
      author: "Mrs. Priya Sharma",
      role: "Principal, Government High School",
      type: "Teacher",
    },
    {
      quote: "Project SPORTA gave me the opportunity to pursue my passion for football. The training I received helped me get selected for the state-level camp. I'm forever grateful to NHRF for believing in me.",
      author: "Rahul Kumar",
      role: "Student, Class 10",
      type: "Student",
    },
    {
      quote: "As a parent, I've seen remarkable changes in my daughter since she joined the NHRF summer camp. She's more responsible, has better social skills, and most importantly, she stays away from negative influences.",
      author: "Mr. Anand Reddy",
      role: "Parent",
      type: "Parent",
    },
    {
      quote: "The employment wing helped me secure my first job. The career guidance sessions and interview preparation were invaluable. They truly care about the success of young people.",
      author: "Anjali Patel",
      role: "Software Engineer",
      type: "Student",
    },
    {
      quote: "NHRF's community awareness programs have made a real difference in our neighborhood. The drug awareness campaign was particularly impactful for our youth. Thank you for your dedication.",
      author: "Dr. Ramesh Iyer",
      role: "Community Leader",
      type: "Parent",
    },
    {
      quote: "The skill development workshops conducted by NHRF have equipped our students with practical knowledge. Their holistic approach to education is commendable and much needed.",
      author: "Prof. Meena Krishnan",
      role: "College Professor",
      type: "Teacher",
    },
  ];

  const testimonialsByType = {
    student: testimonials.filter(t => t.type === 'Student'),
    teacher: testimonials.filter(t => t.type === 'Teacher'),
    parent: testimonials.filter(t => t.type === 'Parent'),
  };

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

      {/* Student Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Student Voices"
            subtitle="Stories from the students we've empowered"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonialsByType.student.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Educator Perspectives"
            subtitle="Insights from teachers and professors"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonialsByType.teacher.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Parent Feedback"
            subtitle="What parents say about our impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonialsByType.parent.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
