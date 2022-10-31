import React from "react";
import Card from "./Card";
import "tachyons";

const CardList = ({ projects }) => {
  const cardComponent = projects.map((user, i) => {
    return (
      <div className="fl w-100 h-100 w-third-ns pa2">
        <Card
          key={i}
          id={projects[i].id}
          picture_source={projects[i].picture_source}
          header_text={projects[i].header_text}
          paragraph_text={projects[i].paragraph_text}
          url={projects[i].url}
        />
      </div>
    );
  });

  return <div className="center">{cardComponent}</div>;
};

export default CardList;
