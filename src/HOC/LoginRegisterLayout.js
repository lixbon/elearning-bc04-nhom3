import React from "react";
import Footer from "../Components/Footer/Footer";

export default function LoginRegisterLayout({ Component }) {
  return (
    <div className="">
      <Component />
      <Footer />
    </div>
  );
}
