import { BsDownload } from "react-icons/bs";

const LabCard = ({patient}) => {
  return (
    <div className="bg-white bg-no-repeat bg-padding-box rounded-md h-screen">
      <p className="font-extrabold text-2xl leading-9 font-manrope tracking-normal text-blue-dark text-left p-4">Lab Results</p>

      <div className="overflow-y-auto my-4 relative h-32 flex flex-col">
        <div className="flex flex-col ">
          {patient.lab_results.map((lab,index) => (
              <div key={index} className="font-normal text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize flex flex-row justify-between p-4 hover:bg-gray-200 transition-colors duration-300 bg-no-repeat bg-padding-box opacity-100 hover:opacity-75">
              <p>{lab}</p>
              <BsDownload />
            </div>
          ))}
          <div flex-grow={1} /> 
        </div>
      </div>
    </div>
  );
};

export default LabCard;