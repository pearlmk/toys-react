import React from "react";

function TimePlay({
  title,
  scr,
  scrOne,
  scrSec,
  scrThree,
  headOne,
  priceOne,
  headSec,
  priceSec,
  headThree,
  priceThree,
}) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-11 card overflow-hidden mb-1 text-bg-dark rounded-4 rounded-bottom-0 bg-opacity-50" style={{maxHeight:'150px',minHeight:'120px'}}>
          <img src={scr} className="card-img" width={100} alt="" />
          <div className="card-img-overlay d-grid justify-content-center align-items-center">
            <h5 className="card-title text-white fw-bold fs-2">{title}</h5>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-11 card  mb-1 rounded-0" style={{maxHeight:'180px',minHeight:'120px'}}>
          <div className="row g-0 mt-md-3">
            <div className="col-md-4 p-2 text-center">
              <img src={scrOne} className="img-fluid object-fit " width={60} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0 text-center text-md-start ms-md-3">
                <h5 className="card-title fs-6">{headOne}</h5>
                <p className="card-text fs-6" style={{color:'red'}}>{priceOne}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-11 card  mb-1 rounded-0" style={{maxHeight:'180px',minHeight:'120px'}}>
          <div className="row g-0 mt-md-3">
            <div className="col-md-4 p-2 text-center">
              <img src={scrSec} className="img-fluid object-fit " width={75} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0 text-center text-md-start ms-md-3">
                <h5 className="card-title fs-6">{headSec}</h5>
                <p className="card-text fs-6" style={{color:'red'}}>{priceSec}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-11 card  mb-1 rounded-0" style={{maxHeight:'180px',minHeight:'120px'}}>
          <div className="row g-0 mt-md-3">
            <div className="col-md-4 p-2 text-center">
              <img src={scrThree} className="img-fluid object-fit " width={75} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0 text-center text-md-start ms-md-3">
                <h5 className="card-title fs-6">{headThree}</h5>
                <p className="card-text fs-6" style={{color:'red'}}>{priceThree}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default TimePlay;
