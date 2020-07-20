import React from 'react'
import HomeCarousel from './HomeCarousel'
import '../css/Home.css'
import HomeAbout from './HomeAbout'
import HomeTodayCases from './HomeTodayCases'
import HomeGallery  from "./HomeGallery";
import Footer from './Footer';
import Homecorona from './Homecorona'
function Home() {
    return (
        <div className="home_page">
        
            <HomeCarousel/>
            <HomeAbout/>
            <HomeTodayCases/>
            <HomeGallery/>
            <Homecorona/>
            <Footer/>
        </div>
    )
}

export default Home
