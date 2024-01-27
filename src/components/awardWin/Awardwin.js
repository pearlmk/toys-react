import React from "react";
import image23 from "../../img/babytoy (23).png";
import './Awardwin.css'

function Awardwin() {
  return (
    <div className="container-fluid my-2 mt-lg-5 pt-lg-2 overflow-hidden">
      <div className="row py-lg-5">
        <div className="col-12 ">
          <div className="row bg-info" style={{ minHeight: "260px",maxHeight:'200px' }}>
            <div className="col-lg-4 offset-lg-2 text-center py-lg-4 py-5 ">
              <h2 className="text-light text-nowrap fw-normal AwardHead">TOY STORY LIST OF TOYS</h2>
              <h1 className="text-light text-nowrap fw-bold display-5" style={{fontFamily:'-moz-initial'}}>Award Winning Toy</h1>
              <h2 className="text-light text-nowrap fw-bold display-6" style={{fontFamily:'-moz-initial'}}>Story 2023</h2>
              <a
                href="/"
                className="btn rounded-5 border-2 border-light text-light my-1 fw-normal"
              >
                DISCOVER NOW
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={image23}
                className="object-fit img-fluid"
                width={350}
                alt=""
                style={{ position: "relative", top: "-58px"}}
              />
            </div>
          </div>
        </div>
        <div className="col-12 text-center d-block d-lg-none my-3">
          <img
            src={image23}
            className="object-fit img-fluid"
            // width={350}
            alt=""
            style={{maxWidth:'60%'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Awardwin;
