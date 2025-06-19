import React, { useState } from 'react';
import logo from "../../assets/logoo.png";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const hideFullNav = ["/signin", "/joinnow"].includes(location.pathname);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-3 md:px-8 border-b border-gray-200 shadow pt-6 pb-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        {!hideFullNav && (
          <>
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
            <ul className="hidden md:flex gap-10 font-semibold items-center relative">
              <li className="cursor-pointer hover:text-green-600 transition"><Link to="/menu">MENU</Link></li>
              <li className="cursor-pointer hover:text-green-600 transition"><Link to="/reward">REWARDS</Link></li>
              <li className="cursor-pointer hover:text-green-600 transition"><Link to="/gift">GIFT CARDS</Link></li>
            </ul>

            <div className="hidden md:flex gap-4 font-semibold">
              <button className="border border-black rounded-full px-4 py-1 transition hover:bg-black hover:text-white"><Link to="/signin">Sign In</Link></button>
              <button className="border border-black rounded-full px-4 py-1 transition hover:bg-green-600 hover:text-white hover:border-green-600"><Link to="/joinnow">Join Now</Link></button>
            </div>
          </>
        )}
      </div>

      {!hideFullNav && mobileOpen && (
        <div className="md:hidden px-4 py-2 space-y-3 font-semibold">
          <div className="space-y-1">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex justify-between items-center cursor-pointer">
              <span>Menu</span>
              <HiChevronDown className={`${dropdownOpen ? "rotate-180" : ""} transition`} />
            </div>
            {dropdownOpen && (
              <ul className="ml-4 text-sm space-y-1">
                <li className="hover:text-green-600">Coffee</li>
                <li className="hover:text-green-600">Tea</li>
                <li className="hover:text-green-600">Snacks</li>
              </ul>
            )}
          </div>
          <div>Rewards</div>
          <div>Gift Cards</div>
          <div className="pt-2 flex flex-col gap-2">
            <button className="border border-black rounded-full px-4 py-1">Sign In</button>
            <button className="border border-black rounded-full px-4 py-1">Join Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
