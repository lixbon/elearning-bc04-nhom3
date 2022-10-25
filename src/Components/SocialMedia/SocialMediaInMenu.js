import React from "react";
import { sociaiconllist } from "./SocialMediaUtils";

const SocialMediaInMenu = () => {
  return (
    <ul className="flex space-x-6">
      {sociaiconllist.map(({ id, child, href, style }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center duration-300" + " " + style
          }
        >
          <a
            className="flex justify-between items-center w-full text-lg"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaInMenu;
