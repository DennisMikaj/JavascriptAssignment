import React from 'react'
import LineTwo from '../assets/images/Line-2.png'
import ReversedLines from '../assets/images/lines-reversed.png'
import OurServicesBoxes from './OurServicesBoxes'
import Button from '../assets/Generics/Button'



const OurServices = () => {
  return (
    <section className="services">
        <div className="container title">
            <p className="h4-parag">Our Services</p>
            <h2>We Provide The Best Services For Consulting</h2>
        </div>

        <div className="container services-boxes">
        <OurServicesBoxes img={LineTwo} title="Business Advice" url="/" paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon=""/>
        <OurServicesBoxes img={LineTwo} title="Startup Business" url="/" paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon=""/>
        <OurServicesBoxes img={LineTwo} title="Financial Advice" url="/" paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon=""/>
        <OurServicesBoxes img={LineTwo} title="Risk Management" url="/" paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon=""/>
        
        
        </div>
        <div className="button-7">
            <Button type="transparent" url="/services" title="Browse Services"/>
        <div>
            <img className="reversed-lines" src={ReversedLines} alt="decorative lines"/>
        </div>
    </div>

    

    </section>
  )
}

export default OurServices