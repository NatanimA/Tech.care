import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { CgGenderFemale } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { PiShieldCheckLight } from "react-icons/pi";
import ProfileCard from "./ProfileCard";
import LabCard from "./LabCard";
const Profile = ({patient}) => {
    console.log(patient)
    return (
        <div className="flex flex-col gap-4 w-1/4 h-screen">
            <ProfileCard patient={patient} />
            <LabCard patient={patient} />
        </div>
    )
}

export default Profile;