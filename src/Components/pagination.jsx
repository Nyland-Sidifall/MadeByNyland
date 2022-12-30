import React from "react";

const pagination = () => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return <div>pagination</div>;
};

export default pagination;
