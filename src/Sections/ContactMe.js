import React, { forwardRef } from "react";
import "tachyons";
import { Button, H1 } from "../Components/SiteComponents";
import { FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const ContactMe = forwardRef((props, ref) => {
  return (
    <div ref={ref} className=" pa6 center fl w-100 pa2">
      <div className="w-100 center pl4 db">
        <H1>🤝🏾 Check Me Out 📆</H1>
      </div>
      <div style={{ paddingRight: "5%" }}>
        <Button
          className="grow"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://calendly.com/n-sidifall/the-world-together-podcast";
          }}
        >
          <FaCalendarAlt />
          <br />
          Calendly
        </Button>
        <Button
          className="grow"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://www.linkedin.com/in/nyland-s-705153bb/";
          }}
        >
          <FaLinkedin />
          <br />
          LinkedIn
        </Button>
        <Button
          className="grow"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Nyland-Sidifall";
          }}
        >
          <AiFillGithub />
          <br />
          GitHub
        </Button>
      </div>
    </div>
  );
});

export default ContactMe;
