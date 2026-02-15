import { useState } from 'react';
import { Star, TrendingUp, Package, ExternalLink } from 'lucide-react';
import { hotProducts, dealProducts } from '@/data/mockData';

export default function HotProducts() {
  const [activeTab, setActiveTab] = useState<'trending' | 'deals'>('trending');
  const products = activeTab === 'trending' ? hotProducts : dealProducts;

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#E6F0FF] rounded-lg">
                <TrendingUp className="w-5 h-5 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Popular Products</h2>
            </div>
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('trending')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'trending'
                    ? 'bg-white text-[#0066FF] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => setActiveTab('deals')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'deals'
                    ? 'bg-white text-[#0066FF] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Best Deals
              </button>
            </div>
          </div>
          <a href="#all-products" className="text-sm text-[#0066FF] hover:underline flex items-center gap-1">
            View All
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `slideUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.discount && (
                  <span className="absolute top-2 right-2 ss-badge-discount">-{product.discount}%</span>
                )}
                {product.isHot && (
                  <span className="absolute top-2 left-2 ss-badge-hot">HOT</span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 left-2 ss-badge-new">NEW</span>
                )}
                {product.inStock && (
                  <span className="absolute bottom-2 left-2 ss-badge-stock flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    In Stock
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <span className="text-xs text-gray-400">{product.category}</span>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-200 min-h-[40px]">
                  {product.name}
                </h3>
                
                {product.rating && (
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews?.toLocaleString()})
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-[#0066FF]">£{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">£{product.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{product.merchant}</span>
                  {product.affiliateLink && (
                    <a
                      href={product.affiliateLink}
                      className="text-xs bg-[#0066FF] text-white px-2 py-1 rounded hover:bg-[#0052CC] transition-colors"
                    >
                      Buy Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
