import React, { useState, useEffect } from "react";
import MenuModal from "../Components/MenuModal";
import pdfFile from "../Constants/Resume.pdf";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const controlNav = () => {
    if (window.scrollY > 700) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <nav
      className={` ${
        showNav ? "sticky" : "static"
      } top-0 z-50 navbar flex justify-between items-center `}
    >
      <h1 className="font-display text-xl md:text-2xl  font-semibold p-5 h-10 text-white top-[45%] left-2">
        MadeByNy.Land
      </h1>
      <div className="place-content-end mr-8 mt-8">
        <button
          className="font-display text-white font-normal text-lg border-2 rounded p-2 hover:font-semibold hover:cursor-pointer hover:bg-[#FAF9F6] hover:text-black transition-all ease-in-out duration-200 hover:scale-110"
          onClick={() => window.open(pdfFile)}
        >
          Resume
        </button>
      </div>
      <img
        className="hidden transition-all ease-in-out duration-200 hover:scale-110 absolute top-[45%] right-2"
        src={"../Assets/NavBarAssets/HamburgerMenu.png"}
        alt="Right Arrow"
        onClick={() => setShowModal(true)}
      />
      <MenuModal
        className="hidden"
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </nav>
  );
};

export default Header;
