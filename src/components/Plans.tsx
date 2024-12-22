import React from "react";
import Btn from "./Btn";
import PlanCard from "./PlanCard";

const Plans = () => {
  return (
    <div className="text-white flex flex-col items-center px-[100px]">
      <h1 className="font-extrabold text-3xl capitalize mb-10">
        Choose the best plan
      </h1>
      <p className=" text-lg">
        Choose a plan that's right for your growing team. Simple pricing & No
        hidden charges.
      </p>

      <div className="flex border-[#ee3322] border-[1px] rounded-3xl overflow-hidden text-xl my-8">
        <Btn name="Monthly" className="bg-[#ee3322] rounded-3xl p-2 px-7" />
        <Btn name="Annually" className="rounded-3xl p-2 px-7 " />
      </div>

      <div className="flex w-full items-center justify-center gap-10">
        <PlanCard type="Discover" cost="99" />
        <PlanCard
          type="Enterprise"
          cost="299"
          types="Enterprise"
          className="bg-orange-600"
        />
        <PlanCard type="Professional" cost="199" />
      </div>
    </div>
  );
};

export default Plans;
