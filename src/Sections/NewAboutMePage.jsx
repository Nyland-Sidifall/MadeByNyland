import React from 'react';

const NewAboutMePage = () => {
return(
    <section className="bg-gradient-to-b from-[#887F8E] to-[#5e5363] pt-12 h-full">
        <div className="grid grid-cols-2">
            <div className="pl-10">
                <div className="w-100 h-full bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow ">
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
                    <div className=''>
                        <div className="flex flex-col items-center justify-center p-8 ">
                            <img className=" rounded-[22px] " src={require('../Assets/AboutMeAssets/Trees.png')} alt="Trees"/>
                        </div>
                        <div className="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8">
                            <p className="font-display text-lg font-semibold text-black">
                                Fake Text Here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-8">
                <div className='grid place-items-center'>
                    <h1 className="font-display text-6xl font-semibold text-white">About Me</h1>
                </div>
                <div className='grid place-items-center'>
                    <img className="animate-hover" src={require('../Assets/AboutMeAssets/Programmer.png')} alt="Programmer"/>
                    <img className="animate-hover_slowest" src={require('../Assets/AboutMeAssets/Platform.png')} alt="Platform"/>
                </div>

                <div className='grid place-content-center'>
                <div className="flex left-[20%] pt-8">
                    <img className="transition-all ease-in-out duration-200 hover:scale-110 pr-4" src={require('../Assets/AboutMeAssets/ArrowLeft.png')} alt="Left Arrow"/>
                    <img className="transition-all ease-in-out duration-200 hover:scale-110 pl-4" src={require('../Assets/AboutMeAssets/ArrowRight.png')} alt="Right Arrow"/>
                </div>
                </div>
            </div>
        </div>
    </section>)
}

export default NewAboutMePage;