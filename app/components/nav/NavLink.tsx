"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TNavLinkProps = {
  navlink: {
    link: string;
    label: string;
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  };
};

const NavLink = ({ navlink }: TNavLinkProps) => {
  const { link, label, icon } = navlink;
  const pathName = usePathname();
  const isActive = pathName === link;

  return (
    <Link
      href={link}
      className={`flex ${
        isActive ? "text-rose-400" : "text-gray-50"
      } hover:text-rose-400 my-2 gap-2 items-center duration-200 p-2 rounded-md`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      {label}
    </Link>
  );
};

export default NavLink;
