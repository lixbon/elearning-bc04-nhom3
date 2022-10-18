import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import Style from "./coursedetailpage.module.css";
import { Rate } from "antd";
import Button from "../../Components/Button/Button";
import { addToCart } from "../../redux/slice/cartSlice";

export default function CourseDetailPage() {
  const [courseDetail, setcourseDetail] = useState({});
  const { courseid } = useParams();

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCourseDetail(courseid)
      .then((res) => {
        dispatch(setLoadingOFF());
        setcourseDetail(res.data);
        console.log(res);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const handleAddCourseToCart = (course) => {
    dispatch(addToCart(course));
  };
  const {
    biDanh,
    danhMucKhoaHoc,
    hinhAnh,
    luotXem,
    maKhoaHoc,
    maNhom,
    moTa,
    ngayTao,
    nguoiTao,
    soLuongHocVien,
    tenKhoaHoc,
  } = courseDetail;
  return (
    <div className="min-h-[80vh]">
      <div className={`${Style["coursedetailbanner"]} h-[500px]`}>
        <div className="max-w-layout mx-auto h-full flex">
          <div className="w-7/12 flex justify-start items-center px-10">
            <div className="border border-green-400 py-5 w-full rounded-2xl bg-gradient-to-r from-[#43ff64e6] to-[#43ff6480] flex flex-col justify-center space-y-4 pl-4">
              <h2 className="text-white mb-0 text-4xl">{tenKhoaHoc}</h2>
              <div className="flex items-center space-x-2">
                <h2 className="capitalize text-white text-xl mb-0">
                  course evaluation:
                </h2>
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <h2 className="mb-0 text-white text-xl">
                Views: <span className="text-yellow-400">{luotXem}</span>
              </h2>
              <div className="flex space-x-4">
                <Button className="text-white bg-slate-600 hover:bg-blue-500">
                  buy now
                </Button>
                <Button
                  className="text-white hover:bg-red-400"
                  onClick={() => {
                    handleAddCourseToCart(courseDetail);
                  }}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex items-center justify-center">
            <img src={hinhAnh} alt="" className="rounded-lg w-2/3" />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-layout mx-auto">
          <p className="text-xl">
            <span className="font-semibold"> Description: </span>
            <span className="text-lg">{moTa}</span>
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Date: </span>
            <span className="text-lg">{ngayTao}</span>
          </p>
          <p className="text-xl">
            <span className="font-semibold"> CourseID: </span>
            <span className="text-lg">{maKhoaHoc}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
