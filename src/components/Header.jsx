import React, { useEffect } from 'react'
import gsap from 'gsap';
import './Header.scss';

function Header() {
  useEffect(()=>{
    gsap.fromTo(
      '.nav',
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        delay:1.9,
        duration:1
      }
    );


  },[])
  return (
    
        <div className='nav'>
       
            <img src='nav.png' alt='..'/>
                <p>menu</p>
                
                 <button>Send request</button>
      </div>
    
  );
}

export default Header


