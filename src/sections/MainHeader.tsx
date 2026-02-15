import { useState } from 'react';
import { Search, User, History, Scale, Download, TrendingUp, Bell } from 'lucide-react';

const hotSearches = ['iPhone 16', 'Samsung S25', 'PS5', 'Dyson', 'MacBook', 'iPad'];

const userActions = [
  { label: 'Login', icon: User, href: '#login' },
  { label: 'History', icon: History, href: '#history' },
  { label: 'Compare', icon: Scale, href: '#compare' },
  { label: 'App', icon: Download, href: '#app' },
];

export default function MainHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-white pt-10 pb-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Logo */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <a href="/" className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#0066FF]">Smart</span>
              <span className="text-2xl font-bold text-[#1A1A1A]">Shopper</span>
            </a>
            <span className="text-xs text-gray-500 mt-0.5">Compare Smart, Save Big</span>
          </div>

          {/* Search Area */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                className={`flex items-center border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isSearchFocused
                    ? 'border-[#0066FF] shadow-[0_0_0_4px_rgba(0,102,255,0.15)]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search products, brands or categories..."
                  className="flex-1 px-4 py-3 text-sm outline-none"
                />
                <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hot Searches */}
            <div className="flex items-center gap-2 mt-2 flex-wrap justify-center lg:justify-start">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending:
              </span>
              {hotSearches.map((term) => (
                <a
                  key={term}
                  href={`#search-${term}`}
                  className="text-xs text-gray-600 hover:text-[#0066FF] hover:bg-[#E6F0FF] px-2 py-0.5 rounded-md transition-all duration-200"
                >
                  {term}
                </a>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-center lg:justify-end gap-2">
              {userActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#0066FF] transition-all duration-200 group p-2"
                >
                  <action.icon className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span className="text-[10px]">{action.label}</span>
                </a>
              ))}
              <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-[#0066FF] transition-all duration-200 group p-2 relative">
                <Bell className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF5252] text-white text-[10px] rounded-full flex items-center justify-center">3</span>
                <span className="text-[10px]">Alerts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
