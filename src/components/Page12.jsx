import React, { useEffect } from 'react';
import './Page12.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt={props.title} />
      <div className='card-content'>
        <p>{props.title}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default function Page12() {
    useEffect(()=>{

        gsap.to('.card:nth-child(1)',{
            y:-100,
            scrollTrigger:{
                trigger:'.card:nth-child(1)',

                start:'top 80%',
                end:'top 20%',
                scrub:1

            }
        })
        gsap.to('.card:nth-child(2)',{
            y:-200,
            scrollTrigger:{
                trigger:'.card:nth-child(2)',

                start:'top 80%',
                end:'top 20%',
                scrub:1

            }
        })
        gsap.to('.card:nth-child(3)',{
            y:-300,
            scrollTrigger:{
                trigger:'.card:nth-child(3)',

                start:'top 80%',
                end:'top 20%',
                scrub:1

            }
        })



    })
  return (
    <div className='page12'>
      <div className='page12-content'>
        <h1>Guarantee of<br/>
             reliability</h1>
        <p>And full information about<br/>
             all stages of repair</p>
        <img src='https://selemen.liqium.com/img/bg1.jpg' alt='Background' />
      </div>
      <div className='cards'>
        <Card
          img='https://selemen.liqium.com/img/j4.jpg'
          title='01'
          text='We implement the most technically complex design and architectural solutions'
        />


        <Card img='https://selemen.liqium.com/img/j5.jpg'
          title='02'
          text='We use the best
          building materials
          available on the market' />


           <Card img='https://selemen.liqium.com/img/j6.jpg'
          title='03'
          text='Jewelry precision of
          work, due to the
          professionalism and
          experience of our
          employees' />
      </div>
      </div>
  
  );
}
