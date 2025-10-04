import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import { fetchproducts } from '../redux/productSlice';

function Allproducts() {
    const [data, setData] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchproducts())
    }, [dispatch])

    const selector = useSelector((state) => state.products.items)
    console.log("//", selector);
    // console.log("///fnf", selector.length);
    //  setData(selector)  as ny kru shakat

    // useEffect(() => {
    //     getdata()
    // }, [])

    // async function getdata() {
    //     let data = await fetch("https://dummyjson.com/products");
    //     data = await data.json()
    //     console.log("data", data);
    //     setData(data.products)
    // }

    function addtocart(element) {
        dispatch(increment(element))
    }
    function removetocart(element) {
        dispatch(decrement(element))
    }

    return (
        <>
            <div class="product-grid" style={{ margin: "20px 0px" }}>

                {selector.length && selector.map((element, index) => {
                    return (
                        <div key={index} class="product-card">
                            <img class="product-image" src={element.thumbnail} alt="Product Image" />
                            <div class="product-info">
                                <div class="product-title">{element.title}</div>
                                <div class="product-price">${element.price}</div>

                            </div>

                            <div class="product-buttons">
                                <button onClick={() => addtocart(element)} class="btn btn-add">Add to Cart</button>
                                <button onClick={() => removetocart(element.id)} class="btn btn-remove">Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Allproducts
