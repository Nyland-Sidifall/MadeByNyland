import React, { useRef } from "react";
import "./App.css";
import "tachyons";
import styled from "styled-components";

import LandingPage from "../Sections/LandingPage";
import AboutMe from "../Sections/AboutMe";
import WhatIveDone from "../Sections/WhatIveDone";
import MyProjects from "../Sections/MyProjects";
import ContactMe from "../Sections/ContactMe";
import ScrollToTop from "../Components/ScrollToTop";

const BodySection = styled.body`
  background-color: #e0e5ec;
`;

function App() {
  const aboutMeRef = useRef(null);
  const myProjectsRef = useRef(null);
  const WhatIveDoneRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <BodySection className="flex washed-yellow">
      <div className="fl tc center w-100 pa2">
        <LandingPage
          aboutMeRef={aboutMeRef}
          WhatIveDoneRef={WhatIveDoneRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
        />
        <AboutMe ref={aboutMeRef} />
        <WhatIveDone ref={WhatIveDoneRef} />
        <MyProjects ref={myProjectsRef} />
        <ContactMe ref={contactMeRef} />
        <ScrollToTop className="grow" />
      </div>
    </BodySection>
  );
}

export default App;
