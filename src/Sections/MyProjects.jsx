import React, { Fragment, useState, forwardRef } from "react";
import ProjectsModal from "../Components/ProjectsModal";
import Pagination from "../Components/Pagination";
import { MyProjectsData } from "../Constants/MyProjectsData";
import { ReactDOM } from "react-dom";

const MyProjects = forwardRef((props, ref) => {
  const [image, setImage] = useState(``);
  const [header, setHeader] = useState(``);
  const [body, setBody] = useState(``);
  const [link, setLink] = useState(``);

  const [showModal, setShowModal] = useState(false);

  let [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  const indexOfLastProj = currentPage * projectsPerPage;
  const indexOfFirstProj = indexOfLastProj - projectsPerPage;
  const currentProjects = MyProjectsData.slice(
    indexOfFirstProj,
    indexOfLastProj
  );

  const paginate = (pageNum) => setCurrentPage(pageNum);

  const projectListSliced = currentProjects.map((data, i) => {
    return (
      <div
        className="flex flex-col items-center justify-center p-2 max-w-sm transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
        onClick={() => {
          setImage(`${currentProjects[i].picture_source}`);
          setHeader(`${currentProjects[i].header_text}`);
          setBody(`${currentProjects[i].paragraph_text}`);
          setLink(`${currentProjects[i].url}`);
          setShowModal(true);
        }}
        key={i}
      >
        <img
          className="rounded-[27px] pb-2 h-4/6 md:h-5/6"
          src={`${currentProjects[i].picture_source}`}
          alt="ProjectImage"
        />
        <div className="bg-[#E1CFCF] rounded-[22px] window__shadow p-4">
          <p className="break-word font-display font-semibold text-center text-sm md:text-md overflow-y-scroll">
            {currentProjects[i].header_text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <section
        className="bg-gradient-to-b from-[#5E5263] to-[#2b262d]  h-full"
        ref={ref}
      >
        <div className="grid grid-cols-10 place-items-center p-8 md:p-20 lg:p-64">
          <div className="col-start-2 col-span-8">
            <div className="grid place-items-center pb-10">
              <h1
                ref={ref}
                className="bottom-4 font-display text-6xl font-semibold text-white"
              >
                My Projects
              </h1>
            </div>
            <div className="bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow ">
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

              <div className="grid grid-cols-10 place-content-center">
                <div className="grid grid-cols-1 col-start-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-0 md:gap-2 col-span-8 window__container m-6">
                  {projectListSliced}
                </div>

                <div className="col-span-1 relative"></div>
              </div>

              <div className="grid place-content-center">
                <div className="flex flex-row pb-5">
                  <Pagination
                    projectsPerPage={projectsPerPage}
                    totalProjects={MyProjectsData.length}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          </div>
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

export default MyProjects;
