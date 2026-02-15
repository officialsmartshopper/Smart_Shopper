import { useState } from 'react';
import { Car, Smartphone, Camera, Tv, Laptop, Home, Watch, Gamepad2, Baby, Sparkles, Plane, Building, ChevronRight } from 'lucide-react';
import { categories } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Car,
  Smartphone,
  Camera,
  Tv,
  Laptop,
  Home,
  Watch,
  Gamepad2,
  Baby,
  Sparkles,
  Plane,
  Building,
};

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-9 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Watch;
            const isActive = activeCategory === category.id;

            return (
              <div
                key={category.id}
                className="relative flex-shrink-0"
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <a
                  href={`#category-${category.id}`}
                  className={`flex flex-col items-center gap-1 py-3 px-4 transition-all duration-200 group ${
                    isActive ? 'text-[#0066FF]' : 'text-gray-600 hover:text-[#0066FF]'
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                  />
                  <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
                  {category.productCount && (
                    <span className="text-[10px] text-gray-400">{category.productCount.toLocaleString()}</span>
                  )}
                </a>

                {/* Dropdown Menu */}
                {isActive && category.subcategories && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 min-w-[200px] py-2 z-50 animate-fade-in">
                    {category.subcategories.map((sub, index) => (
                      <a
                        key={sub}
                        href={`#sub-${sub}`}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-[#0066FF] hover:bg-[#E6F0FF] transition-all duration-200 group/item"
                        style={{
                          animation: `slideInLeft 0.2s ease-out ${index * 0.02}s both`,
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
    </nav>
  );
}
