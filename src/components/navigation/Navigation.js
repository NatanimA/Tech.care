import React from 'react';
import Logo from "./Logo";
import NavList from "./NavLists";
import Profile from "./Profile";

const Navigation = () => {
  return (
    <div className="my-4 bg-white bg-no-repeat bg-padding-box rounded-full opacity-100 flex justify-center ">
      <div className="w-full px-4">
        <div className="flex flex-row justify-between h-16">
          <Logo />
          <NavList />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navigation;