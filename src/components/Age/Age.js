import React from "react";
import AgeImage from "../inc/AgeImage/AgeImage";

function Age() {
  return (
    <div className="container-xxl overflow-hidden">
      <div className="text-center ">
        <h2 className="display-6 fw-normal">Toys By Age</h2>
        <dl>Choose Your Category</dl>
      </div>
      <div className="row text-center">
        <div className="col mt-md-3 mx-auto">
          <AgeImage />
        </div>
      </div>
    </div>
  );
}

export default Age;
