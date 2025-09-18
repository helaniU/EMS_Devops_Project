import Navbar from "../components/Navbar";
import { CalendarIcon, CurrencyDollarIcon, BellIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const stats = [
    { name: "Profile", value: currentUser?.name, icon: <UserIcon className="h-8 w-8 text-blue-600" />, onClick: () => navigate("/profile") },
    { name: "Salary Paid", value: "$50,000", icon: <CurrencyDollarIcon className="h-8 w-8 text-yellow-600" />, onClick: () => navigate("/salary") },
    { name: "Leaves Taken", value: 5, icon: <CalendarIcon className="h-8 w-8 text-red-600" />, onClick: () => navigate("/leave") },
    { name: "Notifications", value: 3, icon: <BellIcon className="h-8 w-8 text-blue-600" />, onClick: () => navigate("/notices") },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
        <p className="mb-6 text-gray-700">Welcome, {currentUser?.name}</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              onClick={stat.onClick}
              className="bg-white shadow-xl rounded-xl p-6 flex items-center space-x-4 hover:shadow-2xl transition cursor-pointer"
            >
              <div>{stat.icon}</div>
              <div>
                <p className="text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
