import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button/Button";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import { userServ } from "../../services/userService";
import moment from "moment";
import _ from "lodash";

export default function MyStudyingPage() {
  const [userInfo, setuserInfo] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    userServ
      .getUserInfo()
      .then((res) => {
        dispatch(setLoadingOFF());
        setuserInfo(res.data);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const {
    chiTietKhoaHocGhiDanh,
    email,
    hoTen,
    maLoaiNguoiDung,
    matKhau,
    soDT,
    taiKhoan,
  } = userInfo;
  const renderRegistedCourse = () =>
    chiTietKhoaHocGhiDanh?.map(
      (
        {
          biDanh,
          danhGia,
          hinhAnh,
          maKhoaHoc,
          luotXem,
          moTa,
          ngayTao,
          tenKhoaHoc,
        },
        index
      ) => (
        <div
          key={index}
          className="grid grid-cols-10 border border-slate-400 h-28 divide-x divide-slate-400"
        >
          <div className="h-full flex items-center col-span-1 pl-2">
            <img src={hinhAnh} alt="" className="w-20" />
          </div>
          <div className="col-span-2 flex flex-col justify-center p-2">
            <h3 className="mb-0">
              Name: <span className="text-blue-500">{tenKhoaHoc}</span>
            </h3>
            <div className="flex items-center">
              <h3 className="mb-0">Rate:</h3>
              <Rate
                disabled
                defaultValue={danhGia / 2}
                className="relative bottom-1 -z-10"
              />
            </div>
            <h3 className="mb-0">
              Date:{" "}
              <span className="text-blue-500">
                {moment(ngayTao).format("hh:mm - DD/MM/YYYY")}
              </span>
            </h3>
          </div>
          <div className="col-span-6 flex justify-start items-center">
            <p>{_.truncate(moTa, { length: "500" })}</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Button>Delete</Button>
          </div>
        </div>
      )
    );
  return (
    <div className="min-h-[80vh] pb-10">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-layout mx-auto py-4">
          <h2 className="text-4xl mb-0 text-white">My Learning</h2>
        </div>
      </div>
      <div className="mx-auto max-w-layout">
        <div>
          <div className="grid grid-cols-1">{renderRegistedCourse()}</div>
        </div>
      </div>
    </div>
  );
}
