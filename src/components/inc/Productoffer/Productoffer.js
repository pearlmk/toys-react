import React from "react";
import "./Productoffer.css";
import productOffer1 from "../../../img/babytoy (18).png";
import productOffer2 from "../../../img/babytoy (12).png";
import productOffer3 from "../../../img/babytoy (17).png";


function Productoffer() {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 mb-2">
        <div className="card rounded-4 productOfferCardOrange shadow-sm">
          <div className="row g-0">
            <div className="col col-xl-6 my-3 d-flex justify-content-center align-items-center">
              <div className="text-center NewScootersText">
                <h3 className="text-nowrap text-white fw-bold text-center">
                  New Scooters
                </h3>
                <p className="text-dark text-center fw-medium text-opacity-75">
                  Best Deals And Discounts
                </p>
              </div>
            </div>
            <div className="col col-xl-6 text-center z-3">
              <img
                src={productOffer1}
                alt="NewScooters"
                width={210}
                className="object-fit NewScootersImg"
              />
            </div>
          </div>
          <div
            className="row align-items-end bg-white g-0"
            style={{ borderRadius: "0 0 15px 15px" }}
          >
            <h6 className="ms-3 mt-2 fw-bold">Gifts & Toys House</h6>
            <p className="ms-3 text-dark">Up To 51% Off</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4 mb-2">
        <div className="card rounded-4 productOfferCardPink shadow-sm">
          <div className="row g-0 ">
            <div className="col col-xl-6 my-3  d-flex justify-content-center align-items-center">
              <div className="text-center NewScootersText">
                <h3 className="text-nowrap text-white fw-bold text-center">
                Soft Toys
                </h3>
                <p className="text-dark text-center fw-medium text-opacity-75">
                Big Toy Sale At Toy's House
                </p>
              </div>
            </div>
            <div className="col col-xl-6 text-center z-3">
              <img
                src={productOffer2}
                alt="NewScooters"
                width={190}
                className="object-fit NewScootersImg"
              />
            </div>
          </div>
          <div
            className="row align-items-end bg-white g-0"
            style={{ borderRadius: "0 0 15px 15px" }}
          >
            <h6 className="ms-3 mt-2 fw-bold">Cute Wooden Toy</h6>
            <p className="ms-3 text-dark">Up To 40% Off</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4 mb-2">
        <div className="card rounded-4 productOfferCardVoilet shadow-sm">
          <div className="row g-0">
            <div className="col col-xl-6 my-3  d-flex justify-content-center align-items-center">
              <div className="text-center NewScootersText">
                <h3 className="text-nowrap text-white fw-bold text-center">
                Flying Toys
                </h3>
                <p className="text-dark text-center fw-medium text-opacity-75">
                With Remote constroller
                </p>
              </div>
            </div>
            <div className="col col-xl-6 text-center z-3">
              <img
                src={productOffer3}
                alt="NewScooters"
                width={210}
                className="object-fit NewScootersImg"
              />
            </div>
          </div>
          <div
            className="row align-items-end bg-white g-0"
            style={{ borderRadius: "0 0 15px 15px" }}
          >
            <h6 className="ms-3 mt-2 fw-bold">Baby & Toy</h6>
            <p className="ms-3 text-dark">Up To 51% Off</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productoffer;
