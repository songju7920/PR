import React, { MouseEventHandler } from "react";

interface props {
  num: number;
  active: boolean;
  hidden: boolean;
  event: any;
}

const Pagenation = (prop: props) => {
  const { num, active, hidden, event } = prop;

  return (
    <div className={`hover:cursor-pointer font-semibold text-xl text-${active ? "black" : "gray2"}`} onClick={() => event(num)}>
      {!hidden && num}
    </div>
  );
};

export default Pagenation;
