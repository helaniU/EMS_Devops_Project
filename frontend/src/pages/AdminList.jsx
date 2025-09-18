import { useState } from "react";
import Navbar from "../components/AdminNavbar";

export default function AdminList() {
  const [admins, setAdmins] = useState([
    { id: 1, name: "John Admin", email: "john@ems.com", role: "Super Admin", mobile: "123-456-7890" },
    { id: 2, name: "Jane Admin", email: "jane@ems.com", role: "Admin", mobile: "987-654-3210" },
  ]);

  const handleDelete = (id) => {
    setAdmins(admins.filter((a) => a.id !== id));
  };

  return (
    <div>
      <Navbar role="admin" />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Our Admin Pannel</h1>

        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-[#0e2f44] text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{admin.name}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3">{admin.role}</td>
                <td className="p-3">{admin.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
