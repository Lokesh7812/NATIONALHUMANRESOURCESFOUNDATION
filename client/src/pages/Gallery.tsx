import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import sport1 from '@assets/generated_images/Gallery_sports_event_1_9e897426.png';
import sport2 from '@assets/generated_images/Gallery_sports_event_2_cdfe8a31.png';
import sport3 from '@assets/generated_images/Gallery_sports_event_3_ee7197b4.png';
import sport4 from '@assets/generated_images/Gallery_sports_event_4_d12a6ba6.png';
import school1 from '@assets/generated_images/Gallery_school_program_1_8c49a35f.png';
import school2 from '@assets/generated_images/Gallery_school_program_2_5f4ac6c4.png';
import camp1 from '@assets/generated_images/Gallery_camp_workshop_1_328bea01.png';
import camp2 from '@assets/generated_images/Gallery_camp_workshop_2_9738a529.png';
import summerCamp from '@assets/generated_images/Summer_camp_activity_photo_6ac7a096.png';
import jobfair1 from '@assets/generated_images/Gallery_job_fair_1_3a15f31c.png';
import jobfair2 from '@assets/generated_images/Gallery_job_fair_2_63fd0d49.png';
import jobfair3 from '@assets/generated_images/Job_fair_event_photo_c15383bf.png';
import community1 from '@assets/generated_images/Gallery_community_activity_1_d5a6e46d.png';
import community2 from '@assets/generated_images/Gallery_community_activity_2_deed2742.png';
import achievement1 from '@assets/generated_images/Gallery_achievement_1_00ac3458.png';
import achievement2 from '@assets/generated_images/Gallery_achievement_2_4214997b.png';
import achievement3 from '@assets/generated_images/Gallery_achievement_3_141d5815.png';

type Category = 'all' | 'sports' | 'school' | 'camps' | 'jobfairs' | 'community' | 'achievements';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const galleryImages = [
    { url: sport1, alt: 'Football match in progress', category: 'sports' as const },
    { url: sport2, alt: 'Athletics training session', category: 'sports' as const },
    { url: sport3, alt: 'Cricket match action', category: 'sports' as const },
    { url: sport4, alt: 'Basketball game', category: 'sports' as const },
    { url: school1, alt: 'School assembly program', category: 'school' as const },
    { url: school2, alt: 'Educational workshop', category: 'school' as const },
    { url: camp1, alt: 'Community service camp', category: 'camps' as const },
    { url: camp2, alt: 'Life skills workshop', category: 'camps' as const },
    { url: summerCamp, alt: 'Summer camp activities', category: 'camps' as const },
    { url: jobfair1, alt: 'Career guidance seminar', category: 'jobfairs' as const },
    { url: jobfair2, alt: 'Job fair booth interaction', category: 'jobfairs' as const },
    { url: jobfair3, alt: 'College job fair event', category: 'jobfairs' as const },
    { url: community1, alt: 'Community awareness drive', category: 'community' as const },
    { url: community2, alt: 'Environmental program', category: 'community' as const },
    { url: achievement1, alt: 'Award ceremony', category: 'achievements' as const },
    { url: achievement2, alt: 'Trophy display', category: 'achievements' as const },
    { url: achievement3, alt: 'Winning team celebration', category: 'achievements' as const },
  ];

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'sports', label: 'Sports Events' },
    { value: 'school', label: 'School Programs' },
    { value: 'camps', label: 'Camps & Workshops' },
    { value: 'jobfairs', label: 'Job Fairs' },
    { value: 'community', label: 'Community Activities' },
    { value: 'achievements', label: 'Achievements' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Gallery</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Capturing moments of impact, growth, and community transformation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b sticky top-16 md:top-20 z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all"
                data-testid={`filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-muted hover-elevate transition-all duration-300 border border-card-border"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
