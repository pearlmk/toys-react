import React from "react";
import "../Updated/Updated.css";
import red1 from '../../img/red (1).png'
import red2 from '../../img/red (2).png'

function Updated() {
  return (
    <div className="container overflow-hidden">
      <div className="row my-2  my-md-4 position-relative">
        <div className="col text-center py-2 py-md-4" style={{ background: "#ffc436" }}>
          <h2 className="text-white fw-bold my-3">
            Don't miss
            <br />
            Our Latest updated
          </h2>
          <p className="text-white mt-5 mb-4">
            Subscribe to our newsletter and know first about all <br />
            the promation discount
          </p>
          <div
            className="input-group border border-2 border-white w-100 rounded-pill mx-auto"
            style={{maxWidth:'600px'}}
          >
            <input
              type="email"
              placeholder="Your Email..."
              className="form-control rounded-pill ms-3 text-white border-0"
              style={{ background: "#ffc436" }}
            />
            <button
              type="submit"
              className="btn px-lg-4 btn-outline-white rounded-pill text-white"
              style={{ background: "#d21312", margin: "3px" }}
            >
              subscribe
            </button>
          </div>
        </div>
            {/* red img */}
            <div className="d-none d-lg-block">
          <img src={red1} alt="" className="img-fluid object-fit position-absolute bottom-0 start-0"/>
          <img src={red2} alt="" className="img-fluid object-fit position-absolute top-0 end-0"/>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Updated;
