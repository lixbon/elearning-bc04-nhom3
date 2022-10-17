import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function BaseLayout({ Component }) {
  return (
    <div className="">
      <Header />
      <div className="pt-20">
        <Component />
      </div>
      <Footer />
    </div>
  );
}
