import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LetsConnect from '../Components/LetsConnect'
import MessageUsSection from '../Components/MessageUsSection'
import BottomLinks from '../Components/BottomLinks'
import OurLocation from '../Components/OurLocation'

const Contacts = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
        <LetsConnect />
        <MessageUsSection />
        <OurLocation />
        <BottomLinks />
        </main>
        <Footer />
    </div>
  )
}

export default Contacts