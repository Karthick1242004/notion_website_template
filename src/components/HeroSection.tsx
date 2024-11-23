import React from 'react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import Button from './Button';
import content from '../data/content.json';

const HeroSection = () => {
  const { title, subtitle, buttons, image } = content.hero;

  const titleRef = useGSAPAnimation({ type: 'textReveal', delay: 1 });
  const subtitleRef = useGSAPAnimation({ type: 'textReveal', delay: 1 });
  const buttonsRef = useGSAPAnimation({
    type: 'slide',
    children: true,
    delay: 0.8,
  });
  const imageRef = useGSAPAnimation({
    type: 'parallax',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom top',
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-500 mt-15">
      <div className="py-10 md:py-20 flex flex-col items-center text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 overflow-hidden"
        >
          {title}
        </h1>
        <div ref={subtitleRef} className="overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10">
            {subtitle}
          </p>
        </div>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>

        <div ref={imageRef} className="mt-16 w-full max-w-5xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-12 z-10"></div>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
