import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollFade } from '@/components/ScrollFade';
import { X, ExternalLink } from 'lucide-react';

export default function PressAndMedia() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Press & Media images
  const pressImages = [
    'IMG_20230610_114524.jpg',
    'IMG_20230610_115043.jpg',
    'IMG_20230610_115052.jpg',
    'IMG_20230610_121122.jpg',
    'IMG_20230610_121147.jpg',
    'IMG_20230610_121157.jpg',
    'IMG_20230610_121159.jpg',
    'IMG_20230610_122736.jpg',
    'IMG_20230610_122745.jpg',
    'IMG_20230610_122757.jpg',
    'IMG-20250417-WA0005.jpg',
    'IMG-20250418-WA0015.jpg',
    'newspaper1.png',
  ];

  const galleryImages = pressImages.map((filename) => ({
    url: `/Press & Media/${encodeURIComponent(filename)}`,
    alt: `Press & Media - ${filename.replace(/\.(jpg|jpeg|JPG|JPEG|png)$/i, '').replace(/[-_]/g, ' ')}`,
  }));

  // Handle image click
  const handleImageClick = (image: { url: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Press & Media</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our presence in media and coverage of our initiatives
              </p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Description Section */}
      <ScrollFade>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
                Chief guest invited in channels for speech, meetup with the Pondicherry media team, featured in newspapers.
              </p>
              
              {/* News Article Card */}
              <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover-elevate transition-all duration-300">
                <div className="p-6 md:p-8">
                  {/* Article Header */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">Tamil Nadu</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">2nd Oct, 2022</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      Tamil Nadu techie on the turf teaching kids to punt past hurdles
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>By Debjani Dutta</span>
                      <span>•</span>
                      <span>Updated: 2nd Oct, 2022 at 5:06 AM</span>
                    </div>
                  </div>

                  {/* Newspaper Image */}
                  <div className="mb-6">
                    <img
                      src="/Press & Media/newspaper.avif"
                      alt="New Indian Express Newspaper Article"
                      className="w-full h-auto rounded-lg shadow-md border border-border"
                    />
                  </div>

                  {/* Article Image Caption */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-md border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground italic">
                      Ravi Varman and his football club at Indira Gandhi Government High school, Katterikuppam (Photo | Sriram R)
                    </p>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      PUDUCHERRY: The passes have a semblance to Tiqui-taca. The children are fully immersed in their game. Unmindful of the sweat dripping off their eyebrows, they are all chasing the ball with their target in focus. "Santhosh and Karthik," shouts R Ravi Varman, watching them play on the ground of Indira Gandhi Government High School in Katterikuppam in Mannadipet Commune.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      The 29-year-old techie from Thilaspet — who has B Tech and MBA degrees — is living his dream and is on a mission to make many a future bright by developing sports in government schools in the rural parts of Puducherry. Though the love for football is in his blood, he could not pursue his passion, blaming it on his circumstances back home.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      Years spent on computers or unending client calls did not dampen his love for the game as the techie, along with his friends, V Mohandass, S Maheswaran, Subramanian and AP Tarun, all BTech graduates, founded a trust — National Human Resource Foundation — in 2019 to empower rural students in sports, education and employment.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      Mohandass, who played football with Ravi Varman in school, went on to became the director of sports and football coach of the trust. A batch of 20 students of the government high school were selected for training, and after getting approval from the Department of School Education, a ground was prepared by clearing the bushes and levelling the field. Former players from the village were roped in as volunteers.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      Next comes the difficult part of buying football gear. Taking Ravi Varman by surprise, CM N Rangasamy chipped in by making contributions at the initial stage. Students are being trained on a daily basis, either before school or after school. Ten months of training and local matches later, they were exposed to tournaments in Chennai, Villupuram and Cuddalore. In the last one year, they took part in 10 tournaments.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      The trust organised the 'Mero Trophy Tournament' in Puducherry which saw the participation of teams from TN and Kerala. The latest tourney was held on JIPMER grounds on July 15, where 35 teams took part.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      Ask Ravi Varman, he would say most of his fellow football team members in school have quit playing as there is little opportunity to showcase their talents or to hone their skills. "A good number of them got addicted to ganja and alcohol and their lives started falling apart," he says, adding that health benefits apart, sports will help keep alcohol and drugs at bay.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      The trust has no plan to end its coaching with Indira Gandhi Government High School, as the techie says, he plans to form football teams in other government schools as well. "This is just the beginning. We are planning to take it forward. The next in our target is PONCOS Higher Secondary School in Lingerreddipalayam. We have already started the groundwork on October 1," Ravi Varman says.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      It's not just football, the trust wants to develop other sports in which the students are interested. "This could be solo sports item or team sports like volleyball, cricket and the like," he says, adding those who excel can move forward from State level to regional level and to national level and build a career in sports.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      The trust was helping youth in getting employment as several lost their jobs during the pandemic. By creating various networks with HR departments of several companies, management of private hospitals and organisations and Whatsapp groups of job seekers, the trust is assisting educated youth in getting placed.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-6 font-semibold">
                      Hearing their mentor's call, Santhosh and Karthik, both studying in Class 9, stop playing and run towards the edge of the ground huffing and puffing. When they are near, Ravi Varman whoops, unable to hide his excitement. "Both of you have been selected to the State under-16 team," he exults.
                    </p>
                  </div>

                  {/* External Link Button */}
                  <div className="pt-6 border-t border-border">
                    <a
                      href="https://www.newindianexpress.com/amp/story/states/tamil-nadu/2022/Oct/01/tamil-nadu-techie-on-the-turf-teaching-kids-to-punt-past-hurdles-2504086.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      <span>Read Full Article on New Indian Express</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Gallery Grid */}
      <ScrollFade>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.url}
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
                      <p className="text-white font-semibold text-base drop-shadow-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

