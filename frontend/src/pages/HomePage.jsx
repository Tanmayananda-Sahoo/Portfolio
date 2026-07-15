import React from 'react'
import HomePageContent from '../components/HomePageContent.jsx'
import Navbar from '../components/Navbar.jsx'


const HomePage = () => {
  return (
    <>
        <Navbar />
        <div className="home-page">
            <HomePageContent />
        </div>
    </>
  )
}

export default HomePage
