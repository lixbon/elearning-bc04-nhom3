import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import _ from "lodash";
import Button from "../../Components/Button/Button";
import { courseServ } from "../../services/courseService";
import { message } from "antd";
import { CourseRegisterInfo } from "../../Model/CourseRegisterInfo";
import { removeFromWatchlist } from "../../redux/slice/watchlistSlice";
import { useNavigate } from "react-router-dom";

export default function WatchListPage() {
  let { watchlist } = useSelector((state) => {
    return state.watchlistSlice;
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleCourseRegister = (courseid) => {
    const registerInfo = new CourseRegisterInfo();
    registerInfo.maKhoaHoc = courseid;
    registerInfo.taiKhoan = "string";
    courseServ
      .postCourseRegister(registerInfo)
      .then((res) => {
        message.success(res.data);
        dispatch(removeFromWatchlist(courseid));
        navigate("/studying");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
  };
  const handleRemoveCourseFromWatchList = (maKhoaHoc) => {
    dispatch(removeFromWatchlist(maKhoaHoc));
  };
  const renderWatchlist = () =>
    watchlist?.map(
      ({ hinhAnh, maKhoaHoc, moTa, ngayTao, tenKhoaHoc }, index) => (
        <div
          key={index}
          className="grid grid-cols-10 border border-slate-400 divide-x divide-slate-400"
        >
          <div className="h-full flex items-center col-span-1 pl-2">
            <img src={hinhAnh} alt="" className="w-20" />
          </div>
          <div className="col-span-2 flex flex-col justify-center p-2">
            <h3 className="mb-0 dark:text-white">
              Name: <span className="text-blue-500">{tenKhoaHoc}</span>
            </h3>

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
          <div className="col-span-6 flex justify-start items-center px-2 dark:text-white">
            <p>{_.truncate(moTa, { length: "500" })}</p>
          </div>
          <div className="col-span-1 flex justify-center items-center py-4">
            <div className="flex flex-col space-y-1">
              <Button
                onClick={() => {
                  handleCourseRegister(maKhoaHoc);
                }}
              >
                Register
              </Button>
              <Button
                onClick={() => {
                  handleRemoveCourseFromWatchList(maKhoaHoc);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      )
    );
  return (
    <div className="pb-10 space-y-10 min-h-[80vh] dark:bg-darkcolor2 relative">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-layout mx-auto py-4">
          <h2 className="text-4xl mb-0 text-white">WatchList</h2>
        </div>
      </div>
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1">{renderWatchlist()}</div>
      </div>
      <div className="hidden dark:flex absolute top-1/2 -left-32 w-96 h-96 bg-purple-400 filter blur-[150px] z-0"></div>
      <div className="hidden dark:flex absolute top-1/4 right-32 w-32 h-32 bg-red-500 filter blur-[150px] z-0"></div>
    </div>
  );
}
