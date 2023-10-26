import React from 'react'
import ManReading from '../assets/images/manreadingnewspaper.png'
import PersonalItems from '../assets/images/personal-items.png'
import NotebookCoffe from '../assets/images/notebook-coffecup.png'
import Charts from '../assets/images/laptop-charts.png'
import GlobalProjectList from './GlobalProjectList'
import Button from '../assets/Generics/Button'

const GlobalProjects = () => {
  return (
    <section className="global-projects">
        <div className="container">
        <div className="section-title">
            <p>Projects & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
    </div>

    




    <div className="project-and-cases">

    <GlobalProjectList url="/Services" img={ManReading} alt="Man reading a newspaper" title="Grow Your Business" text="Read More" icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>}/>
    <GlobalProjectList url="/News" img={PersonalItems} alt="Personal items" title="Why your client needs a responsive website" text="Read More" icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>}/>
    <GlobalProjectList url="/News" img={NotebookCoffe} alt="Notebook and a coffecup" title="Educate your employees to get better results" text="Read More" icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>}/>
    <GlobalProjectList url="/Contacts" img={Charts} alt="Laptop with Charts" title="Business insights is a important piece of your business" text="Read More" icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>}/>




        
    </div>

    <div className="center-button">
        <Button type="dark" url="/Services" title="All Recent projects" ></Button>
    </div>
    </div>

    </section>
  )
}

export default GlobalProjects