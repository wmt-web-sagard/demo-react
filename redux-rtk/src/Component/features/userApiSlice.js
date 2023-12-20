import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    isLoading:true,
    users : [],
    error : null
}

const userApiSlice = createSlice({
    name:"user",
    initialState,
    reducers : {}
})