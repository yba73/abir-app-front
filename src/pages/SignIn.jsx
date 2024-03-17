import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { useFormik } from "formik";
import { loginUser } from "../redux/user/user.slice.js";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
import { loginSchema } from "../validations/user.schema.js";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth, loading } = useSelector((state) => state.user);
  const login = () => {
    dispatch(loginUser(values));
    console.log("values", values);
  };
  /*===== formik and yup =====*/
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: login,
    });
  /*=====// formik and yup //=====*/
  useEffect(() => {
    {
      isAuth && navigate("/account");
    }
  }, [isAuth]);
  const error = false;
  return (
    <div>
      <div
        className="px-4 w-full h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/02/36/77/63/240_F_236776308_kQn0MgsaDZgxVS91IH9fsW3cehQ7f5RG.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <form
          className="border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]"
          onSubmit={handleSubmit}
        >
          <h1 className="uppercase text-xl mb-4 font-bold">Sign IN</h1>
          <input
            className="p-2 mb-4 border-2 rounded focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus={true}
          />
          <input
            className="p-2 mb-4 border-2 rounded focus:outline-none"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-sm">
              Remember me
            </label>
          </div>
          <Link to="/forget" className="text-sm underline mb-4">
            Forgot password?
          </Link>
          <button
            // disabled={loading}
            className="mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed hover:bg-teal-900"
            type="submit"
          >
            Sign In
          </button>

          <OAuth />

          <Link to="/signup" className="capitalize underline mb-4">
            Don't have an account ? Create one
          </Link>
          {/* <p> {error ? error.message || "Something went wrong!" : ""} </p> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
