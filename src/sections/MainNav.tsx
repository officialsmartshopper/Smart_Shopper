import { useState } from 'react';
import { Car, Smartphone, Camera, Tv, Laptop, Refrigerator, Watch, Gamepad2, Baby, Sparkles, Plane, Home, ChevronRight } from 'lucide-react';
import { categories } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Car,
  Smartphone,
  Camera,
  Tv,
  Laptop,
  Refrigerator,
  Watch,
  Gamepad2,
  Baby,
  Sparkles,
  Plane,
  Home,
};

export default function MainNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-8 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Category Grid */}
          <div className="flex items-center w-full">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Watch;
              const isActive = activeCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="relative flex-1"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <a
                    href={`#category-${category.id}`}
                    className={`flex flex-col items-center gap-1 py-3 px-2 transition-all duration-200 group ${
                      isActive ? 'text-[#ff6600]' : 'text-gray-700 hover:text-[#ff6600]'
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? 'rotate-12' : 'group-hover:rotate-12'
                      }`}
                    />
                    <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
                  </a>

                  {/* Dropdown Menu */}
                  {isActive && category.subcategories && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg border border-gray-100 min-w-[200px] py-2 animate-fade-in"
                      style={{
                        animation: 'slideUp 0.3s ease-out',
                      }}
                    >
                      {category.subcategories.map((sub, index) => (
                        <a
                          key={sub}
                          href={`#sub-${sub}`}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-[#ff6600] hover:bg-[#fff0e6] transition-all duration-200 group/item"
                          style={{
                            animation: `slideInLeft 0.3s ease-out ${index * 0.02}s both`,
                          }}
                        >
                          <span>{sub}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
