import React from "react";

const NewContactMePage = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b262d] to-[#5e5363] pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="grid place-content-center">
          <div className="flex flex-row">
            <img
              className=" w-md h-56 md:w-lg md:h-96 animate-hover_slowest "
              src={require("../Assets/ContactMeAssets/ContactMeSphere.png")}
              alt="Sphere"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center m-20">
          <form>
            <div className="w-fit h-11/12 bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow ">
              <div className="flex flex-row p-10">
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

              <div className="w-max h-max">
                <div className="p-2">
                  <label
                    for="email"
                    class="font-display text-2xl font-medium text-white text-center p-6"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8 w-11/12"
                    placeholder="name@email.com"
                    required
                  />
                </div>

                <div className="p-2">
                  <label
                    for="subject"
                    class="block font-display text-2xl font-medium text-white mb-2 pl-6"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8 w-11/12"
                    placeholder="Let me know how I could help"
                    required
                  />
                </div>

                <div className="p-2">
                  <label
                    for="subject"
                    class="block font-display text-2xl font-medium text-white mb-2 pl-6"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8 w-11/12 max-h-72"
                    placeholder="Leave a Message..."
                  />
                </div>

                <div className="grid place-content-center pb-8">
                  <button
                    type="submit"
                    class=" bg-[#80CA5D] button__shadow text-center font-display text-lg font-semibold p-4 text-white rounded-lg transition-all ease-in-out duration-200 hover:scale-110 hover:scale-200"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewContactMePage;
