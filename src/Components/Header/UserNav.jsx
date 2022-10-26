import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { localServ } from "../../services/localService";
import Button from "../Button/Button";
import { FaRegUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export default function UserNav() {
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  const [userpopup, setuserpopup] = useState(false);
  const handleSetUserPopUp = () => {
    setuserpopup(!userpopup);
  };
  let navigate = useNavigate();
  const handleGoLoginPage = () => {
    navigate("/login");
  };
  const handleGoRegister = () => {
    navigate("/register");
  };
  const handleGoUserSetting = () => {
    navigate("/userinformation");
  };
  const handleLogOut = () => {
    localServ.user.remove();

    window.location.href = "/login";
  };
  let renderContent = () => {
    if (user) {
      return (
        <div className="relative">
          <div
            className="flex items-center cursor-pointer text-white hover:text-slate-900 uppercase border  shadow-sm shadow-white rounded px-3 py-2 space-x-2"
            onClick={handleSetUserPopUp}
          >
            <FaRegUser />
            <span className="">{user.hoTen}</span>
          </div>
          {userpopup ? (
            <div className="absolute rounded-lg bg-white shadow-md shadow-white border-slate-900 top-12 right-0 px-10 py-4">
              <h3
                className="cursor-pointer hover:text-blue-500"
                onClick={handleGoUserSetting}
              >
                Setting
              </h3>
              <hr />
              <h3
                className="cursor-pointer hover:text-red-500"
                onClick={handleLogOut}
              >
                LogOut
              </h3>
              <hr />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <div className="space-x-4">
          <Button onClick={handleGoLoginPage}>Login</Button>
          <Button
            className="bg-gradient-to-r from-slate-900 to-slate-600"
            onClick={handleGoRegister}
          >
            Sign up
          </Button>
        </div>
      );
    }
  };
  let renderContentMobile = () => {
    if (user) {
      return (
        <div className="flex items-center space-x-4">
          <span className="italic underline font-semibold text-blue-500">
            {user.hoTen}
          </span>
          <AiFillSetting
            onClick={handleGoUserSetting}
            className="cursor-pointer hover:text-blue-500"
          />
          <span
            className="cursor-pointer text-base hover:text-red-500 mb-0 underline"
            onClick={handleLogOut}
          >
            LogOut
          </span>
        </div>
      );
    } else {
      return (
        <div className="space-x-4">
          <button
            onClick={handleGoLoginPage}
            className="px-4 py-2 border rounded-md hover:scale-105 duration-200 text-sm font-semibold uppercase dark:text-blue-500 z-1"
          >
            Login
          </button>

          <Button
            className="bg-gradient-to-r from-slate-900 to-slate-600"
            onClick={handleGoRegister}
          >
            Sign up
          </Button>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="hidden lg:block space-x-3">{renderContent()}</div>
      <div className="block lg:hidden space-x-3">{renderContentMobile()}</div>
    </div>
  );
}
