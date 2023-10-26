import React from 'react'

const FeaturesBoxes = () => {
    const Features = [
        { icon: "fa-regular fa-handshake", title: "Business Advice", paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-regular fa-lightbulb", title: "Startup Business", paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-solid fa-chart-line", title: "Financial advice", paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { icon: "fa-solid fa-people-carry-box", title: "Risk Management", paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        
      ];
  
    return (
    <div className="icon-group">
        {Features.map((feature, index) => (
            <div key={index}> 
                <i className={feature.icon}></i> 
                <h4>{feature.title}</h4> 
                <p>{feature.paragraph}</p>

            </div>
        ))
        }
   
    </div>
  )
}

export default FeaturesBoxes