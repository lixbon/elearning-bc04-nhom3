import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";

export default function CategoryPage() {
  const { categoryid } = useParams();
  const [courseList, setcourseList] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCourseByCategory(categoryid)
      .then((res) => {
        dispatch(setLoadingOFF());
        setcourseList(res.data);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const rednerCourseList = () =>
    courseList.map((course, index) => {
      return <CourseCard key={index} course={course} />;
    });
  return (
    <div className="pb-10 min-h-[80vh] space-y-10">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-layout mx-auto py-4">
          <h2 className="text-4xl text-white mb-0 uppercase">
            {courseList[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </h2>
        </div>
      </div>
      <div className="max-w-layout mx-auto ">
        <div className="grid grid-cols-4 gap-10">{rednerCourseList()}</div>
      </div>
    </div>
  );
}
