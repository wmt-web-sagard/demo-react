import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:10
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        increment : (state)=>{
           return {...state,value:state.value+1}
        },
        decrement : (state)=>{
           return {...state,value:state.value-1}
        },
        addAmount : (state,action)=>{
            return  {...state,value:state.value+action.payload}
        }

    }

})

export const {increment,decrement,addAmount} = todoSlice.actions

export default todoSlice.reducer