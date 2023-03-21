import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedTours from '../../components/FeaturedTours/FeaturedTours'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedTours type="featured" />
            <FeaturedTours type="trending" />
        </div>
    )
}

export default Home