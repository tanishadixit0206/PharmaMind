import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnalysisDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/analysis/${id}`);
        if (!response.ok) throw new Error("Failed to fetch analysis details.");
        const data = await response.json();
        setAnalysis(data);
      } catch (err) {
        setError("Error loading analysis details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [id]);

  if (loading) return <p className="text-blue-500">Loading analysis details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md transition-all">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Analysis Details</h1>
      
      {analysis ? (
        <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow">
          <p className="text-gray-700 dark:text-gray-300"><strong>Type:</strong> {analysis.type}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>File:</strong> {analysis.fileName}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Date:</strong> {analysis.date}</p>
          
          <h2 className="text-xl font-semibold mt-4">Results</h2>
          <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md text-sm overflow-auto">
            {JSON.stringify(analysis.results, null, 2)}
          </pre>
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">No analysis found.</p>
      )}
    </div>
  );
};

export default AnalysisDetails;
