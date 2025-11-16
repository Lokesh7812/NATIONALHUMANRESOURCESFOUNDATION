import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'lg:bg-background/95 lg:backdrop-blur-md lg:border-b lg:border-border lg:shadow-sm bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1">
            <img
              src="/nhrf-logo.png"
              alt="NHRF Logo"
              className="h-16 md:h-20 w-auto"
            />
            <div className="flex flex-col">
              <div className="text-xs sm:text-xs md:text-sm lg:text-base font-bold text-primary leading-tight">NATIONAL HUMAN RESOURCE FOUNDATION</div>
              <div className="text-[9px] sm:text-xs text-muted-foreground leading-tight hidden sm:block">Evolving Next Future</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? 'secondary' : 'ghost'}
                  className="text-sm font-medium"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <img
                    src="/nhrf-logo.png"
                    alt="NHRF Logo"
                    className="h-20 w-auto"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary leading-tight">NATIONAL HUMAN RESOURCES FOUNDATION</div>
                    <div className="text-xs text-muted-foreground leading-tight">Evolving Next Future</div>
                  </div>
                </div>
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant={location === item.path ? 'secondary' : 'ghost'}
                      className="w-full justify-start text-base"
                      data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-4" data-testid="button-mobile-contact">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
