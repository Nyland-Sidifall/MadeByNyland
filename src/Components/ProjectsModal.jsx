import React from "react";

const ProjectsModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="w-60">
        <div
          className="w-100 h-5/6 bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow "
          id="wrapper"
          onClick={handleClose}
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
                  src={require("../Assets/AboutMeAssets/Trees.png")}
                  alt="Trees"
                />
              </div>
              <div className="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8">
                <p className="font-display text-lg font-semibold text-black">
                  Fake Text Here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
