import { Link } from "react-router-dom";

const mockHistory = [
  { id: "1", type: "Prescription", name: "prescription1.jpg", date: "2025-02-25" },
  { id: "2", type: "Medical Image", name: "xray_scan1.png", date: "2025-02-24" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md transition-all">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Dashboard</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Welcome to PharmaMind!</p>

      <div className="flex space-x-4 mb-6">
        <Link
          to="/prescription_upload"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          Upload Prescription
        </Link>
        <Link
          to="/medical_image_upload"
          className="bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Upload Medical Image
        </Link>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Previous Analyses</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border bg-white dark:bg-gray-900 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border p-3 text-left text-gray-900 dark:text-gray-100">Type</th>
              <th className="border p-3 text-left text-gray-900 dark:text-gray-100">File</th>
              <th className="border p-3 text-left text-gray-900 dark:text-gray-100">Date</th>
              <th className="border p-3 text-left text-gray-900 dark:text-gray-100">Details</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((item) => (
              <tr key={item.id} className="border dark:border-gray-700">
                <td className="p-3 text-gray-900 dark:text-gray-100">{item.type}</td>
                <td className="p-3 text-gray-900 dark:text-gray-100">{item.name}</td>
                <td className="p-3 text-gray-900 dark:text-gray-100">{item.date}</td>
                <td className="p-3">
                  <Link to={`/analysis/${item.id}`} className="text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
