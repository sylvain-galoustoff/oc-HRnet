import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Employees/AddEmployee";
import Employees from "./Employees/Employees";
import NotFound from "./NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import employees from "../data/Employees";
import { setMock } from "../redux/employeeSlice";
import { Toaster } from "supergalactic-uikit";

function App() {
  const dispatch = useDispatch();
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    dispatch(setMock(employees));
  }, [employees]);

  useEffect(() => {
    const handleAddToast = (event) => {
      const newToast = event.detail;
      setToastList((prevToastList) => [...prevToastList, newToast]);
    };

    window.addEventListener("addToast", handleAddToast);

    return () => {
      window.removeEventListener("addToast", handleAddToast);
    };
  }, []);

  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Toaster toastsList={toastList} toasterId="toaster" animation="fromBottom" />
    </div>
  );
}

export default App;
