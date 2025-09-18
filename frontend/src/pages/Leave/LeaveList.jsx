import { useState } from "react";
import Navbar from "../../components/AdminNavbar";

export default function Leave() {
  const [leaves, setLeaves] = useState([
    { id: 1, employee: "John Doe", type: "Sick Leave", from: "2025-09-01", to: "2025-09-03" },
    { id: 2, employee: "Jane Smith", type: "Casual Leave", from: "2025-09-05", to: "2025-09-06" },
  ]);

  const [editingLeave, setEditingLeave] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEdit = (leave) => {
    setEditingLeave(leave);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setLeaves(leaves.filter((l) => l.id !== id));
  };

  const handleFormSubmit = (leaveData) => {
    if (editingLeave) {
      setLeaves(leaves.map((l) => (l.id === editingLeave.id ? leaveData : l)));
    } else {
      const newLeave = { ...leaveData, id: Date.now() };
      setLeaves([...leaves, newLeave]);
    }
    setIsFormOpen(false);
    setEditingLeave(null);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Leave Management</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Apply Leave
          </button>
        </div>

        {isFormOpen && (
          <LeaveForm
            leave={editingLeave}
            onSubmit={handleFormSubmit}
            onClose={() => { setIsFormOpen(false); setEditingLeave(null); }}
          />
        )}

        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Leave Type</th>
              <th className="p-3 text-left">From</th>
              <th className="p-3 text-left">To</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((l) => (
              <tr key={l.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{l.employee}</td>
                <td className="p-3">{l.type}</td>
                <td className="p-3">{l.from}</td>
                <td className="p-3">{l.to}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(l)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(l.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
