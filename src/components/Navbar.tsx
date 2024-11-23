import React from 'react';
import { Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <Building2 className="w-8 h-8" />
        <span className="text-xl font-bold">Easlo</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Templates</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Second Brain</a>
      </div>
    </nav>
  );
}

export default Navbar;