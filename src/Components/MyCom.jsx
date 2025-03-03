import React from 'react'
import { useSelector } from 'react-redux'
import { increment } from '../Store/action';
import { decrement } from '../Store/action';
import { useDispatch } from 'react-redux';

function MyCom() {
    const count=useSelector((store)=>store.count)
    const dispatch=useDispatch()
    console.log(count,"storedaki {object} count");
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increment(100))}>artir</button>
        <button onClick={()=>dispatch(decrement())}>azalt</button>
    </div>
  )
}

export default MyCom