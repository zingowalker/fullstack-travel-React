import React from 'react';
import { useState } from 'react';
import './Tour.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';



function Tour() {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const images = [
        'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWNoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGltYWNoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

    ]
    return (
        <div className='tour'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>

            <div className="right">
                <h1>Title</h1>
                <span className='price'>Rs 24000</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur doloribus vero temporibus amet veritatis, numquam modi, repellat fugit eaque nemo dignissimos, soluta officiis dolorum similique provident aliquam suscipit inventore quisquam sed veniam reiciendis aut placeat?
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Adventure Tour</span>
                    <span>Vocation Ladakh</span>
                    <span>Trek, Culture, Motobike</span>
                </div>
                <hr />
                <div className="info">
                    <span>Description</span>
                    <hr />
                    <span>Additional information</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Tour