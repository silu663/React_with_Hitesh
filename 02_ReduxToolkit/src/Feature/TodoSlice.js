import { createSlice,nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos:[{id:123,text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'username',
    initialState,
    reducers:{
        addTodo:(state,action) => {
           const todo = {
            text:action.payload,
            id:nanoid()
           }
           state.todos.push(todo)
        }
    }
})

export const {setname} = todoSlice.actions

export default todoSlice.reducer