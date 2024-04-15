import React from "react";
import searchIcon from "../../asset/img/searchIcon.svg";
import chattingIcon from "../../asset/img/chattingIcon.svg";
import alarmIcon from "../../asset/img/alarmIcon.svg";
import testProfile from "../../asset/img/test profile.png";

const Header = () => {
  const onClick = () => {
    alert("hello!");
  };

  return (
    <div className="flex items-center justify-around pl-[3rem] pr-[1rem] w-[94.5rem] h-[4rem]">
      <div className="relative">
        <img src={searchIcon} className="absolute -left-3 hover:cursor-pointer" />
        <input placeholder="search projects" className="px-6 w-[40rem] h-[2rem] outline-none" autoComplete="false" spellCheck="false" />
      </div>
      <div className="flex justify-center items-center w-[12rem] h-[2.5rem] bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg hover:cursor-pointer" onClick={onClick}>
        <p className="font-semibold text-white">make project</p>
      </div>
      <img src={chattingIcon} />
      <img src={alarmIcon} />
      <div className="w-0.5 h-[3rem] bg-slate-400"></div>
      <div className="flex items-center w-[10rem]">
        <img className="mr-5 w-[2.5rem] h-[2.5rem] rounded-full" src={testProfile} />
        <p>Test User</p>
      </div>
    </div>
  );
};

export default Header;
