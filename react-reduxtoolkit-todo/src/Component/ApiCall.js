import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './reduxToolkit/apiSlice';

const ApiCall = () => {
    const dispatch =  useDispatch();
    const state= useSelector(state =>state.apiSlice.users)
  console.log(state);
    return (
    <div>
      <button onClick={()=>{dispatch(fetchUser())}}>Click here</button>
    </div>
  )
}

export default ApiCall
