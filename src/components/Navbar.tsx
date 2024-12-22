"use client";

import React from "react";
import Link from "next/link";
import Btn from "./Btn";

const Navbar = () => {
  return (
    <div className="">
      <ul className=" flex gap-5 text-white items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/program">Program</Link>
        </li>
        <li>
          <Link href="/membership">Membership</Link>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <div className="px-5">
          <Btn className="bg-[#ee3322] rounded-md px-5 py-1 " name="Sign Up" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
