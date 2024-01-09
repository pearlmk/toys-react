import React from "react";
import TimePlay from "./TimePlay/TimePlay";
import seller from "../../../img/babytoy (2).png";
import scrOne from "../../../img/babytoy (1).png";
import scrScr from "../../../img/babytoy (20).png";
import scrThree from "../../../img/babytoy (21).png";
import scrFour from "../../../img/babytoy (4).png";
import scrFive from "../../../img/babytoy (27).png";
import scrSix from "../../../img/babytoy (3).png";
import Shop from "../../../img/babytoy (6).png";

function ProductTime() {
  return (
    <>
      <div className="col-11 col-md-6 mx-auto order-md-2">
        <TimePlay
          scr={seller}
          title="Best Sellers"
          scrOne={scrOne}
          scrSec={scrScr}
          scrThree={scrThree}
          headOne="Ultimte Learning Bot"
          priceOne="$194.49"
          headSec="The Pooh Eeyore Donkey"
          priceSec="$146.56"
          headThree="Paw Patrol Deluxe vehicle"
          priceThree="$180.19"
        />
      </div>
      <div className="col pt-5 pt-lg-0  p-0 order-md-1 order-lg-2">
        <div
          className="card text-center border-0 rounded-0 w-100"
          style={{  background: "#fbd85d" }}
        >
          <div className="" style={{ position: "relative" }}>
            <img
              src={Shop}
              className="object-fit img-fluid mx-auto"
              style={{ position: "relative", top: "-50px" }}
              width={150}
              alt="..."
            />
            <div className="" style={{ position: "relative", top: "-30px" }}>
              <a href="/" className="underline text-dark fs-5 fw-normal">
                Toys & Games
              </a>
            </div>
          </div>
          <div className="card-body p-0">
            <h5
              className="card-title display-6 fw-bold"
              style={{ color: "#4d4c7d" }}
            >
              Time To Play
            </h5>
            <a
              href="/"
              className="underline fw-semibold fs-5"
              style={{ color: "red" }}
            >
              Shop The Collection
            </a>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
      <div className="col-11 col-md-6 mx-auto position-relative pe-lg-0 ps-lg-5 order-md-2">
        <TimePlay
          scr={seller}
          title="Top Ratings"
          scrOne={scrFour}
          scrSec={scrFive}
          scrThree={scrSix}
          headOne="Toy Story 4 Buzz Lightyear"
          priceOne="$107.54"
          headSec="peekaboo Sock Monkey"
          priceSec="$109.30"
          headThree="Funko Pop Disney Wall-E"
          priceThree="$180.19"
        />
      </div>
    </>
  );
}

export default ProductTime;
