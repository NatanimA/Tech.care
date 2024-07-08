import { GoHome } from "react-icons/go";
import { IoMdPeople } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";


const NavList = () => {
    return (


            <ul className="flex flex-row justify-between w-1/3 relative my-auto mx-32 gap-6">
                <li className="flex flex-row   bg-no-repeat bg-padding-box rounded-full opacity-100 top-45 left-916 w-61 h-19 font-bold text-base leading-none text-072635 text-left gap-3 p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box  hover:opacity-75 cursor-pointer">
                    <GoHome />   Overview
                  
                </li>
                <li className="flex flex-row  bg-teal-200 bg-no-repeat bg-padding-box rounded-full top-45 left-916 w-61 h-19 font-bold text-base leading-none text-072635 text-left opacity-100 gap-3 p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box  hover:opacity-75 cursor-pointer">
                    <IoMdPeople />  Patients
                   
                </li>
                <li className="flex flex-row    bg-no-repeat bg-padding-box rounded-full top-45 left-916 w-61 h-19 font-bold text-base leading-none text-072635 text-left opacity-100 gap-3 p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box  hover:opacity-75 cursor-pointer">
                    <RiCalendarScheduleLine /> Schedule
                    
                </li>
                <li className="flex flex-row   bg-no-repeat bg-padding-box rounded-full top-45 left-916 w-61 h-19 font-bold text-base leading-none text-072635 text-left opacity-100 gap-3 p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box  hover:opacity-75 cursor-pointer">
                    <FiMessageSquare /> Message
                    
                </li>
                <li className="flex flex-row   bg-no-repeat bg-padding-box rounded-full top-45 left-916 w-61 h-19 font-bold text-base leading-none text-072635 text-left opacity-100 gap-3 p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box  hover:opacity-75 cursor-pointer">
                    <FaRegCreditCard /> Transactions
                    
                </li>
            </ul>
   
    )
}

export default NavList;