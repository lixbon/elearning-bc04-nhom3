import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/localService";
import Button from "../Button/Button";
import { FaRegUser } from "react-icons/fa";

export default function UserNav() {
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  const [userpopup, setuserpopup] = useState(false);
  const handleSetUserPopUp = () => {
    setuserpopup(!userpopup);
  };
  const handleLogOut = () => {
    localServ.user.remove();

    window.location.href = "/login";
  };
  let renderContent = () => {
    if (user) {
      return (
        <div className="relative">
          <div className="flex items-center cursor-pointer hover:text-blue-400 uppercase border border-blue-500 rounded px-3 py-2 space-x-2">
            <FaRegUser />
            <span className="" onClick={handleSetUserPopUp}>
              {user.hoTen}
            </span>
          </div>
          {userpopup ? (
            <div className="absolute rounded-lg bg-white shadow-md shadow-white border-slate-900 top-12 right-0 px-10 py-4">
              <h3 className="cursor-pointer hover:text-blue-500">
                Information
              </h3>
              <hr />
              <h3 className="cursor-pointer hover:text-blue-500">Setting</h3>
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
          <NavLink to="/login" className="">
            <Button content={"Đăng Nhập"} />
          </NavLink>
          <NavLink to="/register" className="">
            <Button content={"Đăng Ký"} />
          </NavLink>
        </div>
      );
    }
  };
  return <div className=" space-x-3">{renderContent()}</div>;
}
