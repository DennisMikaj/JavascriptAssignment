import React from 'react'

    const ServiceBox = ({img, title, url, paragraph, icon}) =>  (
        <a href={url} className="box1">
            <div>
                {img}
                <h3>{title}</h3>
                <p>{paragraph}</p>
                {icon}
            </div>
        </a>
    );
    
    
    
    const OurServicesBoxes = ({img, title, url, paragraph, icon}) => {
        return (
            <ServiceBox
            img={<img className="small-line" src={img} alt="Image Alt Text" />}
            title={title} 
            url={url} 
            paragraph={paragraph}
            icon={<i className="fa-solid fa-circle-play"></i>} 
            />
        )
        }

export default OurServicesBoxes