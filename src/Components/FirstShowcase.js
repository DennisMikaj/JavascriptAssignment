import React from 'react'
import ManWithATablet from '../assets/images/manwithatablet.svg'
import DecorativeLines from '../assets/images/lines-1.png'
// import {Link} from 'react-router-dom'
import Button from '../assets/Generics/Button'

const FirstShowcase = () => {
  return (
    <section className="showcase first-showcase">

        <div className="container">
            <div className="content">

                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button type="yellow" url="/contacts" title="Get Consulting"  />
                <Button type="transparent" url="/services" title="Learn More"  />
                
            </div>
            <img src={ManWithATablet} alt="A man in a suit with a tablet" />
        </div>
        <img className="decorative-lines" src={DecorativeLines} alt="decorative lines" />

    </section>
    
  )
}

export default FirstShowcase