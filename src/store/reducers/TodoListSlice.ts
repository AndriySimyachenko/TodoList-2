import { createSlice } from "@reduxjs/toolkit";
import { daysGenerator } from "../../utils/functions";
import { RootState } from "../hooks";

interface IState {
  days: IDay[];
}

const initialState: IState = { days: daysGenerator(2, 2023) };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todos;
export default todoSlice.reducer;
