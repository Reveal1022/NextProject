"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  const companyLinks = ["About Us", "Why Us", "Security", "Partnership"];
  const Categories = [
    "Basic Yoga",
    "Strength Training",
    "Body Building",
    "Weight Loss",
  ];
  const Help = [
    "Account",
    "Support Center",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <div className="text-white bg-[#333437] px-[100px]">
      <div className="flex justify-between py-5">
        <div className=" flex w-[40%] items-center justify-between ">
          <Comp title="Company" links={companyLinks} />
          <Comp title="Categories" links={Categories} />
          <Comp title="Help" links={Help} />
        </div>
        <div className="flex">
          <div className="w-[40%]">
            <h1 className="font-bold text-xl my-5">Contact Us</h1>

            <ul className="flex flex-col gap-5 ">
              <li className="flex items-center gap-3 text-lg">
                <FaPhoneAlt className="text-3xl text-[#ee3322]" />
                <span>+1 (406) 555-0120</span>
              </li>
              <li className="flex items-center gap-3">
                <IoIosMail className="text-3xl text-[#ee3322]" />{" "}
                <span>example@email.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-3xl text-[#ee3322]" />{" "}
                <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Subscribe Our Newsletter</h1>

            <div className="flex overflow-hidden items-center bg-white rounded-3xl justify-between h-12 px-2">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="pl-3 focus:outline-none text-black w-[80%]"
              />
              <BsFillSendFill className="rounded-full bg-[#ee3322]  h-10 w-10 p-2 " />
            </div>

            <p className="text-lg">
              Never miss an update & news to your email.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-[#757575]" />
      <div className="flex items-center justify-between py-5 ">
        <img src="logo1.png" alt="logo" />

        <p className="text-lg text-[#757575]">
          @2023 DesignAxen. All Copyrights reserverd.
        </p>

        <div className="flex text-3xl gap-2  ">
          <div className="rounded-full bg-[#757575] overflow-hidden h-[40px] w-[40px] p-[5px]">
            <FaFacebook />
          </div>
          <div className="rounded-full bg-[#757575] overflow-hidden h-[40px] w-[40px] p-[5px]">
            <FaInstagramSquare />
          </div>
          <div className="rounded-full bg-[#757575] overflow-hidden h-[40px] w-[40px] p-[5px]">
            <BsTwitter />
          </div>
          <div className="rounded-full bg-[#757575] overflow-hidden h-[40px] w-[40px] p-[5px]">
            <LiaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

type CompProps = {
  title: string;
  links: string[];
};

const Comp: React.FC<CompProps> = ({ title, links }) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl my-3">{title}</h1>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index} className="text-lg">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
