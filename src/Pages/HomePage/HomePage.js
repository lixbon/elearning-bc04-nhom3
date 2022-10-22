import React from "react";
import HomeBanner from "../../assets/img/banner/banner4.jpg";
import CourseList from "./CourseList";
import Category from "../../Components/Category/Category";

export default function HomePage() {
  return (
    <div className="pb-10 dark:bg-darkcolor2">
      <div className="hidden lg:block">
        <Category />
      </div>
      <div className=" space-y-4">
        <div className="max-w-mobile lg:max-w-layout mx-auto">
          <img src={HomeBanner} alt="" className="w-full h-full" />
        </div>
        <CourseList />
      </div>
    </div>
  );
}
