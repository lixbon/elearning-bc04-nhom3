import React from "react";
import { Menu, Space, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { localServ } from "../../services/AdminServices/localService";

export default function UserNav() {
  let user = localServ.user.get();
  const handleLogOut = () => {
    localServ.user.remove();
    window.location.href = "/";
  };

  const menu1 = (
    <Menu
      items={[
        {
          label: (
            <span
              onClick={() => {
                handleLogOut();
              }}
              className="font-bold sm:text-base text-sm"
            >
              Sign out
            </span>
          ),
          key: "signOut",
        },
      ]}
    />
  );

  let renderUserNav = () => {
    if (user) {
      return (
        <div className="space-x-5 flex items-center">
          <Dropdown
            overlay={menu1}
            className="2xl:text-4xl lg:text-3xl text-xl font-bold"
          >
            {user.hoTen.length < 6 ? (
              <Space type="button">
                <UserOutlined className="mb-2" />
                {user.hoTen}
                <ChevronDownIcon
                  className="h-7 w-7 text-gray-700"
                  aria-hidden="true"
                />
              </Space>
            ) : (
              <Space type="button">
                <UserOutlined className="mb-2" />
                <span>{user.hoTen.slice(0, 6)}...</span>
                <ChevronDownIcon
                  className="h-7 w-7 text-gray-700"
                  aria-hidden="true"
                />
              </Space>
            )}
          </Dropdown>
          {/* <Space className="cursor-pointer 2xl:text-4xl lg:text-3xl text-xl font-bold">
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
          </button> */}
        </div>
      );
    }
  };
  return <div>{renderUserNav()}</div>;
}
