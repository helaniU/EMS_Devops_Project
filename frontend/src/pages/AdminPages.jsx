import { useState } from "react";
import EmployeeList from "./Employee/EmployeeList";
import SalaryList from "./Salary/SalaryList";

export default function AdminPages() {
  // Single source of truth for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "IT", salary: 50000, image: "" },
    { id: 2, name: "Jane Smith", department: "HR", salary: 45000, image: "" },
  ]);

  return (
    <div>
      {/* Pass employees and setter to both pages */}
      <EmployeeList employees={employees} setEmployees={setEmployees} />
      <SalaryList employees={employees} />
    </div>
  );
}
