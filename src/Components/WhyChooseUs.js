import React from 'react'
import OfficeWorkers from '../assets/images/officeworkers.png'
import WhyChooseUsList from './WhyChooseUsList'

const WhyChooseUs = () => {
  return (
    <section className="container">
        <div className="why-choose-us">
            <p className="h4-parag">Why Choose Us</p>
            <h2 >Why We Are The Best Consulting Agency</h2>
            <div className="boxes">
                <WhyChooseUsList icon={<i className="fa-regular fa-thumbs-up"/>} title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur."/>
                <WhyChooseUsList icon={<i className="fa-regular fa-gem"/>} title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur."/>
                <WhyChooseUsList icon={<i className="fa-solid fa-bezier-curve"/>} title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur."/>
                <WhyChooseUsList icon={<i className="fa-solid fa-brain"/>} title="Artificial Intelligence" text="Lorem, ipsum dolor sit amet consectetur."/>
            </div>
            </div>      
            <div className="container image-1">
             <img src={OfficeWorkers} loading="lazy" alt="officeworkers discussing"/> 
            </div>
    </section>
  )
}

export default WhyChooseUs