import React, { useState } from "react";
import MenuModal from "../Components/MenuModal";

const NewHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="sticky top-0 z-50 after:">
      <div className={"flex flex-col relative"}>
        <h1 className="font-display text-xlg font-semibold p-5 h-10 text-white top-[45%] left-2">
          MadeByNy.Land
        </h1>
        <div>
          <img
            className="hidden transition-all ease-in-out duration-200 hover:scale-110 absolute top-[45%] right-2"
            src={require("../Assets/NavBarAssets/HamburgerMenu.png")}
            alt="Right Arrow"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      <MenuModal
        className="hidden"
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </nav>
  );
};

export default NewHeader;
