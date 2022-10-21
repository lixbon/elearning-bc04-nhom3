import React from "react";
import Cyberlogo from "../../assets/img/cyberlogo.png";
import { HiLocationMarker } from "react-icons/hi";
import { adress } from "./footerUtils";
import IframeFaceBook from "./IframeFaceBook";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <div className="py-4 bg-slate-900 z-10">
      <div className="max-w-mobile lg:max-w-layout mx-auto space-y-2">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-0 lg:grid-cols-3">
          <div className="space-y-4 col-span-1">
            <div>
              <div className="flex items-center">
                <img src={Cyberlogo} alt="" />
                <h3 className="text-yellow-400 uppercase text-2xl mb-0">
                  CyberSoft
                </h3>
              </div>
              <h3 className="text-white mb-0">
                CyberSoft Academy-System of intensive programming training
                according to actual projects
              </h3>
            </div>
            <div className="space-y-1">
              {adress.map(({ id, adress }) => (
                <p key={id} className="mb-0 flex items-center text-white">
                  <HiLocationMarker /> {adress}
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center md:justify-end lg:justify-center ">
            <IframeFaceBook />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-white uppercase text-xl text-center">
              Sign up for a consultation
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <form className="flex flex-col space-y-4 w-full md:w-2/3 lg:w-full">
                <input placeholder="Name" type="text" className="h-8" />
                <input placeholder="Email" type="text" className="h-8" />
                <input placeholder="Phone Number" type="text" className="h-8" />
              </form>
              <div className="flex justify-center">
                <Button className="text-white">Register</Button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "2px solid gray" }} />
        <h3 className="text-white mb-0 text-center">
          © Copyright CyberSoft 2017 - 2021 - Empower by CyberSoft
        </h3>
      </div>
    </div>
  );
}
