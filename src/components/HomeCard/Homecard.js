import React from 'react'
import Card from 'react-bootstrap/Card';
import './Homecard.css'


function Homecard() {

  const homeCard = [
    {id:0, title:"SAFE AND HANDMADE" , contant: "Toy we sell are provided by the best manufactures on the market safe, handmade & certified", color:"danger",},
    {id:1, title:"FAST DELEVERY" , contant: "We have a dedicated packaging and delivery team that will make everyhing for fast shipment",color:"success"},
    {id:2, title:"FREE RETURNS" , contant: "You can return all purchased for up to 30 days after transcation. no string attached",color:"warning"},
  ];


  return (
    <div className='container-fluid px-1 px-lg-5 overflow-hidden'>
    <div className='row d-flex flex-column flex-md-row justify-content-evenly my-2 my-md-5'>
        { homeCard.map(item => (
       <Card className='col-10 col-md-3 homecard  rounded-4 shadow border-0 mx-auto mx-md-0 my-2 my-md-0' key={item.id} >
      <Card.Body>
        <Card.Title className='text-center fw-bold my-3 text-light fs-6'>{item.title}</Card.Title>
        <Card.Text className='my-1 text-light homeContant'>
         {item.contant}
        </Card.Text>
      </Card.Body>
    </Card>
    ))
}
    </div>
    </div>
  )
}

export default Homecard