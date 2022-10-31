import React from "react";
import "tachyons";
import styled from "styled-components";
import { Button, Divider, H1, H2 } from "../Components/SiteComponents";

const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: auto;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
`;

const LandingPage = ({
  aboutMeRef,
  myProjectsRef,
  contactMeRef,
  WhatIveDoneRef,
}) => {
  const aboutMeScroll = (e) => {
    e.preventDefault();
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const whatIveDoneScroll = (e) => {
    e.preventDefault();
    WhatIveDoneRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };
  const myProjectScroll = (e) => {
    e.preventDefault();
    myProjectsRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };
  const contactMeScroll = (e) => {
    e.preventDefault();
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div class="mw9 center ph3-ns ">
        <div class="cf ph2-ns ">
          <div class="fl w-60 pl2 pr2 pt2 v-mid">
            <br />
            <H1>Made By Nyland</H1>
            <br />
            <H2>Your Friendly Neighborhood </H2>
            <H2>✌🏾 Creative // Developer 👨🏾‍💻</H2>
            <br />
            <Button className="grow" onClick={aboutMeScroll}>
              About Me
            </Button>
            <Button className="grow" onClick={whatIveDoneScroll}>
              Tech Stacks
            </Button>
            <Button className="grow" onClick={myProjectScroll}>
              My Projects
            </Button>
            <Button className="grow" onClick={contactMeScroll}>
              Contact Me
            </Button>
          </div>
          <div class="fl w-40">
            <Image src={require("../Assets/me.png")} alt="Can't see me lol" />
          </div>
        </div>
      </div>
      <Divider className="ma4"></Divider>
    </div>
  );
};

export default LandingPage;
