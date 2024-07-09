import DList from "./DList";
import Dcard from "./Dcard";
import History from "./History";

const Diagnosis = ({ patient }) => {
  return (
    <div className="flex flex-col w-full sm:w-2/4 gap-4">
      <History patient={patient} />
      <DList patient={patient} />
    </div>
  );
};

export default Diagnosis;