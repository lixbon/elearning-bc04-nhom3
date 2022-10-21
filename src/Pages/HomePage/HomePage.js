import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import { MdDoubleArrow } from "react-icons/md";
import HomeBanner from "../../assets/img/banner/banner4.jpg";
import CourseList from "./CourseList";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [categoryList, setcategoryList] = useState([]);
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
  const renderCatalogeList = () => {
    return (
      <div className="max-w-mobile lg:max-w-layout mx-auto h-full">
        <div className="hidden lg:flex justify-between ">
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
    );
  };
  return (
    <div className="pb-10 dark:bg-darkcolor2">
      <div className="w-full border border-gray-200 dark:bg-darkcolor1 dark:border-0">
        {renderCatalogeList()}
      </div>
      <div className=" space-y-4">
        <div className="max-w-mobile lg:max-w-layout mx-auto">
          <img src={HomeBanner} alt="" className="w-full h-full" />
        </div>
        <CourseList />
      </div>
    </div>
  );
}
