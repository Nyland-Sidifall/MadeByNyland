import React from "react";
import Button from "../Components/Button.jsx";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const LandingPage = ({ aboutMeRef, myProjectsRef, contactMeRef }) => {
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

  return (
    <section className="bg-gradient-to-b from-[#1d191f] to-[#897c8f]">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <img
            className="animate-hover_slow w-[60%] h-[60%] relative z-[2]"
            src={"../ControlAssets/LandingPageAssets/ship.png"}
            alt="Ship"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[100%] h-[100%] relative z-[2] animate-hover"
            src={"../ControlAssets/LandingPageAssets/CoderPlanet.png"}
            alt="Planet Coder"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="animate-hover_slowest w-[60%] h-[60%] relative z-[2]"
            src={"../ControlAssets/LandingPageAssets/planet.png"}
            alt="Ship"
          />
        </div>
      </div>

      <div>
        <div className="absolute z-[0] w-[30%] h-[35%] top-0 blue__gradient "></div>
        <div className="absolute z-[0] w-[40%] h-[40%] right-10 rounded-full top-0 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-30 bottom-30 rounded-full top-0 green__gradient"></div>
        <div className="absolute z-[0] w-[30%] h-[25%] right-60 bottom-60 rounded-full top-0 yellow__gradient"></div>
        <div className="absolute z-[0] w-[20%] h-[35%] right-20 bottom-20 top-0 pink__gradient"></div>
      </div>

      <h1 className="text-white text-center felx-inital font-display font-bold text-4xl md:text-6xl">
        {"<Nyland Sidifall/ >"}
      </h1>
      <h3 className="text-white text-center felx-inital font-display text-sm md:text-2xl ">
        Software Engineer // App Developer // Designer
      </h3>

      {/* Buttons List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center p-10">
        <div className="p-5 flex flex-col items-center">
          <Button text={"About Me"} onClick={aboutMeScroll} />
        </div>
        <div className="p-5 flex flex-col items-center">
          <Button text={"My Projects"} onClick={myProjectScroll} />
        </div>
        <div className="p-5 flex flex-col items-center">
          <Button text={"Contact Me"} onClick={contactMeScroll} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2">
          <FaLinkedin
            className="text-white text-7xl hover:cursor-pointer transition-all ease-in-out duration-200 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/nyland-s-705153bb/";
            }}
          />
          <AiFillGithub
            className="text-white text-7xl hover:cursor-pointer transition-all ease-in-out duration-200 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/Nyland-Sidifall";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
