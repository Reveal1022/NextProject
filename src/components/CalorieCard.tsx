import React from "react";

type CardProps = {
  title: string;
  sub: string;
  icon?: React.ReactNode;
};

const CalorieCard: React.FC<CardProps> = ({ title, sub, icon }) => {
  return (
    <div className="flex items-center text-3xl text-black bg-white rounded-xl px-2 w-[200px] font-semibold gap-2">
      <i className="text-orange-600 h-[40px] w-[40px] ">{icon}</i>
      <div className="text-lg">
        <p>{title}</p>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default CalorieCard;
