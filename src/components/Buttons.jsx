import React from 'react'
import { useContext } from 'react'
import { context } from '../App'

const Buttons = () => {
  const {count,setCount}=useContext(context)
  const add=()=>{
    setCount(count=>count+1)
  }
  const subtract=()=>{
    setCount(count=>count-1)
  }

  return (
    <>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>

    </>
  )
}

export default Buttons