import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingSlice";
import { courseServ } from "../../services/courseService";

export default function SearchPage() {
  const [courseList, setcourseList] = useState([]);
  const [errorResponse, seterrorResponse] = useState("");
  const [isFound, setisFound] = useState(false);
  const { value } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    courseServ
      .getCourseListSearch(value)
      .then((res) => {
        dispatch(setLoadingOFF());
        setisFound(true);
        setcourseList(res.data);
      })
      .catch((err) => {
        setisFound(false);
        dispatch(setLoadingOFF());
        seterrorResponse(err.response.data);
      });
  }, [value]);
  const renderCourseList = () =>
    courseList.map((course, index) => (
      <CourseCard key={index} course={course} />
    ));
  return (
    <div className="space-y-10 dark:bg-darkcolor2 relative pb-10">
      <div className="bg-gradient-to-r from-red-900 to-white">
        {" "}
        <div className="max-w-layout mx-auto py-4">
          <h2 className="text-4xl mb-0 text-white">Search</h2>
        </div>
      </div>
      <div className="max-w-layout mx-auto min-h-[80vh]">
        {isFound ? (
          <div className="grid grid-cols-4 gap-8">{renderCourseList()}</div>
        ) : (
          <div>
            <h2 className="text-center text-2xl">{errorResponse}</h2>
          </div>
        )}
      </div>
      <div className="hidden dark:flex absolute top-0 left-0 w-64 h-64 bg-purple-400 filter blur-[100px] z-0"></div>
      <div className="hidden dark:flex absolute bottom-1/4 -right-10 w-64 h-96 bg-red-400 filter blur-[100px] z-0"></div>
    </div>
  );
}
