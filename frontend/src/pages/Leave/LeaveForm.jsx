import { useState, useEffect } from "react";

export default function LeaveForm({ leave, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    employee: "",
    type: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    if (leave) setFormData(leave);
  }, [leave]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ employee: "", type: "", from: "", to: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{leave ? "Edit Leave" : "Apply Leave"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="employee"
            placeholder="Employee Name"
            value={formData.employee}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Leave Type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="date"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="date"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {leave ? "Update" : "Apply"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
