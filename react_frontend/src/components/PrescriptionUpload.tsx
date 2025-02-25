import { useState } from "react";

const PrescriptionUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
    }
  };

  return (
    <div className="p-6 border rounded-md shadow-md bg-white dark:bg-gray-800 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-2 border rounded mb-3"
      />
      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white p-3 rounded"
        disabled={!file}
      >
        Upload
      </button>
    </div>
  );
};

export default PrescriptionUpload;
