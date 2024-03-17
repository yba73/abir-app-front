import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import Forget from "../pages/ForgetPassword";
import Profile from "../pages/profile/Profile";

import Project from "../pages/Project";
import Reset from "../pages/ResetPassword";
import Account from "../pages/Account";
import UserRoutes from "./UserRoutes";
import { useSelector } from "react-redux";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/project" element={<Project />} />

        <Route element={<UserRoutes />}>
          <Route path="/account" element={<Account />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </>
  );
};

export default Routers;
