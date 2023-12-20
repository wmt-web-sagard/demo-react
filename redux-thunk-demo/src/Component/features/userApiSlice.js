import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk(
    "users/fetchUser",
    async ()=>{
        const res = await axios("https://65697204de53105b0dd70a35.mockapi.io/DemoApi")
        const data = await res.data
        return data;
    }
)


export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id)=>{
        const res = await axios.delete("https://65697204de53105b0dd70a35.mockapi.io/DemoApi/"+id)
        const data = await res.data
        return data;
    }
)

export const addUser = createAsyncThunk(
    "users/addUser",
    async (user)=>{
        await axios.post("https://65697204de53105b0dd70a35.mockapi.io/DemoApi/",user)
        
    }
)

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user)=>{
        console.log(user);
        await axios.put(`https://65697204de53105b0dd70a35.mockapi.io/DemoApi/${user.id}`,user)
        const res = await axios("https://65697204de53105b0dd70a35.mockapi.io/DemoApi")
        const data = await res.data
        return data;
        
    }
)

const initialState = {
    isLoading :false,
    users : [],
    error : null
}

export const userApiSlice = createSlice({
    name:"userApiSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.users = action.payload
            state.isLoading=false;
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.error=action.error.message
            state.isLoading=false;
        })
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.users=state.users.filter((item, index) => item.id !== action.payload.id)
            state.isLoading=false;
        })
        builder.addCase(addUser.fulfilled,(state)=>{
            
            state.isLoading=false;
        })
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            state.users = action.payload
            state.isLoading=false;
        })
    }
})

export default userApiSlice.reducer