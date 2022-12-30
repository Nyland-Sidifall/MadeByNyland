import React, { Fragment, useRef, useState } from "react";
import "./App.css";

import LandingPage from "../Sections/LandingPage";
import AboutMe from "../Sections/AboutMe";
import WhatIveDone from "../Sections/WhatIveDone";
import MyProjects from "../Sections/MyProjects";
import ContactMe from "../Sections/ContactMe";
import ScrollToTop from "../Components/ScrollToTop";
import NewLandingPage from "../Sections/NewLandingPage";
import NewAboutMePage from "../Sections/NewAboutMePage";
import NewMyProjectsPage from "../Sections/NewMyProjectsPage";
import NewContactMePage from "../Sections/NewContactMe";
import NewHeader from "../Sections/NewHeader";
import Modal from "../Components/MenuModal";
import NewFooter from "../Sections/NewFooter";

function App() {
  const aboutMeRef = useRef(null);
  const myProjectsRef = useRef(null);
  const WhatIveDoneRef = useRef(null);
  const contactMeRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#1d191f] to-[#897c8f]">
      <div className="">
        <NewHeader />
        <NewLandingPage />
        <NewAboutMePage />
        <NewMyProjectsPage />
        <NewContactMePage />
        <NewFooter />
        {/*
        
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
        
        */}
      </div>
    </div>
  );
}

export default App;
