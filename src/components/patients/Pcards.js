import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const Pcards = ({ patient, setPatient, active, index, setActive }) => {
  const handleClick = () => {
    setPatient(patient);
    setActive(index);
  };

  return (
    <div
      className={`${
        active === index && "bg-teal-200"
      } flex flex-row justify-between mx-3 my-6 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-no-repeat bg-padding-box opacity-100 hover:opacity-75 p-3 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex flex-row gap-4">
        <div className="w-12 h-12 relative">
          <Image
            alt="Profile"
            src={patient.profile_picture}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs sm:text-sm md:text-base font-bold leading-none text-072635 text-left opacity-100">
            {patient?.name}
          </p>
          <p className="text-xs sm:text-sm md:text-base font-normal leading-none text-707070 text-left opacity-100">
            {patient?.gender}, {patient?.age}
          </p>
        </div>
      </div>
      <BsThreeDots />
    </div>
  );
};

export default Pcards;