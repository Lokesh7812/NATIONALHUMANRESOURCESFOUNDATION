import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollFade } from '@/components/ScrollFade';
import { 
  Target, Eye, Users, GraduationCap, Briefcase, 
  Heart, TrendingUp, Award, CheckCircle, Lightbulb 
} from 'lucide-react';

export default function About() {
  const timeline = [
    { 
      year: '2019', 
      title: 'Employment Wing Created', 
      description: 'Launched the employment wing to connect youth with job opportunities across India.' 
    },
    { 
      year: '2020', 
      title: 'Foundation Established', 
      description: 'NHRF was formally established with a mission to empower youth and communities.' 
    },
    { 
      year: '2021', 
      title: 'Project SPORTA Launched', 
      description: 'Introduced structured sports training programs across schools.' 
    },
    { 
      year: '2022', 
      title: 'Expansion Phase', 
      description: 'Expanded operations, partnerships, and outreach across regions.' 
    },
    { 
      year: '2023', 
      title: 'Major Milestones', 
      description: 'Achieved significant impact with large-scale student participation and outcomes.' 
    },
    { 
      year: '2024', 
      title: 'Community Development', 
      description: 'Integrated community-based programs focusing on health, environment, and empowerment.' 
    },
  ];



 const objectives = [
  { icon: Target, title: 'Job Creation', description: 'Support 5 lakh job seekers by 2030' },
  { icon: Target, title: 'Sports Excellence', description: 'Train 1 lakh talents in sports by 2030' },
  { icon: Users, title: 'Employment Exchange Hub', description: 'Establish a nationwide Employment Exchange Hub' },
  { icon: GraduationCap, title: 'School Transformation', description: 'Convert 1,000 schools into Centres of Excellence' },
  { icon: Heart, title: 'Women Empowerment', description: 'Enable 1,000 women entrepreneurs by 2030' },
];


  const teamMembers = [
    { 
      name: 'Dr. R. Ravivarman', 
      role: 'Founder & Director', 
      image: '/members/ravi.jpg', 
      bio: 'Former IT software techie who holding the Masters & Doctorate in Business Administration having 12+ years of experience in football career and 9+ years of experience in HR management and non-profit industry who visionised to empower students via sports. Managing a trust & football club since 2018.' 
    },
    { 
      name: 'V. Mohandass', 
      role: 'Trustee', 
      image: '/members/Mohandass_V%20.jpg', 
      bio: 'A seasoned Mechanical Engineer with over 12 years of experience, he is now channeling his expertise into the development of football. He oversees the strategic design and implementation of effective football training modules and programs. As the director  of the entire NHRF Sports Wing, he is deeply committed to using Genesis Football Club as a platform to identify, nurture, and develop talented village football players by providing them with free and accessible opportunities.' 
    },
    { 
      name: 'A.P Tharun', 
      role: 'Trustee', 
      image: '/members/tharun.JPG', 
      bio: 'A Managing Director of APT BUSINESS PVT LTD, UK and also visionary Construction designer who completed his master’s in the United Kingdom and brings over five years of experience in the sports industry. He has joined our foundation with a deep commitment to uplift rural communities. He manages the foundation’s social media presence and  key documentation processes and ensuring our work is showcased with clarity, credibility, and impact. With his global exposure for social transformation, he is the actively building bridges with CSR leaders, foundations, corporates, and international partners to co-develop transformative programs across India.' 
    },
    { 
      name: 'S. Maheshwaran', 
      role: 'Trustee', 
      image: '/members/mageshwaran.jpg', 
      bio: 'Information Technology & MBA graduate and the former employee of Amazon in HR Domain - who is passionate in football game joined in our NHRF team to develop rural sports.' 
    },
    { 
      name: 'M. Subramani', 
      role: 'Trustee', 
      image: '/members/subramani.jpg', 
      bio: 'MBA Graduate - Earlier in part of HCL - expertised in accounts and finance management - handling the whole accounts related operation of NHRF.' 
    },
    { 
      name: 'K. Manikandan', 
      role: 'Trustee', 
      image: '/members/Manikandan.jpg', 
      bio: 'Former employee at Sony having 5+ years of experience in Training & Development Domain who is passionate in Fitness Training - leading and managing the internal operations of NHRF.' 
    },
    { 
      name: 'V Sivasubramanian', 
      role: 'Trustee', 
      image: '/members/sivasubramanian.jpg', 
      bio: 'Mechanical engineer as well as a Marine Engineer, Result Oriented With over 10 years of experience in training for competitive exams, career counselling, soft skills development as well as Placements, I lead teams to deliver impactful educational and career-focused programs.' 
    },
    { 
      name: 'R. Vijayaraghavan', 
      role: 'Trustee', 
      image: '/members/r.vijayaraghavan.jpg', 
      bio: 'Team Lead at Amazon, having 5+ years of experience and expertization in team handling, event management, hardware administration.' 
    },
    { 
      name: 'Sunny Dev', 
      role: 'Trustee', 
      image: '/members/sunnny.jpg', 
      bio: 'Trustee in NHRF.' 
    },
    { 
      name: 'Vijayaragavan', 
      role: 'Trustee', 
      image: '/members/vijayaraghavan.jpg', 
      bio: 'Trustee in NHRF.' 
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">About NHRF</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Committed to empowering youth and transforming communities since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Support 5 lakh job seekers by 2030</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Train 1 lakh talents in sports by 2030</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Establish a nationwide Employment Exchange Hub</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Convert 1,000 schools into Centres of Excellence</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Enable 1,000 women entrepreneurs by 2030</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To build our country where every child and youth has access to quality sports training, education, 
                skill development, and life-changing opportunities regardless of economic background. We envision 
                a nation of confident, healthy, and skilled young people who contribute meaningfully to society.
              </p>
            </div>
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Story Timeline */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
            title="Our Journey"
            subtitle="From vision to impact - the NHRF story"
            centered
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'} md:w-1/2`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary border-4 border-background" style={{ left: index % 2 === 0 ? '100%' : '0%' }} />
                  
                  <Card className="border-card-border hover-elevate transition-all duration-300">
                    <CardHeader>
                      <Badge className="w-fit mb-2" variant="secondary">{item.year}</Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Objectives */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
            title="Our Objectives"
            subtitle="Guiding principles that drive our mission forward"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <objective.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground">{objective.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Areas of Specialization */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
            title="Areas of Specialization"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="text-center hover-elevate transition-all duration-300 border-card-border">
              <CardContent className="p-8">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">EMPLOYABILITY</h3>
                <p className="text-muted-foreground">Career guidance and job placement services</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-all duration-300 border-card-border">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">SPORTS</h3>
                <p className="text-muted-foreground">Comprehensive training and development programs</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-all duration-300 border-card-border">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">EDUCATION</h3>
                <p className="text-muted-foreground">School improvement and skill development</p>
              </CardContent>
            </Card>
            
          </div>
          </div>
        </section>
      </ScrollFade>

      {/* Founder Message */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
            <Card className="border-card-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <Avatar className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0">
                    <AvatarImage src="/members/ravi.jpg" alt="Founder" />
                    <AvatarFallback>RR</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Founder's Message</h3>
                    <p className="text-muted-foreground mb-4 italic">
                      "Every child & youth deserves the opportunity to discover their potential through sports, education, and meaningful employment. 
                      At NHRF, we are committed to breaking barriers and creating pathways for success, regardless of socioeconomic background."
                    </p>
                    <div className="font-semibold">Dr. R. Ravivarman</div>
                    <div className="text-sm text-muted-foreground">Managing Trustee, NHRF</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Leadership Team */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
            title="List of Members"
            subtitle="Dedicated professionals driving positive change"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 border-card-border h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3 w-fit mx-auto">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </section>
      </ScrollFade>
    </div>
  );
}
