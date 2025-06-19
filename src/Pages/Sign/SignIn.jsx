// import React from 'react'

// const SignIn = () => {
//   return (
//     <>
//     <div className=" flex flex-col  items-center justify-center ">
//       <h1 className='font-extrabold p-14 text-3xl text-[#000000DE]'>Sign in or create an account</h1>
//       <div className="w-[500px] bg-white shadow-xl rounded-xl px-7 py-8 flex flex-col gap-8 border ">
//         <h1 className='font-medium text-[#000000DE]'>* indicates required field</h1>
//         <input type='text' placeholder='* Username or email address' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//         <input type='text' placeholder='* Password' className='p-3 border border-[#000000DE] rounded-lg text-xl placeholder-[#000000DE] font-medium'></input>
//        <div className="flex items-center  gap-4">
//           <input type='checkbox' className='w-5 h-5 border-2 border-green-600  bg-green-100  accent-green-600' ></input>
//           <p className='font-medium'> Keep me signed in. Details</p>
//        </div>
//        <div className="flex flex-col gap-2">
//           <a  className='text-[#006241] underline font-bold text-lg'>Forgot your username?</a>
//           <a className='text-[#006241] underline font-bold text-lg'>Forgot your password?</a>
//         </div>
//         <div className="flex justify-end">
//           <button className="bg-[#006241] text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
//             Sign In
//           </button>
//         </div>
//       </div>

//     </div>
//     <div className=" mt-16">
//      <div className="flex flex-col items-center justify-center mx-96 px-28 pb-20 text-center gap-3 ">
//       <h1 className='text-[#00754A] font-bold '>JOIN STARBUCKS® REWARDS</h1>
//       <p className='text-[#000000DE] font-medium'>As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.</p>
//       <button className='text-[#00754A] font-semibold border border-[#00754A] px-4 py-1 rounded-3xl' >Join now</button>
      
//      </div>
//      <hr className='border-b border-gray-200 mb-10 shadow '/>
    
//     </div>
      
//     </>
//   )
// }

// export default SignIn
import React from 'react';

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className='font-extrabold py-10 text-2xl sm:text-3xl text-[#000000DE] text-center'>
          Sign in or create an account
        </h1>

        <div className="w-full max-w-[500px] bg-white shadow-xl rounded-xl px-4 sm:px-7 py-8 flex flex-col gap-8 border">
          <h1 className='font-medium text-[#000000DE]'>* indicates required field</h1>

          <input
            type='text'
            placeholder='* Username or email address'
            className="p-3 border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300"
          />
          <input
            type='text'
            placeholder='* Password'
            className="p-3 border border-[#000000DE] rounded-lg text-base sm:text-xl placeholder-[#000000DE] font-medium w-full 
            hover:border-[#00754A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#199f5b] transition-all duration-300"
          />

          <div className="flex items-center gap-3">
            <input
              type='checkbox'
              className='w-5 h-5 accent-green-600 '
            />
            <p className='font-medium text-sm sm:text-base'>Keep me signed in. Details</p>
          </div>

          <div className="flex flex-col gap-2">
            <a className='text-[#006241] underline font-bold text-sm sm:text-lg'>Forgot your username?</a>
            <a className='text-[#006241] underline font-bold text-sm sm:text-lg'>Forgot your password?</a>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#006241] text-white px-6 py-3 rounded-full hover:bg-green-700 transition ">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4">
        <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-4 sm:px-28 pb-16 text-center gap-4">
          <h1 className='text-[#00754A] font-bold text-lg sm:text-xl'>JOIN STARBUCKS® REWARDS</h1>
          <p className='text-[#000000DE] font-medium text-sm sm:text-base'>
            As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.
          </p>
          <button className='text-[#00754A] font-semibold border border-[#00754A] px-4 py-1 rounded-3xl'>
            Join now
          </button>
        </div>

        <hr className='border-b border-gray-200 mb-10 shadow mx-4' />
      </div>
    </>
  );
};

export default SignIn;
