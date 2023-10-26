import React from 'react'
import Button from '../assets/Generics/Button'
import FeaturesBoxes from './FeaturesBoxes'

const Features = () => {
  return (
    <section className="container features">
    <div className="left-column-1">
        <p className="">Features</p>
        <h2 className="">Our Accounting is trusted by thousand of companies</h2>
        <Button type="yellow" url="/services" title="Learn More" />
    </div>
        <div className="right-column-1">
                <FeaturesBoxes />
            </div>
        

    
    </section>
  )
}

export default Features