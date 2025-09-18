import { useState, useEffect } from "react";

export default function DepartmentForm({ department, onSubmit, onClose }) {
  const [name, setName] = useState("");

  useEffect(() => { if (department) setName(department.name); }, [department]);

  const handleSubmit = (e) => { e.preventDefault(); onSubmit({ id: department?.id || Date.now(), name }); setName(""); }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{department ? "Edit Department" : "Add Department"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Department Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 border rounded-lg" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">{department ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
