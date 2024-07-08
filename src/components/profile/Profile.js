import ProfileCard from "./ProfileCard";
import LabCard from "./LabCard";
const Profile = ({patient}) => {
    return (
        <div className="flex flex-col gap-4 w-1/4 h-screen">
            <ProfileCard patient={patient} />
            <LabCard patient={patient} />
        </div>
    )
}

export default Profile;