import React from "react";

const MenuModal = ({
  isVisible,
  onClose,
  aboutMeRef,
  myProjectsRef,
  contactMeRef,
}) => {
  const homePageScroll = (e) => {
    console.log("To Home");
  };
  const aboutMeScroll = (e) => {
    e.preventDefault();
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const myProjectScroll = (e) => {
    e.preventDefault();
    myProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const contactMeScroll = (e) => {
    e.preventDefault();
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper-menu") onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-end items-center z-10 pr-2">
      <div className="w-5/12">
        <div
          className="w-full h-100 bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow"
          onClick={handleClose}
          id="wrapper-menu"
        >
          <div className="flex flex-row pt-10 pl-10">
            <div className="pr-4">
              <div
                className="rounded-full animate-pulse bg-[#CB3055] h-8 w-8 window__button__shadow transition-all ease-in-out duration-200 hover:scale-110"
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
          <div className="">
            <div className="flex flex-col items-center justify-center p-8">
              <button
                type="submit"
                class="w-[90%] bg-[#E1CFCF] text-center font-display text-2xl font-semibold p-4 text-black rounded-lg window__button__shadow transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                onClick={homePageScroll}
              >
                Home
              </button>
              <button
                type="submit"
                class="w-[90%] bg-[#E1CFCF] text-center font-display text-2xl font-semibold p-4 text-black rounded-lg window__button__shadow transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                onClick={aboutMeScroll}
              >
                About Me
              </button>
              <button
                type="submit"
                class="w-[90%] bg-[#E1CFCF] text-center font-display text-2xl font-semibold p-4 text-black rounded-lg window__button__shadow transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                onClick={myProjectScroll}
              >
                My Projects
              </button>
              <button
                type="submit"
                class="w-[90%] bg-[#E1CFCF] text-center font-display text-2xl font-semibold p-4 text-black rounded-lg window__button__shadow transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                onClick={contactMeScroll}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
