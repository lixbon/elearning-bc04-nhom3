import React, { useState } from "react";
import cybershoplogo from "../../assets/img/cyberlogo.png";
import { FaBars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

import UserNav from "./UserNav";
import { Input } from "antd";
import HeaderMobile from "./HeaderMobile";
const { Search } = Input;

export default function Header() {
  const [headerStyle, setHeaderStyle] = useState(false);

  const changeHeaderStyle = () => {
    if (window.scrollY >= 90) {
      setHeaderStyle(true);
    } else {
      setHeaderStyle(false);
    }
  };
  window.addEventListener("scroll", changeHeaderStyle);
  const onSearch = (value) => console.log(value);
  return (
    <div
      className={`px-12 h-20 fixed w-full  ${
        headerStyle ? "shadow-md shadow-gray-500 bg-gray-200" : " bg-white"
      }`}
    >
      <div className="hidden lg:flex w-full h-full justify-between">
        <div className="flex space-x-4 w-2/3">
          <div className="flex items-center">
            <img src={cybershoplogo} alt="" className="w-16" />
            <h2 className="uppercase text-xl font-semibold mb-0">cybersoft</h2>
          </div>
          <div className="flex items-center space-x-2">
            <FaBars className="cursor-pointer " size={30} />
            <h3 className="mb-0 text-xl">Categories</h3>
          </div>
          <div className="flex items-center w-1/2">
            <Search
              placeholder="Search any things"
              onSearch={onSearch}
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex justify-end items-center w-1/3 space-x-2">
          <h3 className="text-xl mb-0">My Learning</h3>
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer hover:text-green-400"
          />
          <IoIosNotificationsOutline
            size={30}
            className="cursor-pointer hover:text-green-400"
          />
          <UserNav />
        </div>
      </div>
      <div className="flex lg:hidden h-full relative">
        <HeaderMobile />
      </div>
    </div>
  );
}
