import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollFade } from '@/components/ScrollFade';

type Category = 'all' | 'sports' | 'school' | 'camps' | 'jobfairs' | 'community' | 'achievements';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  // Gallery images from attached_assets/gallery
  const galleryImageFiles = [
    '1.jpg',
    'home.jpg',
    's1.jpg',
    's2.jpg',
    'home1.jpg',
    'IMG_20230603_125843.jpg',
    'IMG_20230610_115052.jpg',
    // 'IMG_20240428_110759_187.jpg',
    // 'IMG_20240428_110759_467.jpg',
    'IMG_5205.JPG',
    'IMG-20220102-WA0058.jpg',
    'IMG-20220130-WA0027.jpg',
    'IMG-20220715-WA0005.jpg',
    'IMG-20220715-WA0006.jpg',
    'IMG-20220715-WA0007.jpg',
    'IMG-20230119-WA0014.jpg',
    'IMG-20230119-WA0032.jpg',
    'IMG-20230119-WA0035.jpg',
    'IMG-20230120-WA0065.jpeg',
    'IMG-20230206-WA0007.jpg',
    'IMG-20230309-WA0019.jpg',
    'IMG-20230319-WA0003.jpg',
    'IMG-20230408-WA0013.jpg',
    'IMG-20230408-WA0015.jpg',
    'IMG-20230409-WA0006.jpg',
    'IMG-20230607-WA0007.jpg',
    'IMG-20230613-WA0005.jpg',
    'IMG-20240124-WA0088.jpg',
    'IMG-20240201-WA0066.jpg',
    'IMG-20240201-WA0072.jpg',
    'IMG-20240222-WA0007.jpg',
    'IMG-20250514-WA0029.jpg',
    'IMG-20250518-WA0002.jpg',
    'IMG20240910194825_01.jpg',
    'IMG20240910195056.jpg',
    'IMG20240922163316.jpg',
    'IMG20240922181042.jpg',
    'IMG20240929074827.jpg',
    'IMG20240929074907.jpg',
    'IMG20240929103751.jpg',
    'IMG20241018094103.jpg',
    'IMG20241018094636.jpg',
    'IMG20241018101555.jpg',
    'IMG20241018134003.jpg',
    'IMG20241018140516.jpg',
    'IMG20250210152612.jpg',
    'P_20230716_073239.jpg',
    'P_20230716_074358.jpg',
    'P_20240214_175750.jpg',
    'P_20250514_181158.jpg',
    'P_20250815_102116_1_1.jpg',
  ];

  // Categories for distribution (excluding 'all' as it's not a valid category for individual images)
  const categoryTypes: Exclude<Category, 'all'>[] = ['sports', 'school', 'camps', 'jobfairs', 'community', 'achievements'];
  
  const galleryImages = galleryImageFiles.map((filename, index) => {
    // Distribute images across categories evenly
    const category = categoryTypes[index % categoryTypes.length];
    const altText = `NHRF Activity - ${filename.replace(/\.(jpg|jpeg|JPG|JPEG)$/i, '').replace(/[-_]/g, ' ')}`;
    
    return {
      url: `/gallery/${filename}`,
      alt: altText,
      category: category as Category,
    };
  });

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
      <ScrollFade>
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
      </ScrollFade>

      {/* Filter Section */}
      <ScrollFade>
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
      </ScrollFade>

      {/* Gallery Grid */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.url}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-muted hover-elevate transition-all duration-300 border border-card-border animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-base drop-shadow-lg">{image.alt}</p>
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
      </ScrollFade>
    </div>
  );
}
