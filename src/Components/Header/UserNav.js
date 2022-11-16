import React from "react";
import { Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { localServ } from "../../services/AdminServices/localService";

export default function UserNav() {
  let user = localServ.user.get();
  const handleLogOut = () => {
    localServ.user.remove();
    window.location.href = "/";
  };

  let renderUserNav = () => {
    if (user) {
      return (
        <div className="space-x-5 flex items-center">
          <Space className="cursor-pointer 2xl:text-4xl text-3xl font-bold">
            <UserOutlined className="mb-2" />
            {user.hoTen}
          </Space>
          <button
            onClick={() => {
              handleLogOut();
            }}
            className="bg-gray-500 duration-200 hover:bg-gray-700 px-2 py-1 md:!px-4 md:!py-2 2xl:!px-6 2xl:!py-4 rounded font-bold text-white 2xl:text-xl"
          >
            Sign Out
          </button>
        </div>
      );
    }
  };
  return <div>{renderUserNav()}</div>;
}
