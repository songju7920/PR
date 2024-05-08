import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/credits");
  };

  return (
    <div className="flex justify-end items-center px-[1.5rem] w-full h-[10rem]">
      <a onClick={onClick} className="text-gray2 hover:cursor-pointer">
        developer & contributers
      </a>
    </div>
  );
};

export default Footer;
