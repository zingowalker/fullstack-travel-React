import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1622833135011-928e5433feba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            img2: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            title: "Amazing Ladakh 06D/05N",
            desc: "Amazing Ladakh 06D/05N",
            isNew: false,
            oldPrice: 25000,
            price: 19000
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1541507233780-668336b2702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhZGFraHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            img2: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            title: "Culture Tour 09D/08N",
            isNew: true,
            oldPrice: 26000,
            price: 12000
        },
    ]
    return (
        <div className='cart'>
            <h1>Cart Details</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x &#x20B9;{item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUB TOTAL</span>
                <span>&#x20B9;21000</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart