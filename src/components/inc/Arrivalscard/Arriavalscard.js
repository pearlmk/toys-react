import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image1  from '../../../img/babytoy (16).png';
import Image2  from '../../../img/babytoy (13).png';
import Image3  from '../../../img/babytoy (19).png';
import Image4  from '../../../img/babytoy (2).png';
import Image5  from '../../../img/babytoy (25).png';
import Image6  from '../../../img/babytoy (26).png';
import './ArrCard.css'


function Arriavalscard() {

 const arrivalCard = [
    {id:0, name:"Super Mario Toad Plush", price:59.00, Image:Image1, },
    {id:1, name:"LEGO Series 4 Minifigure Hazmat Guy", price:79.00, Image:Image2,  },
    {id:2, name:"unicorn fly horse with rainbow wings", price:110.00, Image:Image3,  },
    {id:3, name:"VTech Ride & Recycle Truck", price:80.00, Image:Image4,},
    {id:4, name:"the Bat Dune Buggy", price:45.00, Image:Image5, },
    {id:5, name:"Thanos Funko Pop", price:150.00, Image:Image6,  },
 ]

  return (
    <>
    {arrivalCard.map(item => (
      <div className='col mb-lg-3'>
    <div className="card card-bg my-2 my-md-4 border-0 rounded-3">
      <div className='mx-2 mx-md-3 my-3 d-grid justify-content-center rounded-4 shadow bg-light'>
    <img src={item.Image} className="card-img-top object-fit img-fluid" alt={item.name} style={{Width: '130px',height:'230px',padding:'15px'
    }}  />
    
    <span className='d-flex flex-row justify-content-center my-2'>
      <FaStar className='mx-1' style={{color:'f8de22'}} />
      <FaStar className='mx-1' style={{color:'f8de22'}} />
      <FaStar className='mx-1' style={{color:'f8de22'}} />
      <FaStar className='mx-1' style={{color:'f8de22'}} />
      <FaStar className='mx-1' style={{color:'f8de22'}} />
      </span>
      </div>
    <div className="card-body">
      <h5 className="card-title text-center fs-6 text-nowrap">{item.name}</h5>
      <p className="card-text text-center text-danger">${item.price}.00</p>
    </div>
    </div>
    </div>
    ))
    }
  </>
  )
  }
export default Arriavalscard