import Logo from "./Logo";
import NavList from "./NavLists";
import Profile from "./Profile";

const Navigation = () => {
    return (
        <div className="my-4 mx-4  bg-white bg-no-repeat bg-padding-box rounded-full opacity-100  w-screen h-16 flex flex-row justify-between">

            <Logo />

            <NavList />

            <Profile />
        </div>)
}

export default Navigation;