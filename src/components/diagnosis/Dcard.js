import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";


const Dcard = ({ health }) => {
  return (
    <div
      className={`${health.backgroundColor} bg-no-repeat bg-padding-box rounded-lg w-full sm:w-4/5 h-auto sm:h-60 flex flex-col p-2`}
    >
      <Image alt="Health" src={health.image} width={90} height={90} className="mb-6" />
      <p
        className="font-medium text-base sm:text-lg leading-6 font-manrope tracking-normal text-blue-dark text-left capitalize"
      >
        {health.category}
      </p>
      <p
        className="font-extrabold text-3xl sm:text-4xl leading-10 font-manrope tracking-normal text-blue-dark text-left"
      >
        {health.data.value}
      </p>
      <div className="flex flex-row gap-2 items-end">  {/* Added items-end for bottom alignment */}
        {health.data.levels === "Higher than Average" && <FaCaretUp className="my-auto" />}
        {health.data.levels === "Lower than Average" && <FaCaretDown className="my-auto" />}
        <span className="font-light text-sm sm:text-base leading-5  text-left">
          {health.data.levels}
        </span>
      </div>
    </div>
  );
};

export default Dcard;
