import React from 'react'
import Logo from '../assets/images/Logo.svg'
import {NavLink, Link} from 'react-router-dom'
import Button from '../assets/Generics/Button'

const Header = () => {
  return (
    <header>
        <div className="container">
              <Link to="/"><img src={Logo} alt="Crito logotype"/></Link>
                <div className="dropdown">
                <button id="toggleDropdown" className="dropbtn"><i className="menu-bars fa-solid fa-bars-staggered"></i></button>
                <div className="dropdown-content">
        <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">News</a></li>
            <li><a href="contacts.html">Contact</a></li>
        </ul>
        </nav>
        </div>
        </div>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-info">
                        <div className="content-box">
                            <i className="fa-solid fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-solid fa-envelope-circle-check"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                        
                    </nav>
                    <Button type="yellow" title="Login" url="/login"/>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header