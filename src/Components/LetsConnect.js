import React from 'react'
import LinesOne from '../assets/images/lines-1.png'
import {NavLink, Link} from 'react-router-dom'


const LetsConnect = () => {
  return (
    <>
    <section className="showcase contact-title">
        <img src={LinesOne} alt="decorative lines"/>
        <div className="container">
            <div className="contact">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contact</NavLink>
             </nav>
                <h1>Let's Connect</h1>
                </div>
      </div>
    </section>
    <section className="container">
<div className="contact-information">

        <ContactBox
        iconClass="fa-location-dot"
        title="Visit us"
        addresses={['Sveavägen 31', '111 34 STOCKHOLM']}
        />
        <ContactBox
        iconClass="fa-phone"
        title="Call us"
        phoneNumbers={['+46 (8) 121 470 50', '+46 (8) 121 470 51']}
        />
        <ContactBox
        iconClass="fa-envelope"
        title="Email us"
        emailAddresses={['info@crito.com', 'support@crito.com']}
        />

    </div>
    </section>
    </>
  )
}

const ContactBox = ({ iconClass, title, addresses, phoneNumbers, emailAddresses}) => (
    <div className="contact-boxes">
        <div className="icons">
            <i className={`fa-solid ${iconClass}`} />
        </div>
        <div className="text">
            <h3>{title}</h3>
            {addresses && addresses.map((address, index) => <p key={index}>{address}</p>)}
            {phoneNumbers && phoneNumbers.map((phone, index) => <p key={index}>{phone}</p>)}
            {emailAddresses && emailAddresses.map((email, index) => <p key={index}>{email}</p>)}
        </div>
    </div>
)

export default LetsConnect