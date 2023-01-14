import React, { useRef } from "react";
import "./App.css";

import LandingPage from "../Sections/LandingPage";
import ContactMe from "../Sections/ContactMe";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import AboutMe from "../Sections/AboutMe";
import MyProjects from "../Sections/MyProjects";

function App() {
  const landingPageRef = useRef(null);
  const aboutMeRef = useRef(null);
  const myProjectsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-[#1d191f] to-[#897c8f]">
      <div className="">
        <Header
          aboutMeRef={aboutMeRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
        />
        <LandingPage
          aboutMeRef={aboutMeRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
          ref={landingPageRef}
        />
        <AboutMe ref={aboutMeRef} />
        <MyProjects ref={myProjectsRef} />
        <ContactMe ref={contactMeRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
