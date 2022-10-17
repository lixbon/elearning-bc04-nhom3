import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";

export default function CourseList() {
  const [courseList, setcourseList] = useState([]);
  const [showAllCourse, setshowAllCourse] = useState(false);
  let handleShowAllCourse = () => {
    setshowAllCourse(!showAllCourse);
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCourseList()
      .then((res) => {
        dispatch(setLoadingOFF());
        setcourseList(res.data);
        console.log(res);
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const renderCourseList = (num) =>
    courseList.slice(0, num).map((course) => <CourseCard course={course} />);

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-8">
        {showAllCourse
          ? renderCourseList(courseList.length)
          : renderCourseList(8)}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          className="px-4 py-2 border border-blue-400 rounded-md font-semibold hover:bg-blue-400 hover:text-white duration-200"
          onClick={handleShowAllCourse}
        >
          {showAllCourse ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
