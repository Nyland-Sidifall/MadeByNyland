import React, { Fragment, useState } from "react";
import ProjectsModal from "../Components/ProjectsModal";
import { MyProjectsData } from "../Constants/MyProjectsData";

const NewMyProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  //add data const currentPost = AboutMeData.slice(firstPostIndex, lastPostIndex)

  return (
    <Fragment>
      <section className="bg-gradient-to-b from-[#5E5263] to-[#2b262d] pt-12 h-full">
        <div className="grid place-items-center">
          <h1 className="font-display text-6xl font-semibold text-white">
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
                    <div
                      className="flex flex-col items-center justify-center p-4 max-w-sm transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                      onClick={() => setShowModal(true)}
                    >
                      <img
                        className=" rounded-[22px] pb-2"
                        src={require("../Assets/AboutMeAssets/Trees.png")}
                        alt="Trees"
                      />
                      <div className="bg-[#E1CFCF] rounded-[22px] window__shadow p-4">
                        <p className="font-display text-md font-semibold text-black">
                          Fake Text Here First
                        </p>
                      </div>
                    </div>
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
      />
    </Fragment>
  );
};

export default NewMyProjectsPage;
