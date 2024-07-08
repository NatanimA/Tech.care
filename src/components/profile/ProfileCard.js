import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { CgGenderFemale } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { PiShieldCheckLight } from "react-icons/pi";
const ProfileCard = ({patient}) => {
    return (
        <div className="bg-white bg-no-repeat bg-padding-box rounded-md h-5/6 mx-0 gap-8">
            <Image  src={patient.profile_picture} alt="Profile Picture" width={150} height={150} className="mx-auto mt-14 mb-4" />

            <p className="font-extrabold text-2xl leading-9 font-manrope tracking-normal text-blue-dark text-center mx-auto">{patient.name}</p>

            <div className="flex flex-col mx-4 mt-10">
                <div className="flex flex-row">
                    <div className="bg-transparent bg-gray-300 rounded-lg p-2 bg-no-repeat bg-center bg-padding-box">
                        <CiCalendarDate  size={30}/>
                    </div>
                    <div className="flex flex-col ml-10">
                        <p className="font-medium text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">Date Of Birth</p>
                        <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">{new Date(patient.date_of_birth).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col mx-4 mt-6">
                <div className="flex flex-row">
                    <div className="bg-transparent bg-gray-300 rounded-lg p-2 bg-no-repeat bg-center bg-padding-box">
                        <CgGenderFemale  size={30}/>
                    </div>
                    <div className="flex flex-col ml-10">
                        <p className="font-medium text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">Gender</p>
                        <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">{patient.gender}</p>
                    </div>
                </div>

            </div>


            <div className="flex flex-col mx-4 mt-6" >
                <div className="flex flex-row">
                    <div className="bg-transparent bg-gray-300 rounded-lg p-2 bg-no-repeat bg-center bg-padding-box">
                        <MdOutlinePhone  size={30}/>
                    </div>
                    <div className="flex flex-col ml-10">
                        <p className="font-medium text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">Contact Info</p>
                        <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">{patient.phone_number}</p>
                    </div>
                </div>

            </div>


            <div className="flex flex-col mx-4 mt-6">
                <div className="flex flex-row">
                    <div className="bg-transparent bg-gray-300 rounded-lg p-2 bg-no-repeat bg-center bg-padding-box">
                        <MdOutlinePhone  size={30}/>
                    </div>
                    <div className="flex flex-col ml-10">
                        <p className="font-medium text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">Emergency Contacts</p>
                        <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">{patient.emergency_contact}</p>
                    </div>
                </div>

            </div>


            <div className="flex flex-col mx-4 mt-6">
                <div className="flex flex-row">
                    <div className="bg-transparent bg-gray-300 rounded-lg p-2 bg-no-repeat bg-center bg-padding-box">
                        <PiShieldCheckLight  size={30}/>
                    </div>
                    <div className="flex flex-col ml-10">
                        <p className="font-medium text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">Insurance Provider</p>
                        <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize">{patient.insurance_type}</p>
                    </div>
                </div>

            </div>

            <div className="w-full my-11">
            <button className="bg-teal-400 rounded-full p-4 mx-24">Show All Information</button>
            </div>

           
        </div>
    )
}

export default ProfileCard