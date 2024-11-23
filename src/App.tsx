import React from 'react';
import { Building2 } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SecondBrainSection from './components/SecondBrainSection';
import TemplatesSection from './components/TemplatesSection';
import MinimalistSection from './components/MinimalistSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div className="w-full h-32 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="bg-gray-50">
        <SecondBrainSection />
      </div>
      <div className="bg-white">
        <TemplatesSection />
      </div>
      <MinimalistSection />
      <Footer />
    </div>
  );
}

export default App;