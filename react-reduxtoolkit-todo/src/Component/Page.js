import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addAmount, decrement, increment } from './reduxToolkit/todoSlice'
function Page() {
    const value=useSelector(state=>state.todoSlice.value)
    const dispatch = useDispatch()
    const [num,setNum]=useState(0);

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addAmount(Number(num)));
        setNum(0);
    }

  return (
    <div>
      <h1>Counter : {value} </h1>
      <br/>
      <button className='btn bg-teal-300 p-1  rounded-full' onClick={()=>dispatch(increment())}>Increment</button>
      <button className='btn bg-red-600 p-1 rounded-full' onClick={()=>dispatch(decrement())}>Decrement</button>

      <form onSubmit={handleSubmit}>
        <input type='number' value={num} onChange={(e)=>setNum(e.target.value)} />
        <button className='btn rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default Page
