import React from "react";
import Btn from "./Btn";
import { GoCheckCircleFill } from "react-icons/go";
import CalorieCard from "./CalorieCard";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoFitness } from "react-icons/io5";

const JoinUs = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[40%]">
        <h1 className="font-bold text-3xl capitalize my-5">
          why should people choose fitnesxia services
        </h1>
        <div>
          <Cards
            title="personal training"
            description="Our personal trainers can help you create a personalized fitness plan and track your progress."
          />
          <Cards
            title="expert training"
            description="Our gym is proud to offer a team of highly skilled and cetified trainer whi help achieve your health & fitness goals."
          />
          <Cards
            title="flexible time"
            description="There are many fitness classes that are offered during off-peak hours, such as early morning or late evening."
          />
        </div>
        <Btn
          name="Join Today"
          className="bg-[#ee3322] my-8 p-3 px-7 rounded-xl text-lg"
        />
      </div>

      <div className="bg-orange-500 rounded-full  relative">
        <img src="joinus.png" alt="" className="" />
        <div className="absolute top-20 right-[-30]">
          <CalorieCard title="70 bpm " sub="Heart Rate" icon={<IoFitness />} />
        </div>

        <div className="absolute bottom-20 left-[-30]">
          <CalorieCard
            title="24%"
            sub="Fat Burning"
            icon={<FaFireFlameCurved />}
          />
        </div>
      </div>
    </div>
  );
};

type Propss = {
  title: string;
  description: string;
};

const Cards: React.FC<Propss> = ({ title, description }) => {
  return (
    <>
      <h2 className="font-semibold capitalize flex items-center gap-2 py-3">
        <GoCheckCircleFill className="text-orange-500" /> {title}
      </h2>
      <p>{description}</p>
    </>
  );
};

export default JoinUs;
