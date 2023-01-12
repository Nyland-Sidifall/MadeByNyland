import React, { useRef } from "react";
import "./App.css";

import NewLandingPage from "../Sections/NewLandingPage";
import NewMyProjectsPage from "../Sections/NewMyProjectsPage";
import NewContactMePage from "../Sections/NewContactMe";
import NewHeader from "../Sections/NewHeader";
import NewFooter from "../Sections/NewFooter";
import NewAboutMeGrid from "../Sections/NewAboutMeGrid";
import NewMyProjectsGrid from "../Sections/NewMyProjectsGrid";

function App() {
  const landingPageRef = useRef(null);
  const aboutMeRef = useRef(null);
  const myProjectsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-[#1d191f] to-[#897c8f]">
      <div className="">
        <NewHeader
          aboutMeRef={aboutMeRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
        />
        <NewLandingPage
          aboutMeRef={aboutMeRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
          ref={landingPageRef}
        />
        <NewAboutMeGrid ref={aboutMeRef} />
        <NewMyProjectsGrid />
        <NewMyProjectsPage ref={myProjectsRef} />
        <NewContactMePage ref={contactMeRef} />
        <NewFooter />
      </div>
    </div>
  );
}

export default App;
