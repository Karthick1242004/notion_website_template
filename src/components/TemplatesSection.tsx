import React from 'react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import Button from './Button';
import content from '../data/content.json';

const TemplatesSection = () => {
  const { title, subtitle, button, image } = content.templates;
  
  const titleRef = useGSAPAnimation({ type: 'splitText', delay: 0.1, duration: 0.6 });
  const descriptionRef = useGSAPAnimation({ type: 'textReveal', delay: 0.3, duration: 0.5 });
  const buttonRef = useGSAPAnimation({ type: 'scale', delay: 0.4 });
  const imageRef = useGSAPAnimation({ 
    type: 'parallax', 
    scrub: 0.5,
    start: 'top bottom',
    end: 'bottom top'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col items-center text-center">
        <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 overflow-hidden">
          {title}
        </h2>
        <div ref={descriptionRef} className="overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10">
            {subtitle}
          </p>
        </div>
        <div ref={buttonRef} className="mb-16">
          <Button {...button} />
        </div>
        
        <div ref={imageRef} className="relative w-full max-w-5xl overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-12 z-10"></div>
          <img 
            src={image.url}
            alt={image.alt}
            className="w-full h-auto transform transition-all duration-700 hover:scale-[1.02] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default TemplatesSection;