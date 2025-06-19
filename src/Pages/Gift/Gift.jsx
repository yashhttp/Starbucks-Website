// import React from 'react'
// import gift from "../../assets/carda.jpg"
// import gift1 from "../../assets/cardb.jpg"
// import gift2 from "../../assets/cardc.jpg"
// import gift3 from "../../assets/cardd.jpg"
// import gift4 from "../../assets/carde.jpg"
// import gift5 from "../../assets/cardf.jpg"
// import gift6 from "../../assets/cardg.jpg"
// import gift7 from "../../assets/cardh.jpg"
// import gift8 from "../../assets/cardi.jpg"
// import gift9 from "../../assets/cardj.jpg"
// import gift10 from "../../assets/carda.jpg"
// import gift11 from "../../assets/cardb.jpg"
// import gift12 from "../../assets/cardc.jpg"
// import gift13 from "../../assets/cardd.jpg"
// import gift14 from "../../assets/carde.jpg"
// import gift15 from "../../assets/cardf.jpg"
// import gift16 from "../../assets/cardg.jpg"
// import gift17 from "../../assets/cardh.jpg"
// import gift18 from "../../assets/cardi.jpg"
// import gift19 from "../../assets/cardj.jpg"
// import gift20 from "../../assets/carda.jpg"
// import gift21 from "../../assets/cardb.jpg"
// import gift22 from "../../assets/cardc.jpg"
// import groupgiftcard from "../../assets/group-gift-cards.png"
// import xyd from "../../assets/bulk-gift-cards.jpg"
// const Gift = () => {
//   return (
//     <>
//       <div className="pl-32 pt-16">
//         <h1 className='text-[#000000DE] font-bold text-4xl'>Gift cards</h1>
//       </div>
//       <div className="  pt-12 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>FEATURED</h2>
//         <ul className='grid grid-cols-4 gap-8 py-8'>
//           <li><img src={gift} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift1} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift2} alt=""  className='transform transition-transform duration-300 hover:-translate-y-2'/></li>
//           <li><img src={gift3} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//         </ul>
//       </div>
//       <div className="bg-[#EDEBE9]  mx-20 ml-32  p-2 flex items-center gap-4 rounded-xl">
//         <img src={groupgiftcard} alt="" className='w-16 h-16'/>
//         <p className='text-[#000000DE] font-medium'>Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
//       </div>
//       <div className="bg-[#D4E9E2] px-10 pt-10 pb-14 my-4">
//         <div className=" pl-24 p-2 flex gap-6 items-center">
//           <h2 className='text-2xl font-semibold'>Received a gift card?</h2>
//           <p className='text-[#00000094] font-medium text-lg'>Earns 2★ per $1</p>
//           <button className='rounded-full border border-black px-4 py-1 text-base font-semibold'>Add or Reload</button>
//           <button className='rounded-full border border-black px-4 py-1 text-base font-semibold bg-black text-white'>Check Balance</button>
//         </div>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>BIRTHDAY</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift4} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift5} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li>
//           <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>THANK YOU</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift6} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift7} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift8} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>CELEBRATION</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift9} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>GRADUATION</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift10} alt="" className='transform transition-transform duration-300 hover:-translate-y-2'/></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>APPRECIATION</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift11} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift12} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>PRIDE</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift13} alt="" className='transform transition-transform duration-300 hover:-translate-y-2'/></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>ENCOURAGEMENT</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift14} alt="" className='transform transition-transform duration-300 hover:-translate-y-2'/></li>
//           <li><img src={gift15} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>WORKPLACE</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift16} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift17} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift18} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           {/* <li><img src={gift} alt="" /></li> */}
//         </ul>
//       </div>
//       <div className="  pt-5 pr-20 pl-32">
//         <h2 className='text-[#000000DE] font-bold'>ANYTIME</h2>
//         <ul className='grid grid-cols-4 gap-8 py-4'>
//           <li><img src={gift19} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift20} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift21} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//           <li><img src={gift22} alt="" className='transform transition-transform duration-300 hover:-translate-y-2' /></li>
//         </ul>
//       </div>
//       <div className="px-32 pt-16 pb-10 gap-12 grid grid-cols-3 items-center justify-center bg-[#F9F9F9]">
//         <img src={xyd} alt="" className='w-full h-auto'/>
//         <div className=" flex flex-col gap-4">
//           <h1 className='text-2xl text-[#000000DE] font-medium'>Business gifting — simplified</h1>
//           <p className='text- text-[#00000094] font-medium'>Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.</p>
//           <button className='rounded-full border border-black px-4 py-1 text-lg w-32 pl-5 font-semibold text-left'>Shop now</button>
//         </div>
//       </div>

