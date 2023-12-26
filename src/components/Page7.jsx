import React from 'react'
import './Page7.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);


export default function Page7() {
    useEffect(() => {
        gsap.to('.page7-content', {
          y: '1000%', // Move the element from top to bottom
          duration: 5, // Longer duration for a slower transition
          ease: 'none',// Easing function for the animation
          
          scrollTrigger: {
            trigger: '.page7-content',
            start: 'top top', // Start the animation when the top of the trigger element hits the top of the viewport
            end: 'bottom top', // End the animation when the top of the trigger element hits the bottom of the viewport
            scrub: 2, // Smoothly scrub through the animation as the user scrolls
          },
        });
      }, []);
  return (
    <div>
                <div className='page7'>
          <img src='https://selemen.liqium.com/img/d3.jpg' alt='Background' />
          <div className='page7-content'>
            <h1>FIRST NUMBER</h1>
            <p>A cozy space for living and working in the center of the city</p>
          </div>
        </div>
      
    </div>
  )
}
