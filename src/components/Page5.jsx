import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Page5.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Page5() {
  useEffect(() => {
    gsap.to('.page5-content', {
      y: '800', // Move the element from top to bottom
      duration: 5, // Longer duration for a slower transition
      ease: 'none', 
      opacity:0,// Easing function for the animation
      
      scrollTrigger: {
        trigger: '.page5-content',
        start: 'top top', // Start the animation when the top of the trigger element hits the top of the viewport
        end: 'bottom top', // End the animation when the top of the trigger element hits the bottom of the viewport
        scrub: 2, // Smoothly scrub through the animation as the user scrolls
      },
    });
  }, []);

  return (
    <div className='main'>
      <div className='page5'>
        <img src='https://selemen.liqium.com/img/bg6.jpg' alt='Background' />
        <div className='page5-content'>
          <h1>Aapartment #80</h1>
          <p>A cozy space for living and working in the center of the city</p>
        </div>
      </div>
    </div>
  );
}
