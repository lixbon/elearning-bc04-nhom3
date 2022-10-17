import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function BaseLayout({ Component }) {
  return (
    <div className="">
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
