import React from "react";
import { Tabs } from "antd";
import { BiUserCircle } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import EditUserForm from "./EditUserForm";

export default function UserSettingPage() {
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  const { taiKhoan, email, soDT, maNhom, maLoaiNguoiDung, hoTen, matKhau } =
    user;
  return (
    <div className="min-h-[80vh] space-y-10">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-mobile lg:max-w-layout mx-auto">
          <h2 className="text-4xl mb-0 text-white py-4">User Information</h2>
        </div>
      </div>
      <div className="max-w-mobile lg:max-w-layout mx-auto">
        <div className="border border-slate-800 rounded-lg px-4 pb-10">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane
              tab={
                <div className="flex items-center space-x-1">
                  <BiUserCircle />
                  <span>User Information</span>
                </div>
              }
              key="1"
              label="123"
            >
              <div>
                <h4>
                  Account: <span className="text-red-500">{taiKhoan}</span>
                </h4>
                <h4>
                  Name:
                  <span className="text-red-500">{hoTen}</span>
                </h4>
                <h4>
                  Email: <span className="text-red-500">{email}</span>
                </h4>
                <h4>
                  PhoneNumber: <span className="text-red-500">{soDT}</span>
                </h4>
                <h4>
                  Password: <span className="text-red-500">{matKhau}</span>
                </h4>
                <h4>
                  Group: <span className="text-red-500">{maNhom}</span>
                </h4>
                <h4>
                  Account Type:
                  <span className="text-red-500">{maLoaiNguoiDung}</span>
                </h4>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <div className="flex items-center space-x-1">
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
    </div>
  );
}
