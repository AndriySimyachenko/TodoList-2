import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { daysGenerator } from "../../utils/functions";
import { RootState } from "../hooks";

interface IState {
  days: IDay[];
}

const initialState: IState = { days: daysGenerator(2, 2023) };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { dayId, text } = action.payload;
      state.days[Number(dayId) - 1].todos.push({
        id: `${new Date().getTime()}`,
        text,
        isCompleted: false,
      });
    },
    removeTodo: (state, action) => {
      const { dayId, todoId } = action.payload;
      state.days[Number(dayId) - 1].todos = state.days[
        Number(dayId) - 1
      ].todos.filter((todo) => todo.id !== todoId);
    },
    toggleCompletedTodo: (state, action) => {
      const { dayId, todoId } = action.payload;
      const selectedTodo = state.days[Number(dayId) - 1].todos.find(
        (todo) => todo.id === todoId
      );
      if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleCompletedTodo } = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todos;
export default todoSlice.reducer;
