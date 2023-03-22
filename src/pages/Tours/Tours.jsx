import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import List from '../../components/List/List'
import './Tours.scss'


function Tours() {
    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(45000)
    const [sort, setSort] = useState(null)

    return (
        <div className='tours'>
            <div className="left">
                <div className="filterItem">
                    <h2>Tour Categories</h2>
                    <div className="inputItem">
                        <input type="checkBox" id='1' value={1} />
                        <label htmlFor="1">Trekking</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkBox" id='2' value={2} />
                        <label htmlFor="2">Culture</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkBox" id='3' value={3} />
                        <label htmlFor="3">Motorbike</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={12000} max={45000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Price(Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort("desc")} />
                        <label htmlFor="asc">Price(Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='catImg'
                    src="https://images.unsplash.com/photo-1575305327780-a887f284432f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtlcmFsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Tours