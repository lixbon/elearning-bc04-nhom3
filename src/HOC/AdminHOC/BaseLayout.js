import React from "react";
import Header from "../../Components/Header/Header";

export default function BaseLayout({ Component }) {
  return (
    <div className="">
      <Header />
      <Component />
    </div>
  );
}
