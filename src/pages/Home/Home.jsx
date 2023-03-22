import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedTours from '../../components/FeaturedTours/FeaturedTours'
import Categories from '../../components/Categories/Categories'

import './Home.scss'

function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedTours type="trekking" />
            <Categories />
            <FeaturedTours type="culture" />
            {/* <FeaturedTours type="south India" /> */}
        </div>
    )
}

export default Home