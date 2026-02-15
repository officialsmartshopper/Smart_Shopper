import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { trustedMerchants } from '@/data/mockData';

const footerLinks = {
  shopping: {
    title: 'Shopping',
    links: ['Mobile Phones', 'Laptops', 'TVs', 'Cameras', 'Gaming', 'Home Appliances'],
  },
  services: {
    title: 'Services',
    links: ['Price Alerts', 'Product Comparison', 'Reviews', 'Fuel Prices', 'Car Deals', 'Merchant Center'],
  },
  company: {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact', 'Blog', 'Partners'],
  },
  support: {
    title: 'Support',
    links: ['Help Centre', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'],
  },
};

const socialLinks = [
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
  { icon: Youtube, href: '#youtube', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Affiliate Disclosure Banner */}
      <div className="bg-[#0066FF]/10 border-b border-[#0066FF]/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-xs text-gray-400 text-center">
            <span className="text-[#0066FF] font-medium">Affiliate Disclosure:</span> Smart Shopper UK contains affiliate links. 
            We may earn a commission when you purchase through these links at no extra cost to you. 
            This helps us keep the site free for everyone.
          </p>
        </div>
      </div>

      {/* Trusted Merchants */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-xs text-gray-500 text-center mb-4">Trusted Retail Partners</p>
          <div className="flex flex-wrap justify-center gap-6">
            {trustedMerchants.map((merchant) => (
              <div
                key={merchant.name}
                className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-300">{merchant.name}</span>
                <span className="text-xs text-[#00C853]">★ {merchant.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-[#0066FF]">Smart</span>
              <span className="text-2xl font-bold text-white">Shopper</span>
            </a>
            <p className="text-sm text-gray-400 mb-4">
              UK&apos;s #1 price comparison platform. Compare prices, read reviews, and find the best deals across thousands of products.
            </p>
            <div className="space-y-2">
              <a href="mailto:support@smartshopper.co.uk" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200">
                <Mail className="w-4 h-4" />
                support@smartshopper.co.uk
              </a>
              <a href="tel:08001234567" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200">
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                London, United Kingdom
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-400 hover:text-[#0066FF] hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-1">Download Our App</h4>
              <p className="text-sm text-gray-400">Get price alerts and exclusive deals on the go</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#app-store"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#play-store"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © 2026 Smart Shopper UK. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0066FF] hover:-translate-y-1 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
