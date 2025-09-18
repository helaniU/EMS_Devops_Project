import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "employee" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Save user temporarily in localStorage (simulate registration)
    localStorage.setItem("currentUser", JSON.stringify(formData));

    // Navigate to login page
    navigate("/login");
  };

  return (
  <div className="min-h-screen flex flex-col"
  style={{ backgroundImage: "url('/bgimage1.jpeg')" }}
  >
    
    {/* Header */}
    <header className="w-full flex items-center justify-between px-6 py-3 bg-[#0e2f44] shadow-md">
      {/* Left: Logo + EMS */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
        <img
          src="/EMSlogo.png" // <- replace with your logo path
          className="w-10 h-10 object-contain bg-white rounded-xl"
          alt="EMS Logo"
        />
        <h1 className="text-4xl font-bold text-white hover:underline">EMS</h1>
      </Link>
      </div>

      {/* Right: Contact Number */}
      <div>
          <p className="text-white font-semibold">Contact us - 📞
            <a href="tel:+94771234567" className="text-white font-semibold hover:underline">
              +94 77 123 4567
            </a>
          </p>
      </div>
    </header>

    {/* Signup Form Card */}
    <div className="flex-grow flex items-center justify-center p-6 py-0">
      <div className="bg-white rounded-2xl shadow-2xl w-[400px] px-10 py-5">
        <h2 className="text-3xl font-bold text-[#0e2f44] mb-5 text-center ">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter username"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#a29890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#407294]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#a29890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#407294]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-[#a29890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#407294]"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-[#a29890] rounded-lg bg-[#cbbeb5] focus:outline-none focus:ring-2 focus:ring-[#407294]"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0e2f44] hover:bg-[#407294] text-white font-bold p-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-[#407294]">
          Already have an account?{" "}
          <Link to="/login" className="underline text-[#0e2f44]">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);
}
