import React from 'react'
import Arriavalscard from '../inc/Arrivalscard/Arriavalscard'

function Arrivals() {
  return (
    <div className='container-fluid my-3 overflow-hidden'>
        <div className='row'>
                  <div className='text-center'>
                    <h2 className='display-6 fw-normal'>New Arrivals</h2>
                    <dl>Add our new arrivals to your weekly lineup</dl>
                  </div>
                  <div className='col-12 col-md-11 col-xl-10 mx-auto p-0'>
                  <div className='row row-cols-1 p-0 row-cols-md-2 row-cols-xl-3 mx-auto'>
                  <Arriavalscard />
                  </div>
                  </div>
        </div>
    </div>
  )
}

export default Arrivals