const redux =require('redux')
const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';
const PUT_CAKE='PUT_CAKE';

const createStore = redux.createStore;
const buyCake =()=> {
    return {type: BUY_CAKE}
}
const putCake =()=> {
    return {type: PUT_CAKE}
}
const buyIceCream =()=> {
    return {type: BUY_ICECREAM}
}
const intialStateCake = { numOfCake:10 };
const intialStateIceCream = { numOfIceCream:20};

const cakeReducer = (state = intialStateCake , action)=> {
    switch(action.type){
        case BUY_CAKE:
            return {...state,numOfCake:state.numOfCake-1}
            case PUT_CAKE:
            return {...state,numOfCake:state.numOfCake+1}
           
        default:
            return state
    }
}

const iceCreamReducer = (state = intialStateIceCream, action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{...state,numOfIceCream:state.numOfIceCream-1}
        default:
                return state
    }
}

const combineReducer = redux.combineReducers({cake:cakeReducer,iceCream:iceCreamReducer})
const store = createStore(combineReducer);
console.log("intial state",store.getState());
const unsubscribe = store.subscribe(()=>console.log("Update state",store.getState()))
store.dispatch(buyCake())

store.dispatch(buyCake())
store.dispatch(buyIceCream())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(putCake())
store.dispatch(buyIceCream())
store.dispatch(putCake())
store.dispatch(buyIceCream())
unsubscribe()

