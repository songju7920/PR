import React, { ChangeEventHandler, useState } from "react";
import openedEye from "../../asset/img/seeImg.svg";
import closedEye from "../../asset/img/notSeeImg.svg";

interface props {
  maxLength: number;
  placeHolder: string;
  changeFunc: ChangeEventHandler<HTMLInputElement>;
}

const PasswordInput = (prop: props) => {
  const { maxLength, placeHolder, changeFunc } = prop;
  const [showPW, setShowPW] = useState(false);

  const onClick = () => {
    setShowPW(!showPW);
  };

  return (
    <div className="relative">
      <input
        type={showPW ? "text" : "password"}
        name={placeHolder}
        placeholder={placeHolder}
        onChange={changeFunc}
        maxLength={maxLength}
        spellCheck="false"
        className="w-[30rem] h-[3.2rem] px-[1.5rem] my-[0.5rem] rounded-2xl shadow-[2px_3px_4px_#dadada] outline-none"
      />
      <img src={showPW ? openedEye : closedEye} onClick={onClick} className="absolute right-[1.2rem] bottom-[1.3rem] hover:cursor-pointer" />
    </div>
  );
};

export default PasswordInput;
