import { Newspaper, ChevronRight, Clock } from 'lucide-react';
import { newsItems } from '@/data/mockData';

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#F5F7FA] py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4">
          {/* Section Label */}
          <div className="flex items-center gap-2 text-[#0066FF] font-semibold whitespace-nowrap bg-white px-3 py-1.5 rounded-lg shadow-sm">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm">Latest News</span>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3">
              {newsItems.map((news, index) => (
                <a
                  key={news.id}
                  href={`#news-${news.id}`}
                  className="flex-shrink-0 w-[280px] bg-white rounded-lg p-3 hover:shadow-md transition-all duration-300 group border border-transparent hover:border-[#0066FF]/20"
                  style={{
                    animation: `slideUp 0.4s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[#0066FF] font-medium bg-[#E6F0FF] px-2 py-0.5 rounded">{news.category}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-200">
                        {news.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{news.excerpt}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* More Link */}
          <a
            href="#more-news"
            className="flex items-center gap-1 text-sm text-[#0066FF] hover:underline whitespace-nowrap transition-colors duration-200"
          >
            <span>More</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
