import Navbar from "../../components/Navbar";

export default function Salary() {
  const salaries = [
    { id: 1, month: "August", amount: 50000 },
    { id: 2, month: "July", amount: 50000 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Salary Records</h1>
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((sal) => (
              <tr key={sal.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{sal.month}</td>
                <td className="p-3">${sal.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
