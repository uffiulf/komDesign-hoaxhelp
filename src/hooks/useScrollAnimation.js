import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation() {
  useEffect(() => {
    // Enhanced section animations
    const sections = gsap.utils.toArray('.scene');
    
    sections.forEach((section, index) => {
      // Create timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          scrub: false
        }
      });

      // Animate left content
      const leftContent = section.querySelector('.left');
      if (leftContent) {
        tl.fromTo(leftContent, 
          { 
            opacity: 0, 
            y: 80,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1.2, 
            ease: 'power2.out' 
          }
        );
      }

      // Animate right content with stagger
      const rightContent = section.querySelector('.right');
      if (rightContent) {
        tl.fromTo(rightContent,
          {
            opacity: 0,
            x: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.4,
            ease: 'power2.out'
          }, 
          '-=0.8'
        );
      }

      // Animate cards with hover effect
      const cards = section.querySelectorAll('.card');
      cards.forEach((card, cardIndex) => {
        tl.fromTo(card,
          {
            opacity: 0,
            y: 30,
            rotationY: 15
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
          },
          `-=${0.6 + cardIndex * 0.2}`
        );
      });

      // Animate timeline items if they exist
      const timelineItems = section.querySelectorAll('[style*="borderLeft"]');
      timelineItems.forEach((item, itemIndex) => {
        tl.fromTo(item,
          {
            opacity: 0,
            x: -50,
            scaleX: 0
          },
          {
            opacity: 1,
            x: 0,
            scaleX: 1,
            duration: 0.6,
            ease: 'power2.out'
          },
          `-=${0.4 + itemIndex * 0.1}`
        );
      });

      // Animate data bars if they exist
      const dataBars = section.querySelectorAll('[style*="justifyContent: space-between"]');
      dataBars.forEach((bar, barIndex) => {
        tl.fromTo(bar,
          {
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'left center'
          },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out'
          },
          `-=${0.3 + barIndex * 0.1}`
        );
      });
    });

    // Parallax effect for background elements
    gsap.utils.toArray('.card').forEach(card => {
      gsap.to(card, {
        y: -20,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}