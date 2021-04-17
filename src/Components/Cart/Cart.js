import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const userData = props.userData;
    const cart = props.cart;
    return (
        <div className="cartStyle">
            <h1>User count: {userData.length}</h1>
            <h2>Newly added users: {cart.length}</h2>
        </div>
    );
};

export default Cart;