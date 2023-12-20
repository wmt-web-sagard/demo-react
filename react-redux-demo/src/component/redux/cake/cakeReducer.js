import { BUY_CAKE, MAKE_CAKE } from "./CakeType"

const initialState = {
    numOfCake : 10
}

const cakeReducer  = (state = initialState , action)=>{
    switch(action.type){
        case BUY_CAKE: return  {...state , numOfCake : state.numOfCake-1 }
        case MAKE_CAKE: return  {...state , numOfCake : state.numOfCake+1 }

        default  : return state
    }
}

export default cakeReducer;
