import React, { useState } from 'react'
import { data } from '../data'

const Home = () => {
    const [sales, setSales] = useState(data);

    
    return (
            <div className="col cart-con">
                <h1>Cart</h1>
                <div className="row cart-div">
                    {
                        sales.map((item) => {
                            const { id, title, description, price } = item;
                            return (
                                <div className="col" key={id}>
                                    <span className="name">{title}</span>
                                    <span className="name">{description}</span>
                                    <span className="price">₦{price}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default Home
