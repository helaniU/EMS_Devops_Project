import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    department: "",
    birthday: "",
    position: "",
    gender: "",
    married: false,
    salary: "",
    image: ""
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setProfile(user);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfile({ ...profile, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setProfile({ ...profile, image: "" });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile({ ...profile, [name]: type === "checkbox" ? checked : value });
  };

  const handleSaveProfile = () => {
    localStorage.setItem("currentUser", JSON.stringify(profile));
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-6">
            {/* Left side: image */}
            <div className="mb-4 md:mb-0 text-center">
              <img
                src={profile.image || "https://via.placeholder.com/150"}
                className="w-40 h-40 rounded-full object-cover border-2 border-blue-600 mx-auto"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <div className="flex justify-center mt-2 space-x-2">
                <button
                  onClick={triggerFileInput}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  {profile.image ? "Edit" : "Add Image"}
                </button>
                {profile.image && (
                  <button
                    onClick={handleRemoveImage}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            {/* Right side: editable profile details */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block font-semibold">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold">Department:</label>
                <input
                  type="text"
                  name="department"
                  value={profile.department}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold">Birthday:</label>
                <input
                  type="date"
                  name="birthday"
                  value={profile.birthday}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold">Position:</label>
                <input
                  type="text"
                  name="position"
                  value={profile.position}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold">Gender:</label>
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="married"
                  checked={profile.married}
                  onChange={handleChange}
                  id="married"
                />
                <label htmlFor="married" className="font-semibold">Married</label>
              </div>

              <div>
                <label className="block font-semibold">Salary:</label>
                <input
                  type="number"
                  name="salary"
                  value={profile.salary}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
