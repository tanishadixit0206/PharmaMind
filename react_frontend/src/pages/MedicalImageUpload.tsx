import { useState } from "react";
import analyzeImage from "../services/analyseImage";

const MedicalImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{ prediction: string; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeImage(file);
      setResult(response);
    } catch (err) {
      setError("Failed to process the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
        Medical Image Analysis
      </h1>
      <div className="p-6 border rounded-md shadow-md bg-white dark:bg-gray-800 transition-all duration-300">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Upload your Medical Scan
        </h1>
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

        {result && (
          <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-4 rounded text-sm text-gray-900 dark:text-white">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Analysis Report
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Prediction:</strong> {result.prediction}
              </li>
              <li>
                <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MedicalImageUpload;
