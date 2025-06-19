// import React from 'react'
// import background_image from "../../assets/handcoffeee.jpg"
// import one from "../../assets/one.jpg"
// import two from "../../assets/two.jpg"
// import three from "../../assets/three.jpg"
// import star from "../../assets/star1.png"
// import tea from "../../assets/coldtea.png"
// import fun1 from "../../assets/fun1.jpg"
// import fun2 from "../../assets/fun2.jpg"
// import fun3 from "../../assets/fun3.jpg"
// import a1 from "../../assets/1A.png"
// import b1 from "../../assets/1B.png"
// import a2 from "../../assets/2A.png"
// import b2 from "../../assets/2B.png"
// import delta from "../../assets/delta.png"
// import bank from "../../assets/bankofamerica.png"
// import marott from "../../assets/marriottlogo.png"
// import heroImg from "../../assets/grren.jpg"
// const Reward = () => {
//   return (
//     <>
//       {/* PART 1 */}
//     <div className="sticky w-full top-0 pl-28 py-3  bg-[#32462f] font-semibold text-md text-white shadow">
//     STARBUCKS® REWARDS
//     </div>

//     {/* PART 2 */}
//     <div className='flex h-[28rem]   '>
//        <div className=" w-1/2 px-20 bg-[#faf6ee]  text-left py-20 gap-8 flex flex-col">
//          <h1 className='text-[50px]  font-bold  text-[#32462f] '>It’s a great day for
//             free coffee</h1>
//          <p className='text-[#32462f] text-[17px] font-medium '>Sign up and start enjoying the perks of Starbucks® Rewards.</p>
//          <button className='border border-white bg-[#00754a] text-lg text-white  p-1  w-40 rounded-full font-semibold'>Join now</button>
//          <p className='text-[#000000DE] '> It's even better with the app.</p>
//        </div>
//        <div className="w-1/2  flex items-center justify-center ">
//          <img src={background_image} alt="" className='h-full'/>

        
//        </div>
//      </div>
//      {/* PART 3 */}
//      <div className="py-16">
//       <div className="px-28  flex flex-col">
//         <div className="flex flex-col text-center gap-2">
//           <h2 className='text-[28px] text-[#000000DE] font-medium'>Getting Started is easy</h2>
//           <p className='text-[16px] text-[#000000DE] font-normal'>Earn Stars and get rewarded in few easy step</p>
//         </div>
//         <ul className='grid  grid-cols-3 text-center gap-4 pt-12'>
//           <li className='flex flex-col gap-5'>
//             <img src={one} alt="" className='mx-auto w-12 h-12'/>
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Create an Account</h3>
//             <p className='text-[#000000DE] text-[16px]'>To get started, <a>join now</a>. You can also <a>join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
//           </li>
//           <li className='flex flex-col gap-5 text-[#000000DE]'>
//             <img src={two} alt="" className='mx-auto w-12 h-12'/>
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Order and pay how you’d like</h3>
//             <p className='text-[#000000DE] text-[16px]'>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
//           </li>
//           <li className='flex flex-col gap-5 text-[#000000DE]'>
//             <img src={three} alt="" className='mx-auto w-12 h-12' />
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Earn Stars, get Rewards</h3>
//             <p className='text-[#000000DE] text-[16px]'>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
//           </li>
//         </ul>
//       </div>
//      </div>
//      {/* PART 4 */}
//      <div className="py-16 ">
//       <div className="py-5 bg-[#D3E8E154] text-center">
//         <h2 className='text-[#000000DE] text-[22px] font-semibold'>Get your favorites for Free</h2>
//       </div>
//       <ul className='flex bg-[#D3E8E154] items-center justify-center gap-10 pb-2'>
//         <li className='flex  object-cover text-[#000000DE] text-[20px] font-semibold'>25  <img src={star} alt="" className='w-3 h-3 relative top-[12px]' /></li>
//         <li className='flex  object-cover text-[#000000DE] text-[20px] font-semibold'>100 <img src={star} alt="" className='w-3 h-3 relative top-[12px]' /></li>
//         <li className='flex  object-cover text-[#000000DE] text-[20px] font-semibold'>200  <img src={star} alt="" className='w-3 h-3 relative top-[12px]' /></li>
//         <li className='flex  object-cover text-[#000000DE] text-[20px] font-semibold'>300  <img src={star} alt="" className='w-3 h-3 relative top-[12px]' /></li>
//         <li className='flex  object-cover text-[#000000DE] text-[20px] font-semibold'>400  <img src={star} alt="" className='w-3 h-3 relative top-[12px]' /></li>
//       </ul>
//       <div className="			bg-[#99C3CE54] border-t border-[#A5CEDA54] py-8 px-80 flex items-center justify-center gap-0 ">
//         <img src={tea} alt="" className='w-96 h-auto'/>
//         <div className="flex flex-col gap-3">
//           <h1 className='text-[#000000DE] text-[18px] font-semibold'>Customize your drink</h1>
//           <p className='text-[14px] font-normal text-[#000000DE]'>Make your drink just right with an extra espresso shot or a dash of your favorite syrup.</p>
//         </div>

