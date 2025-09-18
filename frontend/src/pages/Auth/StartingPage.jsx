import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col bg-animated">
      
      <header className="w-full flex items-center justify-between px-6 py-3 bg-[#0e2f44] shadow-md">
        {/* Left side: Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/EMSlogo.png"
            className="w-10 h-10 object-contain bg-white rounded-xl"
            alt="EMS Logo"
          />
          <h1 className="text-4xl font-bold text-white">EMS</h1>
        </div>

        {/* Right side: Contact Number */}
        <div>
          <p className="text-white font-semibold">Contact us - 📞
            <a href="tel:+94771234567" className="text-white font-semibold hover:underline">
              +94 77 123 4567
            </a>
          </p>
        </div>
      </header>


      {/* Centered Content */}
      <div className="flex flex-grow items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl flex overflow-hidden w-[900px] h-[400px]">
          
          {/* Left side - Text & Buttons */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#dad0c9]">
            <h2 className="text-2xl font-bold text-[#0e2f44] mb-4 text-center">
              Employee Management System
            </h2>
            <p className="text-[#407294] mb-8 text-center font-bold">
              Manage employees efficiently with professional system
            </p>
            <div className="flex flex-col w-3/4 space-y-3">
              <Link to="/login">
                <button className="w-full bg-[#0e2f44] hover:bg-[#756d67] text-white py-2 rounded-xl font-semibold transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-full bg-[#407294] hover:bg-[#756d67] text-white py-2 rounded-xl font-semibold transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-1/2">
            <img
              src="/bgimage1.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
