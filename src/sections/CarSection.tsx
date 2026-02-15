import { useState, useCallback, useEffect } from 'react';
import { Car, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Fuel, Settings, ExternalLink } from 'lucide-react';
import { cars } from '@/data/mockData';
import useEmblaCarousel from 'embla-carousel-react';

export default function CarSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section className="bg-[#F5F7FA] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E6F0FF] rounded-lg">
              <Car className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Featured Cars</h2>
              <p className="text-sm text-gray-500">Browse the best car deals in the UK</p>
            </div>
          </div>
          <a
            href="#all-cars"
            className="text-sm text-[#0066FF] hover:underline flex items-center gap-1"
          >
            View All
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Car Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {cars.map((car, index) => (
                <div
                  key={car.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  style={{
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <a
                    href={`#car-${car.id}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#0066FF]/20"
                  >
                    {/* Car Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                          {car.year}
                        </span>
                        {car.originalPrice && (
                          <span className="bg-[#FF5252] text-white text-xs px-2 py-1 rounded-md">
                            Save £{(car.originalPrice - car.price).toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        {car.location}
                      </div>
                    </div>

                    {/* Car Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 group-hover:text-[#0066FF] transition-colors duration-200 line-clamp-1">
                        {car.name}
                      </h3>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          <Users className="w-3 h-3" />
                          {car.seats} seats
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          <Fuel className="w-3 h-3" />
                          {car.fuelType}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          <Settings className="w-3 h-3" />
                          {car.transmission}
                        </span>
                        {car.engineSize && (
                          <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                            <Calendar className="w-3 h-3" />
                            {car.engineSize}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-xl font-bold text-[#0066FF]">
                          £{car.price.toLocaleString()}
                        </span>
                        {car.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            £{car.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {car.mileage && car.mileage > 0 && (
                        <p className="text-xs text-gray-500 mt-1">{car.mileage.toLocaleString()} miles</p>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? 'bg-[#0066FF] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['New Cars', 'Used Cars', 'Electric', 'Hybrid', 'Petrol', 'Diesel'].map((filter) => (
            <a
              key={filter}
              href={`#filter-${filter}`}
              className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:text-[#0066FF] hover:bg-[#E6F0FF] transition-all duration-200 shadow-sm border border-gray-100"
            >
              {filter}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