//       </div>
//      </div>

//      {/* PART 5 */}
//      <div className="py-16  mb-12">
//       <div className="px-28  flex flex-col">
//         <div className="flex flex-col text-center gap-2">
//           <h2 className='text-[30px] text-[#000000DE] font-semibold'>Endless Extras</h2>
//           <p className='text-[16px] text-[#000000DE] font-medium px-60 '>Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.</p>
//         </div>
//         <ul className='grid  grid-cols-3 text-center gap-4 pt-12'>
//           <li className='flex flex-col gap-5'>
//             <img src={fun1} alt="" className='mx-auto w-28 h-28'/>
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Fun freebies</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Not only can you earn free food, drinks and more, look forward to a birthday treat on us.</p>
//             <a className='underline text-[#006241] font-medium'>Learn More</a>
//           </li>
//           <li className='flex flex-col gap-5 text-[#000000DE]'>
//             <img src={fun2} alt="" className='mx-auto w-28 h-28'/>
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Order & pay ahead</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Master the art of ordering ahead with saved favorites and payment methods.</p>
//             <a className='underline text-[#006241] font-medium'>Learn More</a>
//           </li>
//           <li className='flex flex-col gap-5 text-[#000000DE]'>
//             <img src={fun3} alt="" className='mx-auto w-28 h-28' />
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Get to free faster</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
//             <a className='underline text-[#006241] font-medium'>Learn More</a>
//           </li>
//         </ul>
//       </div>
//      </div>
//      {/* PART6 */}
//      <div className="py-12 bg-[#f9f9f9]  ">
//       <div className="px-12  flex flex-col">
//         <div className="flex flex-col text-center gap-2">
//           <h2 className='text-[30px] text-[#000000DE] font-semibold'>Cash or card, you earn Stars</h2>
//           <p className='text-[16px] text-[#000000DE] font-medium px-72 '>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
//         </div>
//         <div className='grid  grid-cols-[1fr_2fr_2fr] pr-36  text-left gap-3 pt-12 mt-12 border-b border-gray-300'>
//           <div className='flex flex-col gap-3 '>
//             {/* <img src={fun1} alt="" className=' w-28 h-28'/> */}
//             <div >
//             <h3 className='text-[#000000DE] text-[24px] font-semibold'>1★ per dollar</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Pay as you go.</p>
            
//             </div>
//           </div>
//           <div className='flex  gap-5 text-left text-[#000000DE]'>
//             <img src={a1} alt="" className=' w-40 h-40'/>
//             <div className="flex flex-col gap-4">
//             <h3 className='text-[#000000DE] text-[20px] font-semibold'>Scan and pay separately</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Use cash or credit/debit card at the register.</p>
            
//             </div>
//           </div>
//           <div className='flex  gap-5 text-[#000000DE]'>
//             <img src={b1} alt="" className=' w-40 h-40' />
//             <div className="flex flex-col gap-4">
//             <h3 className='text-[#000000DE] text-[20px] font-semibold'>Save payment in the app</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
            
//             </div>
//           </div>
          
