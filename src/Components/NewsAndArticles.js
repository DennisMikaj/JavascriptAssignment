import React from 'react'
import Button from '../assets/Generics/Button'
import WomanAtWork from '../assets/images/womanatwork.png'
import ChatGPTImage from '../assets/images/chatgpt-image.png'
import CSSBooks from '../assets/images/css-books.png'
import GetArticles from './GetArticles'

const NewsAndArticles = () => {
  return (
    
    <section className="container articles">

    <p className="section-title">Article & News</p>
    <div className="flex-row">
    <h2>Get Every Single Articles & News</h2>
    <Button type="transparent" url="/intro" title="Browse Articles" />
</div>
{/* <div className="articles-images"> */}
<GetArticles />

    {/* <div className="boxes">
<img src={WomanAtWork} loading="lazy" alt="Woman at work"/>
<div className="date-box">
    <h5>25</h5>
    <p>Mar</p>
</div>
<p id="business-text">Business</p>
<h5>How To Use Digitalization In The Classroom</h5>
<p id="business-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
</div>
<div className="boxes">
<img src={ChatGPTImage} loading="lazy" alt="image of chatGPT information"/>
<div className="date-box">
    <h5>17</h5>
    <p>Mar</p>
</div>
<p id="business-text">Business</p>
<h5>How To Implement Chat GPT In Your Projects</h5>
<p id="business-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
</div>
<div className="boxes">
<img src={CSSBooks} loading="lazy" alt=""/>
<div className="date-box">
    <h5>13</h5>
    <p>Mar</p>
</div>
<p id="business-text">Business</p>
<h5>The Guide To Support Modern CSS Design</h5>
<p id="business-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

</div> */}
{/* </div> */}

<div className="buttons">
<Button type="small-2" />
<Button type="small-2" />
<Button type="small-2" />
<Button type="small-2" />
<Button type="small-2" />
</div>


</section>
  )
}

export default NewsAndArticles