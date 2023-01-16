import React, { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = forwardRef((props, ref) => {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4n0kbmf",
        "template_crd93ni",
        form.current,
        "4FlVF36kJ-j5kJof3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <section className="bg-gradient-to-b from-[#2b262d] to-[#5e5363] pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="grid place-content-center">
          <div className="flex flex-row">
            <img
              className=" w-md h-56 md:w-lg md:h-96 animate-hover_slowest "
              src={"../ControlAssets/ContactMeAssets/ContactMeSphere.png"}
              alt="Sphere"
            />
          </div>
        </div>

        <div className="grid place-content-center py-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="bg-gradient-to-b from-[#CC6464] to-[#862F23] rounded-[44px] window__shadow ">
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

              <div className="grid grid-col-1">
                <div className="p-2">
                  <label
                    for="name"
                    class="font-display text-2xl font-medium text-white text-center p-6"
                    ref={ref}
                  >
                    Your Name
                  </label>
                  <input
                    type="input"
                    name="fullName"
                    id="name"
                    class="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8 w-11/12"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="p-2">
                  <label
                    for="email"
                    class="font-display text-2xl font-medium text-white text-center p-6"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="message"
                    class="bg-[#E1CFCF] rounded-[22px] window__shadow m-4 p-8 w-11/12 max-h-72"
                    placeholder="Leave a Message..."
                  />
                </div>

                <div className="grid place-content-center pb-8">
                  <div>
                    {result ? (
                      <h1 className="font-display text-2xl font-bold text-white text-center">
                        Message Sent
                      </h1>
                    ) : null}
                  </div>
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
});

export default ContactMe;
