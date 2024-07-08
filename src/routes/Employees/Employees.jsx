import { DataTable } from "supergalactic-uikit";
import employees from "../../data/Employees";

function Employees() {
  return (
    <main>
      <div id="main-header">
        <p className="h2">View employees</p>
      </div>
      <div className="main-content" id="employees-content">
        <DataTable data={employees} ignore={["id"]} containerId="employee-table" />
      </div>
    </main>
  );
}

export default Employees;
