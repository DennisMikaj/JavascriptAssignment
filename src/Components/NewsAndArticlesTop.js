import React from 'react'
import LinesOne from '../assets/images/lines-1.png'
import { Link } from 'react-router-dom'

const NewsAndArticlesTop = () => {
  return (
    <section className="showcase contact-title">
    <img src={LinesOne} alt="decorative lines"/>
    <div className="container">
        <div className="contact">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <h1>News & Articles</h1>
            </div>
            </div>
        
</section>
  )
}

export default NewsAndArticlesTop