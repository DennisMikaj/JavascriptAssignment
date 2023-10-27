import React from 'react'
import Vector from '../assets/images/Vector.png'
import Cassandra from '../assets/images/Cassandra.png'
import Amanda from '../assets/images/Amanda.png'
import Jack from '../assets/images/Jack.png'


const testimonialData = [
    {
        stars: '5',
        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".',
        clientImage: Cassandra,
        clientName: 'Cassandra Warren',
        clientTitle: 'Business Manager, Dorfus'
    }, {
        stars: '5',
        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".',
        clientImage: Amanda,
        clientName: 'Amanda Tulling',
        clientTitle: 'Senor Developer, Square'
    }, {
        stars: '5',
        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus voluptatum, odio nihil incidunt ad sequi enim unde dolorum voluptas mollitia! Facere voluptatem deleniti veritatis, ipsa sed atque temporibus exercitationem".',
        clientImage: Jack,
        clientName: 'Jack McDogglas',
        clientTitle: 'Key Account Manager, Gobona'
    }
]


const Testimonials = () => {
    return (
      <div className="testimonial-columns">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-text" key={index}>
            {Array.from({ length: parseInt(testimonial.stars) }).map((_, starIndex) => (
              <img key={starIndex} src={Vector} alt="star rating" />
            ))}
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="bottom-content">
              <img src={testimonial.clientImage} loading="lazy" alt={testimonial.clientName} />
              <h4>{testimonial.clientName}</h4>
              <p>{testimonial.clientTitle}</p>
            </div>
        </div> 
        ))}
      </div>
    );
  };
export default Testimonials