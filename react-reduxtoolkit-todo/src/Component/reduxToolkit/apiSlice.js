import { createSlice }  from "@reduxjs/toolkit"
import axios  from 'axios';



const initialState = {
    loading : true,
    users :[{id:1,name:"sadads"}],
    error : ""
}

const apiSlice  = createSlice({
    name : "apiSlice",
    initialState,
    reducers  : {
        FETCH_USER_REQUEST : (state,action)=>{
            return { ...state, loading: true };
        },
        FETCH_USER_SUCCESS : (state,action)=>{
            return { loading: false, user: action.payload, error: "" }
        },
        FETCH_USER_FAIL : (state,action)=>{
            return { loading: false, user: [], error: action.payload };
        }

    }
    }
);



const fetchUser = () => {
    return function  (dispatch) {
        dispatch(FETCH_USER_REQUEST());
      axios.get("https://65697204de53105b0dd70a35.mockapi.io/DemoApi")
      .then((response) => {
          const users = response.data.map((user) => user.id);
          dispatch(FETCH_USER_SUCCESS(users));
        })
        .catch((error) => {
          dispatch(FETCH_USER_FAIL(error.message));
        });
    };
  };
  
  export default apiSlice.reducer;
  export const {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAIL} = apiSlice.actions
 export {fetchUser} 