import React from 'react'
import "./TodoList.css"
import { removeItem } from '../../Store/action';
import { useDispatch, useSelector } from 'react-redux'

function TodoList() {
    const todoss=useSelector((state)=>state.items);
    const dispatch=useDispatch()
  return (
    <div className='main-container'>
      {todoss.map((el)=>(
        <div key={el.id}>
            {el.text}
        <button onClick={()=>dispatch(removeItem(el.id))} >X</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList