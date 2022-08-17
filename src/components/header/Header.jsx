import React from 'react'
import CTA from './CTA'
import ME from '../../assests/modelPortfolio.png'
import './header.css'
import HeaderScroll from './HeaderScroll'
const Header = () => {
  return (
  <header>
    <div className="container header__container">
<h5> Hello I'm</h5>
<h1>Rafa Oshun</h1>

<h5 className="text-light">
FullStack Developer
</h5>
<CTA/>
<HeaderScroll/>
<div className="me">
  <img src ={ME} alt="" />
</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header