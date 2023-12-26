import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Page2.scss';

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  useEffect(() => {
    gsap.fromTo(
      ".back1", // Target both elements with the class .back1
      {
        opacity: 0,
        y: 0, // Starting position
      },
      {
        opacity: 1,
         // Ending position
        duration:2,
        scrollTrigger: {
          trigger: ".back1",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    
  }, []);

  return (
    <div className='page2'>
      <div className='back1'><p>©2023</p></div>
      <div className='back1'><p id='text-back2'>Our adress</p></div>
    </div>
  );
}

export default Page2;
