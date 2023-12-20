import { configureStore  } from '@reduxjs/toolkit'
import todoSlice from '../reduxToolkit/todoSlice'
import  todoReducer  from '../reduxToolkit/todoReducer'
import {thunk}  from "redux-thunk"
import apiSlice from '../reduxToolkit/apiSlice'


export const store = configureStore({reducer:{todoSlice:todoSlice,todoReducer:todoReducer,apiSlice : apiSlice}
    ,middleware : (getDefaultMiddleware)=>getDefaultMiddleware({
        thunk:thunk.apply
    })

})