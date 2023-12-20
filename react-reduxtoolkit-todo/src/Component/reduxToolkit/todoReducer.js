import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{todoId : nanoid() , todoName : 'hello this frist todo'}]
    
}

const todoReducer = createSlice({
    name:'todos',
    initialState,
    reducers : {
        addTodo : (state ,action)=>{
            
            state.todos.push({todoId:nanoid(),todoName:action.payload})
        },
        removeTodo : (state,action)=>{
            
            state.todos = state.todos.filter((todo) => {
                return todo.todoId !== action.payload
            } )
        },
       

    }
})

export default todoReducer.reducer;

export const {addTodo,removeTodo} = todoReducer.actions
