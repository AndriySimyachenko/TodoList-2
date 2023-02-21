import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/TodoListSlice";
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
