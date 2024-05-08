import React, { MouseEventHandler } from "react";

interface props {
  major: string;
  clickFunc: MouseEventHandler;
}

const DropdownMenu = (prop: props) => {
  const { major, clickFunc } = prop;
  return (
    <div onClick={clickFunc} className="my-[0.5rem] px-[1rem] py-[0.2rem] transition transform hover:cursor-pointer hover:bg-gray-100 hover:font-bold  ease-in-out:1s">
      {major}
    </div>
  );
};

export default DropdownMenu;
