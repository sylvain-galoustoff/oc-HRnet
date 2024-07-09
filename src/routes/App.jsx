import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Employees/AddEmployee";
import Employees from "./Employees/Employees";
import NotFound from "./NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import employees from "../data/Employees";
import { setMock } from "../redux/employeeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMock(employees));
  }, []);

  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
