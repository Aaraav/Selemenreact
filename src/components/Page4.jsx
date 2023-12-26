import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Page4.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Page4() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
    
        trigger: '.page4',
        start: 'top 50%',
        end: 'bottom 10%',
        scrub: 2,
      },
    });

    timeline.to('.page4 h1', {
      scale: 20,
      rotate: 250,
      
    animationDuration:2
     // Apply overflow hidden
    });
  }, []);

  return (
    <div className='page4'>
      <h1>80</h1>
    </div>
  );
}
