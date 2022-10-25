import { FaFacebook, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiZalo } from "react-icons/si";
export const sociallist = [
  {
    id: 1,
    child: (
      <>
        Zalo <SiZalo size={30} className="text-green-500" />
      </>
    ),
    href: "https://zalo.me/0961051014",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Facebook <FaFacebook size={30} className="text-blue-500" />
      </>
    ),
    href: "https://www.facebook.com/lophocviet/",
    style: "",
  },
  {
    id: 3,
    child: (
      <>
        YouTube <FaYoutube size={30} className="text-red-500" />
      </>
    ),
    href: "https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ",
    style: "",
  },
  {
    id: 4,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:info@cybersoft.edu.vn",
    style: "rounded-br-md",
  },
];
export const sociaiconllist = [
  {
    id: 1,
    child: <SiZalo size={30} className="text-green-500" />,
    href: "https://zalo.me/0961051014",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: <FaFacebook size={30} className="text-blue-500" />,
    href: "https://www.facebook.com/lophocviet/",
    style: "",
  },
  {
    id: 3,
    child: <FaYoutube size={30} className="text-red-500" />,
    href: "https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ",
    style: "",
  },
  {
    id: 4,
    child: <HiOutlineMail size={30} />,
    href: "mailto:info@cybersoft.edu.vn",
    style: "rounded-br-md",
  },
];
