import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollFade } from '@/components/ScrollFade';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, GraduationCap, Briefcase } from 'lucide-react';
import sportaIcon from '@assets/generated_images/Project_SPORTA_icon_b174e451.jpg';
import chanakyaIcon from '@assets/generated_images/Portal_Chanakya_icon_ddf00b29.png';
import employmentIcon from '@assets/generated_images/Employment_Wing_icon_a86e685a.png';
// import tamil from 'tamilmaxtrix.jpg';
import waterFest from '@assets/generated_images/Water_fest_program_3d28d713.png';
import drugAwareness from '@assets/generated_images/Drug_awareness_program_4e271398.png';
import mandela from '@assets/generated_images/Mandela_Initiative_tuition_681b9b7d.png';
import meroTrophy from '@assets/generated_images/MERO_Trophy_football_league_b599afea.png';
import forestCamp from '@assets/generated_images/Forest_life_skills_camp_ece66425.png';
import summerCamp from '@assets/generated_images/Summer_camp_activity_photo_6ac7a096.png';
import careerGuidance from '@assets/generated_images/Career_guidance_program_ad2ec322.png';
import schoolDev from '@assets/generated_images/School_development_project_6bc96663.png';
import jobFair from '@assets/generated_images/Job_fair_event_photo_c15383bf.png';
import talentId from '@assets/generated_images/Talent_identification_program_3f4c3067.png';
import communityAwareness from '@assets/generated_images/Gallery_community_activity_1_d5a6e46d.png';

export default function Projects() {
  const mainProjects = [
    {
      id: 'tamil-matrix',
      title: 'Tamil Matrix',
      description: 'A digital movement that inspired the birth of NHRF - A youth-led initiative connecting 2,700+ job seekers across 35 district groups in Tamil Nadu, Puducherry & Karnataka.',
      image: 'gallery/tamilmatrix.jpg',
    },
    
     {
      id: 'employment',
      title: 'Employment Exchange Hub',
      description: 'Job network connecting 10,00,000+ job seekers with 6,000+ MSMEs, placing 20,000+ youth in meaningful careers.',
      image: employmentIcon,
    },
    {
      id: 'genesis',
      title: 'Genesis Football Club',
      description: 'High-performance boys and girls football club under NHRF’s sports wing delivering elite coaching, holistic development, and pro-level exposure.',
      image: 'gallery/football.jpg',
    },
    {
      id: 'sporta',
      title: 'Project SPORTA',
      description: 'Flagship sports development initiative transforming 15 Government schools into sports-driven learning ecosystems, training 700+ students (Aged 13–17).',
      image: sportaIcon,
    },
   
    {
      id: 'step-out-narco',
      title: 'Step Out Narco',
      description: 'Comprehensive drug prevention initiative - The modern Satyagraha fighting for a drug-free generation across government schools.',
      image: drugAwareness,
    },
    {
      id: 'portal-chanakya',
      title: 'Portal Chanakya',
      description: 'Reimagining the future of Government schools through infrastructure, digital learning, and holistic development.',
      image: chanakyaIcon,
    },
    
  ];

  const activities = [
    {
      id: 'water-fest',
      title: 'One Drop, One Dream – Neerkudam Water Fest',
      description: 'Massive environmental movement mobilizing 80 schools across 20 locations to protect freshwater bodies and create water conservation awareness.',
      image: waterFest,
    },
    {
      id: 'mandela-initiative',
      title: 'Creating the Next Nelson Mandela',
      description: 'Five free tuition centres in Sedarapet and Katterikuppam offering free academic support, stationery kits, safe learning spaces, and nutrition support.',
      image: mandela,
    },
    {
      id: 'mero-trophy',
      title: 'MERO Trophy Football League',
      description: 'South India-level 11s football tournament with 1,024 players from 64 teams, reviving Puducherry\'s football legacy and creating pathways to professional opportunities.',
      image: meroTrophy,
    },
    {
      id: 'forest-camp',
      title: 'Forest & Life-Skills Camp',
      description: 'Outdoor camps teaching environmental awareness and essential life skills.',
      image: forestCamp,
    },
    {
      id: 'summer-camps',
      title: 'Summer Camps',
      description: 'Engaging summer programs benefiting 110+ students with sports and activities.',
      image: summerCamp,
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance & Entrepreneurship Development',
      description: 'Empowering 550+ students across Cuddalore and Villupuram districts with career exploration, entrepreneurship awareness, and leadership development.',
      image: careerGuidance,
    },
    {
      id: 'ikf-trials',
      title: 'IKF Trials - From SPORTA to Stardom',
      description: 'Regional execution partner for India Khelo Football, providing 220+ aspiring footballers with pathways to ISL clubs and international opportunities.',
      image: sportaIcon,
    },
    {
      id: 'coach-workshops',
      title: 'Revolutionizing Sports Coaching',
      description: 'Four intensive 7-day workshops upskilling emerging football coaches with modern training methodologies and tactical innovation.',
      image: sportaIcon,
    },
    {
      id: 'athlete-support',
      title: 'Bolstering Local Champions',
      description: 'Supporting promising athletes like Subiksha (boxing), Karthik & Santhosh (football), and Hannah Charles (discus) with equipment and financial aid.',
      image: sportaIcon,
    },
    {
      id: 'stationery-distribution',
      title: 'Cultivating Tomorrow\'s Leaders',
      description: 'Distributing essential stationery to 152 board exam candidates over 3 years, easing educational expenses and inspiring academic excellence.',
      image: schoolDev,
    },
    {
      id: 'school-development',
      title: 'School Development',
      description: 'Infrastructure improvement and resource enhancement for educational institutions.',
      image: schoolDev,
    },
    {
      id: 'college-job-fairs',
      title: 'College Job Fairs',
      description: 'Job fairs conducted at 22 colleges connecting students with employers.',
      image: jobFair,
    },
    {
      id: 'talent-identification',
      title: 'Talent Identification Programs',
      description: 'Discovering and nurturing young talent in sports and academics.',
      image: talentId,
    },
    {
      id: 'community-awareness',
      title: 'Community Awareness Drives',
      description: 'Public awareness campaigns on health, education, and social issues.',
      image: communityAwareness,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <ScrollFade>
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Our Projects & Initiatives </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Comprehensive programs and initiatives (2019-Present) driving positive change in communities across India
              </p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Main Projects */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Main Projects"
              subtitle="Our flagship initiatives creating lasting impact"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {mainProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Activities & Completed Works */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Activities & Programs"
              subtitle="Diverse initiatives addressing community needs"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {activities.map((activity) => (
                <ProjectCard key={activity.id} {...activity} />
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Call to Action */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Learn More?</h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Each project represents our commitment to creating positive change. Click on any project to explore detailed information about its impact and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollFade>
    </div>
  );
}
