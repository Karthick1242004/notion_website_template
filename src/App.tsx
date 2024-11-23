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
      <div className='px-5'>
      <HeroSection />
      </div>
      <div className="w-full h-32 bg-white"></div>
        <SecondBrainSection />
      <div className="bg-white px-5">
        <TemplatesSection />
      </div>
      <div className='px-5'>
      <MinimalistSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;