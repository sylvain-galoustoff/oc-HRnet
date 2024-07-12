import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice";
import { toasterSlice } from "supergalactic-uikit";

const rootReducer = combineReducers({
  employees: employeesReducer,
  toasts: toasterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
