import React from 'react'
import { buyCake, makeCake } from './redux'
import { Connect, connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      hello this cake shop<br/>
      Total Cakes : {props.numOfCake}
      <br/>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.makeCake}>Make Cake</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        numOfCake : state.numOfCake
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=>dispatch(buyCake()),
        makeCake : ()=>dispatch(makeCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
