import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useArticles } from '../assets/Generics/ArticleContext';



function formatPublishedDate(published) {
    const date = new Date(published);
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'short'});
    return {day, month};
}



function NewsAndArticlesPage() {
    const { articles } = useArticles()

    const newestArticle = articles.slice(0, 9);

    return (
        <>
        <div className="container">
        <h1>Our News & Articles</h1>
        </div>
        <div className="articles-images articles-images-1 container">
            {newestArticle.map((article) => {
                const {day, month} = formatPublishedDate(article.published);
                return(
            <Link className="article-links" to={`/news/${article.id}`}>        
            <section key={article.id} className="articles">
            <div className="boxes">
                <img src={article.imageUrl} loading="lazy" alt="Woman at work"/>
            <div className="date-box">
                <h5>{day}</h5>
                <p>{month}</p>
            </div>
                <p id="business-text">{article.category}</p>
                <h5>{article.title}</h5>
                <p id="business-text">{article.content}</p>
            </div>
            </section>
            </Link>
            
            )})}
        </div>
        </>
    )
}

export default NewsAndArticlesPage;

