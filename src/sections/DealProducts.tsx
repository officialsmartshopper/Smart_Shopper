import { useState } from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { dealProducts } from '@/data/mockData';

export default function DealProducts() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#fff0e6] rounded-lg">
            <Flame className="w-6 h-6 text-[#ff6600]" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Hot Deals</h2>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dealProducts.map((product, index) => (
            <a
              key={product.id}
              href={`#deal-${product.id}`}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-400 ${
                    hoveredId === product.id ? 'scale-108' : 'scale-100'
                  }`}
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div
                    className={`absolute top-2 right-2 price-badge-discount transition-transform duration-300 ${
                      hoveredId === product.id ? 'rotate-6 scale-110' : ''
                    }`}
                  >
                    {product.discount}% OFF
                  </div>
                )}
                {product.isHot && (
                  <div className="absolute top-2 left-2 price-badge-hot animate-pulse">HOT</div>
                )}
                {product.isNew && (
                  <div className="absolute top-2 left-2 price-badge-new">NEW</div>
                )}

                {/* Quick Action Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="bg-[#ff6600] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#e65c00] transition-colors duration-200 transform hover:translate-x-1">
                    Shop Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#ff6600] transition-colors duration-200 min-h-[40px]">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-[#ff6600]">£{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">£{product.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">{product.merchant}</span>
                  {product.discount && (
                    <span className="text-xs text-[#00a650] font-medium">Save £{product.originalPrice! - product.price}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <a
            href="#all-deals"
            className="price-btn-secondary flex items-center gap-2 group"
          >
            View All Deals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
