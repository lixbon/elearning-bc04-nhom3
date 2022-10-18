import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../Components/CourseCard/CourseCard";

export default function WatchListPage() {
  let { watchlist } = useSelector((state) => {
    return state.watchlistSlice;
  });
  const renderCourseInCart = () =>
    watchlist.map((course, index) => (
      <CourseCard key={index} course={course} />
    ));

  return (
    <div className="pb-10 space-y-10 min-h-[80vh]">
      <div className="bg-gradient-to-r from-red-900 to-white">
        <div className="max-w-layout mx-auto py-4">
          <h2 className="text-4xl mb-0 text-white">WatchList</h2>
        </div>
      </div>
      <div className="max-w-layout mx-auto ">
        <div className="grid grid-cols-4 gap-10">{renderCourseInCart()}</div>
      </div>
    </div>
  );
}
