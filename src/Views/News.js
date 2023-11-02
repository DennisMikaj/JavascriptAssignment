import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import NewsAndArticlesTop from '../Components/NewsAndArticlesTop'
import Articles from '../Components/Articles'
import NewsAndArticles from '../Components/NewsAndArticles'
import ArticleList from '../Components/GetArticles'

const News = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
          <NewsAndArticlesTop/>
          <NewsAndArticles title={""} />
        </main>
        <Footer />
    </div>
  )
}

export default News