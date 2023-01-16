import React from "react";

const Pagination = ({
  projectsPerPage,
  totalProjects,
  paginate,
  currentPage,
  decPageCount,
  incPageCount,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex flex-row">
      {pageNumbers.map((num) => (
        <div
          key={num}
          className={`rounded-full bg-[#E3B336] hover:bg-[#ffc941] h-12 w-12 window__button__shadow grid place-content-center transition-all ease-in-out duration-200 hover:scale-110 ${
            currentPage === num && "bg-[#9c7a26]"
          }`}
          onClick={(e) => {
            paginate(num);
            e.preventDefault();
          }}
        >
          <a href="!#" className="font-display text-md font-bold text-white">
            {num}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Pagination;
