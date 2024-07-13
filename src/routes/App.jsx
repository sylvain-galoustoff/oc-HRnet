import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Employees/AddEmployee";
import Employees from "./Employees/Employees";
import NotFound from "./NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import employees from "../data/Employees";
import { setMock } from "../redux/employeeSlice";
import { Toaster, useToastsList } from "supergalactic-uikit";

function App() {
  const dispatch = useDispatch();
  const { toastList, removeToast } = useToastsList();

  useEffect(() => {
    dispatch(setMock(employees));
  }, [employees]);

  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      {toastList.length > 0 && (
        <Toaster toastsList={toastList} toasterId="toaster" animation="fromBottom" onRemoveToast={removeToast} />
      )}
    </div>
  );
}

export default App;
