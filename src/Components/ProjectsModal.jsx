import React from "react";

const ProjectsModal = ({
  isVisible,
  onClose,
  modalImage,
  modalHeader,
  modalBodyText,
  projectLink,
}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper-projects") onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-10">
      <div
        className="w-96 h-[80%] bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow "
        onClick={handleClose}
        id="wrapper-projects"
      >
        <div className="flex flex-row pt-10 pl-10">
          <div className="pr-4">
            <div
              className="rounded-full bg-[#CB3055] h-8 w-8 window__button__shadow transition-all ease-in-out duration-200 hover:scale-110"
              onClick={() => onClose()}
            ></div>
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

        <div className="grid place-items-center pt-6">
          <div className="grid grid-rows-2 gap-2 place-items-center">
            <div className="flex flex-row">
              <img
                className=" rounded-[22px] h-60"
                src={modalImage}
                alt={"Snapshot of " + modalHeader}
              />
            </div>
            <div className="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-2 md:p-8">
              <p className="font-display text-xl md:text-3xl font-bold text-black text-center pb-4">
                {modalHeader}
              </p>
              <p className="font-display text-sm md:text-lg font-semibold text-black text-center">
                {modalBodyText}
              </p>
            </div>
            <button
              type="submit"
              class=" bg-[#80CA5D] button__shadow text-center font-display text-lg font-semibold p-4 text-white rounded-lg transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = projectLink;
              }}
            >
              Visit Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
