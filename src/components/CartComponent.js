import React, { useState } from 'react'
import { data } from '../data'

const CartComponent = ()=> {
    const [sales, setSales] = useState(data);

    const removeItem = (id) => {
        let newItem = sales.filter((item) => item.id !== id)
        setSales(newItem);
    }

    const handleQ = (item,actionType) => {
        //please work
        switch (actionType) {
            case 'add':
             item.quantity++;
             item.price = item.quantity * item.originalPrice
             setSales([...sales])                    
            break;
            case 'remove':
                item.quantity--;
                item.price = item.quantity * item.originalPrice

             setSales([...sales])                
             break;
        
            default:
                throw new Error(actionType + ' required')
        }
    }

    const totalItemPrice = (price,originalPrice) => {
            if (price < originalPrice) {return originalPrice} else {return price}
    }
    const conditionQ = (quantity) => {
        if(quantity < 1){return quantity = 1} else {return quantity}
    }

    const subTotal = (sales) => {
        return  sales.reduce((a,b)=>a+b.price,0) //what is this 0 doing,lol
    }
   
    return (
        <div className="col cart-con">
            <h1>Cart</h1>
            <div className="col cart-component-div">
                {
                    sales.map((item) => {
                        const { id, description, price,originalPrice,quantity } = item;
                        return (
                            <div className="row" key={id}>
                                <div className="row q-btn">
                                    <button onClick={() => handleQ(item,'add')}>+</button>
                                    <button onClick={() => handleQ(item,'remove')} >-</button>
                                </div>
                               <div className="row cart-text">
                                    <span className="name">{description}</span>
                                    <span>Qantity: {conditionQ(quantity)}</span>
                                    <span className="price">Price: ₦{totalItemPrice(price,originalPrice)}</span>
                                    {/* <span className="price">Price: ₦{totalItemPrice(item,price)}</span> */}
                               </div>
                                <button onClick={()=> removeItem(id)}>Remove Item</button>
                            </div>
                        )
                    })
                }
            </div>
            {sales && <span>subTotal:{subTotal(sales)}</span>} 
            {/* what did you do here?
           // is like saying, if sales is not null or undefined, then render the span,lol
            // ohhh, you're the boss  */}
            {/* lol */}
            <button className="clear-all" onClick={() => setSales([])}>Clear Cart</button>
        </div>
    )
}

export default CartComponent
