"use client";

import React, { useState } from "react";
import Btn from "./Btn";
import { GiCheckMark } from "react-icons/gi";

const benefits = [
  {
    name: "5 classes per month",
    plans: ["Discover"],
  },
  {
    name: "10 classes per month",
    plans: ["Enterprise"],
  },
  {
    name: "7 classes per month",
    plans: ["Professional"],
  },
  {
    name: "4 group class monthly",
    plans: ["Discover"],
  },
  {
    name: "8 group class monthly",
    plans: ["Enterprise"],
  },
  {
    name: " 6 group class monthly",
    plans: ["Professional"],
  },
  {
    name: " online class access",
    plans: ["Enterprise", "Professional", "Discover"],
  },
  {
    name: "E-book fitness guide",
    plans: ["Enterprise", "Professional", "Discover"],
  },
  {
    name: "7 extra fitness training",
    plans: ["Enterprise"],
  },
];

type CardProps = {
  type?: string;
  cost?: string;
  className?: string;
  types?: string;
};

const PlanCard: React.FC<CardProps> = ({ type, cost, className, types }) => {
  return (
    <div
      className={`w-[30%] bg-[#3d3d3d] ${className} flex flex-col items-center justify-center rounded-2xl pb-10`}
    >
      <h1 className=" text-xl my-5">{type}</h1>

      <p className="text-[45px] font-bold my-3">
        $ {cost} / <span className="text-xl font-normal">Per Month</span>
      </p>

      <ul className="my-6">
        {benefits
          .filter((benefit) => benefit.plans.includes(type || ""))
          .map((benefit, index) => (
            <li
              key={index}
              className="text-white text-lg my-2 flex items-center gap-2"
            >
              <GiCheckMark />
              {benefit.name}
            </li>
          ))}
      </ul>

      {types == "Enterprise" ? (
        <Btn
          name="Choose Plan"
          className="text-lg font-normal rounded-3xl border-[1px] p-2 px-6 mt-10 bg-white text-black"
        />
      ) : (
        <Btn
          name="Choose Plan"
          className="text-lg rounded-3xl border-[1px] p-2 px-6 mt-10 font-normal"
        />
      )}
    </div>
  );
};

export default PlanCard;
