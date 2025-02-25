import { useParams } from "react-router-dom";

const mockOrders = {
  "1": {
    id: "1",
    patientName: "John Doe",
    status: "Pending",
    date: "2025-02-25",
    items: ["Paracetamol 500mg", "Amoxicillin 250mg"],
  },
  "2": {
    id: "2",
    patientName: "Jane Smith",
    status: "Processing",
    date: "2025-02-24",
    items: ["Ibuprofen 400mg"],
  },
};

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const order = mockOrders[id || "1"];

  if (!order) return <p>Order not found</p>;

  return (
    <div className="p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <p className="text-lg font-semibold">Patient: {order.patientName}</p>
      <p className="text-gray-600">Date: {order.date}</p>
      <p className="text-gray-600">
        Status:{" "}
        <span
          className={`font-semibold ${
            order.status === "Completed"
              ? "text-green-600"
              : order.status === "Processing"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {order.status}
        </span>
      </p>
      <h3 className="text-lg font-semibold mt-4">Prescribed Medications:</h3>
      <ul className="list-disc pl-5">
        {order.items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