//       <div className="py-12 pl-32 pr-10 grid grid-cols-2 gap-16 bg-[#edebe9]">
//         <div className=" flex flex-col gap-6">
//           {/* <h2>EARNING STARS</h2> */}
//           <ul className='flex flex-col gap-3 text-[#000000DE] font-medium text-[14.5px]'>
//           <h2 className='text-[#00000094] font-medium'>About eGift cards</h2>
//             <li> A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent digitally.</li>
//             <li>For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts you’ve purchased — or, to directly contact Starbucks eGift Support for help with your order.</li>
            
//           </ul>
//           <ul className='flex flex-col gap-3'>
//             <h2 className='text-[#00000094] font-medium '>Questions around eGift cards?</h2>
//             <li className='font-medium text-[14.5px] '> Check our Frequently Asked Questions — your question might already be answered. There, you’ll find answers for all Starbucks Gift Cards in general (including eGifts).</li>
//             <button className='rounded-full border border-black px-4 py-1 text-lg w-32 pl-5 font-semibold text-left'>Card FAQs</button>

//           </ul>
          
//         </div>
//         <div className=" flex flex-col gap-6">
//           {/* <h2>EARNING STARS</h2> */}
//           <ul className='flex flex-col gap-3 text-[#000000DE] font-medium text-[14.5px]'>
//           <h2 className='text-[#00000094] font-medium'>About Starbucks Gift Cards in general</h2>
//             <li>Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or to join Starbucks® Rewards.</li>
//             <li>Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per dollar every time you pay with that card. Those Stars quickly add up to free food, drinks, and more!</li>
//             <button className='rounded-full border border-black px-4 py-1 text-lg w-64 pl-5 font-semibold text-left'>Card Terms & Conditions</button>
//           </ul>
          
          
//         </div>
//         </div>


    
//     </>
//   )
// }

// export default Gift
import React from 'react';
import gift from "../../assets/carda.jpg"
import gift1 from "../../assets/cardb.jpg"
import gift2 from "../../assets/cardc.jpg"
import gift3 from "../../assets/cardd.jpg"
import gift4 from "../../assets/carde.jpg"
import gift5 from "../../assets/cardf.jpg"
import gift6 from "../../assets/cardg.jpg"
import gift7 from "../../assets/cardh.jpg"
import gift8 from "../../assets/cardi.jpg"
import gift9 from "../../assets/cardj.jpg"
import gift10 from "../../assets/carda.jpg"
import gift11 from "../../assets/cardb.jpg"
import gift12 from "../../assets/cardc.jpg"
import gift13 from "../../assets/cardd.jpg"
import gift14 from "../../assets/carde.jpg"
import gift15 from "../../assets/cardf.jpg"
import gift16 from "../../assets/cardg.jpg"
import gift17 from "../../assets/cardh.jpg"
import gift18 from "../../assets/cardi.jpg"
import gift19 from "../../assets/cardj.jpg"
import gift20 from "../../assets/carda.jpg"
import gift21 from "../../assets/cardb.jpg"
import gift22 from "../../assets/cardc.jpg"
import groupgiftcard from "../../assets/group-gift-cards.png"
import xyd from "../../assets/bulk-gift-cards.jpg"

