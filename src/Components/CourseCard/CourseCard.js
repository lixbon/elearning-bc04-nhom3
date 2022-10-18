import React from "react";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  let navigate = useNavigate();
  const handleGoDetailCoursePage = (courseid) => {
    navigate(`/detail/${courseid}`);
  };
  const {
    biDanh,
    danhMucKhoaHoc,
    hinhAnh,
    luotXem,
    maKhoaHoc,
    maNhom,
    moTa,
    ngaoTao,
    nguoiTao,
    soLuongHocVien,
    tenKhoaHoc,
  } = course;
  return (
    <div
      className="border border-gray-200 p-4 rounded cursor-pointer hover:shadow-md shadow-black duration-200"
      onClick={() => {
        handleGoDetailCoursePage(maKhoaHoc);
      }}
    >
      <img src={hinhAnh} alt="" className="h-48 w-full" />
      <h3 className="font-bold text-lg">{tenKhoaHoc}</h3>
      <p className="truncate">{moTa}</p>
      <div className="flex items-center">
        <h4 className="mb-0">Views: </h4>
        <div className="text-blue-500 flex items-center space-x-2">
          <span className="font-bold">{luotXem} </span>
          <GrView className="text-yellow-400" size={15} />
        </div>
      </div>
    </div>
  );
}
