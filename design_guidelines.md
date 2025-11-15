# NHRF Website Design Guidelines

## Design Approach
**Reference-Based**: Professional NGO/Non-profit aesthetic inspired by modern charity organizations with emphasis on impact and credibility. Clean, trust-building design with structured information hierarchy.

## Brand Colors (User-Specified)
- Primary Blue: `#1E88E5`
- Accent Green: `#2ECC71`
- Base: White background
- Text: Professional dark grays for readability

## Typography System
- **Headlines**: Bold, modern sans-serif (2xl to 5xl on desktop, xl to 3xl on mobile)
- **Body**: Clean, readable sans-serif (base to lg)
- **Counter Numbers**: Extra-bold display font (4xl to 6xl)
- **Hierarchy**: Clear distinction between hero titles, section headers, and body content

## Layout & Spacing
- **Container**: `max-w-7xl` for main content, `max-w-6xl` for text-heavy sections
- **Section Padding**: `py-16 md:py-24` for major sections, `py-8 md:py-12` for subsections
- **Spacing Units**: Primarily use `4, 6, 8, 12, 16` units (e.g., `p-4`, `gap-8`, `mb-12`)
- **Grid Systems**: 
  - Project cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - Impact counters: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`
  - Leadership team: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Navigation
- **Desktop**: Horizontal menu with dropdown for Projects/Services, sticky on scroll
- **Mobile**: Hamburger menu (smooth slide-in drawer), logo always visible
- **Menu Items**: Home | About | Services | Projects | Gallery | Testimonials | Partners | Contact
- **CTA Button**: "Donate/Contact" prominently placed in navigation (blue background)

## Core Components

### Hero Sections
- **Home Hero**: Full-screen gradient overlay on placeholder image, centered content, dual CTAs ("Explore Projects" primary blue, "Contact Us" outline)
- **Inner Pages**: Medium-height heroes (60vh) with page title, breadcrumb navigation

### Project Cards (Clickable)
- Card structure: Icon/image placeholder at top, title, 2-line description, "Learn More" link
- Hover: Subtle lift shadow, blue border accent
- Must link to dedicated pages for all 14 projects (3 main + 11 activities)

### Impact Counter Boxes
- Large bold numbers with animated count-up on scroll-into-view
- Icon above number, descriptive label below
- Background: Light gray or subtle blue tint, rounded corners

### Timeline (About Page Story)
- Vertical line connector with year nodes
- Alternating left/right content blocks
- Mobile: Single column, centered timeline

### Filter System (Gallery)
- Horizontal pill-style buttons: "All | Sports | School Programs | Camps | Job Fairs | Community | Achievements"
- Active state: Blue background, white text
- Masonry grid layout for images, 3-4 columns on desktop, 2 on tablet, 1 on mobile

### Team Cards
- Circular photo placeholder, name, title, one-line bio
- Subtle shadow, hover: slight scale-up

### Testimonial Slider
- Card-based: Quote text, name, role, star rating or photo
- Navigation arrows + dot indicators
- 1 visible on mobile, 2 on tablet, 3 on desktop

### Partner Logos
- Grid layout: 3-4 per row on desktop, 2 on tablet, 1-2 on mobile
- Grayscale default, color on hover
- Caption text below each logo

## Animations (User-Required)
- **Page Load**: NHRF logo animation (spin/fade in initials)
- **Scroll Reveals**: Fade-in-up for sections (stagger for cards/grids)
- **Counters**: Animated count-up when in viewport
- **Transitions**: Smooth page navigation (0.3s ease)
- **Hover Effects**: Scale (1.02-1.05), shadow depth increase

## Images
**Hero Image**: Home page hero requires full-width placeholder image (community/students theme)
**Project Cards**: Each needs icon or small header image placeholder
**Gallery**: Minimum 30+ placeholder images across all filter categories
**Team Section**: Circular portrait placeholders for 8 team members
**Partner Logos**: 7 logo placeholders (rectangular, transparent backgrounds)
**Activity Pages**: Each of 14 dedicated project pages needs 2-3 placeholder images

## Responsive Breakpoints
- **Mobile**: < 768px (single column, stacked navigation)
- **Tablet**: 768px - 1024px (2-column grids, adjusted spacing)
- **Desktop**: > 1024px (full layouts, multi-column grids)

## Contact Page Specifics
- **No Form**: Only display contact information in organized sections
- **Map**: Embedded Google Maps iframe (full-width in section)
- **Contact Cards**: Grid of 4 cards (Address, Email, Phone, WhatsApp) with icons
- **Social Links**: Icon row at bottom

## Accessibility & Performance
- Minimum touch target: 44x44px for mobile
- Color contrast: WCAG AA compliant text
- Alt text placeholders for all images
- Keyboard navigation for filters, sliders, menus
- Optimized animations (respect prefers-reduced-motion)