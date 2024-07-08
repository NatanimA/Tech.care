import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Dcard = ({health}) => {
    return (
        <div className={`${health.backgroundColor} bg-no-repeat bg-padding-box rounded-lg w-4/5 h-60 flex flex-col p-2`}>
            <Image alt="Health" src={health.image} width={90} height={90} className="mb-6"/>
            <p className="font-medium text-base leading-6 font-manrope tracking-normal text-blue-dark text-left capitalize">{health.category}</p>
            <p className="font-extrabold text-3xl leading-10 font-manrope tracking-normal text-blue-dark text-left">{health.data.value}</p>
            <div className="flex flex-row float-end">
                <p className="font-normal text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left flex flex-row gap-2">
                    {health.data.levels === "Higher than Average" && <IoIosArrowUp  className="mt-1"/>}
                    {health.data.levels  === "Lower than Average" && <IoIosArrowUp className="mt-1" />}
                    <span>{health.data.levels}</span>
                </p>
            </div>
        </div>
    )
}

export default Dcard;