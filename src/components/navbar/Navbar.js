import React, { useState } from 'react'
import logo from '../../assets/n-logo.png'
import contactImg from '../../assets/contact.png'
import menuBar from '../../assets/menu.png'
import closeIcon from '../../assets/close.png'
import './navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => setShowMenu(!showMenu)

  return (
    <div className='navbarContainer'>
    <div className='navbar'>
      <img className='navbarLogo' src={logo} alt='logo' onClick={() => {
        document.getElementById('desktopHero').scrollIntoView({behavior: 'smooth'})
      }}/>
      <div className='desktopMenu'>
       <Link 
       activeClass='active'
       to='desktopHero' 
       smooth={true} 
       offset={-100} 
       spy={true}
       duration={500} 
       className='desktopMenuList'>
        Home
        </Link>
        
       <Link 
       activeClass='active' 
       to='skills'
       smooth={true}
       offset={-60}
       spy={true}
       duration={500} 
       className='desktopMenuList'>
        About
        </Link>

       <Link 
       activeClass='active' 
       to='works' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='desktopMenuList'>
        Portfolio
        </Link>

       <Link 
       activeClass='activecontacts' 
       to='clients' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='desktopMenuList'>
        Client
        </Link>
      </div>

      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contacts').scrollIntoView({behavior: 'smooth'})
      }}>
        <img className='desktopmenuImg' src={contactImg} alt=''/>
        Contact me
      </button>

     { showMenu ? <img src={closeIcon} alt='close' className='menu' onClick={handleShowMenu} /> :
     <img className='menu'  src={menuBar} alt='logo' onClick={handleShowMenu}/>
     }
    
      <div className={showMenu ? "mobileMenu activeMenu" : "mobileMenu"}>
       <Link 
       activeClass='active' 
       to='desktopHero' 
       smooth={true} 
       offset={-100} 
       spy={true}
       duration={500} 
       className='listItem' 
       onClick={closeMenu}
       >
        Home
        </Link>
       <Link 
       activeClass='active' 
       to='skills' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='listItem' 
       onClick={closeMenu}>
        About</Link>
       <Link 
       activeClass='active' 
       to='works' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='listItem' 
       onClick={closeMenu}>
        Portfolio</Link>
       <Link 
       activeClass='active' 
       to='clients' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='listItem' 
       onClick={closeMenu}>
        Client</Link>
       <Link 
       activeClass='active' 
       to='contacts' 
       smooth={true} 
       offset={-50} 
       spy={true}
       duration={500} 
       className='listItem' 
       onClick={closeMenu}>
        Contact</Link>
       </div>
    </div>
    </div>
  )
}

export default Navbar
