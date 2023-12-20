import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    users: [],
    isLoading:false,
    error:""
}


export const userSagaSlice = createSlice({
    name:"userSagaSlice",
    initialState,
    reducers:{
        fetchLoading : (state,action)=>{
            state.isLoading=true
        },
        fetchUsersSuccess :(state,action)=>{
            
            state.users=action.payload;
            state.isLoading=false
        },
        fetchFail :(state,action)=>{
            state.error=action.payload;
            state.isLoading=false
        },
        fetchDelete : (state,action)=>{
            state.isLoading=false
            state.users=state.users.filter((item, index) => item.id !== action.payload.id)
        },
        postUser : (state,action)=>{
            state.users=action.payload;
            state.isLoading=false
        },
        updateUser : (state,action)=>{
            state.users=action.payload;
            state.isLoading=false
        }
    }
})

export const {fetchFail,fetchLoading,fetchUsersSuccess,fetchDelete,postUser,updateUser} = userSagaSlice.actions

export default userSagaSlice.reducer;