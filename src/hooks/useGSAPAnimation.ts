import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

type AnimationOptions = {
  type?: 'fade' | 'slide' | 'scale' | 'parallax' | 'textReveal' | 'splitText';
  delay?: number;
  duration?: number;
  start?: string;
  end?: string;
  stagger?: number;
  children?: boolean;
  scrub?: boolean | number;
  markers?: boolean;
};

export const useGSAPAnimation = (options: AnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const {
      type = 'fade',
      delay = 0,
      duration = 1,
      start = 'top bottom-=100',
      end = 'bottom top',
      stagger = 0.2,
      children = false,
      scrub = false,
      markers = false
    } = options;

    let animation: gsap.TweenVars = {
      opacity: 0,
      y: 50,
    };

    switch (type) {
      case 'scale':
        animation = {
          opacity: 0,
          scale: 0.8,
          y: 30,
        };
        break;
      case 'parallax':
        animation = {
          y: 100,
          opacity: 0,
        };
        break;
      case 'slide':
        animation = {
          opacity: 0,
          x: -50,
        };
        break;
      case 'textReveal':
        animation = {
          clipPath: 'inset(0 100% 0 0)',
          y: 20,
        };
        break;
      case 'splitText':
        if (element) {
          const text = (element as HTMLElement).textContent ?? '';
          (element as HTMLElement).innerHTML = text
            .split('')
            .map((char: string) => `<span class="inline-block">${char}</span>`)
            .join('');
          animation = {
            y: 50,
            opacity: 0,
            stagger: 0.05,
          };
        }
        break;
    }

    const target = children || type === 'splitText' ? element?.children : element;

    if (!target) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end: scrub ? end : undefined,
        scrub: scrub,
        markers,
        toggleActions: scrub ? undefined : 'play none none reverse',
      }
    });

    tl.fromTo(
      target,
      animation,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration,
        delay,
        stagger: children || type === 'splitText' ? stagger : 0,
        ease: 'power2.out',
      }
    );

    return () => {
      tl.kill();
    };
  }, [options]);

  return elementRef;
};