import React from 'react';
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="my-auto flex flex-col sm:flex-row flex-shrink ">
      <div className="flex items-center gap-5">
        <Image alt="Profile" src={"/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"} width={44} height={44} />
        <div className="flex flex-col my-auto gap-1">
            <p className="mx-3 sm:mx-0 font-bold text-sm sm:text-base leading-none text-072635 text-center sm:text-left sm:whitespace-nowrap opacity-100">
                Dr. Jose Simmons
            </p>
            <p className="mx-3 sm:mx-0 font-normal text-sm sm:text-base leading-none text-gray-500 text-center sm:text-left sm:whitespace-nowrap opacity-100">
                General Practitioner
            </p>
        </div>
      </div>
      <div className="border-r-2 opacity-100 mx-5"></div>
      <div className="my-auto flex flex-row gap-2 mx-5 flex-shrink">
        <IoSettingsOutline size={20} />
        <HiDotsVertical size={20} />
      </div>
    </div>
  );
};

export default Profile;