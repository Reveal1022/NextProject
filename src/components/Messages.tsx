import React from "react";
import MessageCard from "./MessageCard";
import { VscStarHalf } from "react-icons/vsc";

const customers = [
  { id: 1, image: "/customers/cus1.jpg" },
  { id: 2, image: "/customers/cus2.jpg" },
  { id: 3, image: "/customers/cus3.jpg" },
  { id: 4, image: "/customers/cus4.jpeg" },
  { id: 5, image: "/customers/plus.png" },
];

const Messages = () => {
  return (
    <div className="flex justify-between text-white px-[100px] relative pb-32">
      <div className="flex flex-col w-[30%] gap-5">
        <h1 className="font-bold text-3xl capitalize">
          what our happy clients say about us
        </h1>

        <p>
          I've been a member of Fitnesxia within for about 6 months now and I
          absolutely love it! The trainers are so motivating and they really
          help to reach fitness goals.
        </p>

        <div className="flex relative">
          {customers?.map((customer, index) => {
            return (
              <div
                key={customer.id}
                className={`w-[40px] h-[40px] rounded-full absolute`}
                style={{
                  left: `${index * 25}px`, // Adjust overlap; 30px is for partial visibility
                  zIndex: index,
                }}
              >
                <img
                  src={customer.image}
                  alt="no image"
                  className="w-[60px] rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <MessageCard
          name="Farhan Rio"
          image="/customers/cus3.jpg"
          message="I've been a member of Fitnesxia within for about 6 months now and I
          absolutely love it! The trainers are so motivating and they really
          help to reach fitness goals."
        />
      </div>

      <img
        src="/arrow.png"
        alt="no"
        className="absolute bottom-5 left-[50%] w-[200px]  "
      />

      <div className="absolute text-[#757575] flex items-center font-bold text-xl bottom-20 gap-2 ">
        <VscStarHalf className="text-2xl" /> TrustPilot
      </div>
    </div>
  );
};

export default Messages;
