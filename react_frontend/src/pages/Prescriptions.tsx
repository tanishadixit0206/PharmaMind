import Layout from "../components/Layout";
import PrescriptionList from "../components/PrescriptionList";

const Prescriptions: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Prescriptions</h1>
      <PrescriptionList />
    </>
  );
};

export default Prescriptions;
