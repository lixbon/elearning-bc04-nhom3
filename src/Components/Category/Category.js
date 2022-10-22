import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import { MdDoubleArrow } from "react-icons/md";
import { RiArrowDropLeftLine } from "react-icons/ri";

export default function Category({ nav, setNav }) {
  const [categoryList, setcategoryList] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCategoryList()
      .then((res) => {
        dispatch(setLoadingOFF());
        setcategoryList(res.data);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const handleGoCategoryPage = (categoryid) => {
    navigate(`/category/${categoryid}`);
  };
  const handleSetisOpenCategory = () => {
    setisOpen(!isOpen);
  };
  const renderCatalogeList = () => {
    return (
      <div className="w-full border border-gray-200 dark:bg-darkcolor1 dark:border-0">
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
  const renderCatalogeListMobile = () => (
    <div className="w-full">
      <div className="flex justify-between" onClick={handleSetisOpenCategory}>
        <RiArrowDropLeftLine
          size={30}
          className={
            `duration-200 ` +
            " " +
            (isOpen ? "-rotate-90 text-blue-500" : "rotate-0")
          }
        />
        <h3 className={`duration-200 ` + " " + (isOpen ? "text-blue-500" : "")}>
          Category
        </h3>
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
            <span className="text-lg group-hover:font-semibold duration-200">
              {tenDanhMuc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <div className="hidden lg:flex">{renderCatalogeList()}</div>
      <div className="flex lg:hidden">{renderCatalogeListMobile()}</div>
    </div>
  );
}
