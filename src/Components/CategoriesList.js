import React from 'react'
import { useArticles } from '../assets/Generics/ArticleContext'

const CategoriesList = () => {

    const {articles} = useArticles()

    const categoryCounts = articles.reduce((counts, article) => {
        const category = article.category
        counts[category] = (counts[category] || 0) + 1
        return counts
    }, {})
    

  return (
    <div className="recent-posts-box">
        <h5 className="box-title" data-text="Cat">egories</h5>
        <ul>
                {Object.keys(categoryCounts).map((category) => (
                <li key={category} className="article-list">
                    <div className="inline-text">
                <h6>{category} -</h6>
                <p className="date-text">{`Posts: ${categoryCounts[category]}`}</p></div>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default CategoriesList