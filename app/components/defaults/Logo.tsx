import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="font-semibold my-2 flex gap-2 text-xl lg:text-2xl  ">
      <h1 className="text-rose-500">Gaming</h1>
      <span>Boi</span>
    </Link>
  );
};

export default Logo;
