import React, { useState } from 'react'
import { addItem } from '../../Store/action';
import { useDispatch } from 'react-redux';

function TodoForm() {
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    
    const handleAddTodo=()=>{
        if(text.trim()==="") return;
        dispatch(addItem(text));
        setText("");
    }
    const handleKeyPress=(e)=>{
       if(e.key==="Enter"){
        handleAddTodo()
       }
    }

  return (
    <div className='form-container'>
      <input 
        placeholder='Add todo...'
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        onKeyDown={handleKeyPress}
        
      />
      <button onClick={handleAddTodo} >ADD</button>
    </div>
  )
}

export default TodoForm