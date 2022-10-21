import React from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  let navigate = useNavigate();
  const handleGoDetailCoursePage = (courseid) => {
    navigate(`/detail/${courseid}`);
  };
  const { hinhAnh, luotXem, maKhoaHoc, moTa, tenKhoaHoc } = course;
  return (
    <div
      className="border border-gray-200 p-2 md:p-4 rounded cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-200 dark:glasscard dark:border-gray-600 "
      onClick={() => {
        handleGoDetailCoursePage(maKhoaHoc);
      }}
    >
      <img src={hinhAnh} alt="" className=" h-32 md:h-40 lg:h-48 w-full" />
      <h3 className="font-bold text-sm md:text-lg dark:text-white">
        {tenKhoaHoc}
      </h3>
      <p className="truncate text-sm dark:text-white">{moTa}</p>
      <div className="flex items-center space-x-1">
        <h4 className="mb-0 dark:text-white text-sm">Views: </h4>

        <div className="text-blue-500 flex items-center space-x-2">
          <span className="font-bold text-sm md:text-lg"> {luotXem} </span>
          <AiFillEye className="text-yellow-400" size={20} />
        </div>
      </div>
    </div>
  );
}