//         </div>
//         <div className='grid  grid-cols-[1fr_2fr_2fr] pr-36  text-left gap-3 pt-12 mt-4  '>
//           <div className='flex flex-col gap-3 '>
//             {/* <img src={fun1} alt="" className=' w-28 h-28'/> */}
//             <div >
//             <h3 className='text-[#000000DE] text-[24px] font-semibold'>2★ per dollar</h3>
//             <p className='text-[#000000DE] text-[16px] font-semibold'>Add funds in the app</p>
            
//             </div>.
//           </div>
//           <div className='flex  gap-5 text-left text-[#000000DE]'>
//             <img src={a2} alt="" className=' w-40 h-40'/>
//             <div className="flex flex-col gap-4">
//             <h3 className='text-[#000000DE] text-[20px] font-semibold'>Preload</h3>
//             <p className='text-[#000000DE] text-[16px] font-semibold'>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
            
//             </div>
//           </div>
//           <div className='flex  gap-5 text-[#000000DE]'>
//             <img src={b2} alt="" className=' w-40 h-40' />
//             <div className="flex flex-col gap-4">
//             <h3 className='text-[#000000DE] text-[19px] font-medium'>Register your gift card</h3>
//             <p className='text-[#000000DE] text-[16px] font-medium'>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
            
//             </div>
//           </div>
          
//         </div>
//       </div>
//      </div>
//      {/* PART 7 */}
//      <div className=" h-auto p-8"  style={{ backgroundImage: `url(${heroImg})` }}>
//       <div className="bg-[#d4e9e2] py-16 h-auto ">
//       <div className="flex flex-col text-center gap-4">
//           <h2 className='text-[30px] text-[#000000DE] font-semibold'>Keep the Rewards Coming</h2>
//           <p className='text-[16px] text-[#000000DE] font-medium'>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
//         </div>
//         <ul className='grid  grid-cols-3 text-center gap-8 py-12 px-20'>
//           <li className='flex flex-col gap-10'>
//             <img src={delta} alt="" className='mx-auto w-44 h-auto'/>
            
//             <p className='text-[#000000DE] text-[16px] font-medium'>Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1</p>
//           </li>
//           <li className='flex flex-col gap-10 text-[#000000DE]'>
//             <img src={bank} alt="" className='mx-auto w-44 h-auto'/>
            
//             <p className='text-[#000000DE] text-[16px] font-medium'>Link your Bank of America eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.2</p>
//           </li>
//           <li className='flex flex-col gap-10 text-[#000000DE]'>
//             <img src={marott} alt="" className='mx-auto w-44 h-auto' />
            
//             <p className='text-[#000000DE] text-[16px] font-medium'>Link your Marriott Bonvoy® and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.3</p>
//           </li>
//         </ul>
        
        
//       </div>
//      </div>
     
//      {/* PART 8 */}
//      <div className=" my-5 h-72 py-12 px-8 w-full">
//       <div className=" w-[65%] h-full flex flex-col item-center justify-center gap-3 ">
//         <h2 className='ml-[25%] text-[#000000DE] font-semibold text-2xl'>Questions?</h2>
//         <p className='ml-[25%] text-[#000000DE] font-medium '>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked terms right over here.</p>
//       </div>
//      </div>
//      {/* PART 9*/}

//      <div className="w-full h-full bg-[#f9f9f9] py-10 px-8 flex flex-col gap-2">
//       <h2 className='text-[#000000DE] font-medium text-base'>At participating stores. Restrictions apply.</h2>
//       <ul className='flex flex-col gap-2  text-[#000000DE] font-medium text-[14.5px]'> 
//         <li> 1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not   earn double Stars. Stars and miles may not be earned on   purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit deltastarbucks. com/terms .↩
//         </li>
//         <li>2At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of  every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit Terms and Conditions. Bank of America, N.A. Member FDIC.↩</li>

//         <li>3Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S. participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions, visit Starbucks.com/MarriottBonvoy. Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc. itsaffiliates. Used under license from Marriott International, Inc.↩</li>
//       </ul>
//       <div className="pt-6 grid grid-cols-2 gap-16">
//         <div className=" flex flex-col gap-6">
//           {/* <h2>EARNING STARS</h2> */}
//           <ul className='flex flex-col gap-3 text-[#000000DE] font-medium text-[14.5px]'>
//           <h2 className='text-[#00000094] font-medium'>EARNING STARS</h2>
//             <li>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</li>
//             <li>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</li>
//             <li>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</li>
//           </ul>
//           <ul className='flex flex-col gap-3'>
//             <h2 className='text-[#00000094] font-medium '>BENEFITS</h2>
//             <li className='font-medium text-[14.5px] '>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</li>
//           </ul>
          
