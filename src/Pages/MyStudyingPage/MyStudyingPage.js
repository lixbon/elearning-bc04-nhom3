import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button/Button";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import { userServ } from "../../services/userService";
import moment from "moment";
import _ from "lodash";
import { CourseRegisterInfo } from "../../Model/CourseRegisterInfo";
import { setMessageOn } from "../../redux/slice/messageSlice";

export default function MyStudyingPage() {
  const [userInfo, setuserInfo] = useState([]);
  const [check, setcheck] = useState(true);

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
  }, [check]);
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
      ({ danhGia, hinhAnh, maKhoaHoc, moTa, ngayTao, tenKhoaHoc }, index) => (
        <div
          key={index}
          className="grid grid-cols-10 border border-slate-400  divide-x divide-slate-400"
        >
          <div className="h-full flex items-center col-span-1 pl-2">
            <img src={hinhAnh} alt="" className="w-20" />
          </div>
          <div className="col-span-2 flex flex-col justify-center p-2">
            <h3 className="mb-0 dark:text-white">
              Name: <span className="text-blue-500">{tenKhoaHoc}</span>
            </h3>
            <div className="flex items-center">
              <h3 className="mb-0 dark:text-white">Rate:</h3>
              <div className="hidden lg:flex">
                <Rate
                  disabled
                  defaultValue={danhGia / 2}
                  className="relative bottom-1 z-0 border-hidden"
                  style={{ fontSize: 18 }}
                />
              </div>
              <div className="flex lg:hidden">
                <Rate
                  disabled
                  defaultValue={danhGia / 2}
                  className="relative bottom-1 z-0"
                  style={{ fontSize: 14 }}
                />
              </div>
            </div>
            <h3 className="mb-0 dark:text-white">
              Date:{" "}
              <span className="text-blue-500">
                {moment(ngayTao).format("hh:mm - DD/MM/YYYY")}
              </span>
            </h3>
            <h3 className="mb-0 dark:text-white">
              CourseID: <span className="text-blue-500">{maKhoaHoc}</span>
            </h3>
          </div>
          <div className="col-span-5 lg:col-span-6 flex justify-start items-center dark:text-white px-2">
            <p className="block lg:hidden">
              {_.truncate(moTa, { length: "200" })}
            </p>
            <p className="hidden lg:block">
              {_.truncate(moTa, { length: "500" })}
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center justify-center z-0">
            <Button
              onClick={() => {
                handleCourseRemove(maKhoaHoc);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      )
    );
  const handleCourseRemove = (courseid) => {
    const registerInfo = new CourseRegisterInfo();
    registerInfo.maKhoaHoc = courseid;
    registerInfo.taiKhoan = "string";
    courseServ
      .postCourseRemove(registerInfo)
      .then((res) => {
        dispatch(setMessageOn(res.data));
        setcheck(!check);
      })
      .catch((err) => {
        console.log(err);
        dispatch(setMessageOn(err.response.data));
      });
  };
  return (
    <div className="min-h-[80vh] pb-10 dark:bg-darkcolor2 space-y-10 relative">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-mobile lg:max-w-layout mx-auto py-4">
          <h2 className="text-4xl mb-0 text-white">My Learning</h2>
        </div>
      </div>
      <div className="mx-auto max-w-mobile lg:max-w-layout">
        <div>
          <div className="grid grid-cols-1">{renderRegistedCourse()}</div>
        </div>
      </div>
      <div className="hidden dark:flex absolute top-0 left-0 w-64 h-64 bg-purple-400 filter blur-[150px] z-0"></div>
      <div className="hidden dark:flex absolute bottom-0 right-0 w-64 h-96 bg-red-500 filter blur-[200px] z-0"></div>
    </div>
  );
}
