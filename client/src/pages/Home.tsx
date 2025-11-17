import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CounterBox } from '@/components/CounterBox';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ScrollFade } from '@/components/ScrollFade';
import { 
  Trophy, Users, Briefcase, Heart, GraduationCap, 
  Target, Award, CheckCircle, TrendingUp 
} from 'lucide-react';
import sportaIcon from '@assets/generated_images/Project_SPORTA_icon_b174e451.jpg';
import chanakyaIcon from '@assets/generated_images/Portal_Chanakya_icon_ddf00b29.png';
import employmentIcon from '@assets/generated_images/Employment_Wing_icon_a86e685a.png';
import communityIcon from '@assets/generated_images/Community_Development_icon_40dc4c54.png';

export default function Home() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const achievements = [
    {
      title: 'Expanded Project SPORTA',
      description: 'Partnership with Sri Aurobindo Society & Pondicherry Education Department',
      icon: TrendingUp,
    },
    {
      title: 'State-Level Selection',
      description: '2 students selected for State-Level Football Camp',
      icon: Trophy,
    },
    {
      title: 'Water Fest – Neerkudam',
      description: 'Organized across 80 schools reaching thousands of students',
      icon: Heart,
    },
    {
      title: 'MERO Trophy Success',
      description: 'Conducted with 1,024 players participating',
      icon: Award,
    },
    {
      title: 'Drug-Awareness Campaign',
      description: '500+ students trained in Step Out Narco program',
      icon: CheckCircle,
    },
    {
      title: 'Skill Development',
      description: 'Job fairs for 22 colleges empowering youth',
      icon: GraduationCap,
    },
    {
      title: 'National Level Boxing',
      description: 'Subiksha achieved national level recognition in boxing',
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          ref={heroImageRef}
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        >
          <img
            src="/gallery/home.jpg"
            alt="NHRF Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Hero Content with Fade-Up Animation */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Empowering Students
            <br />
            Transforming Schools
            <br />
            <span className="text-primary">
              <TypingAnimation 
                text="Strengthening Communities" 
                speed={80}
                delay={800}
                className="inline-block"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            NHRF is a Government registered NGO dedicated to Employability, Sports & Education development across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <Link href="/projects">
              <Button size="lg" className="text-lg px-8" data-testid="button-explore-projects">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" data-testid="button-contact-us">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NGO Introduction */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader
                title="About NHRF"
                subtitle="National Human Resource Foundation"
                centered
              />
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                National Human Resource Foundation (NHRF) is a registered NGO based in Pondicherry, India (Reg. No. 1093/IV/2020). Since 2019, NHRF has been empowering children, youth, and communities through structured programs in Employability, Sports, Education, Women Empowerment, Skill Development, Health, Environment, and Agriculture. Our main mission is to uplift underprivileged students, promote sports excellence, and build a confident drug-free younger generation.
              </p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Quick Links to Projects */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Our Focus Areas"
              subtitle="Transforming lives through comprehensive development programs"
              centered
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <ProjectCard
                id="employment"
                title="Employment "
                description="Job network & youth placement opportunities"
                image={employmentIcon}
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <ProjectCard
                id="sporta"
                title="Sports"
                description="Sports development & training in schools across India"
                image={sportaIcon}
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <ProjectCard
                id="portal-chanakya"
                title="Education"
                description="School improvement & comprehensive skill development"
                image={chanakyaIcon}
              />
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <ProjectCard
                id="community"
                title="Community Development"
                description="Awareness drives & community empowerment camps"
                image={communityIcon}
              />
            </div>
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Impact Numbers */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Impact"
            subtitle="Making a difference in thousands of lives across India"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
            <CounterBox value="1,774+" label="Students Trained under SPORTA" icon={Users} />
            <CounterBox value="25+" label="Schools Under Training" icon={GraduationCap} />
            <CounterBox value="2,00,000+" label="Job Seekers in Network" icon={Users} />
            <CounterBox value="6,000+" label="MSMEs Connected" icon={Briefcase} />
            <CounterBox value="20,000+" label="Youth Placed in Jobs" icon={Trophy} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <CounterBox value="80+" label="Schools implemented Water Fest" icon={Heart} />
            <CounterBox value="110+" label="Summer Camp Beneficiaries" icon={Users} />
            <CounterBox value="1,024" label="MERO Trophy Participants" icon={Award} />
            <CounterBox value="500+" label="Drug Awareness" icon={CheckCircle} />
            <CounterBox value="220+" label="IKF Trails Talents" icon={Target} />
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Recent Achievements */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Recent Achievements"
            subtitle="Celebrating our milestones and success stories"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <Card className="hover-elevate transition-all duration-300 border-card-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Call to Action */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can empower more students, transform more schools, and strengthen more communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0" data-testid="button-view-projects">
                View Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-get-involved">
                Get Involved
              </Button>
            </Link>
          </div>
          </div>
        </section>
      </ScrollFade>
    </div>
  );
}
