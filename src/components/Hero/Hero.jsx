import React from 'react'
import './Hero.css'
import arecanut from "../assets/areca nut.jpg"

 const Hero = () => {
  return (
    <div className='hero'>
            <div className='hero-left'>

                <h2> HARVESTING </h2>
                <div>
                   
                    <div className='hero-hand-icon'></div>
                    <p>ARECA NUT </p>
                    <img  className='arecanutimg' src={arecanut} alt="" />
                </div>
            </div>


    </div>
  )
}
export default Hero
