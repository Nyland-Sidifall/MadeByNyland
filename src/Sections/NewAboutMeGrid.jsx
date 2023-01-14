import React, { useState, forwardRef } from "react";
import { AboutMeData } from "../Constants/AboutMeData";

const NewAboutMeGrid = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const length = AboutMeData.length;

  const incIndex = () => {
    console.log("index before inc: " + index);
    if (index >= length) {
      setIndex(0);
    } else {
      setIndex((index + 1) % length);
    }
  };

  const decIndex = () => {
    if (index <= 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#867A8C] to-[#5e5363] pt-12 h-3/6"
    >
      <div className="flex justify-center md:hidden">
        <h1 className="font-display text-6xl font-semibold text-white pb-8">
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-1 pb-12">
        <div className="col-start-2 col-span-5 row-start-2">
          <div className="bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow">
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

            <div className="pb-8">
              <div className="relative flex flex-col items-center justify-center p-8">
                <img
                  className=" rounded-[22px] max-w-[80%]"
                  src={`${AboutMeData[index].picture_source}`}
                  alt="About Me Data"
                />
              </div>

              <div className="bg-[#E1CFCF] rounded-[22px] window__shadow ml-8 mr-8 p-4 botto">
                <p className="font-display text-lg font-semibold text-black text-center">
                  {AboutMeData[index].paragraph_text}
                </p>
              </div>
            </div>
          </div>

          <div className="block md:hidden pt-4">
            <div className="row-span-2 flex justify-center">
              <img
                className="transition-all ease-in-out duration-200 hover:scale-110 pr-8 md:pr-4"
                src={require("../Assets/AboutMeAssets/ArrowLeft.png")}
                alt="Left Arrow"
                onClick={decIndex}
              />
              <img
                className="transition-all ease-in-out duration-200 hover:scale-110 pl-8 md:pl-4"
                src={require("../Assets/AboutMeAssets/ArrowRight.png")}
                alt="Right Arrow"
                onClick={incIndex}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block col-start-8 col-span-4 row-start-2">
          <div className="row-span-2 grid place-content-center">
            <h1 className="font-display text-6xl font-semibold text-white pb-4 ">
              About Me
            </h1>
          </div>
          <div className="row-span-2  flex justify-center">
            <img
              className="animate-hover max-h-[60%]"
              src={`${AboutMeData[index].picture_soruce_2}`}
              alt="3D Pic"
            />
          </div>
          <div className="row-span-2  flex justify-center ">
            <img
              className="animate-hover_slowest"
              src={require("../Assets/AboutMeAssets/Platform.png")}
              alt="Platform"
            />
          </div>
          <div className="row-span-2 flex justify-center pt-4">
            <img
              className="transition-all ease-in-out duration-200 hover:scale-110 pr-8 md:pr-4"
              src={require("../Assets/AboutMeAssets/ArrowLeft.png")}
              alt="Left Arrow"
              onClick={decIndex}
            />
            <img
              className="transition-all ease-in-out duration-200 hover:scale-110 pl-8 md:pl-4"
              src={require("../Assets/AboutMeAssets/ArrowRight.png")}
              alt="Right Arrow"
              onClick={incIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default NewAboutMeGrid;
