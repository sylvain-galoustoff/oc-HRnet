import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    setMock: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEmployee, setMock } = employeeSlice.actions;
export default employeeSlice.reducer;
