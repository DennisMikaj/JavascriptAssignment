import React from 'react'
import Kristine from '../assets/images/kristine.png'
import Mark from '../assets/images/Mark.png'
import Kimberly from '../assets/images/Kimberly.png'
import Justin from '../assets/images/Justin.png'
import Vector from '../assets/images/Vector.png'
import Cassandra from '../assets/images/Cassandra.png'
import Amanda from '../assets/images/Amanda.png'
import Jack from '../assets/images/Jack.png'
import Button from '../assets/Generics/Button'

const MeetTheTeam = () => {
  return (
    <section class="meet-our-team">
        <div class="container teams">
            <div class="section-title">
            <p>Meet Our Team</p>
            <h2 id="experience-row">Experience Team Members</h2>
        </div>
        <div class="right-button">
            <Button type="yellow" url="/404" title="Browse Team"></Button>
    </div>
    </div>

    <div class="images-5 container">
        <div class="box-1">
        <img src={Kristine} loading="lazy" alt="Picture of employee"/>
            <h5>Kristine Palmer</h5>
            <p>Chef Operation Officer</p>
        </div>
        <div class="box-1">
            <img src={Mark} loading="lazy" alt="Picture of employee"/>
            <h5>Mark Aubri</h5>
            <p>Senior Consultant</p>
        </div>
        <div class="box-1">
            <img src={Kimberly} loading="lazy" alt="Picture of employee"/>
            <h5>Kimberly Hansen</h5>
            <p>Senior Consultant</p>
        </div>
        <div class="box-1">
            <img src={Justin} loading="lazy" alt="Picture of employee"/>
            <h5>Justin Willoman</h5>
            <p>Senior Tech Consultant</p>
        </div>
        </div>

        <div class="buttons">
            <button class="small-buttons"></button>
            <button class="active-button-1 small-buttons"></button>
            <button class="small-buttons"></button>
            <button class="small-buttons"></button>
            <button class="small-buttons"></button>
        </div>


        <div class="container section-title testimonial">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
            <div class="testimonial-columns">
            <div class="flex-column">
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <p class="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".</p>
                <div class="bottom-content">  
            <img src={Cassandra} loading="lazy" alt="image of client"/>
            <h4>Cassandra Warren</h4>
            <p>Business Manager, Dorfus</p>
            </div>
        </div>
            <div class="flex-column">
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <p class="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".</p>
                <div class="bottom-content">
                <img src={Amanda} loading="lazy" alt="image of client"/>
                <h4>Amanda Tulling</h4>
                <p>Senior Developer, Square</p>
            </div>
            </div>
            <div class="flex-column">
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <img src={Vector} alt="star rating"/>
                <p class="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".</p>
                <div class="bottom-content"> 
                <img src={Jack} loading="lazy" alt="image of client"/>
                <h4>Jack McDogglas</h4>
                <p>Key Account Manager, Gobona</p>
            </div>
        </div>
    </div>
    <Button type="dark" url="/services" title="All Recent Projects" ></Button>

    </div>
    </section>
  )
}

export default MeetTheTeam