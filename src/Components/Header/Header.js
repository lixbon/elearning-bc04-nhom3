import React, { useState } from "react";
import cybershoplogo from "../../assets/img/cyberlogo.png";
import { FaBars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiBag } from "react-icons/tfi";

import UserNav from "./UserNav";
import { Input } from "antd";
import HeaderMobile from "./HeaderMobile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Search } = Input;

export default function Header() {
  const [headerStyle, setHeaderStyle] = useState(false);
  let countItemInWatchList = useSelector((state) => {
    return state.watchlistSlice.watchlist.length;
  });
  let navigate = useNavigate();
  const changeHeaderStyle = () => {
    if (window.scrollY >= 90) {
      setHeaderStyle(true);
    } else {
      setHeaderStyle(false);
    }
  };
  const goHomePage = () => {
    navigate("/");
  };
  const goWatchlistPage = () => {
    navigate("/watchlist");
  };
  const goStudyingPage = () => {
    navigate("/studying");
  };
  window.addEventListener("scroll", changeHeaderStyle);
  const onSearch = (value) => console.log(value);
  return (
    <div
      className={`px-12 h-20 fixed w-full bg-gradient-to-r from-slate-900 to-gray-400 ${
        headerStyle ? "shadow-md shadow-gray-500" : " "
      }`}
    >
      <div className="hidden lg:flex w-full h-full justify-between">
        <div className="flex space-x-4 w-2/3">
          <div
            className="flex items-center cursor-pointer group"
            onClick={goHomePage}
          >
            <img src={cybershoplogo} alt="" className="w-16 " />
            <h2 className="uppercase text-xl font-semibold mb-0 group-hover:text-blue-500 duration-200 text-white">
              cybersoft
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <FaBars
              className="cursor-pointer text-white hover:text-blue-500"
              size={30}
            />
            <h3 className="mb-0 text-xl text-white">Categories</h3>
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
          <h3
            onClick={goStudyingPage}
            className="text-xl mb-0 text-white cursor-pointer hover:text-red-500  duration-200"
          >
            My Learning
          </h3>
          <div className="relative">
            <TfiBag
              size={30}
              className="cursor-pointer text-white hover:text-green-400"
              onClick={goWatchlistPage}
            />
            <div className="absolute -top-3 -right-2 text-sm w-5 h-5 rounded-full bg-red-500 text-white  border border-white flex justify-center items-center">
              {countItemInWatchList}
            </div>
          </div>
          <IoIosNotificationsOutline
            size={30}
            className="cursor-pointer text-white hover:text-green-400"
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
