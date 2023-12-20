import React from 'react'
import { buyCake, makeCake } from './redux'
import { useDispatch, useSelector } from 'react-redux'

function CakeContainerHooks() {
    const numOfCake = useSelector(state =>state.numOfCake);
    const dispatch = useDispatch();
  return (
    <div>
      hello this cake shop<br/>
      Total Cakes : {numOfCake}
      <br/>
      <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
      <button onClick={()=>{dispatch(makeCake())}}>Make Cake</button>
    </div>
  )
}

export default CakeContainerHooks
