import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";
import Style from "./coursedetailpage.module.css";
import { Rate } from "antd";
import Button from "../../Components/Button/Button";
import { addToWatchlist } from "../../redux/slice/watchlistSlice";
import { CourseRegisterInfo } from "../../Model/CourseRegisterInfo";
import { setMessageOn } from "../../redux/slice/messageSlice";
import { localServ } from "../../services/localService";

export default function CourseDetailPage() {
  const [courseDetail, setcourseDetail] = useState({});
  const { courseid } = useParams();
  let navigate = useNavigate();
  let user = localServ.user.get();
  let { watchlist } = useSelector((state) => {
    return state.watchlistSlice;
  });

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCourseDetail(courseid)
      .then((res) => {
        dispatch(setLoadingOFF());
        setcourseDetail(res.data);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const renderAddToWatchlistButton = (course) => {
    let index = watchlist.findIndex((item) => {
      return courseid === item.maKhoaHoc;
    });
    if (index === -1) {
      return (
        <Button
          className="text-white bg-blue-500 hover:bg-red-500 text-xs xs:text-sm"
          onClick={() => {
            dispatch(addToWatchlist(course));
          }}
        >
          add to watchlist
        </Button>
      );
    }
  };
  const handleCourseRegister = () => {
    if (user) {
      const registerInfo = new CourseRegisterInfo();
      registerInfo.maKhoaHoc = courseid;
      registerInfo.taiKhoan = localServ.user.get().taiKhoan;
      dispatch(setLoadingON());
      courseServ
        .postCourseRegister(registerInfo)
        .then((res) => {
          dispatch(setMessageOn(res.data));
          dispatch(setLoadingOFF());
        })
        .catch((err) => {
          dispatch(setMessageOn(err.response.data));
          dispatch(setLoadingOFF());
        });
    } else {
      navigate("/login");
    }
  };
  const {
    hinhAnh,
    luotXem,
    maKhoaHoc,
    moTa,
    ngayTao,

    tenKhoaHoc,
  } = courseDetail;
  return (
    <div className="min-h-[80vh] dark:bg-darkcolor2">
      <div className={`${Style["coursedetailbanner"]} h-[500px]`}>
        <div className="max-w-mobile lg:max-w-layout mx-auto h-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-7/12 flex justify-start items-center px-0 lg:px-10">
            <div className="border border-green-400 py-5 w-full rounded-2xl bg-gradient-to-r from-[#43ff64e6] to-[#43ff6480] flex flex-col justify-center space-y-1 pl-4">
              <h2 className="text-white font-bold mb-0 text-lg xs:text-xl lg:text-2xl 2xl:text-4xl">
                {tenKhoaHoc}
              </h2>
              <div className="flex items-center space-x-2">
                <h2 className="capitalize text-white text-sm xs:text-lg lg:text-xl mb-0">
                  course evaluation:
                </h2>
                <div className="block xs:hidden">
                  <Rate allowHalf defaultValue={2.5} style={{ fontSize: 14 }} />
                </div>
                <div className="hidden xs:block">
                  <Rate allowHalf defaultValue={2.5} style={{ fontSize: 20 }} />
                </div>
              </div>
              <h2 className="mb-0 text-white text-sm xs:text-lg lg:text-xl">
                Views: <span className="text-yellow-400">{luotXem}</span>
              </h2>
              <div className="flex space-x-4 z-0">
                <Button
                  className="text-white bg-slate-600 hover:bg-red-500 text-xs xs:text-sm"
                  onClick={handleCourseRegister}
                >
                  register now
                </Button>
                {renderAddToWatchlistButton(courseDetail)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex items-center justify-center p-0 lg:p-4 overflow-hidden mb-4 md:mb-0">
            <div className="border border-white shadow-lg shadow-white rounded-2xl overflow-hidden w-full bg-[#0000001a]">
              <img src={hinhAnh} alt="" className="w-full max-h-96" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-mobile lg:max-w-layout mx-auto dark:text-white">
          <p className="text-lg md:text-xl">
            <span className="font-semibold"> Description: </span>
            <span className=" text-sm md:text-lg">{moTa}</span>
          </p>
          <p className="text-lg md:text-xl">
            <span className="font-semibold"> Date: </span>
            <span className="text-sm md:text-lg">{ngayTao}</span>
          </p>
          <p className="text-lg md:text-xl mb-0">
            <span className="font-semibold"> CourseID: </span>
            <span className="text-sm md:text-lg">{maKhoaHoc}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
