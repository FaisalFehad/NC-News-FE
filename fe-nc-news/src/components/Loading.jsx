import React from "react";

const Loading = ({ msg }) => {
  return (
    <div>
      <h3> {`${msg}...`} </h3>
    </div>
  );
};

export default Loading;
