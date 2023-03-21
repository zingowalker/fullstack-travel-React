import React from 'react'
import Card from "../Card/Card";
import './FeaturedTours.scss'


const FeaturedTours = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1622833135011-928e5433feba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            title: "Amazing Ladakh 06D/05N",
            isNew: true,
            oldPrice: 25000,
            price: 19000
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1541507233780-668336b2702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            title: "Culture Tour 09D/08N",
            isNew: true,
            oldPrice: 26000,
            price: 12000
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1592334934411-8c2b49989d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            title: "Ladakh Motorbike Tour 11D/10N",
            isNew: true,
            oldPrice: 33000,
            price: 28000
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1606857090627-27ca46667290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            title: "Lakes of Ladakh 08D/07N",
            isNew: true,
            oldPrice: 18000,
            price: 16000
        },
    ]



    return (
        <div className="featuredTours">
            <div className="top">
                <h1>{type} Tours</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa blanditiis, neque, quia dicta consequatur magnam harum iure et obcaecati dignissimos, laboriosam porro ut quas!
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (

                    <Card item={item} key={item.id} />

                ))}
            </div>
        </div>
    )
}

export default FeaturedTours