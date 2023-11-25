import React, { useEffect, useState } from 'react'
import ceo from '../../assets/ceo.png'
import btnImg from '../../assets/hireme.png'
import './hero.css'
import { Link } from 'react-scroll'
import Loader from '../loader/Loader'

function Hero() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : (
    <section id='desktopHero'>
      <div className='heroContent'>
       <span className='hello'>Hello, <br/> </span>
       <span className='introText'>I'm <span className='introName'>Sagacious</span> <br/>A Mobile Developer</span>
       <p className='introDetails'>I am a skilled developer with experience in creating <br/> visually appealing and user friendly app and websites</p>
       <Link activeClass='active' 
       to='contacts' 
       smooth={true} 
       offset={-100} 
       duration={500}>
        <button className='btn'>
          <img className='btnImg' src={btnImg} alt=''/> 
          Hire Me
          </button>
          </Link>
      </div>
      <img className='heroImg' src={ceo} alt='ceo'/>
    </section>
    )}
    </>
  )
}

export default Hero