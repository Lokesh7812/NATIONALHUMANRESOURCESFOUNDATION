import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/nhrf-logo.png"
                alt="NHRF Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              National Human Resource Foundation (NHRF) is a registered NGO empowering children, youth, and communities through Sports, Education, and Employment development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-projects">Our Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-gallery">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>26, Thee Mithi Street, Thilaspet, Pondicherry – 605 009</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>0413-2900716</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>operations@nationalhrfoundation.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/17bWC2rP2C/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 border border-border"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/nhrf_official?igsh=NXdldGN5dnFqcGI5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 border border-border"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/national-human-resource-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 border border-border"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://youtube.com/@tamilmatrix?si=99I7G2uiwQel5PDm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 border border-border"
                data-testid="link-youtube"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} National Human Resource Foundation. All rights reserved. | Reg. No. 1093/IV/2020
          </p>
        </div>
      </div>
    </footer>
  );
}
