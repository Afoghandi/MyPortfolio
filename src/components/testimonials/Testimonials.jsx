import React from 'react'
import './testimonials.css'
import {Data} from './Utils'

// Import Swiper core required modules
import {  Pagination, Navigation} from 'swiper'

import{ Swiper, SwiperSlide} from 'swiper/react'

//Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      modules={[ Pagination, Navigation]} 
      spaceBetween={40} 
      slidesPerView={1} 
      pagination={{clickable:true}} >
        

{Data.map(({avatar, name, review}, index) =>{
  return(
    <SwiperSlide className="testimonial" key={index}>
    <div className="client__avatar">
      <img src={avatar} alt='Avatar1'/>
     
    </div>
    <h5 className='client__name'>
        {name}
      </h5>
      <small className='client__review'>

        {review}
      </small>
  </SwiperSlide>
  )
} )}
       

       
        
        
      </Swiper>
      </section>
  )
}

export default Testimonials