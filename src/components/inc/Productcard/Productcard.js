import React from "react";
import Productcard1 from "../../../img/babytoy (22).png";
import Productcard2 from "../../../img/babytoy (24).png";
import Productcard3 from "../../../img/babytoy (15).png";
import Productcard4 from "../../../img/babytoy (5).png";

function Productcard() {
  const Productcard = [
    { id: 0, name: "Assorted Baby Dolls", price: 55, scr: Productcard1 },
    { id: 0, name: "Minions with Dumbells", price: 50, scr: Productcard2 },
    { id: 0, name: "Dino Rescue Dino Patroller", price: 39, scr: Productcard3 },
    { id: 0, name: "Gundam Barbatos", price: 80, scr: Productcard4 },
  ];

  return ( 
    <div className="row">
    {
      Productcard.map( item => (
      <div className="col-12 col-lg-6 h-100">
      <div className="card border-0 mx-auto">
        <img src={item.scr} className="card-img-top object-fit shadow-sm rounded-3 p-3 p-md-4" width={150} height={200} style={{background: '#f4f2eab8'}} alt="" />
        <div className="card-body text-center">
          <p className="card-text fw-bold text-nowrap">
          {item.name} <br />
          <span>${item.price}.00</span>
          </p>
        </div>
      </div>
      </div>
      ))
}
    </div>

  );
}

export default Productcard;
