import React from "react";
import Navbar from "./Navbar";
import Btn from "./Btn";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src="logo1.png" alt="" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
