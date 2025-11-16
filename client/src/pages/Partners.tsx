import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';

export default function Partners() {
  const partners = [
    {
      name: 'Rotary International',
      description: 'Service organization supporting community welfare and youth empowerment',
      logo: '/partners/Rotary.png',
    },
    {
      name: 'Government of Puducherry',
      description: 'Official partner for education and sports initiatives across the territory',
      logo: '/partners/governmant of puducherry.png',
    },
    {
      name: 'EATON',
      description: 'Corporate partner supporting infrastructure and community development',
      logo: '/partners/eaton.png',
    },
    {
      name: 'IKF India',
      description: 'Indian Kabbadi Federation collaborating in sports training programs',
      logo: '/partners/IKF.png',
    },
    {
      name: 'Khelo India',
      description: 'National program for development of sports partnering in talent identification',
      logo: '/partners/khelo india.jpg',
    },
    {
      name: 'Sri Aurobindo Society',
      description: 'Educational and cultural organization supporting our sports and development programs',
      logo: '/partners/sri society.png',
    },
    {
      name: 'PondyCAN',
      description: 'Pondicherry Cancer Network partnering in health awareness campaigns',
      logo: '/partners/pondycan.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Our Partners</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Collaborating with leading organizations to maximize our impact
            </p>
          </div>
        </div>
      </section>

      {/* Partners Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-foreground leading-relaxed">
              Our success is built on strong partnerships with government bodies, educational institutions, 
              corporate organizations, and NGOs. Together, we create sustainable programs that transform lives 
              and strengthen communities across India.
            </p>
          </div>

          <SectionHeader
            title="Partner Organizations"
            subtitle="Trusted collaborators in our mission"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  <div className="h-32 flex items-center justify-center mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Partner With Us"
            subtitle="Benefits of collaboration with NHRF"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Proven Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Track record of successful programs reaching thousands of beneficiaries across India
                </p>
              </CardContent>
            </Card>
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Strong Network</h3>
                <p className="text-sm text-muted-foreground">
                  Extensive connections with schools, colleges, and community organizations
                </p>
              </CardContent>
            </Card>
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Professional Team</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated professionals committed to excellence in program delivery
                </p>
              </CardContent>
            </Card>
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Transparent Operations</h3>
                <p className="text-sm text-muted-foreground">
                  Clear reporting and accountability in all our partnerships and programs
                </p>
              </CardContent>
            </Card>
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Sustainable Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on long-term impact through sustainable and scalable initiatives
                </p>
              </CardContent>
            </Card>
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Community Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of local needs and culturally sensitive program design
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
