import { useState, useEffect } from 'react';
import { HelpCircle, Newspaper, ShoppingBag, Store, Globe, ChevronDown, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'News', href: '#news', icon: Newspaper },
  { label: 'Second-hand', href: '#used', icon: ShoppingBag },
  { label: 'Online Shop', href: '#shop', icon: Store },
  { label: 'Merchant Center', href: '#merchant', icon: ExternalLink },
];

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1A1A]/95 backdrop-blur-xl h-9'
          : 'bg-[#1A1A1A] h-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left - Help */}
          <div className="flex items-center gap-4">
            <a
              href="#help"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors duration-200"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Help & Support</span>
            </a>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066FF] text-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <link.icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right - Language */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors duration-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg py-1 min-w-[120px] animate-fade-in z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 ${
                      currentLang.code === lang.code ? 'text-[#0066FF]' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
