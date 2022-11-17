import React from "react";
import { Tabs } from "antd";
import { BiUserCircle } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import EditUserForm from "./EditUserForm";
import { useSelector } from "react-redux";

export default function UserSettingPage() {
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  const { taiKhoan, email, soDt, maNhom, maLoaiNguoiDung, hoTen, matKhau } =
    user;
  return (
    <div className="min-h-[80vh] dark:bg-darkcolor2 space-y-10 pb-10">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-mobile lg:max-w-layout mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-0 text-white py-4">
            User Information
          </h2>
        </div>
      </div>
      <div className="max-w-mobile lg:max-w-layout mx-auto">
        <div className=" rounded-lg px-4 pb-10 glasscard relative">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane
              tab={
                <div className="flex items-center space-x-1 dark:text-white">
                  <BiUserCircle />
                  <span>User Information</span>
                </div>
              }
              key="1"
              label="123"
            >
              <div>
                <h4 className="dark:text-white">
                  Account:
                  <span className="text-red-500 dark:text-blue-500 ml-2 ">
                    {taiKhoan}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  Name:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {hoTen}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  Email:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {email}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  PhoneNumber:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {soDt}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  Password:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {matKhau}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  Group:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {maNhom}
                  </span>
                </h4>
                <h4 className="dark:text-white">
                  Account Type:
                  <span className="text-red-500 dark:text-blue-500 ml-2">
                    {maLoaiNguoiDung}
                  </span>
                </h4>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <div className="flex items-center space-x-1 dark:text-white ">
                  <FaUserEdit />
                  <span>Edit Information</span>
                </div>
              }
              key="2"
            >
              <EditUserForm user={user} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
      <div className="hidden dark:flex absolute top-1/2 -left-32 w-96 h-96 bg-purple-400 filter blur-[150px] z-0"></div>
      <div className="hidden dark:flex absolute top-0 right-0 w-64 h-64 bg-cyan-500 filter blur-[150px] z-0"></div>
    </div>
  );
}
