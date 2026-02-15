import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    id: 1,
    title: 'Spring Tech Sale',
    subtitle: 'Save up to 40% on latest gadgets',
    description: 'Limited time offers on smartphones, laptops & more',
    cta: 'Shop Deals',
    bgImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=500&fit=crop',
    productImage: 'https://images.unsplash.com/photo-1610945265078-3858a0828671?w=600&h=400&fit=crop',
    productName: 'Samsung Galaxy S25',
  },
  {
    id: 2,
    title: 'New iPhone 16 Pro',
    subtitle: 'Experience the future today',
    description: 'Available now with exclusive UK deals',
    cta: 'Learn More',
    bgImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=500&fit=crop',
    productImage: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=400&fit=crop',
    productName: 'iPhone 16 Pro',
  },
  {
    id: 3,
    title: 'Gaming Revolution',
    subtitle: 'PS5 & Xbox Bundle Deals',
    description: 'Get the ultimate gaming experience',
    cta: 'View Deals',
    bgImage: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=500&fit=crop',
    productImage: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop',
    productName: 'PlayStation 5',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[380px] md:h-[480px]" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 relative"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.bgImage})`,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,102,255,0.92) 0%, rgba(0,82,204,0.88) 100%)',
                  }}
                />

                {/* Content Grid */}
                <div className="relative h-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 md:px-12">
                  {/* Left Content */}
                  <div className="text-white space-y-4 z-10 text-center md:text-left">
                    <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                      Limited Time Offer
                    </span>
                    <h2
                      className="text-3xl md:text-5xl font-bold"
                      style={{
                        animation: selectedIndex === index ? 'slideUp 0.6s ease-out 0.2s both' : 'none',
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="text-lg md:text-xl font-medium"
                      style={{
                        animation: selectedIndex === index ? 'slideUp 0.5s ease-out 0.4s both' : 'none',
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <p
                      className="text-sm md:text-base opacity-90"
                      style={{
                        animation: selectedIndex === index ? 'slideUp 0.5s ease-out 0.5s both' : 'none',
                      }}
                    >
                      {slide.description}
                    </p>
                    <button
                      className="bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        animation: selectedIndex === index ? 'slideUp 0.6s ease-out 0.6s both' : 'none',
                      }}
                    >
                      {slide.cta}
                    </button>
                  </div>

                  {/* Right Product Image */}
                  <div
                    className="hidden md:flex justify-center items-center"
                    style={{
                      animation: selectedIndex === index ? 'scaleIn 0.8s ease-out 0.3s both' : 'none',
                    }}
                  >
                    <div className="relative">
                      <img
                        src={slide.productImage}
                        alt={slide.productName}
                        className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-gray-800">{slide.productName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
