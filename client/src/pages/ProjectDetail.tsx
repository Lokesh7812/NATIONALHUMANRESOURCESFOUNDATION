import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ReactNode } from 'react';
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

// Component to format fullDescription with proper bullet points and structure
function FormattedDescription({ text }: { text: string }) {
  const formatText = (text: string): ReactNode[] => {
    const sections: ReactNode[] = [];
    const lines = text.split('\n');
    
    let currentSection: ReactNode[] = [];
    let currentList: { content: string; indent: number }[] = [];
    let currentParagraph: string[] = [];
    let listIndent = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        const groupedLists: { indent: number; items: string[] }[] = [];
        let currentGroup: { indent: number; items: string[] } | null = null;

        currentList.forEach(item => {
          if (!currentGroup || currentGroup.indent !== item.indent) {
            if (currentGroup) {
              groupedLists.push(currentGroup);
            }
            currentGroup = { indent: item.indent, items: [] };
          }
          currentGroup.items.push(item.content);
        });
        if (currentGroup) {
          groupedLists.push(currentGroup);
        }

        groupedLists.forEach((group, groupIdx) => {
          const listItems = group.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 mb-3">
              <span className="text-primary font-bold mt-1 flex-shrink-0">•</span>
              <span className="text-foreground leading-relaxed flex-1">{item.trim()}</span>
            </li>
          ));
          currentSection.push(
            <ul key={`list-${sections.length}-${groupIdx}`} className={`list-none mb-6 ${group.indent > 0 ? 'ml-8' : ''}`}>
              {listItems}
            </ul>
          );
        });
        currentList = [];
        listIndent = 0;
      }
    };

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ').trim();
        if (paragraphText) {
          currentSection.push(
            <p key={`para-${sections.length}`} className="mb-6 text-lg text-foreground leading-relaxed">
              {paragraphText}
            </p>
          );
          currentParagraph = [];
        }
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      if (trimmed === '') {
        flushList();
        flushParagraph();
        continue;
      }
      
      // Check if it's a section header
      // Headers are typically: all caps, or title case without ending punctuation
      const isAllCaps = trimmed === trimmed.toUpperCase() && trimmed.length > 2 && trimmed.length < 80;
      const startsWithCapital = /^[A-Z]/.test(trimmed);
      const noEndingPunctuation = !trimmed.match(/[.,;:]$/);
      const isShortLine = trimmed.length < 80;
      const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
      const followedByBlankOrBullet = nextLine === '' || nextLine.startsWith('•') || nextLine.match(/^\d+\./);
      
      const isHeader = trimmed.length > 0 && 
        !trimmed.includes('•') && 
        !trimmed.match(/^\d+\./) &&
        (isAllCaps || (startsWithCapital && isShortLine && noEndingPunctuation && followedByBlankOrBullet));
      
      // Check if it's a numbered list item
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
      
      // Check if it's a bullet point (with or without indentation)
      const bulletMatch = trimmed.match(/^(\s*)•\s*(.+)$/);
      
      // Check if it's a sub-item under numbered list (indented bullet)
      const subItemMatch = trimmed.match(/^(\s{3,})•\s*(.+)$/);

      if (isHeader) {
        flushList();
        flushParagraph();
        if (currentSection.length > 0) {
          sections.push(
            <div key={`section-${sections.length}`} className="mb-8">
              {currentSection}
            </div>
          );
          currentSection = [];
        }
        currentSection.push(
          <h3 key={`header-${sections.length}`} className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-foreground first:mt-0 border-b border-primary/20 pb-3">
            {trimmed}
          </h3>
        );
      } else if (numberedMatch) {
        flushList();
        flushParagraph();
        const [, number, content] = numberedMatch;
        currentSection.push(
          <div key={`numbered-${i}`} className="mb-6">
            <div className="flex gap-4 items-start">
              <span className="font-bold text-primary text-xl flex-shrink-0 min-w-[2rem]">{number}.</span>
              <div className="flex-1">
                <p className="text-lg text-foreground font-semibold leading-relaxed">{content}</p>
              </div>
            </div>
          </div>
        );
      } else if (subItemMatch) {
        const indent = subItemMatch[1].length;
        const content = subItemMatch[2];
        currentList.push({ content, indent });
        listIndent = indent;
      } else if (bulletMatch) {
        flushParagraph();
        const indent = bulletMatch[1].length;
        const content = bulletMatch[2];
        currentList.push({ content, indent });
        if (listIndent === 0) {
          listIndent = indent;
        }
      } else if (trimmed.length > 0) {
        flushList();
        currentParagraph.push(trimmed);
      }
    }

    flushList();
    flushParagraph();

    if (currentSection.length > 0) {
      sections.push(
        <div key={`section-final`} className="mb-8">
          {currentSection}
        </div>
      );
    }

    return sections.length > 0 ? sections : [<p key="default" className="text-lg text-foreground leading-relaxed">{text}</p>];
  };

  return (
    <div className="text-base md:text-lg">
      {formatText(text)}
    </div>
  );
}

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;

  const projectsData: Record<string, any> = {
    'tamil-matrix': {
      title: 'Tamil Matrix',
      subtitle: 'Our Journey Before NHRF - A Digital Movement that Inspired the Birth of NHRF (2019-2020)',
      description: 'Before establishing the National Human Resource Foundation (NHRF), our social-impact journey began with Tamil Matrix, a youth-led digital initiative created to support job seekers during the challenging pandemic years.',
      fullDescription: `How It All Started

In 2020, during the uncertainties of the global pandemic, a group of young professionals from Puducherry and Tamil Nadu launched Tamil Matrix — a free, community-driven platform focused on:

• Employment awareness
• Daily verified job notifications
• Career guidance
• Technology and skill-upgradation content

At a time when opportunities were limited, Tamil Matrix became a trusted source of hope, information, and motivation for thousands of young people across South India.

Our Mission

Tamil Matrix was created with a simple and powerful purpose: "To make employment opportunities and technology awareness accessible to everyone, without barriers or cost."

We strongly believe no one should pay to find a job. All our updates, notifications, and career resources are 100% free, and we maintain strict transparency by cautioning users about possible third-party misleads.

Our Network Across Tamil Nadu, Puducherry & Karnataka

Tamil Matrix created one of the earliest statewide WhatsApp job-notification networks. We built 35 district groups, connecting over 2,700 active job seekers across districts including:

• Chennai – 471 members
• Puducherry – 254 members
• Coimbatore – 179 members
• Trichy – 110 members
• Madurai – 140 members
• Salem – 106 members
• And many more covering all districts of Tamil Nadu, Puducherry, and Karnataka

Every member received daily verified job postings, exam updates, and career support directly on their mobile phones.

Our Digital Presence

Tamil Matrix created strong online engagement beyond WhatsApp:

• YouTube Channel: 4.8K subscribers, 55+ informative videos
• Facebook & Instagram: Career tips, motivational posts, educational awareness

Impact & Legacy

Tamil Matrix grew into a vibrant digital community, guiding thousands of youth to:

• Find employment
• Understand career pathways
• Improve digital literacy
• Build confidence during economic uncertainty

The success and social value of Tamil Matrix directly inspired the founding of NHRF, allowing us to expand our efforts into Sports, Education, Health, and Employability. Tamil Matrix continues as a non-commercial, free public service platform, while NHRF carries the mission forward through structured and large-scale developmental programs.`,
      image: employmentImg,
      impact: [
        '2,700+ active job seekers connected across 35 district groups',
        'Coverage across all districts of Tamil Nadu, Puducherry, and Karnataka',
        '4.8K YouTube subscribers with 55+ informative videos',
        'Free job notifications and career guidance for thousands',
        'Foundation for NHRF\'s evolution into a registered NGO',
      ],
      beneficiaries: 'Job seekers, recent graduates, and young professionals across Tamil Nadu, Puducherry, and Karnataka seeking employment opportunities and career guidance.',
      objectives: [
        'Make employment opportunities accessible to everyone without barriers',
        'Provide free job notifications and career updates',
        'Build a transparent, volunteer-led community network',
        'Bridge job seekers with employers and opportunities',
        'Create technology awareness and digital literacy',
      ],
    },
    'sporta': {
      title: 'Project SPORTA',
      subtitle: 'A Flagship Sports Development Initiative - Transforming Schools into Sports-Driven Learning Ecosystems',
      description: 'Project SPORTA is a flagship sports development initiative by NHRF that transforms schools into sports-driven learning ecosystems, integrating professional sports training with career awareness, drug prevention, and leadership development.',
      fullDescription: `About NHRF

The National Human Resource Foundation (NHRF) is a registered NGO (Reg. 2020) based in Puducherry. Our work focuses on Sports & Health, Education, and Employability & Youth Development. We aim to bridge gaps in opportunity and create structured pathways for young people to achieve excellence.

VISION

• To transform Government schools into Centres of Excellence in Sports
• To build a drug-free younger generation
• To create a nationally scalable school development model

MISSION

• Train 1,00,000 Government school students by 2030
• Develop 1,000 Centre-of-Excellence Schools
• Promote football and multi-sport training in Pondicherry and Tamil Nadu

Project Overview

Project SPORTA began as a small pilot program in 2019 in a rural Government High School. With support from Sri Aurobindo Society (2023), it has now expanded to:

• 15 Government Schools
• 700+ Students (Aged 13–17)
• Structured sports, health, and life-skills curriculum

SPORTA is not just a sports program — it is a holistic development model integrating professional sports training, career awareness, drug prevention programs, and leadership & discipline development.

Key Activities Under Project SPORTA

1. Summer Sports Camps
   • Conducted in 5+ schools enabling students to stay active during holidays
   • Learn multi-sport skills
   • Participate in inter-school events
   • Earn medals, certificates & recognition
   • Over 100 students trained through this initiative

2. Sports Material Support & Field Implementation
   • Deployment of certified physical trainers
   • Daily training (indoor & outdoor)
   • Monthly career guidance & drug awareness sessions
   • Quarterly sports skill progression assessments
   • Periodic school management workshops
   • Sports kits & equipment distribution

3. Strategic Partnership
   • NHRF partnered with India Khelo Football (IKF)
   • State-level football trials for U-15 Boys & Girls and U-17 Boys & Girls
   • Over 250 students from Pondicherry and nearby states participated
   • Provides professional scouting, national-level exposure, and direct advancement into competitive pathways

Why Project SPORTA Works (Future-Ready Model)

• Exclusively supports Government school students
• Multi-sport engagement (not limited to football)
• Scalable across states
• Sustainable year-after-year with new student batches
• Integrates sports + career + drug-free awareness
• Highly aligned with State Government education & sports priorities

Student Progression Pathway (Grassroots → Global Stage)

Project SPORTA ensures:

1. Pathway to Participation
   • Free sports orientation
   • Talent identification camps

2. Pathway to Training
   • Professional coaching
   • Regular practice & assessments

3. Pathway to Competition
   • Entry into district & state tournaments

4. Pathway to Recognition
   • National Form-II Certificates
   • College admissions & scholarships
   • Government job eligibility

5. Pathway to Excellence
   • National camps
   • International trials
   • Asian Games, Commonwealth Games
   • Olympics 2036 Pathway

Project SPORTA transforms raw talent into disciplined achievers, taking students from small village playgrounds to national and global arenas.`,
      image: sportaImg,
      impact: [
        '700+ students trained across multiple sports (Aged 13–17)',
        '15 Government Schools currently under active training programs',
        '100+ students trained through Summer Sports Camps',
        '250+ students participated in IKF state-level trials',
        'Partnerships with Sri Aurobindo Society and India Khelo Football',
        'Structured sports, health, and life-skills curriculum',
        'Pathway from grassroots to international competitions (Olympics 2036)',
        'Currently operating across 30 Government Schools',
      ],
      beneficiaries: 'Students from government schools, particularly those from underprivileged backgrounds aged 13-17 years who lack access to quality sports training.',
      objectives: [
        'Train 1,00,000 Government school students by 2030',
        'Develop 1,000 Centre-of-Excellence Schools',
        'Transform Government schools into Centres of Excellence in Sports',
        'Build a drug-free younger generation',
        'Create a nationally scalable school development model',
        'Promote football and multi-sport training in Pondicherry and Tamil Nadu',
        'Integrate sports + career + drug-free awareness',
      ],
    },
    'genesis': {
  title: 'Genesis Football Club',
  subtitle: 'We Fall, We Learn, We Rise — Elite Boys & Girls Football Pathway',
  description: 'Genesis Football Club is a high-performance boys and girls development club under the sports wing of NHRF, combining elite coaching, holistic athlete care, and professional exposure. This initiative is also dedicated to providing free football training to government school students and rural children.',
  fullDescription: `GENESIS FOOTBALL CLUB

We Fall, We Learn, We Rise...

GENESIS FOOTBALL CLUB - BOYS & GIRLS
Genesis FC is not only an elite football development pathway — it is also a social mission-driven initiative providing free football training for government school students and rural children across Puducherry and Tamil Nadu.

It is initiated and managed under the sports wing of NHRF. This club is designed for highly talented and committed players and focuses on guiding young players toward team play through cooperative and intensive professional training. They learn to understand the different positions within a team and demonstrate specific attacking and defending skills. Training and development in speed, strength, and endurance are incorporated into every program module.

COMMUNITY & RURAL IMPACT:

This initiative began at Indira Gandhi Government High School, Katterikuppam, where a dedicated techie, R. Ravi Varman, and his team transformed unused grounds into active football turfs, giving rural students a platform to rise. With support from his school-time teammate and Sports Director V. Mohandass, the trust prepared the field, selected 20 government school students, and started daily coaching sessions.

Former players from the village were roped in as volunteers. Even the Chief Minister, N. Rangasamy, contributed by helping the trust purchase equipment for the children.

Over 10 tournaments in one year — from Chennai to Cuddalore — helped the students gain exposure. The trust also organised the Mero Trophy Tournament with the participation of 35 teams from TN and Kerala.

Ravi Varman aims to form football teams in more government schools, with the next target being PONCOS Higher Secondary School, Lingerreddipalayam.

The initiative not only prevents youth from drifting into addictions like alcohol or drugs but also enables them to pursue State, Regional, and National level opportunities.

Beyond football, NHRF supports rural youth in employment by creating networks with HR departments, hospitals, companies, and job-seeking groups.

Inspirational Success Story:
Two young players, Santhosh and Karthik, were recently selected for the **State Under-16 Team**, showcasing the life-changing impact of this mission.

OUR UNIQUES:
• Elite Coaching Staff: Former professional players and certified coaches with extensive experience.
• Support Staff: Dedicated nutritionists, sport psychologists, and academic tutors for holistic care.
• Administrative Team: Professionals leading marketing, sales, and operational management.
• State-of-the-Art Facilities: Access to top-notch training turfs through strategic partnerships.
• Holistic Development: Equal emphasis on athletic and academic growth.
• Partnership Opportunities: Collaborations with renowned football clubs and sports organizations.

OUR GOALS:
1. Establish partnerships with 50 private schools within 2030.
2. Expand free football programs across government and rural schools.
3. Develop a comprehensive training curriculum tailored to different age groups and skill levels.
4. Achieve a 90% satisfaction rate from participating students, parents, and schools.

PROGRAM STRUCTURE:
• Weekly Schedule: Intensive football training, academic sessions, and recreational activities.
• Performance Tracking: Regular assessments and feedback sessions to monitor student progress.
• Parental Involvement: Regular updates and quarterly meetings to keep parents informed about their children's development.

CONTACT & REACH:
Address: Indira Gandhi Government High School Playground, Katterikuppam, Puducherry


Mobile:7904840716 & 99433 91650 | Phone: 0413-2900716
| Website: www.nationalhrfoundation.org
Email: operations@nationalhrfoundation.org`,

  image: sportaImg,

  impact: [
    'Professional training pathway for boys and girls built inside NHRF’s Sports Wing',
    'Elite coaches plus nutritionists, psychologists, and academic mentors supporting every player',
    'Weekly schedule that balances intensive training, academics, and purposeful recreation',
    'Performance tracking with regular assessments, feedback, and personalized growth plans',
    'Quarterly parental engagement to align training, academics, and wellbeing goals',
    'Strategic facility partnerships granting access to state-of-the-art training turfs',
    'Free football training and development programs dedicated to government school and rural children',
    'Community-driven model involving volunteers, former players, and local support',
  ],

  beneficiaries: 'Highly talented and committed boys and girls — including government school and rural students — seeking structured, high-performance football training with holistic academic and personal development.',

  objectives: [
    'Establish partnerships with 50 private and government schools by 2030 to expand scouting and access',
    'Develop and refine age- and skill-specific training curriculum modules',
    'Sustain a 90% satisfaction score among players, parents, and partner schools',
    'Deliver holistic athlete care spanning coaching, nutrition, psychology, and academics',
    'Expand free rural and government school sports development programs',
    'Create partnership opportunities with elite football clubs and sports organizations',
  ],
},
    'portal-chanakya': {
      title: 'CHANAKYA PORTAL',
      subtitle: 'Reimagining Government Schools infrastructure improvement and comprehensive development (2023, 2024)',
      description: 'The Chanakya Portal is a holistic initiative to uplift government schools by improving infrastructure, classroom design, digital learning, teacher training, and student talent development.',
      fullDescription: `Beneficiary Schools

• PONCOS Higher Secondary School – LRP, Puducherry
• Government High School – Vanur, Tamil Nadu
• Government High School – Katterikuppam, Puducherry

Chanakya restores dignity, opportunity, and innovation to public education.`,
      image: chanakyaImg,
      impact: [
        '3 beneficiary institutions with comprehensive transformation',
        'Infrastructure development and classroom transformation',
        'Digital learning integration in government schools',
        'Teacher upskilling programs conducted',
        'Enhanced learning environments for thousands of students',
        'Sustainable framework for school improvement',
      ],
      beneficiaries: 'Government schools in underprivileged areas, teachers seeking professional development, and students who benefit from improved educational facilities, digital learning, and enhanced teaching quality.',
      objectives: [
        'Reimagine and revive government education',
        'Transform schools into centers of excellence',
        'Bridge the gap between potential and opportunity',
        'Improve teaching quality and methodologies',
        'Enhance school infrastructure and digital resources',
        'Ensure no child is left behind in education',
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
      title: 'One Drop, One Dream — Neerkudam Water Fest',
      subtitle: 'Environmental Protection Initiative (2023–2024)',
      description: 'The Neerkudam Water Fest was a large-scale environmental initiative conducted across January–February 2023 to protect ponds, rivers, and lakes in Puducherry.',
      fullDescription: `Organized with the Aurobindo Society and supported by 20 NGOs and 20 volunteer groups, it united 80 schools across 20 locations. Students and volunteers cleaned water bodies during weekends, addressing the alarming loss of 40 water sources in the region over 25 years.

Neerkudam (Water Pot) Concept

Each school selected one student to carry a cup of clean water and pass it to the next school—forming a living chain that connected 80 institutions. This symbolic ritual emphasized that every drop matters and that protecting one water body protects the entire ecosystem.`,
      image: waterFest,
      impact: [
        '80 schools mobilized across 20 locations in Puducherry',
        'Collaboration with Aurobindo Society and 20+ NGOs',
        '20 volunteer organizations actively participating',
        'Thousands of students educated on water conservation',
        'Hands-on cleaning of ponds and lakes',
        'Living chain connecting 80 schools through Neerkudam concept',
        'Awareness about loss of 40 water bodies over 25 years',
      ],
      beneficiaries: 'School students across all age groups, teachers, volunteers, and communities across Puducherry, with particular focus on creating environmental awareness and protecting freshwater bodies.',
      objectives: [
        'Protect and preserve freshwater bodies (ponds, rivers, lakes)',
        'Promote water conservation awareness',
        'Educate about environmental sustainability and water scarcity',
        'Encourage practical conservation habits through hands-on activities',
        'Create environmental champions and community awareness',
        'Build unity and responsibility through Neerkudam concept',
      ],
    },
    'step-out-narco': {
      title: 'Step Out Narco',
      subtitle: 'The Modern Satyagraha - The Fight for a Drug-Free Generation',
      description: 'Step-Out Narco is a comprehensive Drug Prevention and Awareness Initiative designed specifically for government school students. By creating a supportive and inspiring environment, Step Out Narco envisions a generation of students who will step out of the shadows of addiction and step forward into healthy, purpose-driven, and drug-free lives.',
      fullDescription: `Step-Out Narco is more than an awareness campaign — it is a movement for change, a practical and community-driven response to the critical national issue of drug abuse among youth. The evolution of vulnerability between young individuals and teenagers highlights the importance of nurturing awareness, instilling confidence, and strengthening their ability to make respectful and responsible life decisions.

OUR MISSION

To cultivate a generation of empowered youth equipped with the awareness, resilience, and determination to lead healthy, drug-free lives — creating a future where schools and communities stand united against addiction.

OUR TARGET

To conduct drug prevention camps in 1,000 government schools and train 1,00,000 students by 2030.

PROGRAM COMPONENTS

Duration: 30 Days
Structure: Divided into 3 Phases (10 Days Each)
Target Group: Students from 6th to 10th Standard (Ages 11–16)

Phase 1 (Days 1–10): Introduction & Awareness

• Engaging sessions introducing the concept of drug prevention
• Interactive workshops on the physiological and psychological impacts of drug use
• Real-life case discussions and motivational activities

Phase 2 (Days 11–20): Realities & Risks

• Screening of documentaries and live experience sharing
• Sessions exploring the manufacturing, dealing, and profitability aspects of drug networks
• Dental and medical check-ups to identify chronic or occasional users

Phase 3 (Days 21–30): Rehabilitation & Reinforcement

• Personalized counselling and health reports for affected students
• BMI, diet, fitness, and therapy sessions in "Rehabilitation Dark Rooms"
• Certificates of Participation for school students and Volunteer Certificates for college facilitators

IMPLEMENTATION IMPACT

Schools Implemented:
• Indira Gandhi Government High School (Katterikuppam)
• Thillaiyadi Valliammai Government High School (Kathirkamam)

Participants: Over 400 students have benefited directly

Outcomes:
• 12 students voluntarily surrendered illicit substances
• Majority pledged to remain drug-free

FIELD RESEARCH INSIGHTS

Through extensive field research in Pondicherry (2024–2025), our NHRF team identified alarming patterns of drug use among students from Classes 6–10, with common substances including:

• Cigarettes
• Coolip
• Alcohol
• Marijuana (Ganja)

Recent research has uncovered that several street drugs, particularly marijuana, are being mixed with harmful medical compounds such as:

• Cyproterone Acetate (hormone suppressant causing severe hormonal imbalance, liver damage, and reproductive issues)
• Xylazine (veterinary sedative causing breathing failure, skin ulcers, and fatal overdose)

This adulteration turns recreational drug use into a life-threatening act.

NATIONAL AND STATE LEVEL DATA

National Findings:
• Over 10% of students reported using substances
• Approximately 1.5 crore children aged 10–17 consuming substances
• 40 lakh children using opioids
• 30 lakh using inhalants
• 30 lakh using alcohol

State-Level Findings:
• Puducherry: 23% of government school students involved in drug abuse
• Tamil Nadu: 9% of students reported addiction to substances

Step-Out Narco rescued our students from the dark world of addiction and is carving the monument of statue for tomorrow's destiny.`,
      image: drugAwareness,
      impact: [
        '400+ students trained in comprehensive drug prevention',
        '2 government schools implemented with full program',
        '12 students voluntarily surrendered illicit substances',
        'Majority pledged to remain drug-free and advocate awareness',
        'Field research identifying drug patterns and adulteration dangers',
        'Continuous support through ANSWER (Anti-Narco Squad with Effective Response)',
      ],
      beneficiaries: 'Students from 6th to 10th Standard (Ages 11–16) in government schools, particularly those vulnerable to substance abuse.',
      objectives: [
        'Uplift students with refusal skills to confidently say no to drugs',
        'Provide resources and counselling support for affected students',
        'Educate students on risks, consequences, and social impact of drug abuse',
        'Create safe and inclusive environment for open discussions',
        'Encourage healthy lifestyle alternatives through sports and creativity',
        'Transform government schools into drug-free campuses',
        'Train 1,00,000 students by 2030',
      ],
    },
    'mandela-initiative': {
      title: 'Creating the Next Nelson Mandela',
      subtitle: 'Tuition Centres for Child Development (2024)',
      description: 'Inspired by Mandela\'s message, "Education is the most powerful weapon," NHRF launched five free tuition centres in Sedarapet and Katterikuppam to bridge the rural–urban education gap.',
      fullDescription: `These centres offer:

• Free academic support
• Stationery kits
• Safe learning spaces
• Nutrition support with protein-rich snacks
• Awareness on health and balanced diet

This initiative nurtures not just academics but the mind, body, and spirit of every child.`,
      image: mandela,
      impact: [
        '5 tuition centres established across Sedarapet and Katterikuppam',
        '550+ students benefited from free education and holistic development',
        '80 students and 10 rural women empowered in Sundarapatti Village',
        '150 students participated in Katterikuppam workshops',
        '200 students at Krishnaswamy College, Cuddalore',
        '120 students at Saint Ann\'s College, Panruti',
        'Free stationery kits and protein-rich snacks provided',
        'Leadership development and entrepreneurial readiness training',
      ],
      beneficiaries: 'Underprivileged students in rural villages, particularly in Cuddalore and Villupuram districts, who lack access to quality education support and cannot afford private tuition.',
      objectives: [
        'Bridge educational divide between rural and urban communities',
        'Provide free quality education support and stationery kits',
        'Nourish children with protein-rich snacks and balanced diet awareness',
        'Create safe, nurturing learning spaces',
        'Develop leadership, communication, and entrepreneurial skills',
        'Build a generation of empowered, skilled, and future-ready individuals',
        'Ensure holistic development combining education with well-being',
      ],
    },
    'mero-trophy': {
      title: 'MERO Trophy',
      subtitle: 'South India–Level Football Revival (2023, 2024)',
      description: 'The MERO Trophy (inspired by Messi + Ronaldo) is an annual 11-a-side football tournament bringing together 64 teams and 1,024 players across South India.',
      fullDescription: `Created to revive Puducherry's lost football culture, the tournament provides rural players a chance to be scouted. Each year, 2–3 exceptional athletes move on to higher-level opportunities.

The MERO Trophy is a movement to reclaim Puducherry's football pride.`,
      image: meroTrophy,
      impact: [
        '1,024 players from 64 teams participated (2023-2024)',
        'South India-level 11s football tournament',
        'Electrifying three-day competitive event',
        '2-3 standout players scouted each season for higher opportunities',
        'Reviving Puducherry\'s football legacy and community pride',
        'Gateway to professional exposure for rural and coastal athletes',
        'Pathway connecting to IKF Trials and professional opportunities',
      ],
      beneficiaries: 'Young football enthusiasts, rural and coastal athletes, and aspiring footballers from across South India seeking competitive opportunities and professional exposure.',
      objectives: [
        'Revive Puducherry\'s lost football legacy and community pride',
        'Provide competitive platform for emerging talent',
        'Identify and nurture football talent from grassroots level',
        'Create pathways to professional opportunities',
        'Promote sportsmanship, teamwork, and competitive spirit',
        'Connect local players with professional scouting networks',
        'Remind every young player that their dreams belong on the field',
      ],
    },
    'forest-camp': {
      title: 'Guardians of Green Wealth',
      subtitle: 'Forest Survival Camp (2024, 2025)',
      description: 'In partnership with Sadhana Forest, NHRF conducted forest awareness and life-skills camps to reconnect students with nature.',
      fullDescription: `Participants learned:

• Tree planting
• Water conservation
• Eco-living techniques
• Leadership, teamwork & resilience

This program aligns with Dr. A.P.J. Abdul Kalam's vision for an environmentally responsible India.`,
      image: forestCamp,
      impact: [
        'Forest Awareness and Life Skills Development Camps conducted',
        'Partnership with Sadhana Forest, Puducherry',
        'Hands-on activities: tree planting, water conservation, eco-living practices',
        'Essential life skills developed: resilience, teamwork, leadership, empathy',
        'Reconnection with nature and environmental consciousness',
        'Inspired by Dr. A.P.J. Abdul Kalam\'s vision',
        'Students transformed into guardians of green change',
      ],
      beneficiaries: 'Students and volunteers seeking personal development, environmental awareness, and life skills training through experiential outdoor learning in natural settings.',
      objectives: [
        'Reconnect students with the natural world',
        'Teach forest conservation and biodiversity protection',
        'Promote sustainable living practices',
        'Develop essential life skills through outdoor challenges',
        'Build character, resilience, teamwork, and leadership',
        'Create environmental consciousness and guardians of green change',
        'Transform understanding of self and environment',
      ],
    },
    'summer-camps': {
      title: 'Summer Camps of Dreams & Discovery',
      subtitle: 'Transforming Holidays into Learning Seasons (2023, 2024)',
      description: 'A two-year initiative that turned summer holidays into a season of learning for 110 students from 12 government schools.',
      fullDescription: `Activities included:

• Sports
• Arts & crafts
• Music
• Martial arts
• Computer training
• Yoga

The camps helped children build confidence, discipline, creativity, and strong values.`,
      image: summerCamp,
      impact: [
        '110 students from 12 Government Schools benefited (2023-2024)',
        'Multi-activity camps: sports, arts, music, yoga, martial arts, computer training',
        'Students under 15 from Project SPORTA schools',
        'Exploration of hidden potential beyond classrooms',
        'Development of confidence, teamwork, creativity, and discipline',
        'Safe and supervised holiday engagement',
        'Positive feedback from parents and participants',
      ],
      beneficiaries: 'Students under 15 from Project SPORTA schools during summer vacations, providing productive and safe engagement during holidays.',
      objectives: [
        'Transform summer holidays into seasons of discovery and purpose',
        'Provide multi-activity camps combining sports, arts, and learning',
        'Help young minds dream bigger, think bolder, and rise stronger',
        'Explore hidden potential beyond classrooms',
        'Develop confidence, teamwork, creativity, and discipline',
        'Ensure safe holiday engagement with structured activities',
        'Create values that shape both champions and changemakers',
      ],
    },
    'career-guidance': {
      title: 'Career Guidance & Entrepreneurship Development',
      subtitle: 'Empowering Rural Youth Across Cuddalore & Villupuram (2020–2025)',
      description: 'To strengthen rural education and promote entrepreneurial thinking, NHRF conducted multiple impactful training programs across villages, colleges, and schools.',
      fullDescription: `Key Program Highlights

Sundarapatti Village, Cuddalore
• 80 students & 10 rural women empowered
• Career mapping, entrepreneurship basics, and skill building

Katterikuppam
• 150+ students attended workshops
• Self-assessment, academic planning, and real-world career readiness

Krishnaswamy College, Cuddalore
• 200 college students trained
• Leadership, communication, and professional development

Saint Ann's College, Panruti
• 120 young women engaged
• Entrepreneurship readiness, personality enhancement, and career goal setting

Akshardham CBSE School, Villupuram
• Elite Teacher Training Module for faculty
• Creative pedagogy, classroom engagement, and innovative teaching models

These efforts help rural students progress from education → employability → entrepreneurship, creating future-ready communities across Tamil Nadu.`,
      image: careerGuidance,
      impact: [
        '550+ students benefited across Cuddalore and Villupuram districts',
        '80 students and 10 rural women empowered in Sundarapatti Village',
        '150 students participated in Katterikuppam workshops',
        '200 students at Krishnaswamy College, Cuddalore',
        '120 students at Saint Ann\'s College, Panruti',
        'Elite Teacher Training Module at Akshardham CBSE School, Villupuram',
        'Focus on leadership development, communication, and entrepreneurial readiness',
      ],
      beneficiaries: 'Rural youth, college students, rural women, and educators across Cuddalore and Villupuram districts seeking career direction, entrepreneurship awareness, and professional skill development.',
      objectives: [
        'Nurture potential of rural youth and promote entrepreneurial mindset',
        'Provide career exploration and skill enhancement opportunities',
        'Empower students with leadership development and communication excellence',
        'Equip young learners with entrepreneurial readiness',
        'Bridge gap between education, employability, and enterprise',
        'Strengthen quality education through innovative teaching methodologies',
        'Build a generation of empowered, skilled, and future-ready individuals',
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
    'ikf-trials': {
      title: 'From SPORTA to Stardom — IKF Trials',
      subtitle: 'The Football Evolution Pathway (2023, 2024)',
      description: 'As the exclusive regional execution partner of India Khelo Football (IKF), NHRF enabled 220+ players from Puducherry to participate in national-level trials.',
      fullDescription: `The pathway for players:

1. Project SPORTA
   • Basic discipline & football foundation

2. MERO Trophy
   • Competitive match exposure

3. IKF Trials
   • National scouts & elite coaching

4. ISL Clubs / Overseas Academies
   • Professional opportunities

This ladder has helped transform raw talent into rising stars.`,
      image: sportaImg,
      impact: [
        '220+ aspiring footballers participated in IKF Trials (2023-2024)',
        'Exclusive regional execution partner for India Khelo Football',
        'Direct pathway from Project SPORTA and Mero Trophy to IKF',
        'Connection with professional scouting networks and elite coaches',
        'Pathway to ISL clubs, European academies, and international opportunities',
        'Reignited Puducherry\'s football identity',
        'Transformed passion into purpose and dreams into opportunity',
      ],
      beneficiaries: 'Aspiring footballers from Puducherry and neighbouring regions, particularly those trained under Project SPORTA and Mero Trophy, seeking professional scouting and national/international opportunities.',
      objectives: [
        'Identify and nurture India\'s next generation of football stars',
        'Provide direct pathway from grassroots to professional level',
        'Connect trained players with professional scouting networks',
        'Bridge local dedication with national recognition',
        'Create pathway to ISL clubs, European academies, and international opportunities',
        'Reignite Puducherry\'s football identity',
        'Convert ambition into achievement for young players',
      ],
    },
    'coach-workshops': {
      title: 'Revolutionizing Football Coaching',
      subtitle: 'Guest Lecture & Workshop Series (2024)',
      description: 'Under the Puducherry Region Sports Development Project, NHRF conducted four intensive seven-day workshops for emerging football coaches.',
      fullDescription: `The training covered:

• Modern coaching methodologies
• Sports science
• Player management
• Tactical development

This initiative transforms grassroots coaches into visionary mentors, capable of shaping the next generation of athletes.`,
      image: sportaImg,
      impact: [
        '4 intensive 7-day workshops conducted in 2024',
        'One workshop every three months',
        'Upskilling emerging football coaches and trainers',
        'Advanced knowledge in modern training methodologies',
        'Sports science, player management, and tactical innovation training',
        'Bridge between seasoned experts and young aspirants',
        'Local trainers transformed into visionary mentors',
      ],
      beneficiaries: 'Emerging football coaches and trainers across Puducherry region seeking professional development and advanced coaching skills.',
      objectives: [
        'Redefine sports coaching and empower coaches',
        'Upskill emerging football coaches and trainers',
        'Provide advanced knowledge in modern training methodologies',
        'Bridge experience and passion in sports education',
        'Transform local trainers into visionary mentors',
        'Create revolution in community-level sports education',
        'Inspire, lead, and elevate Puducherry\'s youth toward excellence',
      ],
    },
    'athlete-support': {
      title: 'Bolstering Local Champions',
      subtitle: 'Supporting Emerging Sports Talents (2023, 2024)',
      description: 'NHRF supported emerging sports talents with equipment and financial assistance.',
      fullDescription: `Highlights

• Boxing prodigy Subiksha received gear and funding
• 10 rural football teams received jerseys and accessories

NHRF ensures talent is driven by passion, not privilege.

Breaking Barriers — Inspiring Success Stories

NHRF continues to uplift youth from underprivileged backgrounds, helping them shatter limitations:

Subiksha
• Rose above financial hardship to excel in boxing
• From a farmer's family, defied economic hardships and limited resources

Karthik & Santhosh
• Selected for Puducherry State Football Team (2023)
• Hailing from remote villages, earned selection through NHRF's grassroots programs

Hannah Charles (13 years old)
• Secured 2nd place in State-level discus throw (2025)
• Achieved success despite minimal access to proper training facilities

Mamallan Muniswamy
• Showcased exceptional perseverance and growth (2025)
• Coming from a modest livelihood, carved his path toward success

These achievers are living examples of resilience, empowerment, and opportunity.`,
      image: sportaImg,
      impact: [
        'Subiksha (boxing) received training equipment and financial aid',
        '10 rural football teams provided with complete jerseys and accessories',
        'Karthik & Santhosh selected for Puducherry State Football Team (2023)',
        'Hannah Charles achieved 2nd place in state-level discus throw (2025)',
        'Mamallan Muniswamy showcased remarkable perseverance (2025)',
        'Support ensuring passion—not privilege—defines their play',
        'Athletes rising above challenges and inspiring others',
      ],
      beneficiaries: 'Promising athletes and emerging sports talents across Puducherry, particularly those from underprivileged backgrounds and remote areas.',
      objectives: [
        'Extend sports gear and financial support to promising athletes',
        'Ensure passion—not privilege—defines their play',
        'Support athletes who dream beyond limits',
        'Help athletes make Puducherry proud on sporting stage',
        'Provide mentorship and platform for talent development',
        'Enable athletes to rise above challenges',
        'Inspire others from similar backgrounds to dream bigger',
      ],
    },
    'stationery-distribution': {
      title: 'Supporting Board Exam Heroes',
      subtitle: 'Stationery Distribution Initiative (2023–2025)',
      description: 'For three consecutive years, NHRF distributed stationery kits to 152 students (10th & 12th grades) from Government High School, Katterikuppam.',
      fullDescription: `This small support helps students focus, study with confidence, and move toward brighter futures.`,
      image: schoolDev,
      impact: [
        '152 deserving students supported over 3 years (2023-2025)',
        '3 batches of 10th and 12th grade board exam candidates',
        'Essential stationery distributed to ease educational expenses',
        'Gesture of encouragement, hope, and belief in potential',
        'Students inspired to focus on dreams and excel in exams',
        'Small acts of support transformed into life-changing opportunities',
      ],
      beneficiaries: 'Board exam candidates (10th and 12th grades) at Government High School, Katterikuppam, particularly those facing financial constraints.',
      objectives: [
        'Support board exam candidates with essential stationery',
        'Ease burden of educational expenses',
        'Provide gesture of encouragement, hope, and belief',
        'Inspire students to focus on dreams and excel in exams',
        'Help students step confidently toward brighter future',
        'Transform small acts of support into life-changing opportunities',
        'Cultivate tomorrow\'s leaders through educational support',
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
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Back Button */}
      <div className="bg-background border-b sticky top-20 md:top-24 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects">
            <Button variant="ghost" className="gap-2" data-testid="button-back-to-projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
<br></br>
<br></br>
      {/* Project Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
      <section className="py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="About This Initiatives" />
            <div className="mt-8">
              <FormattedDescription text={project.fullDescription} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Statistics */}
      <section className="py-16 md:py-24 bg-muted/30 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
        <section className="py-16 md:py-24 bg-background w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
      <section className="py-16 md:py-24 bg-muted/30 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
      <section className="py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
