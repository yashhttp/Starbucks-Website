// import React from 'react'
// import party from "../../assets/party.jpg"

// const Home4 = () => {
//   return (
//     <>
//     <div className='flex flex-col lg:flex-row h-auto lg:h-[550px] my-5'>

//       {/* Left Section Centered */}
//       <div className="w-full lg:w-1/2 bg-[#32462f] flex justify-center items-center px-6 py-8 lg:px-20 lg:py-14">
//         <div className="text-white text-center">
//           <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-4'>
//           FARM Rio + Starbucks®
//           </h1>
//           <p className='text-base md:text-xl lg:text-2xl font-medium mb-6'>
//           We’ve teamed up with Brazilian fashion brand FARM Rio for an exclusive merch collection inspired by the beauty and culture of Rio de Janeiro.</p>

//           <button className='border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold'>
//             Learn more
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
//         <img src={party} alt="Summer drink" className='w-full h-full object-cover' />
//       </div>
      

//     </div>
//     <div className="">
//       <p className='mx-80 mt-16 mb-8'>*Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good at participating U.S. stores for a handcrafted menu-sized beverage with qualifying purchase ($8 max value). Qualifying purchase excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up before 6/29/2025.</p>
//       <hr className='border-t-2 border-gray-300 my-4'/>
//     </div>
//     </>
//   )
// }

// export default Home4

import React, { useEffect, useRef } from 'react';
import party from "../../assets/party.jpg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home4-left",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo(".home4-heading", { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .fromTo(".home4-para", { opacity: 0, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4")
        .fromTo(".home4-btn", { opacity: 0, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4");
      gsap.fromTo(".home4-image", {
        scale: 0.95,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home4-image",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className='flex flex-col lg:flex-row h-auto lg:h-[550px] my-5'
      >
        <div className="home4-left w-full lg:w-1/2 bg-[#32462f] flex justify-center items-center px-6 py-8 lg:px-20 lg:py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl"></div>
          <div className="text-white text-center relative z-10">
            <h1 className='home4-heading text-3xl md:text-4xl lg:text-6xl font-semibold mb-4'>
              FARM Rio + Starbucks®
            </h1>
            <p className='home4-para text-base md:text-xl lg:text-2xl font-medium mb-6'>
              We’ve teamed up with Brazilian fashion brand FARM Rio for an exclusive merch collection inspired by the beauty and culture of Rio de Janeiro.
            </p>
            <button className='home4-btn border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold'>
              Learn more
            </button>
          </div>
        </div>
        <div className="home4-image w-full lg:w-1/2 flex items-center justify-center overflow-hidden relative">
          <img
            src={party}
            alt="Summer drink"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className="px-6 md:px-20 lg:px-80">
        <p className='mt-16 mb-8 text-sm md:text-base text-[#00000094] leading-relaxed'>
        *Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good at participating U.S. stores for a handcrafted menu-sized beverage with qualifying purchase ($8 max value). Qualifying purchase excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up before 6/29/2025.
        </p>
        <hr className='border-t-2 border-gray-300 my-4' />
      </div>
    </>
  );
};

export default Home4;
