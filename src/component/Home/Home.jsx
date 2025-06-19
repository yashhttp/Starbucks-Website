// import React from 'react'
// import background_image from "../../../assets/background.png";

// const Home = () => {
//   return (
//     <div className='flex h-screen pl-4 pr-4 mt-4  '>
//       <div className=" w-1/2 px-20 py-8 bg-[#32462f]  text-center ">
//         <h1 className='text-6xl font-semibold mt-20 text-white '>See You On the Patio</h1>
//         <p className='text-white text-2xl font-medium mt-5 px-4 py-4'>Soak up the season with Summer-Berry Refreshers and new Iced Horchata Oatmilk Shaken Espresso. Fresh picks and returning favorites are iced and ready.</p>
//         <button className='border border-white text-lg text-white  p-1 w-40 rounded-full font-semibold'>Veiw the menu</button>
//       </div>
//       <div className="w-1/2  flex items-center justify-center">
//         <img src={background_image} alt="" className='h-full'/>
        
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useRef } from 'react';
import background_image from "../../assets/background.png"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-fade-up').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className='flex flex-col lg:flex-row lg:h-screen py-6 items-stretch'>
      <div className="w-full lg:w-1/2 px-6 py-8 bg-[#32462f] text-center flex flex-col justify-center">
        <h1 className='animate-fade-up text-3xl md:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-20 text-white'>
          See You On the Patio
        </h1>
        <p className='animate-fade-up text-white text-base md:text-xl lg:text-2xl font-medium mt-5 px-2 md:px-4 py-4'>
          Soak up the season with Summer-Berry Refreshers and new Iced Horchata Oatmilk Shaken Espresso. Fresh picks and returning favorites are iced and ready.
        </p>
        <button className='animate-fade-up border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold mt-2 mx-auto'>
          View the menu
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
  <img src={background_image} alt="Summer drink" className='w-full h-full object-cover' />
</div>

    </div>
  );
};

export default Home;
