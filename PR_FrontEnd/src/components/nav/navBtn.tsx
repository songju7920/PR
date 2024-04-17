import React from "react";

interface props {
  curruntPage: String;
  name: String;
  ActiveImg;
  DisabledImg;
  ClickEvent;
}

const NavBtn = (element: props) => {
  const { curruntPage, name, ActiveImg, DisabledImg, ClickEvent } = element;

  return (
    <div
      className={`flex items-center w-[15rem] h-[3rem] hover:cursor-pointer ${curruntPage === name ? "bg-gray3" : "bg-gray1"}`}
      onClick={() => {
        ClickEvent(name);
      }}
    >
      <img src={curruntPage === name ? ActiveImg : DisabledImg} className="ml-[2rem] mr-[1rem]" />
      <p className={`font-medium text-lg ${curruntPage === name ? "text-black" : "text-gray2"}`}>{name}</p>
      <div className={`absolute left-[15rem] w-2 h-[3rem] ${curruntPage === name ? "bg-purple1" : ""} rounded-r-xl`}></div>
    </div>
  );
};

export default NavBtn;
