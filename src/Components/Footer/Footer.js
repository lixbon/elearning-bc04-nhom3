import React from "react";
import Cyberlogo from "../../assets/img/cyberlogo.png";
import { HiLocationMarker } from "react-icons/hi";
import { adress } from "./footerUtils";
import IframeFaceBook from "./IframeFaceBook";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <div className="py-4 bg-slate-900 z-10">
      <div className="max-w-layout mx-auto space-y-2">
        <div className="grid grid-cols-3">
          <div className="space-y-4">
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
          <div>
            <h3 className="text-white uppercase text-xl">
              Sign up for a consultation
            </h3>
            <div className="pr-10 space-y-4">
              <form className="flex flex-col space-y-2">
                <input placeholder="Name" type="text" className="h-8" />
                <input placeholder="Email" type="text" className="h-8" />
                <input placeholder="Phone Number" type="text" className="h-8" />
              </form>
              <div className="flex justify-center">
                <Button className="text-white">Register</Button>
              </div>
            </div>
          </div>
          <IframeFaceBook />
        </div>
        <hr style={{ border: "2px solid gray" }} />
        <h3 className="text-white mb-0 text-center">
          © Copyright CyberSoft 2017 - 2021 - Empower by CyberSoft
        </h3>
      </div>
    </div>
  );
}
