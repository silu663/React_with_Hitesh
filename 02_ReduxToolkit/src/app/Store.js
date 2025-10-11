import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Feature/TodoSlice'

export const Store = configureStore({
    
    reducer:todoReducer

})