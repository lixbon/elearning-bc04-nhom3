import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { courseServ } from "../../services/courseService";

export default function CategoryPage() {
  const { categoryid } = useParams();
  const [courseList, setcourseList] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    courseServ
      .getCourseByCategory(categoryid)
      .then((res) => {
        setcourseList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryid]);
  const rednerCourseList = () =>
    courseList.map((course, index) => {
      return <CourseCard key={index} course={course} />;
    });
  return (
    <div className="pb-10 min-h-[80vh] space-y-10 relative dark:bg-darkcolor2">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-mobile lg:max-w-layout mx-auto">
          <h2 className="text-4xl text-white mb-0 uppercase py-4">
            {courseList[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </h2>
        </div>
      </div>
      <div className="max-w-mobile lg:max-w-layout mx-auto ">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4  lg:gap-10">
          {rednerCourseList()}
        </div>
      </div>
      <div className="hidden dark:flex absolute top-0 -left-32 w-96 h-96 bg-purple-400 filter blur-[150px] z-0"></div>
      <div className="hidden dark:flex absolute bottom-1/4 right-32 w-64 h-96 bg-red-500 filter blur-[200px] z-0"></div>
    </div>
  );
}
