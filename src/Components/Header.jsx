import React from 'react'
import Cart from './Cart'

function Header() {
    return (
        <>
            <header>
                <div class="logo">MyStore</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div class="cart">
                    <Cart />
                </div>
            </header>
        </>
    )
}

export default Header
