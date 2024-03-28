import React from "react";
import './Cart.css'
const Cart = ({image, price, price_line})=>{
    return(
        <div className="block">
            <img src={image} alt="" />
            <div className="box-price">
              <p className="cart_price">{price}$</p>
              <p className="cart_line_price">{price_line}$</p>
            </div>
            <button className="cart_button">ADD TO CART</button>
        </div>
    )
}
export default Cart