import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
