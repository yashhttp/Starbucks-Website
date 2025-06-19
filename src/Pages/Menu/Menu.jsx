import React from 'react'
import cup from "../../assets/cup.png"
import food from "../../assets/food.png"


const Menu = () => {
  return (
    <>
    <div className="sticky w-full top-0 pl-24 border border-gray-200 bg-gray-100 shadow">
      <ul className='flex gap-8 my-4 cursor-pointer'>
        <li>Menu</li>
        <li>Featured</li>
        <li>Previous</li>
        <li>Favorites</li>
      </ul>
    </div>
    <div className="flex w-full  mt-12">
      <div className="conatiner1 flex flex-col gap-5 w-[30%] ml-24">
      <div className="box1 gap-3 flex flex-col">
        <h1 className='font-medium text-lg'>Drinks</h1>
        <ul className='flex flex-col gap-4 text-[#00000094] font-medium cursor-pointer'>
          <li>Hot Coffee</li>
          <li>Cold Coffee</li>
          <li>Hot Tea</li>
          <li>Cold Tea</li>
          <li>Refreshers</li>
          <li>Frappuccino Blended Beverage</li>
          <li>Hot Chocolate Lemonade & More</li>
          <li>Bottle Beverages</li>
          <li></li>
        </ul>
      </div>
      <div className="box2 flex flex-col gap-3">
        <h1 className='font-medium text-lg'>Food</h1>
        <ul className='flex flex-col gap-4 text-[#00000094] font-medium cursor-pointer'>
          <li>Breakfast</li>
          <li>Bakery</li>
          <li>Treats</li>
          <li>Lunch</li>
          <li>Snacks</li>
        </ul>
      </div>
      <div className="box2 flex flex-col gap-3">
        <h1 className='font-medium text-lg'>At Home Coffee</h1>
        <ul className='flex flex-col gap-4 text-[#00000094] font-medium cursor-pointer'>
          <li>Whole Bean</li>
          <li>VIA Instant</li>
          <li>Shopping Bag</li>
          
        </ul>
      </div>
      </div>
      <div className="container2 w-[70%]  mr-52">
        <div className="flex flex-col gap-5 border-b border-gray-200 pb-4">
          <h1 className='font-bold text-3xl ml-12'>Menu</h1>
          <h1 className='font-bold text-2xl mx-12 mt-5'>Drinks</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 p-4">
           <div className="flex items-center gap-4  p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Hot Coffee</h2>
           </div>
           <div className="flex items-center gap-4 p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Cold Coffee</h2>
           </div>
           <div className="flex items-center gap-4  p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-semibold">Hot Tea</h2>
           </div>
           <div className="flex items-center gap-4  p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Cold Tea</h2>
           </div>
           <div className="flex items-center gap-4  p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Refreshers</h2>
           </div>
           <div className="flex items-center gap-4 p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Frappuccino Blended Beverage</h2>
           </div>
           <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Hot Chocolate, Lemonade & More</h2>
           </div>
           <div className="flex items-center gap-4  p-4 rounded cursor-pointer">
             <img
               src={cup}
               alt="Name"
               className="w-20 h-20 object-cover rounded-full"
             />
             <h2 className="text-lg font-medium">Bottled Beverages</h2>
           </div>
      </div>
          <div className="flex flex-col gap-5 border-b border-gray-200 pb-4">
            <h1 className='font-bold text-2xl mx-12 mt-5'>Food</h1>

          </div>
          <div className="grid grid-cols-2 gap-6 p-4">
            <div className="flex items-center gap-4 p-4 rounded cursor-pointer ">
              <img src={food} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded cursor-pointer ">
              <img src={food} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded cursor-pointer ">
              <img src={food} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={food} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded cursor-pointer ">
              <img src={food} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-b border-gray-200 pb-4">
            <h1 className='font-bold text-2xl mx-12 mt-5'>At Home Coffee</h1>

          </div>
          <div className="grid grid-cols-2 gap-6 p-4">
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={cup} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={cup} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={cup} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={cup} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded  cursor-pointer">
              <img src={cup} alt="" className='w-20 h-20 object-cover rounded-full' />
              <h2 className='text-lg font-medium'>Hot coffeee</h2>
            </div>
          </div>

      </div>
    </div>


      
    </>
  )
}

export default Menu
