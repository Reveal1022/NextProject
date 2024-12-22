import React from "react";
import Btn from "./Btn";
import { IoIosArrowRoundForward } from "react-icons/io";

type CardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
};

const ProgramCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-5 w-[24%] bg-[#3d3d3d] p-7 rounded-xl ${className}`}
    >
      <i className="text-[50px] ">{icon}</i>
      <h1 className="capitalize text-xl font-bold">{title}</h1>
      <p className="text-lg text-justify">{description}</p>
      <Btn
        name="Learn More"
        className=" flex-row-reverse justify-end "
        icon={<IoIosArrowRoundForward className="text-xl " />}
      />
    </div>
  );
};

export default ProgramCard;
