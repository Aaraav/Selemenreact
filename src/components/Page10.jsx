import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Page10.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Page10() {
  useEffect(() => {
    const textSections = document.querySelectorAll('.text h1 span');

    textSections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 30%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
        color: index % 2 === 0 ? 'white' : 'white', // Change color based on section index
      });
    });

    // Optional: Animating the images
    gsap.to('.imga1 img', {
   
      duration: 2,
      y: -200,
      scrollTrigger: {
        trigger: '.imga1',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });

    gsap.to('.imga2 img', {
     
      duration: 2,
      y: -200,
      scrollTrigger: {
        trigger: '.imga2',
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
      },
    });

    gsap.to('.imga3 img', {
     
      duration: 2,
      y: -500,
      scrollTrigger: {
        trigger: '.imga3',
        start: 'top 55%',
        end: 'top 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div className='page10'>
        <div className='imga1'>
          <img src='https://selemen.liqium.com/img/lt1.jpg' alt='Image 1' />
        </div>
        <div className='imga2'>
          <img src='https://selemen.liqium.com/img/lt2.jpg' alt='Image 2' />
        </div>
        <div className='imga3'>
          <img src='https://selemen.liqium.com/img/lt3.jpg' alt='Image 3' />
        </div>

        <div className='text'>
          <h1>
            <span>Selemen®<br /></span>
            <span>provides a full<br /></span>
            <span>range of services<br /></span>
            <span>for interior<br /></span>
            <span>decoration<br /></span>
            <span>and construction<br /></span>
            <span>solutions turnkey<br /></span>
            <span>for residential<br /></span>
            <span>and commercial<br /></span>
            <span>construction<br /></span>
          </h1>
        </div>
      </div>
    </div>
  );
}
