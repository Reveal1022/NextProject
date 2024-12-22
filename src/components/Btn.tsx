"use client";

import React from "react";

type btnprops = {
  name?: string;
  className?: string;
  icon?: React.ReactNode;
};

const Btn: React.FC<btnprops> = ({ name, className, icon }) => {
  return (
    <button
      className={`text-white text-[15px] font-medium ${className} flex items-center `}
    >
      {icon && <span className="mr-2">{icon}</span>} {name}
    </button>
  );
};

export default Btn;
