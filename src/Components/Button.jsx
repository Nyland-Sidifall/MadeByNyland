import React from "react";

const Button = (props) => (
  <button
    key={props.key}
    onClick={props.onClick}
    className="bg-gradient-to-b from-[#F9C6B0] to-[#DA5555] w-48 h-16 rounded-[44px] transition-all ease-in-out duration-200 hover:scale-110"
  >
    <p className="text-white font-display font-semibold">{props.text}</p>
  </button>
);

export default Button;
