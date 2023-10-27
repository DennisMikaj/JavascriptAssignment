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
import TeamMembers from './TeamMembers'
import Testimonials from './Testimonials'

const MeetTheTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container teams">
            <div className="section-title">
            <p>Meet Our Team</p>
            <h2 id="experience-row">Experience Team Members</h2>
        </div>
        <div className="right-button">
            <Button type="yellow" url="/404" title="Browse Team"></Button>
    </div>
    </div>

    <div className="images-5 container">
        <TeamMembers img={Kristine} name="Kristine Palmer" role="Chef Operation Officer" />
        <TeamMembers img={Mark} name="Mark Aubri" role="Senior Consultant" />
        <TeamMembers img={Kimberly} name="Kimberly Hansen" role="Senior Consultant" />
        <TeamMembers img={Justin} name="Justin Willoman" role="Senior Tech Consultant" />
    </div>

        <div className="buttons">
            <Button type="small" />
            <Button type="small" />
            <Button type="small" />
            <Button type="small" />
            <Button type="small" />
            
        </div>
        <div className="container section-title testimonial">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
            <div className="flex-column">
            <Testimonials />
    </div>
    <Button type="dark" url="/services" title="All Recent Projects" ></Button>

    </div>
    </section>
  )
}

export default MeetTheTeam