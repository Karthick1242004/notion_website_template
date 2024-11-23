import React from 'react';
import { Building2, Instagram, Twitter, Youtube } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Footer = () => {
  const brandRef = useGSAPAnimation({ type: 'slide' });
  const linksRef = useGSAPAnimation({ type: 'fade', children: true, stagger: 0.1 });
  const copyrightRef = useGSAPAnimation({ type: 'fade', delay: 0.5 });

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div ref={brandRef} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8" />
              <span className="text-xl font-bold">Easlo</span>
            </div>
            <p className="text-gray-600">Where productivity meets minimalism.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div ref={linksRef}>
            <h3 className="font-semibold mb-4">Pages</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Blog</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Newsletter</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Templates</a>
            </div>
          </div>

          <div ref={linksRef}>
            <h3 className="font-semibold mb-4">Products</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Second Brain</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Finance Tracker</a>
            </div>
          </div>

          <div ref={linksRef}>
            <h3 className="font-semibold mb-4">Info</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Circle Community</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Education Pricing</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Feedback Form</a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors transform hover:translate-x-1">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div ref={copyrightRef} className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            © 2024 Easlo. All rights reserved. <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;