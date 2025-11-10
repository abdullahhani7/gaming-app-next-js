import Link from "next/link";
import React from "react";

type TNavLinkProps = {
  navlink: { link: string; label: string; icon: React.ReactNode };
};

const NavLink = ({ navlink }: TNavLinkProps) => {
  return <Link href={navlink.link} >NavLink</Link>;
};

export default NavLink;
