import React from 'react'
import TodoList from './Components/TodoList/TodoList'
import TodoForm from './Components/TodoForm/TodoForm'
import logo from "./assets/logo-34.png"

function App() {
  return (
    <div className='main-container'>
    {/* <img className='logo' src={logo}/> */}
    <div className='text'>
    <h3>Sign In to Rechage Direct</h3>
    <p>If you don’t have an account You can Sign Up</p>
    </div>
     <TodoForm/>
     <TodoList/>
    </div>
  )
}

export default App