// import React from 'react'
// import coffeglass from "../../assets/coffeeglass.png"

// const Home2 = () => {
//   return (
//     <div className='flex flex-col lg:flex-row h-auto lg:h-[550px] my-5'>

//       {/* Left Section Centered */}
//       <div className="w-full lg:w-1/2 bg-[#32462f] flex justify-center items-center px-6 py-8 lg:px-20 lg:py-14">
//         <div className="text-white text-center">
//           <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-4'>
//             See You On the Patio
//           </h1>
//           <p className='text-base md:text-xl lg:text-2xl font-medium mb-6'>
//             Soak up the season with Summer-Berry Refreshers and new Iced Horchata Oatmilk Shaken Espresso. Fresh picks and returning favorites are iced and ready.
//           </p>
//           <button className='border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold'>
//             View the menu
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
//         <img src={coffeglass} alt="Summer drink" className='w-full h-full object-cover' />
//       </div>

//     </div>
//   )
// }

// export default Home2

import React, { useEffect, useRef } from 'react';
import coffeglass from "../../assets/coffeeglass.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home2-left",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      });

      tl.fromTo(".home2-heading", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(".home2-para", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5"
      )
      .fromTo(".home2-btn", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5"
      );
      gsap.fromTo(".home2-image",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".home2-image",
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className='flex flex-col lg:flex-row h-auto lg:h-[550px] my-10'>
      <div className="home2-left w-full lg:w-1/2 bg-[#32462f] flex justify-center items-center px-6 py-10 lg:px-20 lg:py-14">
        <div className="text-white text-center">
          <h1 className='home2-heading text-3xl md:text-4xl lg:text-6xl font-semibold mb-4'>
          Nondairy milk, no extra charge
          </h1>
          <p className='home2-para text-base md:text-xl lg:text-2xl font-medium mb-6'>
          Customize your drink with your favorite nondairy milk—like soy, coconut, almond or oat—for no additional charge.
          </p>
          <button className='home2-btn border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold'>
            Order now
          </button>
        </div>
      </div>
      <div className="home2-image w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
        <img src={coffeglass} alt="Summer drink" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Home2;
