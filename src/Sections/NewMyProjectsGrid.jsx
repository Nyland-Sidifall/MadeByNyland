import React, { Fragment, useState, forwardRef } from "react";
import ProjectsModal from "../Components/ProjectsModal";
import { MyProjectsData } from "../Constants/MyProjectsData";

const NewMyProjectsGrid = forwardRef((props, ref) => {
  const [image, setImage] = useState(``);
  const [header, setHeader] = useState(``);
  const [body, setBody] = useState(``);
  const [link, setLink] = useState(``);

  const [showModal, setShowModal] = useState(false);

  const ProjectList = MyProjectsData.map((user, i) => {
    return (
      <div
        className="flex flex-col items-center justify-center p-4 max-w-sm transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
        onClick={() => {
          setImage(`${MyProjectsData[i].picture_source}`);
          setHeader(`${MyProjectsData[i].header_text}`);
          setBody(`${MyProjectsData[i].paragraph_text}`);
          setLink(`${MyProjectsData[i].url}`);
          setShowModal(true);
        }}
        key={i}
      >
        <img
          className="rounded-[27px] pb-2"
          src={`${MyProjectsData[i].picture_source}`}
          alt="ProjectImage"
        />
        <div className="bg-[#E1CFCF] rounded-[22px] window__shadow p-4">
          <p className="font-display font-semibold text-center text-sm md:text-md">
            {MyProjectsData[i].header_text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <section
        className="bg-gradient-to-b from-[#5E5263] to-[#2b262d] pt-12 h-full"
        ref={ref}
      >
        <div className="grid place-items-center">
          <h1 className="font-display text-6xl font-semibold text-white pb-4">
            My Projects
          </h1>
        </div>

        <div className="grid grid-cols-10 place-items-center">
          <div className="col-span-1"></div>
          <div className="col-span-8">
            <div className="w-full h-full bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow ">
              <div className="flex flex-row pt-10 pl-10">
                <div className="pr-4">
                  <div className="rounded-full bg-[#CB3055] h-8 w-8 window__button__shadow"></div>
                </div>
                <div className="pr-4">
                  <div className="rounded-full bg-[#E3B336] h-8 w-8 window__button__shadow"></div>
                </div>
                <div className="pr-4">
                  <div className="rounded-full bg-[#3C992D] h-8 w-8 window__button__shadow"></div>
                </div>
                <div className="pr-4 flex flex-1">
                  <div className="rounded-full bg-[#E1CFCF] h-8 w-11/12 window__button__shadow"></div>
                </div>
              </div>

              <div className="">
                <div className="grid grid-cols-10 place-content-center">
                  <div className="col-span-1 relative">
                    <img
                      className="transition-all ease-in-out duration-200 hover:scale-110 absolute top-[45%] left-4"
                      src={require("../Assets/AboutMeAssets/ArrowLeft.png")}
                      alt="Right Arrow"
                    />
                  </div>

                  <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-2 col-span-8 window__container m-6">
                    {ProjectList}
                  </div>

                  <div className="col-span-1 relative">
                    <img
                      className="transition-all ease-in-out duration-200 hover:scale-110 absolute top-[45%] right-4"
                      src={require("../Assets/AboutMeAssets/ArrowRight.png")}
                      alt="Right Arrow"
                    />
                  </div>
                </div>

                <div className="">
                  <div className="grid place-content-center">
                    <div className="flex flex-row pb-5">
                      <div className="rounded-full bg-[#E3B336] h-8 w-8 window__button__shadow"></div>
                      <div className="rounded-full bg-[#c79d3498] h-8 w-8 window__button__shadow"></div>
                      <div className="rounded-full bg-[#c79d3498] h-8 w-8 window__button__shadow"></div>
                      <div className="rounded-full bg-[#c79d3498] h-8 w-8 window__button__shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
      <ProjectsModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        modalImage={image}
        modalHeader={header}
        modalBodyText={body}
        projectLink={link}
      />
    </Fragment>
  );
});

export default NewMyProjectsGrid;
