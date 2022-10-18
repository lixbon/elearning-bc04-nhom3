import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button/Button";
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
      })
      .catch((err) => {
        dispatch(setLoadingOFF());
        console.log(err);
      });
  }, []);
  const renderCourseList = (num) =>
    courseList
      .slice(0, num)
      .map((course, index) => <CourseCard key={index} course={course} />);

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-8">
        {showAllCourse
          ? renderCourseList(courseList.length)
          : renderCourseList(8)}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          onClick={handleShowAllCourse}
          className="hover:bg-blue-400 hover:text-white border-blue-400"
        >
          {showAllCourse ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
}
