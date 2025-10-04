import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

    // const selector = useSelector((state)=>state.counter.value)
    const selector = useSelector((state)=>state.counter.cartItems)
    console.log("selector",selector);
    
    return (
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" />
            <div class="cart-count">{selector.length}</div>
        </div>
    )
}

export default Cart