//         </div>
//         <div className=" flex flex-col gap-6">
//           {/* <h2>EARNING STARS</h2> */}
//           <ul className='flex flex-col gap-3 text-[#000000DE] font-medium text-[14.5px]'>
//           <h2 className='text-[#00000094] font-medium'>TERMS OF USE</h2>
//             <li>For full program details visit starbucks.com/rewards/terms.</li>
//             <li>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the Starbucks Store Locator and search for locations honoring “Redeem Rewards”.</li>

//           </ul>
//           <ul className='flex flex-col gap-3'>
//             <h2 className='text-[#00000094] font-medium '>REDEEMING REWARDS</h2>
//             <li className='font-medium text-[14.5px]'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</li>
//           </ul>
          
//         </div>

//       </div>
//      </div>
     
     

//     </>
//   )
// }

// export default Reward
 

import React from 'react'
import background_image from "../../assets/handcoffeee.jpg"
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import star from "../../assets/star1.png"
import tea from "../../assets/coldtea.png"
import fun1 from "../../assets/fun1.jpg"
import fun2 from "../../assets/fun2.jpg"
import fun3 from "../../assets/fun3.jpg"
import a1 from "../../assets/1A.png"
import b1 from "../../assets/1B.png"
import a2 from "../../assets/2A.png"
import b2 from "../../assets/2B.png"
import delta from "../../assets/delta.png"
import bank from "../../assets/bankofamerica.png"
import marott from "../../assets/marriottlogo.png"
import heroImg from "../../assets/grren.jpg"

