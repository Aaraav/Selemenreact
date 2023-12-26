import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Page3.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Page3() {
  useEffect(() => {
    const scrollAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.page3',
       
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    scrollAnim.from('.he', {
      y: -40,
      opacity: 0,
    }).from('.heu', {
      y: -40,
      opacity: 0,
    });

   
   
    const images = document.querySelectorAll('.main3 img');

    const handleMouseOver = (event) => {
      gsap.to(event.target, { scale: 1.5 });
    };

    const handleMouseOut = (event) => {
      gsap.to(event.target, { scale: 1 });
    };

    images.forEach((img) => {
      img.addEventListener('mouseenter', handleMouseOver);
      img.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('mouseenter', handleMouseOver);
        img.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, []);

  return (
    <div className='page3'>
      <div id='page3-content'>
        <h1 className='he'>20+ expertise. We guarantee</h1>
        <h1 className='heu'>quality</h1>
        <hr id='want'/>
        <div className='main3'>
          <img id='bestimg' src='https://selemen.liqium.com/img/j1.jpg' alt='Image1' />
          
         
          <div className='box' id='box1'></div>
          <div className='box' id='box2'></div>
          <div className='box' id='box3'>
            <p className='text3'>01</p>
            <p className='text3'>We use high standards of engineering to create space as usual as possible</p>
            <h2>Commercial premises</h2>
            <img src='https://selemen.liqium.com/img/j2.jpg' alt='Image2' />
          </div>
          <div className='box' id='box4'>
            <p className='text3'>02</p>
            <p className='text3'>We provide deep quality control at every stage as it's important for us</p>
            <h2>Houses Apartments</h2>
            <img src='https://selemen.liqium.com/img/j3.jpg' alt='Image3' />
          </div>
          {/* Additional elements or placeholders for other content */}
        </div>
      </div>
    </div>
  );
}
