import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/AdminNavbar";
import EmployeeForm from "./EmployeeForm";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null); // will store employee id if delete is requested


  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees(employees.filter(emp => emp._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (employeeData) => {
    try {
      if (editingEmployee) {
        // Update existing
        const res = await axios.put(
          `http://localhost:5000/api/employees/${editingEmployee._id}`,
          employeeData
        );
        setEmployees(employees.map(emp => emp._id === res.data._id ? res.data : emp));
      } else {
        // Add new
        const res = await axios.post("http://localhost:5000/api/employees", employeeData);
        setEmployees([...employees, res.data]);
      }
    } catch (err) {
      console.error(err);
    }
    setIsFormOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 bg-[#d9d9d9] min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0e2f44]">Employee Management</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#0e2f44] text-white px-4 py-2 rounded-lg hover:bg-[#194f71] transition"
          >
            + Add Employee
          </button>
        </div>

        {isFormOpen && (
          <EmployeeForm
            employee={editingEmployee}
            onSubmit={handleFormSubmit}
            onClose={() => { setIsFormOpen(false); setEditingEmployee(null); }}
          />
        )}

        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-[#0e2f44] text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id} className="border-b">
                <td className="p-3 flex items-center space-x-2">
                  <img
                    src={emp.image || "https://via.placeholder.com/120"}
                    className="w-10 h-10 rounded-full object-cover mt-2"
                  />
                  <span>{emp.name}</span>
                </td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3">{emp.department}</td>
                <td className="p-3">{emp.salary}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setConfirmDelete(emp._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
            {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 border-black">
            <h2 className="text-lg font-bold text-[#0e2f44] mb-4 text-center">
              Confirm Deletion
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this employee? <br />
              This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(confirmDelete);
                  setConfirmDelete(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
