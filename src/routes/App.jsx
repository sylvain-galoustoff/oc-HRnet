import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Employees/AddEmployee";
import Employees from "./Employees/Employees";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
