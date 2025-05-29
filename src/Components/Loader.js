import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#00dbde"
      />
    </div>
  );
};

export default Loader;
