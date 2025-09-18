import { useState, useEffect } from "react";
import Navbar from "../components/AdminNavbar";

export default function AdminProfile() {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    role: "Admin",
    department: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setAdmin(user);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setAdmin({ ...admin, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setAdmin({ ...admin, image: "" });
  };

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(admin));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role="admin" />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#0e2f44]">Admin Profile</h1>

        <div className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side: Profile image */}
            <div className="flex flex-col items-center">
            <img
                src={admin.image || "https://via.placeholder.com/150"}
                className="w-40 h-40 rounded-full object-cover border-2 border-blue-600"
            />

            {isEditing && (
                <div className="mt-4 flex flex-col space-y-2">
                {!admin.image ? (
                    <>
                    {/* Add Image button when no image */}
                    <label className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-blue-700">
                        + Add Image
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        />
                    </label>
                    </>
                ) : (
                    <>
                    {/* Edit & Remove buttons when image exists */}
                    <label className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-yellow-600">
                        Edit Image
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        />
                    </label>
                    <button
                        onClick={handleRemoveImage}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                        Remove Image
                    </button>
                    </>
                )}
                </div>
            )}
            </div>


          {/* Right side: Details */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={admin.name}
                  onChange={handleChange}
                  className="mt-1 w-full border px-3 py-2 rounded text-blue-500"
                />
              ) : (
                <p className="text-blue-600 font-semibold">{admin.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={admin.email}
                  onChange={handleChange}
                  className="mt-1 w-full border px-3 py-2 rounded text-blue-500"
                />
              ) : (
                <p className="text-blue-600 font-semibold">{admin.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Department</label>
              {isEditing ? (
                <input
                  type="text"
                  name="department"
                  value={admin.department}
                  onChange={handleChange}
                  className="mt-1 w-full border px-3 py-2 rounded text-blue-500"
                />
              ) : (
                <p className="text-blue-600 font-semibold">{admin.department}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Phone Number</label>
              {isEditing ? (
                <input
                  type="text"
                  name="mobile"
                  value={admin.mobile}
                  onChange={handleChange}
                  className="mt-1 w-full border px-3 py-2 rounded text-blue-500"
                />
              ) : (
                <p className="text-blue-600 font-semibold">{admin.mobile}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Role</label>
              <p className="text-blue-600 font-semibold">{admin.role}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
