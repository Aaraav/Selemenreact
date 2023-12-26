import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Page1.scss';

gsap.registerPlugin(ScrollTrigger);

function Page1() {
  useEffect(() => {
    
    gsap.fromTo(
      '#page1-text',
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        delay:1.9,
        duration:0.5
      }
    );

    gsap.fromTo(
      '#img1, #img2, #img4, #img5, #img6',
      {
        opacity: 1,
        scale: 0, // Starting scale
      },
      {
        opacity: 1,
        scale: 1, // Ending scale
        stagger: 0.5,
        duration: 1,
      }
    );

    

    

  

    

   

   
  }, []);
 

  return (
    <>
    <div className='page1'>
      <p id='page1-text'>Selemen</p>
      <img id='img1' src="https://selemen.liqium.com/img/m2.jpg" />
      <img id='img2' src="https://selemen.liqium.com/img/m5.jpg" />
      <img id='img5' src="https://selemen.liqium.com/img/m1.jpg"  />
      <img id='img4' src="https://selemen.liqium.com/img/m4.jpg" />
      <img id='img6' src="https://selemen.liqium.com/img/m6.jpg" />
    </div>
    </>
  );
}

export default Page1;
