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
    <div className="relative">
      <div className="max-w-mobile lg:max-w-layout mx-auto">
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl dark:text-white ">
          Top courses in Development
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4  lg:gap-10">
          {showAllCourse
            ? renderCourseList(courseList.length)
            : renderCourseList(8)}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button
            onClick={handleShowAllCourse}
            className="hover:bg-blue-400 hover:text-white border-blue-400 dark:text-white"
          >
            {showAllCourse ? "View Less" : "View More"}
          </Button>
        </div>
        <div className="hidden dark:flex absolute top-0 -left-32 w-96 h-96 bg-purple-400 filter blur-[150px] z-0"></div>
        {showAllCourse ? (
          <div className="hidden dark:flex absolute top-1/2 left-1/4 w-96 h-96 bg-green-600 filter blur-[300px] z-0"></div>
        ) : (
          <></>
        )}
        <div className="hidden dark:flex absolute bottom-0 -right-32 w-96 h-96 bg-red-500 filter blur-[200px] z-0"></div>
      </div>
    </div>
  );
}
