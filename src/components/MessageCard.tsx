import React from "react";
import Btn from "./Btn";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type MessageProps = {
  name: string;
  message: string;
  image: string;
};
const MessageCard: React.FC<MessageProps> = ({ name, message, image }) => {
  return (
    <div className="bg-[#3d3d3d] w-[550px] rounded-xl p-5 relative">
      <Btn
        icon={<BsArrowLeftCircleFill />}
        className="absolute top-[50%] left-[-10px] text-xl text-gray-300"
      />
      <Btn
        icon={<BsArrowRightCircleFill />}
        className="absolute top-[50%] right-[-15px] text-xl text-orange-700"
      />
      <div className="flex items-center gap-2">
        <img src={image} alt="no image" className="w-[50px] rounded-full" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="font-normal">Happy Customer</p>
        </div>
      </div>

      <ul className="my-3 flex text-yellow-300">
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
      </ul>

      <p className="mt-5 text-justify">{message}</p>
    </div>
  );
};

export default MessageCard;
