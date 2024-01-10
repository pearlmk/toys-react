import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Navbaricon.css'

function Navbaricon() {
  return (
    <div>
     <ul className='list-unstyled list-inline icons-hover'>
        <li className='list-inline-item mx-4 mx-md-3'><CiSearch className='fs-5'  /></li>
        <li className='list-inline-item mx-4 mx-md-3'><FaUser className='fs-6'  /></li>
        <li className='list-inline-item mx-4 position-relative mx-md-3'><FaRegHeart className='fs-6' /><span className='bg-danger rounded-circle  badge position-absolute top-0 start-50 translate-top' style={{fontSize:"9px"}}>0</span></li>
        <li className='list-inline-item position-relative mx-2 mx-md-3'><MdOutlineShoppingBag className='fs-6'  /><span className='bg-danger rounded-circle  badge position-absolute top-0 start-50 translate-top' style={{fontSize:"9px"}}>0</span></li>
     </ul>
    </div>
  )
}

export default Navbaricon