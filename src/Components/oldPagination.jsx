import React, { useState } from "react";
import { MyProjectsData } from "../Constants/MyProjectsData";

const projectList = MyProjectsData.map((data, i) => {
  const [image, setImage] = useState(``);
  const [header, setHeader] = useState(``);
  const [body, setBody] = useState(``);
  const [link, setLink] = useState(``);

  return (
    <div
      className="flex flex-col items-center justify-center p-2 max-w-sm transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
      onClick={() => {
        setImage(`${MyProjectsData[i].picture_source}`);
        setHeader(`${MyProjectsData[i].header_text}`);
        setBody(`${MyProjectsData[i].paragraph_text}`);
        setLink(`${MyProjectsData[i].url}`);
        //setShowModal(true);
      }}
      key={i}
    >
      <img
        className="rounded-[27px] pb-2 h-4/6 md:h-5/6"
        src={`${MyProjectsData[i].picture_source}`}
        alt="ProjectImage"
      />
      <div className="bg-[#E1CFCF] rounded-[22px] window__shadow p-4">
        <p className="font-display font-semibold text-center text-sm md:text-md overflow-y-scroll">
          {MyProjectsData[i].header_text}
        </p>
      </div>
    </div>
  );
});

export default projectList;
