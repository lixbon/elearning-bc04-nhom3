import React, { useState } from "react";
import cybershoplogo from "../../assets/img/cyberlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderMobile() {
  const [nav, setNav] = useState(false);
  const handlesetNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src={cybershoplogo} alt="" className="w-16" />
        <h2 className="uppercase text-xl font-semibold mb-0 text-white">
          cybersoft
        </h2>
      </div>
      <div>
        {nav ? (
          <FaTimes
            onClick={handlesetNav}
            className="hover:text-red-500 cursor-pointer"
            size={30}
          />
        ) : (
          <FaBars
            className="hover:text-blue-500 cursor-pointer"
            onClick={handlesetNav}
            size={30}
          />
        )}
      </div>
      {nav ? (
        <div
          onClick={handlesetNav}
          className="bg-overlay h-screen w-screen absolute top-20 -right-12 z-10"
        ></div>
      ) : (
        ""
      )}
      {nav ? (
        <div className="w-1/2 h-screen bg-white absolute top-20 -right-12 z-20"></div>
      ) : (
        ""
      )}
    </div>
  );
}
