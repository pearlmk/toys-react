import React from 'react'
import SocielMedia1 from '../../img/socialMedia (1).png'
import SocielMedia2 from '../../img/socialMedia (2).png'
import SocielMedia3 from '../../img/socialMedia (3).png'
import SocielMedia4 from '../../img/socialMedia (4).png'
import './Playhub.css'
import footer1 from '../../img/footer (1).png'
import footer2 from '../../img/footer (2).png'
import footer3 from '../../img/footer (3).png'
import footer4 from '../../img/footer (4).png'
import footer5 from '../../img/footer (5).png'
import footer6 from '../../img/footer (6).png'





function playhub() {
  return (
    <>
    <div className='container mt-3 overflow-hidden'>
    <div className='row pt-lg-5 g-4 g-lg-5'>
       <div className='col-12 col-lg-6'>
        
        <h2 className='fw-bold display-6' style={{color:'red'}}>
           Play Hub
        </h2>
        <div className='row mt-lg-5'>
         <div className='col-10 col-md-4 col-lg-6'>
          <address className='text-secondary' style={{fontSize:'14px'}}>
           71 Pilgrim Avenue Chevy Chose,MD <br />
           20815,USA
          </address>
          <ul className='list-inline'>
           <li className='list-inline-item'><a href='/'><img src={SocielMedia1} width={33} alt='' className=''/></a></li>
           <li className='list-inline-item'><a href='/'><img src={SocielMedia2} width={27} alt='' className=''/></a></li>
           <li className='list-inline-item'><a href='/'><img src={SocielMedia3} width={25} alt='' className=''/></a></li>
           <li className='list-inline-item'><a href='/'><img src={SocielMedia4} width={43} alt='' className=''/></a></li>
          </ul>
         </div>
         <div className='col-10 col-md-4 col-lg-6'>
         <p className='text-secondary' style={{fontSize:'14px'}}>
         Have a question? Give us a call or fill 
          out the contact form. We'd love to hear 
          from you
        </p> 
        <a href='/' className='fw-semibold fs-5 contact-underline text-decoration-none' style={{color:'#65b741'}}>contact us</a>
         </div>
       </div>
       </div>
       <div className='col-12 col-lg-6'>
         <div className='row g-3 g-lg-5'>
            <div className='col-10 col-md-3 col-lg-4'>
              <ul className='list-unstyled'>
              <h4 className='fs-5 fw-semibold text-uppercase border-bottom border-secondary border-1 pb-3 text-dark '>Account</h4>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>My Account</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Order History</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Wish List</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Specials</a></li>
              </ul>
            </div>
            <div className='col-10 col-md-3 col-lg-4'>
            <ul className='list-unstyled'>
              <h4 className='fs-5 fw-semibold text-uppercase border-bottom border-secondary border-1 pb-3 text-dark '>Services</h4>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Discount Returns</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Policy</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Customer Service</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Team & Condition</a></li>
              </ul>
            </div>
            <div className='col-10 col-md-3  col-lg-4'>
            <ul className='list-unstyled'>
              <h4 className='fs-5 fw-semibold text-uppercase border-bottom border-secondary border-1 pb-3 text-dark '>info</h4>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>About us</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>FAQ</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Delivary Information</a></li>
                <li className='my-3'><a href='/' className=' text-secondary text-decoration-none hover-effect'>Cantact us</a></li>
              </ul>
            </div>
         </div>
       </div>
    </div>
    </div>
    <hr />
    <div className='container'>
    <div className='row'>
        <div className='col-12 col-md-6 '>
        <h6 className='text-dark my-md-3' style={{fontSize:'14px'}}>Copyright &#169; 2023 Toys. All Right Reserved</h6>
        </div>
        <div className='col-12 col-md-6 ps-lg-5'>
            <ul className='list-inline'>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer1} alt='' className='img-fluid object-fit' style={{minWidth:'40px',maxWidth:'20px'}} /></a></li>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer2} alt='' className='img-fluid object-fit' style={{minWidth:'40px',maxWidth:'20px'}} /></a></li>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer3} alt='' className='img-fluid object-fit' style={{minWidth:'30px',maxWidth:'20px'}} /></a></li>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer4} alt='' className='img-fluid object-fit' style={{minWidth:'40px',maxWidth:'20px'}} /></a></li>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer5} alt='' className='img-fluid object-fit' style={{minWidth:'50px',maxWidth:'20px'}} /></a></li>
           <li className='list-inline-item mx-md-3'><a href='/'><img src={footer6} alt='' className='img-fluid object-fit' style={{minWidth:'40px',maxWidth:'20px'}} /></a></li>
            </ul>
        </div>
    </div>
   </div>
   </>
  )
}

export default playhub