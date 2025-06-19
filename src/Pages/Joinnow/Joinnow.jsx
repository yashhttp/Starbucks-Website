// import React from 'react'

// const Joinnow = () => {
//   return (
//     <>
//        <div className="flex flex-col items-center justify-center px-4">
//           <h1 className='font-extrabold py-10 text-2xl sm:text-3xl text-[#000000DE] text-center'>
//             Create an account
//           </h1>
//           <div className="flex flex-col text-center items-center justify-center gap-2">
//             <h1 className='font-semibold  text-base sm:text-base text-[#00000094] text-center'>STARBUCKS® REWARDS</h1>
//             <p className='text-[#00000094] font-normal px-96'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.</p>
//           </div>
          

//           <div className="w-[600px] bg-white shadow-xl rounded-xl px-24 py-14 my-12 flex flex-col gap-16 border ">
//            {/* <h1 className='font-medium text-[#000000DE]'>* indicates required field</h1> */}
//            <div className="flex flex-col gap-6">
//            <h1 className='font-medium text-[#000000DE]'>* indicates required field</h1>
//            <h1 className='text-xl text-[#000000DE] font-semibold'>Personal Information</h1>
//            <input type='text' placeholder='* First name' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//            <input type='text' placeholder='* Last name' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//            </div>
//            <div className="">
//            <div className="flex flex-col gap-6">
//            <h1 className='text-xl text-[#000000DE] font-semibold'>Account Security</h1>
//            <div className="">
//            <input type='text' placeholder='* Last name' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//             <p className='pl-4 pr-5'>This will be your username</p>
//            </div>
//            <div className="">
//            <input type='text' placeholder='* Last name' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//             <p className='pl-4 pr-5'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
//            </div>
//            </div>

//            </div>

//           <div className="flex flex-col  gap-6">
             
//              <p className='font-bold text-[#006241] text-lg'>Already have a Starbucks gift card?</p>
//              <div className="flex flex-col gap-5">
//               <h1 className='text-[#00000094] font-semibold'>COLLECT MORE STARS & EARN REWARDS</h1>
//               <p className='pr-12 text-[#000000DE] font-medium'>Email is a great way to know about offers and what’s new from Starbucks.</p>
//              </div>
//              <div className="flex flex-col gap-5">
//               <div className=" flex items-center gap-3">
//               <input type='checkbox' className='w-5 h-5 border-2 border-green-600  bg-green-100  accent-green-600' ></input>
//               <h1 className='text-[#000000DE] font-medium'>Yes, I’d like email from Starbucks</h1>
//               </div>
//               <p className='pl-8 pr-5 text-[#00000094] font-medium'>Know about initiatives, announcements and product offers.</p>
              
//              </div>
//           </div>
//           <div className="flex flex-col ">
//             <h1 className='text-[#00000094] font-bold' >TERMS OF USE</h1>
//             <div className="flex gap-3 pt-6">
//             <input type='checkbox' className='w-5 h-5 border-2 border-green-600  bg-green-100  accent-green-600' ></input>
//             <h1 className=' pr-10 text-[#00000094] font-medium'>* I agree to the Starbucks® Rewards Terms and the Starbucks Card Terms and have read the Starbucks Privacy Statement.</h1>
//             </div>
//             <div className="flex justify-end pt-12">
//              <button className="bg-[#006241] text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
//                Create account
//              </button>
//            </div>
//           </div>
          
           
//          </div>
          
//        </div>
      
//     </>
//   )
// }

// export default Joinnow
import React from 'react';

const Joinnow = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className='font-extrabold py-10 text-2xl sm:text-3xl text-[#000000DE] text-center'>
          Create an account
        </h1>

        <div className="flex flex-col text-center items-center justify-center gap-2">
          <h1 className='font-semibold text-base text-[#00000094]'>STARBUCKS® REWARDS</h1>
          <p className='text-[#00000094] font-normal px-4 sm:px-20 lg:px-48'>
            Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.
          </p>
        </div>

        <div className="w-full max-w-[600px] bg-white shadow-xl rounded-xl px-6 sm:px-12 lg:px-24 py-12 my-12 flex flex-col gap-16 border">
          <div className="flex flex-col gap-6">
            <h1 className='font-medium text-[#000000DE]'>* indicates required field</h1>
            <h1 className='text-lg sm:text-xl text-[#000000DE] font-semibold'>Personal Information</h1>
            <input type='text' placeholder='* First name' className='p-3  border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300' />
            <input type='text' placeholder='* Last name' className='p-3 border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300' />
          </div>

          <div className="flex flex-col gap-6">
            <h1 className='text-lg sm:text-xl text-[#000000DE] font-semibold'>Account Security</h1>

            <div>
              <input type='text' placeholder='* Username' className='p-3 border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300' />
              <p className='pl-2 pt-1 text-sm sm:text-base'>This will be your username</p>
            </div>

            <div>
              <input type='text' placeholder='* Password' className='p-3 border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300' />
              <p className='pl-2 pt-1 text-sm sm:text-base'>
                Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className='font-bold text-[#006241] text-base sm:text-lg underline'>Already have a Starbucks gift card?</p>

            <div className="flex flex-col gap-3">
              <h1 className='text-[#00000094] font-semibold'>COLLECT MORE STARS & EARN REWARDS</h1>
              <p className='text-[#000000DE] font-medium'>Email is a great way to know about offers and what’s new from Starbucks.</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <input type='checkbox' className='w-5 h-5 accent-green-600 mt-1' />
                <h1 className='text-[#000000DE] font-medium'>Yes, I’d like email from Starbucks</h1>
              </div>
              <p className='pl-8 text-[#00000094] font-medium'>Know about initiatives, announcements and product offers.</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className='text-[#00000094] font-bold'>TERMS OF USE</h1>
            <div className="flex gap-3 pt-6">
              <input type='checkbox' className='w-5 h-5 accent-green-600' />
              <h1 className='text-[#00000094] font-medium'>
                * I agree to the Starbucks® Rewards Terms and the Starbucks Card Terms and have read the Starbucks Privacy Statement.
              </h1>
            </div>

            <div className="flex justify-end pt-12">
              <button className="bg-[#006241] text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinnow;
