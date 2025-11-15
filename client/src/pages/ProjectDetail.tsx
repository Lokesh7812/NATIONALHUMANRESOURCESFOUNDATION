import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import sportaImg from '@assets/generated_images/Sports_training_program_photo_f804f1c6.png';
import chanakyaImg from '@assets/generated_images/Education_workshop_photo_ee83bbfe.png';
import employmentImg from '@assets/generated_images/Job_fair_event_photo_c15383bf.png';
import waterFest from '@assets/generated_images/Water_fest_program_3d28d713.png';
import drugAwareness from '@assets/generated_images/Drug_awareness_program_4e271398.png';
import mandela from '@assets/generated_images/Mandela_Initiative_tuition_681b9b7d.png';
import meroTrophy from '@assets/generated_images/MERO_Trophy_football_league_b599afea.png';
import forestCamp from '@assets/generated_images/Forest_life_skills_camp_ece66425.png';
import summerCamp from '@assets/generated_images/Summer_camp_activity_photo_6ac7a096.png';
import careerGuidance from '@assets/generated_images/Career_guidance_program_ad2ec322.png';
import schoolDev from '@assets/generated_images/School_development_project_6bc96663.png';
import talentId from '@assets/generated_images/Talent_identification_program_3f4c3067.png';
import communityImg from '@assets/generated_images/Gallery_community_activity_1_d5a6e46d.png';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;

  const projectsData: Record<string, any> = {
    'sporta': {
      title: 'Project SPORTA',
      subtitle: 'Sports Training & Development',
      description: 'Project SPORTA is our flagship sports development initiative that brings professional-level training to schools across India. We focus on building sustainable sports ecosystems within educational institutions, providing comprehensive training in multiple sports disciplines.',
      fullDescription: 'Since its inception, Project SPORTA has transformed the sports culture in numerous schools. Our professional coaches work directly with students, providing structured training programs that develop both athletic skills and life skills such as discipline, teamwork, and perseverance. The program includes infrastructure development, equipment provision, and regular competitive opportunities through inter-school tournaments.',
      image: sportaImg,
      impact: [
        '1,774+ students trained across multiple sports',
        '15+ schools currently under active training programs',
        '2 students selected for State-Level Football Camp',
        'Partnerships with Sri Aurobindo Society and Education Department',
        'Regular tournaments and skill assessment programs',
      ],
      beneficiaries: 'Students from government and private schools, particularly those from underprivileged backgrounds who lack access to quality sports training. The program focuses on age groups 8-18 years.',
      objectives: [
        'Provide professional sports training in schools',
        'Develop sports infrastructure in educational institutions',
        'Identify and nurture sporting talent',
        'Promote physical fitness and healthy lifestyles',
        'Build character through sports discipline',
      ],
    },
    'portal-chanakya': {
      title: 'Portal Chanakya',
      subtitle: 'School Improvement & Development',
      description: 'Portal Chanakya is a comprehensive school development program that works to transform educational institutions into centers of excellence. We focus on holistic improvement covering infrastructure, teaching quality, and student learning outcomes.',
      fullDescription: 'Through Portal Chanakya, we partner with schools to identify their specific needs and implement customized improvement plans. Our approach includes teacher training, curriculum enhancement, infrastructure development, and the introduction of innovative teaching methodologies. The program aims to create sustainable improvements that benefit students for years to come.',
      image: chanakyaImg,
      impact: [
        '80+ schools impacted through various programs',
        'Comprehensive teacher training sessions conducted',
        'Infrastructure improvements in partner schools',
        'Enhanced learning environments for thousands of students',
        'Introduction of modern teaching aids and technology',
      ],
      beneficiaries: 'Schools in underprivileged areas, teachers seeking professional development, and students who benefit from improved educational facilities and teaching quality.',
      objectives: [
        'Transform schools into centers of excellence',
        'Improve teaching quality and methodologies',
        'Enhance school infrastructure and resources',
        'Introduce technology in education',
        'Create sustainable improvement models',
      ],
    },
    'employment': {
      title: 'Employment Wing',
      subtitle: 'Career Development & Job Placement',
      description: 'The Employment Wing operates as a comprehensive job network connecting youth with career opportunities across industries. We provide career counseling, skill training, and direct placement support to help young people build successful careers.',
      fullDescription: 'Our Employment Wing has created a vast network connecting job seekers with employers across various sectors. We conduct regular job fairs at colleges, provide one-on-one career counseling, offer skill development workshops, and maintain an active database of opportunities. Our approach focuses on not just finding jobs, but building careers through continuous support and guidance.',
      image: employmentImg,
      impact: [
        '10,00,000+ job seekers in our active network',
        '6,000+ MSMEs and employers connected',
        '20,000+ youth successfully placed in jobs',
        '22 colleges covered through job fairs',
        'Ongoing career support and mentorship',
      ],
      beneficiaries: 'College students, recent graduates, and young professionals seeking employment opportunities. Special focus on first-generation job seekers from underprivileged backgrounds.',
      objectives: [
        'Connect youth with employment opportunities',
        'Provide comprehensive career guidance',
        'Build employability through skill training',
        'Create industry connections for job seekers',
        'Support career growth and development',
      ],
    },
    'water-fest': {
      title: 'Water Fest – Neerkudam',
      subtitle: 'Environmental Awareness Campaign',
      description: 'Water Fest (Neerkudam) is our environmental awareness program focused on water conservation. Through engaging activities and educational sessions, we teach students about the importance of water conservation and sustainable practices.',
      fullDescription: 'The Water Fest program reaches schools across the region, conducting interactive sessions that combine education with practical demonstrations. Students learn about water cycles, conservation techniques, and the environmental impact of water waste. The program includes hands-on activities that make learning fun and memorable.',
      image: waterFest,
      impact: [
        '80+ schools participated in the program',
        'Thousands of students educated on water conservation',
        'Practical conservation techniques taught',
        'School-level water conservation initiatives started',
      ],
      beneficiaries: 'School students across all age groups, with particular focus on creating environmental awareness among young minds.',
      objectives: [
        'Promote water conservation awareness',
        'Educate about environmental sustainability',
        'Encourage practical conservation habits',
        'Create environmental champions',
      ],
    },
    'step-out-narco': {
      title: 'Step Out Narco',
      subtitle: 'Drug Awareness & Prevention',
      description: 'Step Out Narco is our drug awareness campaign designed to educate youth about the dangers of substance abuse and help them make informed, healthy choices.',
      fullDescription: 'This program combines education, counseling, and peer support to create a comprehensive approach to drug prevention. We work with schools and colleges to conduct interactive sessions, bringing in experts and reformed individuals to share their experiences. The program aims to build awareness and resilience among youth.',
      image: drugAwareness,
      impact: [
        '400+ students trained in drug awareness',
        'Multiple schools and colleges covered',
        'Interactive sessions with experts and counselors',
        'Peer support networks established',
      ],
      beneficiaries: 'Teenagers and young adults vulnerable to substance abuse, with focus on creating informed, drug-free communities.',
      objectives: [
        'Educate about dangers of substance abuse',
        'Build awareness and prevention skills',
        'Create support systems for youth',
        'Promote healthy lifestyle choices',
      ],
    },
    'mandela-initiative': {
      title: 'Mandela Initiative',
      subtitle: 'Free Tuition Centers',
      description: 'The Mandela Initiative provides free tuition and weekend learning centers for underprivileged students who cannot afford quality education support.',
      fullDescription: 'Named after Nelson Mandela, this initiative focuses on providing educational equity. Our centers offer subject tutoring, homework help, and enrichment activities. Qualified teachers volunteer their time to ensure every child has access to quality education support regardless of their economic background.',
      image: mandela,
      impact: [
        'Multiple tuition centers established',
        'Hundreds of students benefiting from free education',
        'Weekend classes for working students',
        'Improved academic performance reported',
      ],
      beneficiaries: 'Underprivileged students who lack access to quality education support and cannot afford private tuition.',
      objectives: [
        'Provide free quality education support',
        'Bridge educational gaps for underprivileged students',
        'Improve academic outcomes',
        'Create equal learning opportunities',
      ],
    },
    'mero-trophy': {
      title: 'MERO Trophy Football League',
      subtitle: 'Large-Scale Sports Tournament',
      description: 'The MERO Trophy is a major football tournament that provides a competitive platform for young athletes to showcase their talent and passion for the sport.',
      fullDescription: 'This large-scale tournament brings together teams from across the region, creating a professional competitive environment for young players. The MERO Trophy has become a prestigious event that not only showcases talent but also teaches valuable lessons in sportsmanship, teamwork, and competitive spirit.',
      image: meroTrophy,
      impact: [
        '1,024 players participated in the tournament',
        'Multiple teams from various schools and clubs',
        'Professional-level tournament organization',
        'Talent scouts and opportunities for standout players',
      ],
      beneficiaries: 'Young football enthusiasts and aspiring athletes seeking competitive opportunities and exposure.',
      objectives: [
        'Provide competitive platform for athletes',
        'Identify and nurture football talent',
        'Promote sportsmanship and teamwork',
        'Create professional tournament experiences',
      ],
    },
    'forest-camp': {
      title: 'Forest & Life-Skills Camp',
      subtitle: 'Outdoor Education & Development',
      description: 'Our Forest & Life-Skills Camp combines outdoor education with essential life skills training, partnering with organizations like Sadhana Forest.',
      fullDescription: 'These camps take students out of their usual environment and into nature, where they learn about environmental conservation, teamwork, survival skills, and self-reliance. The program includes outdoor activities, team-building exercises, and workshops on various life skills that prepare students for real-world challenges.',
      image: forestCamp,
      impact: [
        'Outdoor camps conducted with environmental focus',
        'Partnership with Sadhana Forest and other organizations',
        'Comprehensive life skills training provided',
        'Character development through outdoor challenges',
      ],
      beneficiaries: 'Students seeking personal development and life skills training through experiential outdoor learning.',
      objectives: [
        'Teach environmental awareness',
        'Develop essential life skills',
        'Build character through outdoor challenges',
        'Promote teamwork and leadership',
      ],
    },
    'summer-camps': {
      title: 'Summer Camps',
      subtitle: 'Engaging Holiday Programs',
      description: 'Our summer camps provide engaging, educational activities during school holidays, combining sports, arts, and learning in a fun environment.',
      fullDescription: 'These camps are designed to keep students engaged productively during summer vacations. With a mix of sports, creative activities, educational workshops, and field trips, the camps provide a well-rounded experience that is both fun and developmental. Each camp is carefully structured to ensure safety, learning, and enjoyment.',
      image: summerCamp,
      impact: [
        '110+ students benefited from summer programs',
        'Multi-activity camps covering sports and arts',
        'Safe and supervised holiday engagement',
        'Positive feedback from parents and participants',
      ],
      beneficiaries: 'Children and teenagers during summer vacations, providing productive and safe engagement during holidays.',
      objectives: [
        'Provide productive summer activities',
        'Combine learning with fun',
        'Develop various skills through activities',
        'Ensure safe holiday engagement',
      ],
    },
    'career-guidance': {
      title: 'Career Guidance & Entrepreneurship',
      subtitle: 'Professional Development Programs',
      description: 'Our career guidance programs help students make informed decisions about their futures, covering career counseling, entrepreneurship, and professional development.',
      fullDescription: 'These programs bring industry professionals, successful entrepreneurs, and career counselors to interact with students. We conduct workshops on resume building, interview skills, entrepreneurship basics, and career planning. The goal is to equip students with knowledge and confidence to make informed career decisions.',
      image: careerGuidance,
      impact: [
        'Career workshops at multiple colleges',
        'Entrepreneurship awareness programs',
        'Professional skill development sessions',
        'Industry interaction opportunities',
      ],
      beneficiaries: 'College students and young professionals seeking career direction and professional skill development.',
      objectives: [
        'Provide comprehensive career counseling',
        'Promote entrepreneurship awareness',
        'Build professional skills',
        'Connect students with industry',
      ],
    },
    'school-development': {
      title: 'School Development Programs',
      subtitle: 'Infrastructure & Resource Enhancement',
      description: 'Under Portal Chanakya, we work on comprehensive school development including infrastructure improvement and resource enhancement.',
      fullDescription: 'These programs focus on physical infrastructure development, from classroom improvements to sports facilities. We also work on enhancing learning resources, including libraries, laboratories, and technology integration. Each project is customized to the specific needs of the school.',
      image: schoolDev,
      impact: [
        'Multiple schools with improved infrastructure',
        'Enhanced learning environments created',
        'Resource libraries established',
        'Technology integration in classrooms',
      ],
      beneficiaries: 'Schools in need of infrastructure and resource development, ultimately benefiting thousands of students.',
      objectives: [
        'Improve school infrastructure',
        'Enhance learning resources',
        'Modernize educational facilities',
        'Create conducive learning environments',
      ],
    },
    'college-job-fairs': {
      title: 'College Job Fairs',
      subtitle: 'Campus Recruitment Events',
      description: 'We organize job fairs at colleges to connect students directly with potential employers, creating opportunities for immediate placement.',
      fullDescription: 'Our college job fairs bring together multiple employers and hundreds of job seekers in a structured recruitment environment. Students can meet recruiters, participate in interviews, and potentially secure job offers on the spot. We also conduct pre-fair preparation sessions to help students present themselves effectively.',
      image: employmentImg,
      impact: [
        '22 colleges covered through job fairs',
        'Multiple employers participated',
        'On-the-spot interviews and selections',
        'Preparation workshops for students',
      ],
      beneficiaries: 'Final year students and recent graduates seeking employment opportunities through direct employer interaction.',
      objectives: [
        'Connect students with employers',
        'Facilitate campus recruitment',
        'Provide interview opportunities',
        'Support immediate job placement',
      ],
    },
    'talent-identification': {
      title: 'Talent Identification Programs',
      subtitle: 'Discovering & Nurturing Young Talent',
      description: 'Our talent identification programs discover and nurture young talent in sports, academics, and other fields, providing specialized support for gifted students.',
      fullDescription: 'Through systematic assessments and observations, we identify students with exceptional abilities. These students receive specialized training, mentorship, and opportunities to develop their talents further. Whether in sports, academics, or arts, we help talented youth reach their full potential.',
      image: talentId,
      impact: [
        'Regular talent assessment programs',
        'Specialized training for identified talents',
        'Mentorship and guidance provided',
        'Opportunities for further development',
      ],
      beneficiaries: 'Talented students who need specialized support and opportunities to develop their exceptional abilities.',
      objectives: [
        'Identify exceptional talent systematically',
        'Provide specialized development support',
        'Create advancement opportunities',
        'Nurture talent to full potential',
      ],
    },
    'community-awareness': {
      title: 'Community Awareness Drives',
      subtitle: 'Public Health & Social Campaigns',
      description: 'We conduct various awareness campaigns addressing critical social, health, and environmental issues affecting communities.',
      fullDescription: 'These drives cover topics ranging from health and hygiene to social issues and environmental concerns. We work with local communities to identify their most pressing needs and design campaigns that are culturally appropriate and effective. Our approach combines information dissemination with practical demonstrations and follow-up support.',
      image: communityImg,
      impact: [
        'Multiple awareness campaigns conducted',
        'Communities educated on various issues',
        'Practical demonstrations and workshops',
        'Ongoing community engagement',
      ],
      beneficiaries: 'Community members across all age groups, with focus on creating informed and engaged communities.',
      objectives: [
        'Raise awareness on critical issues',
        'Educate communities effectively',
        'Promote positive behavioral change',
        'Build informed communities',
      ],
    },
    'community': {
      title: 'Community Development Programs',
      subtitle: 'Strengthening Communities',
      description: 'Our community development programs focus on building stronger, more aware, and engaged communities through various initiatives.',
      fullDescription: 'We believe that strong communities are built through awareness, education, and collective action. Our programs address community needs through awareness campaigns, skill development, and empowerment initiatives that create lasting positive change.',
      image: communityImg,
      impact: [
        'Multiple community programs conducted',
        'Thousands of community members engaged',
        'Sustainable community initiatives started',
        'Positive community transformation observed',
      ],
      beneficiaries: 'Community members seeking empowerment and development opportunities.',
      objectives: [
        'Strengthen community bonds',
        'Promote awareness and education',
        'Empower community members',
        'Create sustainable development',
      ],
    },
  };

  const project = projectsData[projectId || ''];

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-background border-b sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects">
            <Button variant="ghost" className="gap-2" data-testid="button-back-to-projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Active Program</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{project.title}</h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{project.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-card-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="About This Program" />
            <p className="text-lg text-foreground leading-relaxed">{project.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Impact & Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Impact & Achievements" centered />
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="border-card-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {project.impact.map((item: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      {project.objectives && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Program Objectives" centered />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {project.objectives.map((objective: string, index: number) => (
                <Card key={index} className="border-card-border hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{objective}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Beneficiaries */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-card-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Who Benefits</h2>
                </div>
                <p className="text-lg text-foreground leading-relaxed">{project.beneficiaries}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Interested in supporting or partnering with this program? Contact us to learn how you can make a difference.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
