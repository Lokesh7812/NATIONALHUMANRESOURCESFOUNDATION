import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';
import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram, Linkedin, Youtube, Users, Heart, Building2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '26, Thee Mithi Street, Thilaspet, Pondicherry – 605 009, India',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'operations@nationalhrfoundation.org',
      link: 'mailto:operations@nationalhrfoundation.org',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '0413-2900716',
      link: 'tel:04132900716',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '+91 79048 40716 / +91 99433 91650',
      link: 'https://wa.me/917904840716',
    },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/17bWC2rP2C/', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/nhrf_official?igsh=NXdldGN5dnFqcGI5', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/national-human-resource-foundation/', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@tamilmatrix?si=99I7G2uiwQel5PDm', color: 'hover:text-red-600' },
  ];

  const joinOptions = [
    {
      title: 'Volunteer',
      description: 'Join our mission and make a difference in the community',
      icon: Heart,
      whatsappMessage: 'Hello! I want to join your NGO as a volunteer. I am interested in contributing to your mission and making a positive impact in the community.',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
      iconBg: 'bg-gradient-to-br from-pink-100 to-rose-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Philanthropic Funder',
      description: 'Support our programs and help transform lives',
      icon: Building2,
      whatsappMessage: 'Hello! I am interested in becoming a Philanthropic Funder for your NGO. I would like to support your programs and help transform lives in the community.',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
      iconBg: 'bg-gradient-to-br from-purple-100 to-indigo-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'CSR Partner',
      description: 'Partner with us for corporate social responsibility initiatives',
      icon: Briefcase,
      whatsappMessage: 'Hello! I represent a company interested in CSR partnership with your NGO. We would like to explore corporate social responsibility initiatives and collaboration opportunities.',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Staffs',
      description: 'Join our team and contribute to meaningful work',
      icon: Users,
      whatsappMessage: 'Hello! I am interested in joining your NGO as a staff member. I would like to contribute to your team and be part of meaningful work that transforms lives.',
      buttonColor: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch with us to learn more about our programs or explore partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-${info.title.toLowerCase()}`}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Find Us & Join With Us Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Find Us - Left Side */}
              <div>
                <SectionHeader
                  title="Find Us"
                  subtitle="Visit our office in Pondicherry"
                />
                <div className="mt-6 rounded-lg overflow-hidden border border-card-border h-[300px] md:h-[350px]" data-testid="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5!2d79.8!3d11.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU0JzAwLjAiTiA3OcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NHRF Office Location"
                    data-testid="map-iframe"
                  />
                </div>
              </div>

              {/* Join With Us - Right Side */}
              <div>
                <SectionHeader
                  title="Join With Us"
                  subtitle="Be part of our mission to transform lives"
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {joinOptions.map((option, index) => {
                    const encodedMessage = encodeURIComponent(option.whatsappMessage);
                    const whatsappLink = `https://wa.me/917904840716?text=${encodedMessage}`;
                    
                    return (
                      <Card 
                        key={index} 
                        className="group hover-elevate transition-all duration-300 border-card-border overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardContent className="p-6 flex flex-col h-full relative z-10">
                          <div className={`rounded-xl ${option.iconBg} p-4 w-fit mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                            <option.icon className={`h-6 w-6 ${option.iconColor}`} />
                          </div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">{option.title}</h3>
                          <p className="text-sm text-muted-foreground mb-5 flex-grow leading-relaxed">
                            {option.description}
                          </p>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button
                              className={`w-full ${option.buttonColor} text-white gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold`}
                              size="default"
                            >
                              <MessageSquare className="h-5 w-5" />
                              <span>Connect via WhatsApp</span>
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <SectionHeader
              title="Connect With Us"
              subtitle="Follow our journey on social media"
              centered
            />
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3"
                  >
                    <social.icon className={`h-5 w-5 transition-colors ${social.color}`} />
                    <span>{social.name}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-card-border">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Office Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Weekdays</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Weekends</h3>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-muted-foreground">
                    <strong className="text-foreground">Registration Number:</strong> 1093/IV/2020<br />
                    Govt-registered NGO based in Pondicherry, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
