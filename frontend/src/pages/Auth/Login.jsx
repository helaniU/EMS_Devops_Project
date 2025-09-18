import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Save a fake user in localStorage
    const user = { email: "test@example.com", role };
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Navigate based on role
    if (role === "admin") {
      navigate("/dashboard/admins");
    } else {
      navigate("/dashboard/employees");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-blue-300 flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-blue-500 text-white p-1.5 shadow-md justify-center items-center flex">
        <h1 className="font-bold" style={{ fontSize: 40 }}>
          Employee Management System
        </h1>
      </header>

      {/* Centered Login Options */}
      <div className="flex-grow flex items-center justify-center w-full px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] max-w-md text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-500">Login</h2>

          <div className="space-y-4">
            <button
              onClick={() => handleLogin("admin")}
              className="w-full bg-blue-600 text-white font-bold p-2 rounded-lg hover:bg-blue-500 transition"
            >
              Login as Admin
            </button>

            <button
              onClick={() => handleLogin("employee")}
              className="w-full bg-green-600 text-white font-bold p-2 rounded-lg hover:bg-green-500 transition"
            >
              Login as Employee
            </button>
          </div>

          <p className="mt-4 text-sm">
            Later you can connect real authentication here.
          </p>
        </div>
      </div>
    </div>
  );
}
