import React from "react";
import { SiMapbox } from "react-icons/si";
import { SiHubspot } from "react-icons/si";

const Partner = () => {
  return (
    <div className="flex items-center bg- justify-between text-white ">
      <div>
        <h1 className="text-3xl font-bold">970K+ More</h1>
        <p>Trusted Companies Partner</p>
      </div>

      <div className="flex gap-10">
        <img src="videoask.png" alt="" className="w-[190px] invert" />
        <img src="hubspot.png" alt="" className="w-[160px] " />
        <img src="mapbox.png" alt="" className="w-[180px] " />
      </div>
    </div>
  );
};

export default Partner;
