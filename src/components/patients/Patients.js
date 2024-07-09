import { IoSearchOutline } from "react-icons/io5";
import Pcards from "./Pcards";
import { useState } from "react";

const Patients = ({ patients, setPatient }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full sm:w-1/4 bg-white bg-no-repeat bg-padding-box rounded-2xl opacity-100 h-screen">
      <div className="flex flex-row justify-between">
        <p className="my-6 mx-6 h-33 font-extrabold text-xl sm:text-2xl leading-tight text-072635 text-left opacity-100">
          Patients
        </p>
        <IoSearchOutline className="my-6 mx-6" />
      </div>

      <div className="overflow-y-auto my-4 h-auto relative max-h-[calc(100%-6rem)]">
        {patients.map((patient, index) => (
          <Pcards
            key={index}
            patient={patient}
            setPatient={setPatient}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Patients;