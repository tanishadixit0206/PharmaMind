import { useState } from "react";
import processPrescription from "../services/processPrescription";

const PrescriptionUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [report, setReport] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setReport(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setReport(null);
    setError(null);

    try {
      const response = await processPrescription(file);
      setReport(response);
    } catch (err) {
      setError("Failed to process the prescription. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Prescription OCR</h1>
      <div className="p-6 border rounded-md shadow-md bg-white dark:bg-gray-800 transition-all duration-300">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Prescription</h1>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded mb-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
          accept="image/*"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white p-3 rounded"
          disabled={!file || loading}
        >
          {loading ? "Processing..." : "Upload & Analyze"}
        </button>

        {loading && <p className="text-blue-500 mt-3">Processing...</p>}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {report && (
          <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-4 rounded text-sm text-gray-900 dark:text-white">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Prescription Report</h2>
            <ul className="list-disc pl-5">
              <li><strong>Doctor:</strong> {report.doctor_name || "N/A"}</li>
              <li><strong>Patient:</strong> {report.patient_name || "N/A"}</li>
              <li><strong>Date:</strong> {report.date || "N/A"}</li>
              <li><strong>Address:</strong> {report.address || "N/A"}</li>
              <li><strong>Contact:</strong> {report.contact || "N/A"}</li>
              <li><strong>Medicines:</strong> {report.medicines?.length ? report.medicines.join(", ") : "None detected"}</li>
              <li><strong>Diagnosis:</strong> {report.diagnosis?.length ? report.diagnosis.join(", ") : "None detected"}</li>
              <li><strong>Other Info:</strong> {report.others?.length ? report.others.join(", ") : "None"}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PrescriptionUpload;
