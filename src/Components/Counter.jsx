import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {

    const dispatch = useDispatch()
    const selector = useSelector((state)=> state.counter.value)

    const [no,setNo]=useState("")

    function Countincrement() {
        dispatch(increment())
    }
    function Countdecrement() {
        dispatch(decrement())
    }
    function Countreset() {
        dispatch(reset())
    }
    function Countbyval() {
        dispatch(incrementByAmount(no))
    }


    return (
        <div>
            <h2>Counter : {selector} </h2>

            <button onClick={Countincrement}>Increment</button>
            <button onClick={Countdecrement}>Decrement</button>
            <button onClick={Countreset}>Reset</button>
            <button onClick={Countbyval}>Incrementbyvalue</button>

            <br />
            <br />

            <input type="text" value={no} onChange={(e)=>{setNo(e.target.value)}} />
        </div>
    )
}

export default Counter
