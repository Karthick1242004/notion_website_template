import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import Button from './Button';
import content from '../data/content.json';

const TemplatesSection = () => {
  const { title, subtitle, button, image } = content.templates;
  
  const titleRef = useGSAPAnimation({ type: 'textReveal', delay: 0.5 }) as React.RefObject<HTMLHeadingElement>;
  const descriptionRef = useGSAPAnimation({ type: 'textReveal', delay: 0.3, duration: 0.5 }) as React.RefObject<HTMLDivElement>;
  const buttonRef = useGSAPAnimation({ type: 'scale', delay: 0.4 }) as React.RefObject<HTMLDivElement>;
  const imageRef = useGSAPAnimation({ 
    type: 'parallax', 
    scrub: 0.5,
    start: 'top bottom',
    end: 'bottom top'
  }) as React.RefObject<HTMLDivElement>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] mt-[5%] rounded-2xl">
      <div className="py-10 md:py-20 flex flex-col justify-center items-center text-center">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold  mb-6 overflow-hidden">
          {title}
        </h2>
        <div ref={descriptionRef} className="overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10">
            {subtitle}
          </p>

        </div>
        <div ref={buttonRef} className="mb-16">
          <Button {...button} variant={button.variant as "primary" | "secondary"} />
        </div>
        
        <div ref={imageRef} className="mt-1 w-full max-w-5xl relative !opacity-100">
          <img 
            src={image.url}
            alt={image.alt}
            className="w-[40%] max-500:w-[80%] mx-auto h-auto rounded-2xl transform transition-all duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}

export default TemplatesSection;