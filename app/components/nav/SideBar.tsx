import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];

const SideBar = () => {
  return (
    <div className="col-span-2">
      <div className="flex  flex-col  h-screen sticky inset-0 py-5 px-10 bg-black/30 text-gray-50">
        <Logo />
        {NAV_LINKS.map((navlink) => (
          <NavLink navlink={navlink} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
