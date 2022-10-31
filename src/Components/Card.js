import React from "react";
import "tachyons";

const Card = (props) => {
  return (
    <div className="bg-red dib br3 ma2 grow bw2 shadow-5 db">
      <img alt="Roboman" src={require(`${props.picture_source}`)} />
      <h2>{props.header_text}</h2>
      <p>{props.paragraph_text}</p>
    </div>
  );
};

export default Card;
