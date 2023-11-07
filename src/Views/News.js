import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import NewsAndArticlesTop from '../Components/NewsAndArticlesTop'
import NewsAndArticlesPage from '../Components/NewsAndArticlesPage'
import SignupForm from '../Components/SignupForm'

const News = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
          <NewsAndArticlesTop/>
          <NewsAndArticlesPage />
          <SignupForm/>
        </main>
        <Footer />
    </div>
  )
}

export default News