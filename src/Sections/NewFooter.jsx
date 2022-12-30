import React, { useState, useEffect, Fragment } from "react";
import Modal from "../Components/MenuModal";

const NewFooter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="sticky top-0 z-50 after:">
      <div className="flex flex-col relative">
        <h1 className="font-display text-sm font-normal p-5 h-10 text-white flex items-center justify-center">
          Designed & Built by Nyland Sidifall
        </h1>
        <div></div>
      </div>
    </nav>
  );
};

export default NewFooter;
