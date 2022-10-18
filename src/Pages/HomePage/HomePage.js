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
      <div className="max-w-layout mx-auto h-full">
        <div className="hidden lg:flex justify-between ">
          {categoryList.map(({ tenDanhMuc, maDanhMuc }, index) => (
            <div
              key={index}
              className="flex items-center p-4 hover:border hover:shadow-lg hover:shadow-black duration-200 cursor-pointer group"
              onClick={() => {
                handleGoCategoryPage(maDanhMuc);
              }}
            >
              <span className="mr-1 text-sm font-semibold group-hover:text-blue-500 duration-200">
                {tenDanhMuc}
              </span>
              <MdDoubleArrow
                size={20}
                className="group-hover:rotate-180 group-hover:text-blue-500 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="pb-10">
      <div className="w-full border border-gray-200">
        {renderCatalogeList()}
      </div>
      <div className="max-w-layout mx-auto space-y-4">
        <img src={HomeBanner} alt="" className="w-full h-full" />
        <h2 className="font-bold text-3xl ">Top courses in Development</h2>
        <CourseList />
      </div>
    </div>
  );
}
