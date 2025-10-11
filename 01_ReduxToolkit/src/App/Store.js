import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Feactures/Todo/todoSlice'


export const Store = configureStore({
    reducer:todoReducer
})