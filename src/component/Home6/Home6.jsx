// import React from 'react'
// import spotify from "../../assets/spotify.png"
// import facebook from "../../assets/facebook.png"
// import pinterest from "../../assets/pinterest.png"
// import instagram from "../../assets/instagram.png"
// import youtube from "../../assets/youtube.png"

// const Home6 = () => {
//   return (
//     <>
//     <div className="flex flex-col">
//       <div className=" flex mx-10 gap-5 my-5 ">
//         <img src={spotify} alt="" className='h-10 rounded-full object-cover border-2 border-transparent  hover:scale-105 transition-all duration-300 cursor-pointer'/>
//         <img src={facebook} alt="" className='h-10  rounded-full object-cover border-2 border-transparent  hover:scale-105 transition-all duration-300 cursor-pointer'/>
        
//         <img src={pinterest} alt="" className='h-10  rounded-full object-cover border-2 border-transparent hover: hover:scale-105 transition-all duration-300 cursor-pointer' />
//         <img src={instagram} alt="" className='h-10 rounded-full object-cover border-2 border-transparent hover: hover:scale-105 transition-all duration-300 cursor-pointer'/>
//         <img src={youtube} alt="" className='h-10 rounded-full object-cover border-2 border-transparent hover: hover:scale-105 transition-all duration-300 cursor-pointer' />
//       </div>
//     <ul className='flex flex-col mx-10 gap-5 my-5 text-[#000000DE] font-medium '>
//       <li className='hover:underline cursor-pointer'>Privacy Notice</li>
//       <li className='hover:underline cursor-pointer'>Consumer Health Privacy Notice</li>
//       <li className='hover:underline cursor-pointer'>Term of Use</li>
//       <li className='hover:underline cursor-pointer'>Do Not Share My Personal Information</li>
//       <li className='hover:underline cursor-pointer'>CA Supply Chain Act</li>
//       <li className='hover:underline cursor-pointer'>Accessibility</li>
//       <li className='hover:underline cursor-pointer'>Cookie Preferences</li>
//     </ul>
//     <h1 className='flex mx-10 gap-5 my-3 text-[#00000094]'>© 2025 Starbucks Coffee Company. All rights reserved.</h1>
//     </div>
      
//     </>
//   )
// }

// export default Home6


import React from 'react';
import { motion } from 'framer-motion';
import spotify from "../../assets/spotify.png";
import facebook from "../../assets/facebook.png";
import pinterest from "../../assets/pinterest.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";

const Home6 = () => {
  const socialIcons = [
    { src: spotify, alt: "Spotify" },
    { src: facebook, alt: "Facebook" },
    { src: pinterest, alt: "Pinterest" },
    { src: instagram, alt: "Instagram" },
    { src: youtube, alt: "YouTube" }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col mx-4 lg:mx-24 my-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
    >
      <motion.div className="flex gap-5 mb-8 flex-wrap">
        {socialIcons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt={icon.alt}
            className='h-10 w-10 rounded-full object-cover border-2 border-transparent hover:border-gray-400 transition-all duration-300 cursor-pointer'
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </motion.div>
      <motion.ul className='flex flex-col gap-3 text-[#000000DE] font-medium mb-6'>
        {[
          "Privacy Notice",
          "Consumer Health Privacy Notice",
          "Term of Use",
          "Do Not Share My Personal Information",
          "CA Supply Chain Act",
          "Accessibility",
          "Cookie Preferences"
        ].map((item, i) => (
          <motion.li
            key={i}
            className='hover:underline cursor-pointer'
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.h1 className='text-sm text-[#00000094]'>
        © 2025 Starbucks Coffee Company. All rights reserved.
      </motion.h1>
    </motion.div>
  );
};

export default Home6;
