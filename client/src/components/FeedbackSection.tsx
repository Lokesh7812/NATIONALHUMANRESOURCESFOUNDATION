import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { MessageSquare, Users, GraduationCap, Building2, Heart, Briefcase, Handshake, Shield, DollarSign, UserCheck } from 'lucide-react';

const roles = [
  { id: 'students', label: 'Students', icon: GraduationCap },
  { id: 'parents-guardians', label: 'Parents & Guardians', icon: Users },
  { id: 'community-members', label: 'Community Members', icon: Heart },
  { id: 'school-teachers-principals', label: 'School Teachers & Principals', icon: GraduationCap },
  { id: 'volunteers-interns', label: 'Volunteers & Interns', icon: Heart },
  { id: 'coaches-trainers', label: 'Coaches & Trainers', icon: Briefcase },
  { id: 'partner-organizations-ngos', label: 'Partner Organizations / NGOs', icon: Handshake },
  { id: 'government-officials', label: 'Government Officials', icon: Shield },
  { id: 'donors-sponsors', label: 'Donors / Sponsors', icon: DollarSign },
  { id: 'employees-staff-members', label: 'Employees & Staff Members', icon: UserCheck },
];

export function FeedbackSection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Share Your Feedback"
          subtitle="Select your role to help us improve our programs"
          centered
        />

        {/* Role Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-12 max-w-7xl mx-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            
            const handleWhatsAppClickForRole = () => {
              const message = `Hi, I am a ${role.label}. I would like to share my feedback.`;
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/917904840716?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            };
            
            return (
              <div key={role.id} className="flex flex-col">
                <Card
                  className={`
                    cursor-pointer transition-all duration-300 border-2
                    ${isSelected 
                      ? 'border-primary bg-primary/10 shadow-lg scale-105' 
                      : 'border-card-border hover:border-primary/50 hover:shadow-md hover:scale-102'
                    }
                    hover-elevate
                  `}
                  onClick={() => handleRoleSelect(role.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRoleSelect(role.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`Select ${role.label} role`}
                >
                  <CardContent className="p-5 md:p-6 text-center">
                    <div className={`
                      rounded-full p-3 md:p-4 w-fit mx-auto mb-3 md:mb-4 transition-all duration-300
                      ${isSelected 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }
                    `}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className={`
                      font-semibold text-xs sm:text-sm md:text-base transition-colors duration-300 leading-tight
                      ${isSelected ? 'text-primary font-bold' : 'text-foreground'}
                    `}>
                      {role.label}
                    </h3>
                  </CardContent>
                </Card>
                
                {/* WhatsApp Button - Appears below selected role */}
                {isSelected && (
                  <div 
                    className="mt-4 flex justify-center animate-fade-in"
                    style={{
                      animation: 'fadeInUp 0.4s ease-out forwards',
                    }}
                  >
                    <Button
                      onClick={handleWhatsAppClickForRole}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-4 text-base gap-2 w-full sm:w-auto"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Share Feedback on WhatsApp</span>
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeInUp 0.4s ease-out forwards;
          }

          .hover\:scale-102:hover {
            transform: scale(1.02);
          }
        `}</style>
      </div>
    </section>
  );
}

