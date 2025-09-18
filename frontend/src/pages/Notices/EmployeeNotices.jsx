import Navbar from "../../components/Navbar";

export default function Notices() {
  const notices = [
    { id: 1, title: "Office Closed", message: "Office will be closed on 10th Sept for maintenance." },
    { id: 2, title: "New Policy", message: "Please check the updated leave policy." },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Notices</h1>
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white shadow-xl rounded-xl p-4 mb-4">
            <h2 className="font-bold">{notice.title}</h2>
            <p>{notice.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
