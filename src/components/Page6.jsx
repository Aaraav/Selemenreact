import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './Page6.scss'
gsap.registerPlugin(ScrollTrigger);

function Page6() {
    useEffect(() => {
        gsap.to('.page6-content', {
          y: '1000%', // Move the element from top to bottom
          duration: 5, // Longer duration for a slower transition
          ease: 'none', // Easing function for the animation
          
          scrollTrigger: {
            trigger: '.page6-content',
            start: 'top top', // Start the animation when the top of the trigger element hits the top of the viewport
            end: 'bottom top', // End the animation when the top of the trigger element hits the bottom of the viewport
            scrub: 2, // Smoothly scrub through the animation as the user scrolls
          },
        });
      }, []);
  return (
    <div>
          <div className='page6'>
          <img src='https://selemen.liqium.com/img/bg7.jpg' alt='Background' />
          <div className='page6-content'>
            <h1>SEA OF LIGHT</h1>
            <p>Comfort Surrounded by natural material</p>
          </div>
        </div>
      
    </div>
  )
}

export default Page6
