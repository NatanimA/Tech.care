import React from 'react';
import { GoHome } from "react-icons/go";
import { IoMdPeople } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";

const NavList = () => {
  return (
    <ul className="flex justify-start w-full sm:w-auto relative my-auto mx-4 sm:mx-0 gap-2 flex-shrink">
      <li className="flex items-center bg-no-repeat bg-padding-box rounded-full opacity-100 h-19 font-bold text-base leading-none text-072635 text-left p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box hover:opacity-75 cursor-pointer flex-shrink">
        <GoHome className="mr-2 text-lg" />Overview
      </li>
      <li className="flex items-center bg-teal-200 bg-padding-box rounded-full opacity-100 h-19 font-bold text-base leading-none text-072635 text-left p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box hover:opacity-75 cursor-pointer flex-shrink">
        <IoMdPeople className="mr-2 text-lg" />Patients
      </li>
      <li className="flex items-center bg-no-repeat bg-padding-box rounded-full opacity-100 h-19 font-bold text-base leading-none text-072635 text-left p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box hover:opacity-75 cursor-pointer flex-shrink">
        <RiCalendarScheduleLine className="mr-2 text-lg" />Schedule
      </li>
      <li className="flex items-center bg-no-repeat bg-padding-box rounded-full opacity-100 h-19 font-bold text-base leading-none text-072635 text-left p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box hover:opacity-75 cursor-pointer flex-shrink">
        <FiMessageSquare className="mr-2 text-lg" />Message
      </li>
      <li className="flex items-center bg-no-repeat bg-padding-box rounded-full opacity-100 h-19 font-bold text-base leading-none text-072635 text-left p-4 bg-activestate-bg-2 hover:bg-teal-100 transition-colors duration-300 bg-padding-box hover:opacity-75 cursor-pointer flex-shrink">
        <FaRegCreditCard className="mr-2 text-lg" />Transactions
      </li>
    </ul>
  );
};

export default NavList;