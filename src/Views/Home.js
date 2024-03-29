import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FirstShowcase from '../Components/FirstShowcase'
import Brands from '../Components/Brands'
import Features from '../Components/Features'
import ShowcaseTwo from '../Components/ShowcaseTwo'
import OurServices from '../Components/OurServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import GlobalProjects from '../Components/GlobalProjects'
import MeetTheTeam from '../Components/MeetTheTeam'
import NewsAndArticles from '../Components/NewsAndArticles'
import SignupForm from '../Components/SignupForm'
import BottomLinks from '../Components/BottomLinks'

const Home = () => {
  return (
    <div className="wrapper">
    
        <Header />
        <main>
        <FirstShowcase />
        <Brands />
        <Features />
        <ShowcaseTwo />
        <OurServices />
        <WhyChooseUs />
        <GlobalProjects />
        <MeetTheTeam />
        <NewsAndArticles />
        <SignupForm />
        <BottomLinks />
        </main>
        <Footer />
        </div>
  )
}

export default Home