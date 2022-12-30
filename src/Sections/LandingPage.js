import React from "react";
import "tachyons";
import styled from "styled-components";
import { Button, Divider, H1, H2 } from "../Components/SiteComponents";
import { motion } from "framer-motion";

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
    <section>
      <div class="mw9 center ph3-ns ">
        <div class="cf ph2-ns ">
          <div class=" animated-buttons fl w-60 pl2 pr2 pt2 v-mid">
            <br />
            <H1>Made By Nyland</H1>
            <br />
            <H2>Your Friendly Neighborhood </H2>
            <H2>✌🏾 Creative // Developer 👨🏾‍💻</H2>
            <br />

            <div>
              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <Button
                  className="transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={aboutMeScroll}
                >
                  About Me
                </Button>
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={aboutMeScroll}
                >
                  About Me
                </Button>{" "}
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={aboutMeScroll}
                >
                  About Me
                </Button>{" "}
                <Button
                  className="text-black landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={aboutMeScroll}
                >
                  About Me
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={aboutMeScroll}
                >
                  About Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={whatIveDoneScroll}
                >
                  Tech Stacks
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 3 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={myProjectScroll}
                >
                  My Projects
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 4 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={contactMeScroll}
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 5 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://silver-beijinho-6ae73d.netlify.app/";
                  }}
                >
                  DEMO - Girl Tech Geek
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 6 * 0.2 }}
              >
                <Button
                  className="landing-button transition-all ease-in-out duration-200 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://preeminent-maamoul-7bec8d.netlify.app/";
                  }}
                >
                  DEMO - 3D Three.js
                </Button>
              </motion.div>
            </div>

            {/**/}
          </div>
          <div class="fl w-40">
            <Image src={require("../Assets/me.png")} alt="Can't see me lol" />
          </div>
        </div>
      </div>
      <Divider className="ma4"></Divider>
    </section>
  );
};

export default LandingPage;
