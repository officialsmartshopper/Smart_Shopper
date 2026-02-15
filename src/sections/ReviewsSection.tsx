import { Star, ThumbsUp, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { reviews } from '@/data/mockData';

export default function ReviewsSection() {
  return (
    <section className="bg-[#F5F7FA] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E6F0FF] rounded-lg">
              <MessageCircle className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Latest Reviews</h2>
              <p className="text-sm text-gray-500">See what shoppers are saying</p>
            </div>
          </div>
          <a href="#all-reviews" className="text-sm text-[#0066FF] hover:underline flex items-center gap-1">
            All Reviews
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#0066FF]/20"
              style={{
                animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Product Info */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.productImage}
                  alt={review.productName}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{review.productName}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{review.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">{review.content}</p>

              {/* Review Meta */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#E6F0FF] rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-[#0066FF]">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-600">{review.author}</span>
                    {review.verified && (
                      <span className="flex items-center gap-0.5 text-xs text-[#00C853]">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0066FF] transition-colors">
                    <ThumbsUp className="w-3 h-3" />
                    {review.helpful}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="mt-6 text-center">
          <a
            href="#write-review"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
