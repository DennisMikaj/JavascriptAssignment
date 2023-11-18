import React, { useEffect } from 'react'
import { useArticles } from '../assets/Generics/ArticleContext'
import Header from '../Components/Header'
import SearchRecentPosts from '../Components/SearchRecentPosts'
import RecentPosts from '../Components/RecentPosts'
import NewsAndArticles from '../Components/NewsAndArticles'
import BottomLinks from '../Components/BottomLinks'
import Footer from '../Components/Footer'
import Oval from '../assets/images/OvalCopy.svg'
import { Link, useParams } from 'react-router-dom'
import CategoriesList from '../Components/CategoriesList'

const ArticleDetails = () => {
    const {articles} = useArticles()
    const {articleId} = useParams()

    const id = parseInt(articleId, 10);

    const article = articles.find((article) => article.id === articleId);
    

    const formatArticleDate = (dateString) => {
      const options = {year: 'numeric', month: 'short', day: 'numeric'}
      return new Date(dateString).toLocaleDateString(undefined, options)
  }


    useEffect(() => {
      window.scrollTo(0, 0) 
  }, [articleId])

  return (


    <div className="wrapper">
    <Header/>
    <main>
        <div className="container news-flex">
    {article ? (
        <div key={article.id} className="container-xl">
        <h2>{article.title}</h2>
        <div className="article-info">
        <p>{formatArticleDate(article.published)}</p>
        <img src={Oval} alt="yellow circle"></img>
        <p>{article.category}</p>
        <img src={Oval} alt="yellow circle"></img>
        <p>{article.author}</p>
        </div>
        <img className="article-full-img" src={article.imageUrl} loading="lazy" alt="article"></img>
        <p className="article-text">{article.content}</p>
        </div>
    ) : (
    <div className="page-not-found">
    <h1>404 Page Not Found</h1>
    <Link to="/" className="btn-yellow" >Go back</Link>
    </div>    )
    }
    <div className="news-column">
    <SearchRecentPosts/>
    <RecentPosts/>
    <CategoriesList/>
    </div>
    </div>
    <div className="news-background">
    <NewsAndArticles/>
    </div>
    <BottomLinks/>
    </main>
    <Footer/>
    </div>
  )
}

export default ArticleDetails