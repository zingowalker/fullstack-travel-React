import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedTours from '../../components/FeaturedTours/FeaturedTours'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

import './Home.scss'

function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedTours type="trekking" />
            <Categories />
            <FeaturedTours type="culture" />
            <Contact />
        </div>
    )
}

export default Home