import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { userInfo, userId, isAuth } = useSelector((state) => state.user);

  return (
    <nav className="grid grid-cols-2 p-4 border-b font-semibold h-18">
      <h1 className="font-bold text-3xl uppercase flex items-center justify-start px-4 tracking-wider">
        <Link to="/">Trace</Link>
      </h1>
      <div className="flex justify-end items-center px-4 text-md md:text-lg">
        {isAuth ? (
          <>
            <Link to={`/profile/${userId}`}>
              <img
                src={userInfo?.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            </Link>
            <Link to="/account" className="uppercase px-4 py-2">
              account
            </Link>
            <Link to="/project" className="uppercase px-4 py-2">
              Project
            </Link>
          </>
        ) : (
          <>
            <Link to="/project" className="uppercase px-4 py-2">
              Project
            </Link>
            <Link to="/signup" className="uppercase px-4 py-2">
              Sign Up
            </Link>
            <Link to="/signin" className="uppercase px-4 py-2">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
