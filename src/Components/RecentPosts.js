import React from 'react'
import { useArticles } from '../assets/Generics/ArticleContext'
import { Link } from 'react-router-dom'



const RecentPosts = () => {

    const {articles} = useArticles()
    const formatArticleDate = (dateString) => {
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    const sortedArticles = [...articles].sort((a, b) => new Date(b.published) - new Date(a.published));
    const recentArticles = sortedArticles.slice(0, 4);
  return (
    <div className="recent-posts-box">
        <h5 className="box-title" data-text="Rec">ent Posts</h5>
        <ul>
            {recentArticles.map((article) => (
                <li key={article.id} className="article-list">
                <Link className="article-links" to={`/news/${article.id}`}>
                <h6>{article.title}</h6>
                <p className="date-text">{formatArticleDate(article.published)}</p>
                <div className="border"></div>
                </Link>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default RecentPosts