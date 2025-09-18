import { useState, useEffect, useRef } from "react";

export default function EmployeeForm({ employee, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    image: ""
  });

  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (employee) {
      setFormData(employee);
      setPreviewImage(employee.image || "");
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage("");
    setFormData({ ...formData, image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the preview image to formData
    onSubmit({ ...formData, image: previewImage });
    setFormData({ name: "", email: "", department: "", salary: "", image: "" });
    setPreviewImage("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-[#407294]">{employee ? "Edit Employee" : "Add Employee"}</h2>

        {/* Image Upload */}
        <div className="text-center mb-4">
          <img
            src={previewImage || "https://via.placeholder.com/120"}
            className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-[#407294] mb-2"
          />
          <div className="flex justify-center space-x-2">
            <label className="cursor-pointer bg-[#407294] text-white px-4 py-2 rounded hover:bg-[#5997c0] transition">
              {previewImage ? "Change" : "Add"} Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                ref={fileInputRef}
              />
            </label>
            {previewImage && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <div className="flex justify-end space-x-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#c9af9c] hover:bg-[#bc9e89] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-[#407294] text-white hover:bg-[#5997c0] transition"
            >
              {employee ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
