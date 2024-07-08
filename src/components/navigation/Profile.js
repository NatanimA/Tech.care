import Image from "next/image"
import { IoSettingsOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const Profile = () => {


    return (
        <div className="my-auto flex flex-row">
         <Image alt="Profile" src={"/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"} width={44} height={44} />
         <div className="flex flex-col my-auto gap-1">
            <p className="mx-3  font-bold text-sm leading-none text-072635 text-left opacity-100">Dr. Jose Simmons</p>
            <p className="mx-3 font-normal text-sm leading-none text-gray-500 text-left opacity-100">General Practitioner</p>
         </div>
         <div className="w-1 bg-gray-100 bg-no-repeat bg-padding-box opacity-100"></div>

        <div className="my-auto flex flex-row gap-2 mx-5">
         <IoSettingsOutline size={20}/>
         <HiDotsVertical size={20}/>
         </div>

        </div>
       
     

    )
}

export default Profile;