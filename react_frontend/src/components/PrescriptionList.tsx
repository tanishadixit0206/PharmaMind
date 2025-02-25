import { useState } from "react";

interface Prescription {
  id: string;
  patientName: string;
  status: "Pending" | "Processing" | "Completed";
  date: string;
}

const Prescriptions: Prescription[] = [
  { id: "1", patientName: "John Doe", status: "Pending", date: "2025-02-25" },
  { id: "2", patientName: "Jane Smith", status: "Processing", date: "2025-02-24" },
  { id: "3", patientName: "Alice Johnson", status: "Completed", date: "2025-02-23" },
];

const PrescriptionList: React.FC = () => {
  const [prescriptions] = useState<Prescription[]>(Prescriptions);

  return (
    <div className="p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Prescription List</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Patient Name</th>
            <th className="border p-3 text-left">Status</th>
            <th className="border p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id} className="border">
              <td className="p-3">{prescription.patientName}</td>
              <td
                className={`p-3 font-semibold ${
                  prescription.status === "Completed"
                    ? "text-green-600"
                    : prescription.status === "Processing"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {prescription.status}
              </td>
              <td className="p-3">{prescription.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrescriptionList;
