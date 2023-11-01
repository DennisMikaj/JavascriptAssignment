import React from 'react'
import WhiteLogo from '../assets/images/Logo-white.svg'
import DecorativeLines from '../assets/images/Element-2.png'

const BottomLinks = () => {

    const companyLinks = [
        { text: 'About', href: '/contacts'},
        { text: 'Features', href: '/'},
        { text: 'Works', href: '/'},
        { text: 'Career', href: '/'},
    ];
    const helpLinks = [
        { text: 'Customer Support', href: '/'},
        { text: 'Delivery Details', href: '/'},
        { text: 'Terms & Conditions', href: '/'},
        { text: 'Privacy Policy', href: '/'},
    ];
    const resoursesLinks = [
        { text: 'Free eBooks', href: '/'},
        { text: 'Development Tutorial', href: '/'},
        { text: 'How to - Blog', href: '/'},
        { text: 'Youtube Playlist', href: '/'},
    ];
    const lastLinks = [
        { text: 'Free eBooks', href: '/'},
        { text: 'Development Tutorial', href: '/'},
        { text: 'How to - Blog', href: '/'},
        { text: 'Youtube Playlist', href: '/'},
    ];

    const renderLinks = (links) => (
        <div className="content-2">
            {links.map((links, index) => (
                <a key={index} href={links.href}>
                    {links.text}
                </a>
            ))}
        </div>
    )

  return (
    <section className="bottom-part">
    <div className="container">
    <div className="content">
        <a href="index.html"><img src={WhiteLogo} loading="lazy" alt="logo with white text"/></a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
    </div>
    <nav className="grid-container">
        {/* {renderLinks(companyLinks)}
        {renderLinks(helpLinks)}
        {renderLinks(resoursesLinks)} */}
    <div className="content-2">
        <h2>Company</h2>
        {renderLinks(companyLinks)}
        </div>
        <div className="content-2">
        <h2>Help</h2>
        {renderLinks(helpLinks)}
        </div>

        <div className="content-2">
        <h2>Resourses</h2>
        {renderLinks(resoursesLinks)}
        </div>
        <div className="content-2">
        <h2>Links</h2>
        {renderLinks(lastLinks)} 

         </div>
        </nav>
         <img className="bottom-lines" src={DecorativeLines} loading="lazy" alt="Decorative lines"/>
</div>
</section>
  )
}

export default BottomLinks