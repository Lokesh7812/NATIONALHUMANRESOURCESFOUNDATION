import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/SectionHeader';
import { 
  Target, Eye, Users, GraduationCap, Briefcase, 
  Heart, TrendingUp, Award, CheckCircle, Lightbulb 
} from 'lucide-react';
import founderImage from '@assets/generated_images/Founder_portrait_placeholder_85e87b14.png';
import team1 from '@assets/generated_images/Team_member_portrait_1_5e2e77be.png';
import team2 from '@assets/generated_images/Team_member_portrait_2_dc748e31.png';
import team3 from '@assets/generated_images/Team_member_portrait_3_30b02296.png';
import team4 from '@assets/generated_images/Team_member_portrait_4_9bfe30a3.png';
import team5 from '@assets/generated_images/Team_member_portrait_5_0e834672.png';
import team6 from '@assets/generated_images/Team_member_portrait_6_92dd8211.png';
import team7 from '@assets/generated_images/Team_member_portrait_7_360e117d.png';

export default function About() {
  const timeline = [
    { year: '2019', title: 'Foundation Established', description: 'NHRF was founded with a vision to empower underprivileged youth through sports and education.' },
    { year: '2020', title: 'Project SPORTA Launched', description: 'Initiated comprehensive sports training programs in schools across Pondicherry.' },
    { year: '2021', title: 'Expansion Phase', description: 'Extended programs to reach more schools and partnered with government bodies.' },
    { year: '2022', title: 'Employment Wing Created', description: 'Launched job network connecting youth with opportunities across India.' },
    { year: '2023', title: 'Major Milestones', description: 'Achieved significant impact with thousands of students trained and placed.' },
    { year: '2024', title: 'Community Integration', description: 'Expanded to comprehensive community development and awareness programs.' },
  ];

  const objectives = [
    { icon: Target, title: 'Sports Excellence', description: 'Train 1,00,000 students in sports by 2030' },
    { icon: GraduationCap, title: 'School Transformation', description: 'Convert 1,000 schools into Centres of Excellence' },
    { icon: Users, title: 'Youth Empowerment', description: 'Empower underprivileged youth through skill development' },
    { icon: Heart, title: 'Drug-Free Generation', description: 'Promote awareness and build a drug-free youth community' },
    { icon: CheckCircle, title: 'Equal Opportunity', description: 'Create equal opportunities for all students regardless of background' },
    { icon: TrendingUp, title: 'Sustainable Growth', description: 'Build sustainable programs for long-term community impact' },
  ];

  const teamMembers = [
    { name: 'Dr. R. Ravivarman', role: 'Managing Trustee', image: founderImage, bio: 'Leading NHRF with vision and dedication' },
    { name: 'Board Member 1', role: 'Trustee', image: team1, bio: 'Expert in education development' },
    { name: 'Board Member 2', role: 'Trustee', image: team2, bio: 'Specialist in sports management' },
    { name: 'Board Member 3', role: 'Trustee', image: team3, bio: 'Employment and HR expert' },
    { name: 'Board Member 4', role: 'Trustee', image: team4, bio: 'Community development leader' },
    { name: 'Board Member 5', role: 'Trustee', image: team5, bio: 'Strategic planning specialist' },
    { name: 'R. Vijayaraghavan', role: 'Core Contributor', image: team6, bio: 'Operations and program management' },
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
                  <span className="text-foreground">Train 1,00,000 students in sports by 2030</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Convert 1,000 schools into Centres of Excellence</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Empower underprivileged youth</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Promote a drug-free generation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Create equal opportunity for all students</span>
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
                To build an India where every child and youth has access to quality sports training, education, 
                skill development, and life-changing opportunities regardless of economic background. We envision 
                a nation of confident, healthy, and skilled young people who contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
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

      {/* Objectives */}
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

      {/* Areas of Specialization */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Areas of Specialization"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
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
            <Card className="text-center hover-elevate transition-all duration-300 border-card-border">
              <CardContent className="p-8">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">EMPLOYMENT</h3>
                <p className="text-muted-foreground">Career guidance and job placement services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-card-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <Avatar className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0">
                    <AvatarImage src={founderImage} alt="Founder" />
                    <AvatarFallback>RR</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Founder's Message</h3>
                    <p className="text-muted-foreground mb-4 italic">
                      "Every child deserves the opportunity to discover their potential through sports, education, and meaningful employment. 
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

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Leadership"
            subtitle="Dedicated professionals driving positive change"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
