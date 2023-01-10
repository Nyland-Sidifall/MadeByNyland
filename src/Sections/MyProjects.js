import React, { forwardRef } from "react";
import "tachyons";
import {
  Button,
  Image,
  Divider,
  H1,
  H3,
  P,
} from "../Components/SiteComponents";
import { MyProjectsData } from "../Constants/MyProjectsData";

const MyProjects = forwardRef((props, ref) => {
  const ProjectList = MyProjectsData.map((user, i) => {
    return (
      <div className="fl w-100 w-third-ns pa2">
        <Image
          src={`${MyProjectsData[i].picture_source}`}
          alt="About Me Pic Error"
          key={MyProjectsData[i].id}
        />
        <H3>{MyProjectsData[i].header_text}</H3>
        <P>{MyProjectsData[i].paragraph_text}</P>
        <div className="center db pr0-l pr4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `${MyProjectsData[i].url}`;
            }}
            className="grow"
          >
            Visit Here
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div className="mw5 db mw7 flex-auto center pa2">
      <div ref={ref} className="db fl w-100 pa2">
        <Divider />
        <H1 className="">💼 My Projects 📁</H1>
      </div>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">{ProjectList}</div>
      </div>
      <div className="">
        <br />
        <br />
        <Divider />
      </div>
    </div>
  );
});

export default MyProjects;
