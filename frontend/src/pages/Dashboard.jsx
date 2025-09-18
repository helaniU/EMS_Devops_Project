import Navbar from "../components/Navbar";
import { UsersIcon, BuildingLibraryIcon, CurrencyDollarIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  // Sample data counts
  const stats = [
    { name: "Employees", value: 25, icon: <UsersIcon className="h-8 w-8 text-blue-600" /> },
    { name: "Departments", value: 5, icon: <BuildingLibraryIcon className="h-8 w-8 text-green-600" /> },
    { name: "Salary Records", value: 25, icon: <CurrencyDollarIcon className="h-8 w-8 text-yellow-600" /> },
    { name: "Leaves", value: 10, icon: <CalendarIcon className="h-8 w-8 text-red-600" /> },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen max-w-full">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white shadow-xl rounded-xl p-6 flex items-center space-x-4 hover:shadow-2xl transition"
            >
              <div>{stat.icon}</div>
              <div>
                <p className="text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Quick Actions Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center hover:bg-blue-700 transition cursor-pointer">
            + Add Employee
          </div>
          <div className="bg-green-600 text-white rounded-xl p-6 text-center hover:bg-green-700 transition cursor-pointer">
            + Add Department
          </div>
          <div className="bg-yellow-600 text-white rounded-xl p-6 text-center hover:bg-yellow-700 transition cursor-pointer">
            + Add Salary
          </div>
          <div className="bg-red-600 text-white rounded-xl p-6 text-center hover:bg-red-700 transition cursor-pointer">
            + Apply Leave
          </div>
        </div>
      </div>
    </div>
  );
}
