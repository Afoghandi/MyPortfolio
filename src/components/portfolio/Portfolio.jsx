import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/project4.jpg'
import {data} from './Utils'

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>Most Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, title, github,demo})=>{
        return(
          <article className="portfolio__item" key={id} >

          <div className="portfolio__item-image">
          
            <img src={image} alt='' />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' >Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div> 
          </article>)
        })}



      </div>
    </section>
  )
}

export default Portfolio