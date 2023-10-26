import React from 'react'
import WomanSmiling from '../assets/images/womansmiling.svg'
import Button from '../assets/Generics/Button'

const ShowcaseTwo = () => {
  return (
    <section className="container showcase-2">

        <div className="left-column-2">
            <img src={WomanSmiling} loading="lazy" alt="Woman at workplace smiling"/>
            <div className="bluebox">
                <span><h4>Samantha Brown, </h4><p className="h4-parag">Founder</p></span>
                
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>

        <div className="right-column-2">
            <p className="about">About Company</p>
            <h3>We Are Business Consulting & Credit Repair Experts</h3>
            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
            <div className="buttons">
            <Button type="dark" url="/Services" title="Learn More" />               
            <a className="btn-transparent btn-6" href="/404"><i className="fa-regular fa-circle-play"></i>Intro Video</a>
        </div>
        </div>
    </section>
  )
}

export default ShowcaseTwo