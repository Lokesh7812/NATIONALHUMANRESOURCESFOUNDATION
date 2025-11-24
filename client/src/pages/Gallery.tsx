import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollFade } from '@/components/ScrollFade';
import { X } from 'lucide-react';
import galleryData from '@/data/gallery-data.json';

type GalleryData = Record<string, string[]>;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = galleryData as GalleryData;
  const categories = Object.keys(data);

  // Create categories array with "All" option
  const categoryOptions = [
    { value: 'all', label: 'All' },
    ...categories.map(category => ({
      value: category,
      label: category,
    })),
  ];

  // Helper function to construct image URLs
  // Properly encode path segments for static file serving
  const constructImageUrl = (category: string, filename: string): string => {
    // Encode each segment separately - this is crucial for folders with &, spaces, etc.
    // encodeURIComponent properly handles: & → %26, spaces → %20, etc.
    const encodedCategory = encodeURIComponent(category);
    const encodedFilename = encodeURIComponent(filename);
    
    // Construct the path - Vite will serve files from public/ as root
    return `/gallery/${encodedCategory}/${encodedFilename}`;
  };

  // Build gallery images array
  const galleryImages = categories.flatMap(category =>
    data[category].map(filename => ({
      url: constructImageUrl(category, filename),
      alt: `${category} - ${filename.replace(/\.(jpg|jpeg|JPG|JPEG|heic)$/i, '').replace(/[-_]/g, ' ')}`,
      category: category,
    }))
  );

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handle image click
  const handleImageClick = (image: { url: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    // Small delay before clearing selected image for fade-out animation
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen, handleCloseModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
            {categoryOptions.map((category) => (
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
                key={`${image.category}-${image.url}-${index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-muted hover-elevate transition-all duration-300 border border-card-border animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                onClick={() => handleImageClick(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(image);
                  }
                }}
                aria-label={`View ${image.alt} in full size`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Failed to load image:', image.url);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-base drop-shadow-lg">{image.category}</p>
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-300`}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            style={{
              animation: isModalOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out',
            }}
          />

          {/* Modal Content */}
          <div
            className="relative z-10 max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Close image viewer"
              style={{
                animation: isModalOpen ? 'fadeInScale 0.3s ease-out 0.1s both' : 'fadeOutScale 0.2s ease-out',
              }}
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                animation: isModalOpen ? 'fadeInScale 0.3s ease-out' : 'fadeOutScale 0.2s ease-out',
              }}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{
                  animation: isModalOpen ? 'zoomIn 0.3s ease-out' : 'zoomOut 0.2s ease-out',
                }}
              />
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes fadeOut {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }

            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes fadeOutScale {
              from {
                opacity: 1;
                transform: scale(1);
              }
              to {
                opacity: 0;
                transform: scale(0.95);
              }
            }

            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes zoomOut {
              from {
                opacity: 1;
                transform: scale(1);
              }
              to {
                opacity: 0;
                transform: scale(0.9);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
