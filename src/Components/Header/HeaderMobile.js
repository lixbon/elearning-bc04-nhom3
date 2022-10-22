import React, { useState } from "react";
import cybershoplogo from "../../assets/img/cyberlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TfiBag } from "react-icons/tfi";
import { useSelector } from "react-redux";
import Category from "../Category/Category";
export default function HeaderMobile() {
  const [nav, setNav] = useState(false);
  let navigate = useNavigate();
  const handlesetNav = () => {
    setNav(!nav);
  };
  const goHomePage = () => {
    navigate("/");
  };
  const goWatchlistPage = () => {
    navigate("/watchlist");
  };
  let countItemInWatchList = useSelector((state) => {
    return state.watchlistSlice.watchlist.length;
  });
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center cursor-pointer" onClick={goHomePage}>
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
          className="bg-overlay h-screen w-screen absolute top-20 left-0 z-10 "
        ></div>
      ) : (
        ""
      )}
      {nav ? (
        <div className="w-80 h-screen bg-white absolute top-20 -right-12 z-20 text-xl">
          <div>
            <h3 className="mb-0">My Learning</h3>
          </div>
          <div className="flex items-center w-full" onClick={goWatchlistPage}>
            <h3 className="mb-0">Watchlist</h3>
            <div className="relative">
              <TfiBag
                size={30}
                className="cursor-pointer  hover:text-green-400"
              />
              <div className="absolute top-0 -right-2 text-sm w-5 h-5 rounded-full bg-red-500 text-black flex justify-center items-center z-50">
                {countItemInWatchList}
              </div>
            </div>
          </div>
          <hr />
          <Category />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
