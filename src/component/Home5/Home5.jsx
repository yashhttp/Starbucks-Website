// import React from 'react'

// const Home5 = () => {
//   return (
//     <>
//         <div className="flex justify-between mx-10 gap-5 mr-48">
//             <div className=" w-1/6 flex flex-col gap-7 ">
//                 <h1 className='text-xl font-medium text-gray-800  '>About Us</h1>
//                 <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'>
//                     <li>Our Company</li>
//                     <li>Our Coffee</li>
//                     <li>About Starbucks</li>
//                     <li>Starbucks Archive</li>
//                     <li>Investor Relations</li>
//                     <li>Customer Service</li>
//                     <li>Contact us</li>
//                 </ul>
//             </div>
//             <div className=" w-1/6 flex flex-col gap-7">
//                 <h1 className='text-xl font-medium text-gray-800  '>Careers</h1>
//                 <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'>
//                     <li>Culture and Values</li>
//                     <li>Belonging at Starbucks</li>
//                     <li>College Achievement Plan</li>
//                     <li>Alumni Community</li>
//                     <li>U.S. Careers</li>
//                     <li>International</li>
                    
//                 </ul>
//             </div>
//             <div className=" w-1/6 flex flex-col gap-7">
//                 <h1 className='text-xl font-medium text-gray-800  '>Social Impact</h1>
//                 <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'>
//                     <li>Communities</li>
//                     <li>Starbucks Foundation</li>
//                     <li>Sustainablity</li>
//                     <li>Environmental and Social Impact Reporting</li>
//                 </ul>
//             </div>
//             <div className=" w-1/6 flex flex-col gap-7">
//                 <h1 className='text-xl font-medium text-gray-800  '>For Business Partner</h1>
//                 <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'> 
//                     <li>Landlord Support Center</li>
//                     <li>Suppliers</li>
//                     <li>Corporate Gift Card Sales</li>
//                     <li>Office and Foodservice Coffee</li>
//                 </ul>
//             </div>
//             <div className="  w-1/6 flex flex-col gap-7">
//                 <h1 className='text-xl font-medium text-gray-800  '>Order and Pick Up</h1>
//                 <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'>
//                     <li>Order on the App</li>
//                     <li>Order on the Web</li>
//                     <li>Delivery</li>
//                     <li>Order and Pick Up Options</li>
//                     <li>Explore and Find Coffee for Home</li>
//                 </ul>
//             </div>
//             {/* <div className="w-1/6"></div> */}
//         </div>
//         <hr className='border-t-2 border-gray-300 mx-10 mt-10 '/>
//     </>
//   )
// }

// export default Home5

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home5 = () => {
  const [openSection, setOpenSection] = useState(null);
  const footerRef = useRef(null);

  const sections = [
    {
      title: 'About Us',
      items: ['Our Company', 'Our Coffee', 'About Starbucks', 'Starbucks Archive', 'Investor Relations', 'Customer Service', 'Contact us']
    },
    {
      title: 'Careers',
      items: ['Culture and Values', 'Belonging at Starbucks', 'College Achievement Plan', 'Alumni Community', 'U.S. Careers', 'International']
    },
    {
      title: 'Social Impact',
      items: ['Communities', 'Starbucks Foundation', 'Sustainability', 'Environmental and Social Impact Reporting']
    },
    {
      title: 'For Business Partner',
      items: ['Landlord Support Center', 'Suppliers', 'Corporate Gift Card Sales', 'Office and Foodservice Coffee']
    },
    {
      title: 'Order and Pick Up',
      items: ['Order on the App', 'Order on the Web', 'Delivery', 'Order and Pick Up Options', 'Explore and Find Coffee for Home']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });

      gsap.from(".footer-divider", {
        width: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={footerRef}
        className="hidden lg:flex flex-wrap justify-between mx-4 lg:mx-24 gap-5"
      >
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="footer-section w-1/6 flex flex-col gap-7"
          >
            <h1 className='text-xl font-medium text-gray-800'>{section.title}</h1>
            <ul className='flex flex-col gap-5 cursor-pointer text-[#00000094]'>
              {section.items.map((item, i) => (
                <li key={i} className="transition-all duration-300 transform hover:scale-105 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ✅ Mobile dropdown view */}
      <div className="lg:hidden flex flex-col mx-4 md:mx-10 gap-4">
        {sections.map((section, idx) => (
          <div key={idx} className="border-b">
            <button
              onClick={() => setOpenSection(openSection === idx ? null : idx)}
              className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center"
            >
              {section.title}
              <span>{openSection === idx ? '-' : '+'}</span>
            </button>
            {openSection === idx && (
              <ul className='flex flex-col gap-3 pb-3 text-[#00000094]'>
                {section.items.map((item, i) => (
                  <li key={i} className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <hr className="footer-divider border-t-2 border-gray-300 w-full mt-10 overflow-x-hidden" />
    </>
  );
};

export default Home5;

