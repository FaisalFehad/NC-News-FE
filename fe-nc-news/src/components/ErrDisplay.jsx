import React from "react";

const ErrHandling = ({ err_msg }) => {
  if (err_msg) return <h3>{err_msg}</h3>;
  return (
    <div>
      <h3>Something went wrong... What have you done?</h3>
    </div>
  );
};

export default ErrHandling;
