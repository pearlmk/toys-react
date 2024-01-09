import React from 'react'
import Home from '../../components/Home/Home'
import Homecard from '../../components/HomeCard/Homecard'
import Arrivals from '../../components/Arrivals/Arrivals'
import Awardwin from '../../components/awardWin/Awardwin'
import Product from '../../components/ourProduct/Product'
import Updated from '../../components/Updated/Updated'
import Play from '../../components/PlayHub/PlayHub'
import Age from '../../components/Age/Age'


function Homepage() {
  return (
    <>
      <Home />
      <Homecard />
      <Arrivals />
      <Awardwin />
      <Age />
      <Product />
      <Updated />
      <Play />
    </>
  )
}

export default Homepage