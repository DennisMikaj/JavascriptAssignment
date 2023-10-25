import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FirstShowcase from '../Components/FirstShowcase'
import Brands from '../Components/Brands'

const Home = () => {
  return (
    <div className="wrapper">
    
        <Header />
        <main>
        <FirstShowcase />
        <Brands />
        </main>
        <Footer />
        </div>
  )
}

export default Home