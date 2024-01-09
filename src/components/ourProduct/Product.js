import React from "react";
import Productcard from "../inc/Productcard/Productcard";
import toysale from "../../img/toysale.jpg";
import Productoffer from "../inc/Productoffer/Productoffer";
import "./Product.css";
import ProductTime from "../inc/ProductTime/ProductTime";

function Product() {
  return (
    <div className="container my-2 mt-xl-5  z-n1">
      <div className="text-center">
        <h2 className="display-6 fw-normal">Our Products</h2>
        <dl className="my-2">Add our Product to your weekly lineup</dl>
      </div>
      {/* toy sale */}
      <div className="row py-5 py-lg-5 g-3 text-center gx-xxl-1">
        <div className="col-md-8 col-lg-6 col-xl-6 col-xxl-5">
          <img
            src={toysale}
            alt={toysale}
            className="object-fit img-fluid rounded-4 shadow-sm w-100 h-100"
          />
        </div>
        <div className="col-12 col-md-4 col-lg-6 mx-auto">
          <Productcard />
        </div>
      </div>
      {/* toy offer */}
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-xl-5">
          <Productoffer />        
      </div>
      {/* toy time to play */}
      <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3 gy-3 gx-md-5 g-lg-5 my-2 my-lg-3">
        <ProductTime />
      </div>
    </div>
  );
}

export default Product;
