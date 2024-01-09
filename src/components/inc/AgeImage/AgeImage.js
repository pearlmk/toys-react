import React, { Component } from 'react'
// import Slider from 'react-slick'
import Age1 from '../../../img/babytoy (8).png'
import Age2 from '../../../img/babytoy (9).png'
import Age3 from '../../../img/babytoy (11).png'
import Age4 from '../../../img/babytoy (7).png'
import Age5 from '../../../img/babytoy (10).png'

export default class AgeImage extends Component {  
  render() {
    const AgeImage = [
        {id:0, name:'New Born', scr: Age1,},
        {id:1, name:'Infant', scr: Age2,},
        {id:2, name:'Toddler', scr: Age3,},
        {id:3, name:'Preschool', scr: Age4,},
        {id:4, name:'School age', scr: Age5,},
    ]
    return (
        <div className='mx-auto'>
        {
            AgeImage.map(item => (
                <figure className="figure text-center mx-md-3 mx-lg-2 mx-xl-4"  key={item.id}>
                <img src={item.scr} className="figure-img img-fluid rounded object-fit" width={170} alt={item.name} />
                <figcaption class="figure-caption">{item.name}</figcaption>
              </figure>
            ))
        }
        </div>
    )
  }
}
