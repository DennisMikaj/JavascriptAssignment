import React from 'react'
import Button from '../assets/Generics/Button'
import GetArticles from './GetArticles'

const NewsAndArticles = () => {
  return (
    
    <section className="container articles">

    <p className="section-title">Article & News</p>
    <div className="flex-row">
    <h2>Get Every Single Articles & News</h2>
    <Button type="transparent" url="/news" title="Browse Articles" />
</div>
<GetArticles />

    

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