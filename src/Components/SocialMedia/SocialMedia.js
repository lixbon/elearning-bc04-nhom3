import React from "react";

import { sociallist } from "./SocialMediaUtils";
const SocialMedia = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {sociallist.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-48 h-14 px-4 bg-gray-500  ml-[-130px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white text-lg"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
