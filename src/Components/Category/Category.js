import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Category() {
  const navigate = useNavigate();

  let { categoryList } = useSelector((state) => {
    return state.categorySlice;
  });
  const handleGoCategoryPage = (categoryid) => {
    navigate(`/category/${categoryid}`);
  };
  const renderCatalogeList = () => {
    return (
      <div className="w-full border border-gray-200 dark:bg-gradient-to-r from-darkcolor1 to-slate-700 dark:border-0">
        <div className="max-w-mobile lg:max-w-layout mx-auto h-full">
          <div className="flex justify-between ">
            {categoryList.map(({ tenDanhMuc, maDanhMuc }, index) => (
              <div
                key={index}
                className="flex items-center p-4 hover:shadow-lg hover:shadow-black duration-200 cursor-pointer group dark:shadow-white"
                onClick={() => {
                  handleGoCategoryPage(maDanhMuc);
                }}
              >
                <span className="mr-1 text-sm font-semibold group-hover:text-blue-500 duration-200 dark:text-white">
                  {tenDanhMuc}
                </span>
                <MdDoubleArrow
                  size={20}
                  className="group-hover:rotate-180 group-hover:text-blue-500 duration-500 dark:text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <div className="hidden lg:flex">{renderCatalogeList()}</div>;
}
