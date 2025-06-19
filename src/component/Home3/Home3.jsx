import React, { useEffect, useRef } from 'react';
import fatherdaycard from "../../assets/father_day.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home3 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home3-right",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo(".home3-heading", { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .fromTo(".home3-para", { opacity: 0, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4")
        .fromTo(".home3-btn", { opacity: 0, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4");
      gsap.fromTo(".home3-image",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".home3-image",
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
    <div ref={sectionRef} className='flex flex-col lg:flex-row h-auto mb-5'>
      <div className="home3-image w-full lg:w-1/2 flex items-center justify-center overflow-hidden h-[400px] lg:h-auto">
        <img src={fatherdaycard} alt="Summer drink" className='w-full h-full object-cover' />
      </div>
      <div className="home3-right w-full lg:w-1/2 bg-[#32462f] flex justify-center items-center px-6 py-8 lg:px-20 lg:py-14">
        <div className="text-white text-center">
          <h1 className='home3-heading text-3xl md:text-4xl lg:text-6xl font-semibold mb-4'>
            All about dads
          </h1>
          <p className='home3-para text-base md:text-xl lg:text-2xl font-medium mb-6'>
            For all they do, treat the dads in your life to something delicious with a Starbucks Card.
          </p>
          <button className='home3-btn border border-white text-sm md:text-base text-white px-4 py-2 rounded-full font-semibold'>
            Send an eGift
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home3;
