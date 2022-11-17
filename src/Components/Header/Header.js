import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="sm:py-[12px] py-[20px] pl-[20px] sm:pr-[20px] grid w-full grid-cols-2 bg-white opacity-90 border-b shadow z-50">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="http://demo1.cybersoft.edu.vn/logo.png"
            alt="logoCybersoft"
            className="w-8/12 h-8/12 sm:w-6/12 sm:h-6/12"
          />
        </NavLink>
      </div>
      <div className="flex items-center justify-end">
        <UserNav />
      </div>
    </div>
  );
}
