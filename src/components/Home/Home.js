import React from 'react'
import VickyMouse  from "../../img/babytoy (14).png"
import './Home.css'

function Home() {
  return (
    <div className='container-fluid overflow-hidden'>
     <div className='row bg-success'>
    <div className='col-12 col-md-6'>
      <div className='mt-5 ms-md-5 py-md-3 pt-lg-2 d-grid justify-content-center overflow-hidden'>
          <h4 className='text-light fw-semibold h4'>Handmade</h4>
          <h1 className='text-light fw-bold display-5' >Made To Order</h1>
          <p className='text-light lh-base para' style={{letterSpacing:"1px"}}>
            From  planter  materials  to  style  options,  discover <br />
            which  planter  is  best  for  your  space</p>
          <a href='/' className='btn rounded-pill bg-light fw-normal ms-md-5 fw-semibold w-50 text-nowrap'>SHOP NOW</a>
          </div>
    </div>
    <div className='col-12 col-md-6'>
       <img  src={VickyMouse} alt=''  className='object-fit img-fluid h-100'/>
    </div>
     </div>
    </div>
  )
}

export default Home