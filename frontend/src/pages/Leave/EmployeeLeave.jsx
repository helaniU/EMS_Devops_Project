import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Leave() {
  const [leaves, setLeaves] = useState([
    { id: 1, date: "2025-09-01", reason: "Sick", status: "approved" },
    { id: 2, date: "2025-09-05", reason: "Vacation", status: "pending" },
    { id: 3, date: "2025-09-07", reason: "Family", status: "rejected" },
  ]);

  const [newLeave, setNewLeave] = useState({ date: "", reason: "" });

  const handleApply = () => {
    if (!newLeave.date || !newLeave.reason) return; // prevent empty apply
    setLeaves([
      ...leaves,
      { ...newLeave, id: Date.now(), status: "pending" }, // lowercase for consistency
    ]);
    setNewLeave({ date: "", reason: "" });
  };

  function getStatusColor(status) {
    if (status === "approved") return "text-green-600";
    if (status === "rejected") return "text-red-600";
    if (status === "pending") return "text-blue-600";
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Leaves</h1>

        {/* Apply New Leave */}
        <div className="bg-white shadow-xl rounded-xl p-6 mb-6 space-y-4">
          <h2 className="text-xl font-bold mb-2">Apply New Leave</h2>
          <input
            type="date"
            value={newLeave.date}
            onChange={(e) => setNewLeave({ ...newLeave, date: e.target.value })}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Reason"
            value={newLeave.reason}
            onChange={(e) => setNewLeave({ ...newLeave, reason: e.target.value })}
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={handleApply}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Apply
          </button>
        </div>

        {/* Leaves Table */}
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Reason</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{leave.date}</td>
                <td className="p-3">{leave.reason}</td>
                <td className={`p-3 font-bold ${getStatusColor(leave.status)}`}>
                  {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