const Gift = () => {
  const renderSection = (title, images) => (
    <div className="pt-8 px-4 md:px-16">
      <h2 className='text-[#000000DE] font-bold mb-4'>{title}</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8'>
        {images.map((src, index) => (
          <li key={index}>
            <img src={src} alt="" className='transition-transform duration-300 hover:-translate-y-2' />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="px-4 md:px-16 pt-10">
        <h1 className='text-[#000000DE] font-bold text-3xl md:text-4xl'>Gift cards</h1>
      </div>

      {renderSection("FEATURED", [gift, gift1, gift2, gift3])}

      <div className="bg-[#EDEBE9] mx-4 md:mx-16 my-6 p-4 flex items-center gap-4 rounded-xl">
        <img src={groupgiftcard} alt="" className='w-12 h-12 md:w-16 md:h-16' />
        <p className='text-[#000000DE] font-medium text-sm md:text-base'>
          Effortlessly send up to 10 eGifts per purchase. Select a design to start!
        </p>
      </div>

      <div className="bg-[#D4E9E2] px-4 md:px-16 py-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <h2 className='text-xl md:text-2xl font-semibold'>Received a gift card?</h2>
          <p className='text-[#00000094] text-base font-medium'>Earns 2★ per $1</p>
          <div className='flex gap-2'>
            <button className='rounded-full border border-black px-4 py-1 text-sm font-semibold'>Add or Reload</button>
            <button className='rounded-full border border-black px-4 py-1 text-sm font-semibold bg-black text-white'>Check Balance</button>
          </div>
        </div>
      </div>

      {renderSection("BIRTHDAY", [gift4, gift5])}
      {renderSection("THANK YOU", [gift6, gift7, gift8])}
      {renderSection("CELEBRATION", [gift9])}
      {renderSection("GRADUATION", [gift10])}
      {renderSection("APPRECIATION", [gift11, gift12])}
      {renderSection("PRIDE", [gift13])}
      {renderSection("ENCOURAGEMENT", [gift14, gift15])}
      {renderSection("WORKPLACE", [gift16, gift17, gift18])}
      {renderSection("ANYTIME", [gift19, gift20, gift21, gift22])}

      <div className="px-4 md:px-16 pt-10 pb-12 grid md:grid-cols-3 items-center gap-6 bg-[#F9F9F9]">
        <img src={xyd} alt="" className='w-full h-auto' />
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className='text-xl md:text-2xl text-[#000000DE] font-medium'>Business gifting — simplified</h1>
          <p className='text-[#00000094] text-sm md:text-base font-medium'>
            Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.
          </p>
          <button className='rounded-full border border-black px-4 py-1 text-base w-32 font-semibold'>Shop now</button>
        </div>
      </div>

      <div className="bg-[#edebe9] py-12 px-4 md:px-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <h2 className='text-[#00000094] font-medium'>About eGift cards</h2>
          <ul className='flex flex-col gap-3 text-[#000000DE] text-sm font-medium'>
            <li>A Starbucks eGift card is a Starbucks Gift Card that is purchased and sent digitally.</li>
            <li>To manage eGifts, go to eGift History or contact Starbucks Support.</li>
          </ul>
          <h2 className='text-[#00000094] font-medium'>Questions around eGift cards?</h2>
          <ul className='flex flex-col gap-3'>
            <li className='text-sm font-medium'>Check our FAQs. Your question might already be answered.</li>
            <button className='rounded-full border border-black px-4 py-1 text-base w-32 font-semibold'>Card FAQs</button>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className='text-[#00000094] font-medium'>About Starbucks Gift Cards</h2>
          <ul className='flex flex-col gap-3 text-[#000000DE] text-sm font-medium'>
            <li>Use them to pay in-store or join Starbucks® Rewards.</li>
            <li>Earn 2★ per dollar with a registered Gift Card or eGift.</li>
          </ul>
          <button className='rounded-full border border-black px-4 py-1 text-base w-64 font-semibold'>Card Terms & Conditions</button>
        </div>
      </div>
    </>
  );
};

export default Gift;
