import React, { ChangeEventHandler } from "react";

interface props {
  maxLength: number;
  placeHolder: string;
  changeFunc: ChangeEventHandler<HTMLInputElement>;
}

const Input = (prop: props) => {
  const { maxLength, placeHolder, changeFunc } = prop;

  return (
    <input
      name={placeHolder}
      placeholder={placeHolder}
      onChange={changeFunc}
      maxLength={maxLength}
      spellCheck="false"
      className="w-[30rem] h-[3.2rem] px-[1.5rem] my-[0.5rem] rounded-2xl shadow-[2px_3px_4px_#dadada] outline-none"
    />
  );
};

export default Input;
