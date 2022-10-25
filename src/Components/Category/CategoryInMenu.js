import React, { useState } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CategoryInMenu({ nav, setNav }) {
  const [isOpen, setisOpen] = useState(false);
  const handleSetisOpenCategory = () => {
    setisOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleGoCategoryPage = (categoryid) => {
    navigate(`/category/${categoryid}`);
  };
  let { categoryList } = useSelector((state) => {
    return state.categorySlice;
  });
  const renderCatalogeInMenu = () => (
    <div className="w-full">
      <div className="flex justify-between " onClick={handleSetisOpenCategory}>
        <RiArrowDropLeftLine
          size={30}
          className={
            `duration-200 ` +
            " " +
            (isOpen ? "-rotate-90 text-blue-500" : "rotate-0")
          }
        />
        <p
          className={
            `duration-200 font-semibold` + " " + (isOpen ? "text-blue-500" : "")
          }
        >
          Category
        </p>
      </div>

      <div
        className={
          `flex flex-col  duration-200 overflow-hidden divide-y divide-blue-400` +
          " " +
          (isOpen ? "h-full" : "h-0")
        }
      >
        {categoryList.map(({ tenDanhMuc, maDanhMuc }, index) => (
          <div
            key={index}
            className="w-full hover:text-blue-500 cursor-pointer duration-200 group"
            onClick={() => {
              handleGoCategoryPage(maDanhMuc);
              setNav(!nav);
            }}
          >
            <span className="text-sm xs:text-base group-hover:font-semibold duration-200">
              {tenDanhMuc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  return <div className="flex lg:hidden">{renderCatalogeInMenu()}</div>;
}
