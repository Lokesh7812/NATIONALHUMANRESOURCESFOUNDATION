import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Employment Services',
      subtitle: 'Connecting youth with career opportunities',
      description: 'Our employment wing bridges the gap between job seekers and employers, providing career guidance and placement services.',
      highlights: [
        'Job fairs at colleges and institutions',
        'Career counseling and guidance',
        'Skill training for employability',
        'Industry connections and networking',
        'Placement assistance and follow-up',
      ],
    },
    {
      icon: Award,
      title: 'Sports Development',
      subtitle: 'Building athletic excellence and healthy lifestyles',
      description: 'Our sports programs provide comprehensive training in various disciplines, promoting physical fitness, teamwork, and competitive spirit among youth.',
      highlights: [
        'Professional coaching in multiple sports',
        'Infrastructure development in schools',
        'Regular tournaments and competitions',
        'Talent identification and nurturing',
        'Sports equipment provision',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education Enhancement',
      subtitle: 'Transforming schools into centers of excellence',
      description: 'We work with educational institutions to improve infrastructure, teaching quality, and overall learning environment for students.',
      highlights: [
        'School infrastructure development',
        'Teacher training programs',
        'Skill development workshops',
        'Library and resource enhancement',
        'Technology integration in classrooms',
      ],
    },
    
    {
      icon: Heart,
      title: 'Community Development',
      subtitle: 'Strengthening communities through awareness',
      description: 'We conduct various awareness campaigns and community programs addressing social, environmental, and health issues.',
      highlights: [
        'Environmental awareness campaigns',
        'Health and wellness programs',
        'Drug abuse prevention initiatives',
        'Life skills training camps',
        'Community engagement activities',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive programs designed to empower youth and strengthen communities
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">Key Highlights</h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Detailed Service Information"
            subtitle="Learn more about how we deliver impact"
            centered
          />
          <div className="max-w-4xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="sporta" className="bg-background border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Project SPORTA – Sports Wing</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Project SPORTA is our flagship sports development initiative that brings professional-level training to schools across India. 
                    We focus on building sustainable sports ecosystems within educational institutions.
                  </p>
                  <p className="mb-2 font-medium text-foreground">Beneficiaries:</p>
                  <p className="mb-4">Students from government and private schools, particularly those from underprivileged backgrounds who lack access to quality sports training and facilities.</p>
                  <p className="font-medium text-foreground">Current reach: 1,774+ students across 15+ schools</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chanakya" className="bg-background border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Portal Chanakya – Education Wing</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Portal Chanakya focuses on holistic school development, working closely with educational institutions to enhance 
                    infrastructure, teaching methodologies, and student learning outcomes.
                  </p>
                  <p className="mb-2 font-medium text-foreground">Beneficiaries:</p>
                  <p className="mb-4">Students and teachers in partner schools, with special emphasis on improving the quality of education in under-resourced institutions.</p>
                  <p className="font-medium text-foreground">Impact: 80+ schools reached through various programs</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="employment" className="bg-background border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Employment Wing</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Our Employment Wing operates as a comprehensive job network connecting youth with opportunities across industries. 
                    We provide career counseling, skill training, and direct placement support.
                  </p>
                  <p className="mb-2 font-medium text-foreground">Network Statistics:</p>
                  <ul className="mb-4 ml-4 space-y-1">
                    <li>• 10,00,000+ job seekers in our network</li>
                    <li>• 6,000+ MSMEs connected</li>
                    <li>• 20,000+ youth successfully placed</li>
                    <li>• 22 colleges covered through job fairs</li>
                  </ul>
                  <p className="mb-2 font-medium text-foreground">Beneficiaries:</p>
                  <p>College students, graduates, and young professionals seeking career opportunities and skill development.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="community" className="bg-background border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Community Development Programs</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Our community programs address critical social issues through awareness campaigns, workshops, and hands-on initiatives. 
                    We believe in creating informed, responsible, and engaged communities.
                  </p>
                  <p className="mb-2 font-medium text-foreground">Key Initiatives:</p>
                  <ul className="mb-4 ml-4 space-y-1">
                    <li>• Water conservation awareness (80+ schools)</li>
                    <li>• Drug abuse prevention (400+ students trained)</li>
                    <li>• Environmental camps and activities</li>
                    <li>• Health and wellness programs</li>
                  </ul>
                  <p className="mb-2 font-medium text-foreground">Beneficiaries:</p>
                  <p>Students, youth, and community members across all age groups who participate in our awareness and development programs.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
