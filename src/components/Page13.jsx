import React from 'react'
import './Page13.scss'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Page13() {

    useEffect(() => {
        gsap.utils.toArray('.cardsa img').forEach((image) => {
          gsap.to(image, {
           
            y: -100,
            scrollTrigger: {
              trigger: image,
              start: 'top 80%',
              end: 'bottom 40%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }, []);
  return (
    <div>
        <div className='page13'>
        <div className='page13-content'>
        <h1>Wide range of<br/>
solutions</h1>
        <p>We will help you implement a project <br/> of  any complexity</p>
             </div>

        <div className='cardsa'>
          <img className='img1' src='https://selemen.liqium.com/img/mv1.jpg'></img>
          <img className='img2' src='https://selemen.liqium.com/img/mv2.jpg'></img>
          <img className='img3' src='https://selemen.liqium.com/img/mv3.jpg'></img>
          <img className='img4' src='https://selemen.liqium.com/img/mv4.jpg'></img>
          <img className='img5' src='https://selemen.liqium.com/img/mv5.jpg'></img>
          <img className='img6' src='https://selemen.liqium.com/img/mv6.jpg'></img>
          <img className='img7' src='https://selemen.liqium.com/img/mv7.jpg'></img>
          <img className='img8' src='https://selemen.liqium.com/img/mv8.jpg'></img>
          <img className='img9' src='https://selemen.liqium.com/img/mv9.jpg'></img>





        </div>
        </div>
      
    </div>
  )
}