const Reward = () => {
  return (
    <>
      {/* PART 1 */}
      <div className="sticky top-0 w-full px-8 py-3 bg-[#32462f] text-white font-semibold shadow-md text-center">
        STARBUCKS® REWARDS
      </div>

      {/* PART 2 */}
      <div className='flex flex-col md:flex-row h-[28rem]'>
        <div className="md:w-1/2 px-6 py-20 bg-[#faf6ee] text-left flex flex-col gap-8">
          <h1 className='text-[40px] font-bold text-[#32462f]'>It’s a great day for free coffee</h1>
          <p className='text-[#32462f] text-[17px]'>Sign up and start enjoying the perks of Starbucks® Rewards.</p>
          <button className='border border-white bg-[#00754a] text-lg text-white p-2 w-40 rounded-full'>Join now</button>
          <p className='text-[#000000DE]'>It's even better with the app.</p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={background_image} alt="background" className='w-full h-full object-cover'/>
        </div>
      </div>

      {/* PART 3 */}
      <div className="py-16 px-6">
        <div className="text-center">
          <h2 className='text-[28px] text-[#000000DE]'>Getting Started is easy</h2>
          <p className='text-[#000000DE] text-[16px]'>Earn Stars and get rewarded in a few easy steps</p>
        </div>
        <ul className='grid md:grid-cols-3 gap-4 text-center pt-12'>
          <li className='flex flex-col gap-5'>
            <img src={one} alt="create an account" className='mx-auto w-12 h-12'/>
            <h3 className='text-[#000000DE] text-[19px]'>Create an Account</h3>
            <p className='text-[#000000DE] text-[16px]'>To get started, <a href="#" className='text-[#00754a]'>join now</a>.</p>
          </li>
          <li className='flex flex-col gap-5'>
            <img src={two} alt="order and pay" className='mx-auto w-12 h-12'/>
            <h3 className='text-[#000000DE] text-[19px]'>Order and Pay how you’d like</h3>
            <p className='text-[#000000DE] text-[16px]'>Use cash, credit/debit card, or the app. You’ll collect Stars all ways.</p>
          </li>
          <li className='flex flex-col gap-5'>
            <img src={three} alt="earn stars" className='mx-auto w-12 h-12'/>
            <h3 className='text-[#000000DE] text-[19px]'>Earn Stars, Get Rewards</h3>
            <p className='text-[#000000DE] text-[16px]'>As you earn Stars, redeem them for Rewards like free drinks and food!</p>
          </li>
        </ul>
      </div>

      {/* PART 4 */}
      <div className="py-16 bg-[#D3E8E154] text-center">
        <h2 className='text-[#000000DE] text-[22px] font-semibold'>Get your favorites for Free</h2>
        <ul className='flex justify-center gap-10 py-2'>
          <li className='flex items-center text-[#000000DE] text-[20px]'>
            25 <img src={star} alt="star" className='w-3 h-3 ml-2' />
          </li>
          <li className='flex items-center text-[#000000DE] text-[20px]'>
            100 <img src={star} alt="star" className='w-3 h-3 ml-2' />
          </li>
          <li className='flex items-center text-[#000000DE] text-[20px]'>
            200 <img src={star} alt="star" className='w-3 h-3 ml-2' />
          </li>
          <li className='flex items-center text-[#000000DE] text-[20px]'>
            300 <img src={star} alt="star" className='w-3 h-3 ml-2' />
          </li>
          <li className='flex items-center text-[#000000DE] text-[20px]'>
            400 <img src={star} alt="star" className='w-3 h-3 ml-2' />
          </li>
        </ul>
      </div>

      {/* PART 5 */}
      <div className="py-16">
        <div className="px-6 text-center">
          <h2 className='text-[30px] text-[#000000DE] font-semibold'>Endless Extras</h2>
          <p className='text-[16px] text-[#000000DE] font-medium px-12'>Unlock benefits like quick ordering, tasty Rewards, and free coffee with Starbucks® Rewards.</p>
        </div>
        <ul className='grid md:grid-cols-3 gap-4 pt-12'>
          <li className='flex flex-col items-center gap-4'>
            <img src={fun1} alt="fun freebies" className='w-28 h-28'/>
            <h3 className='text-[#000000DE] text-[19px]'>Fun freebies</h3>
            <p className='text-[#000000DE] text-[16px]'>Look forward to a birthday treat and more.</p>
          </li>
          <li className='flex flex-col items-center gap-4'>
            <img src={fun2} alt="order & pay ahead" className='w-28 h-28'/>
            <h3 className='text-[#000000DE] text-[19px]'>Order & pay ahead</h3>
            <p className='text-[#000000DE] text-[16px]'>Save time with saved favorites and payment methods.</p>
          </li>
          <li className='flex flex-col items-center gap-4'>
            <img src={fun3} alt="get rewards faster" className='w-28 h-28'/>
            <h3 className='text-[#000000DE] text-[19px]'>Get to free faster</h3>
            <p className='text-[#000000DE] text-[16px]'>Earn Stars faster with Bonus Star challenges and Double Star Days.</p>
          </li>
        </ul>
      </div>

      {/* PART 6 */}
      <div className="py-12 bg-[#f9f9f9]">
        <div className="px-6 text-center">
          <h2 className='text-[30px] text-[#000000DE] font-semibold'>Cash or card, you earn Stars</h2>
          <p className='text-[16px] text-[#000000DE] font-medium px-12'>Earn Stars no matter how you pay. Those Stars add up to delicious Rewards.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-6 pt-12'>
          <div className='flex flex-col items-center'>
            <h3 className='text-[#000000DE] text-[24px] font-semibold'>1★ per dollar</h3>
            <p className='text-[#000000DE] text-[16px]'>Pay as you go with cash or card.</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src={a1} alt="payment method 1" className='w-40 h-40'/>
            <div className="flex flex-col">
              <h3 className='text-[#000000DE] text-[20px] font-semibold'>Scan and pay separately</h3>
              <p className='text-[#000000DE] text-[16px]'>Use cash or card at the register.</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <img src={a2} alt="payment method 2" className='w-40 h-40'/>
            <div className="flex flex-col">
              <h3 className='text-[#000000DE] text-[20px] font-semibold'>Preload funds</h3>
              <p className='text-[#000000DE] text-[16px]'>Add funds to your account through the app.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
