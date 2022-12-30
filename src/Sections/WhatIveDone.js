import React, { forwardRef } from "react";
import "tachyons";
import { Image, Divider, H2, H1 } from "../Components/SiteComponents";
import { WhatIveDoneData } from "../Constants/WhatIveDoneData";

const WhatIveDone = forwardRef((props, ref) => {
  const WhatIveDoneList = WhatIveDoneData.map((user, i) => {
    return (
      <div className="fl w-third pa2 center">
        <div className="fl w-100 pa2">
          <div className="fl w-100">
            <Image
              src={`${WhatIveDoneData[i].picture_source}`}
              alt="About Me Pic Error"
              key={WhatIveDoneData[i].id}
              style={{ height: "50%", width: "50%" }}
            />
          </div>
          <H2>{`${WhatIveDoneData[i].header_text}`}</H2>
          <div className="bg-moon-gray br-pill h1 overflow-y-hidden">
            <div
              style={{ fontSize: "69%", backgroundColor: "#ed8f00" }}
              className={
                "br-pill h1 shadow-1 " + WhatIveDoneData[i].progress_bar
              }
            >
              {WhatIveDoneData[i].progress_percent}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="fl w-100 pa2">
        <Divider />
        <H1>💻 Tech Stacks 📱</H1>
        {WhatIveDoneList}
      </div>
    </div>
  );
});

export default WhatIveDone;
