import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                    <button>
                        <Link className="link" to="/tours/1">
                            Book Now
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://plus.unsplash.com/premium_photo-1677002262056-18c067d64d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyZWtraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <button>
                        <Link className="link" to="/tours/2">
                            Book Now
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                    <button>
                        <Link className="link" to="/tours/3">
                            Book Now
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                            <button>
                                <Link className="link" to="/tours/4">
                                    Book Now
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                            <button>
                                <Link className="link" to="/tours/5">
                                    Book Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1624554305378-0f440dd3a8c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtlcmFsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <button>
                        <Link className="link" to="/tours/6">
                            Book Now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories