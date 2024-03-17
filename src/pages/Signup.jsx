import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import OAuth from "../components/OAuth";
import { useFormik } from "formik";
import { registerSchema } from "../validations/user.schema.js";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../redux/user/user.slice.js";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isActive, loading } = useSelector((state) => state.user);
  const register = () => {
    dispatch(registerUser(values));
  };
  /*===== formik and yup =====*/
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: registerSchema,
      onSubmit: register,
    });
  /*=====// formik and yup //=====*/

  useEffect(() => {
    {
      isActive && navigate("/signin");
    }
  }, [isActive]);
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
          <h1 className="uppercase text-xl mb-4 font-bold">Sign up</h1>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="text"
              placeholder="First Name"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus={true}
            />
            {/* {touched.firstname && errors?.firstname && (
              <span className="text-red-700">{errors.firstname}</span>
            )} */}

            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <span className="text-red-700">
              {touched.lastname && errors.lastname && errors.lastname}
            </span> */}
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <span className="text-red-700">
              {touched.username && errors.username && errors.username}
            </span> */}
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <span className="text-red-700">
              {touched.email && errors.email && errors.email}
            </span> */}
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* <span className="text-red-700">
              {touched.password && errors.password && errors.password}
            </span> */}
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              id="confirmpassword"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <span className="text-red-700">
              {touched.confirm_password &&
                errors.confirm_password &&
                errors.confirm_password}
            </span> */}
          </div>

          <button
            className="mb-4 bg-teal-700 text-white p-2 hover:bg-teal-900"
            type="submit"
          >
            {loading ? "Loading..." : "Sign Up"}{" "}
          </button>
          <OAuth />

          <Link to="/signin" className="capitalize underline mb-4">
            Already have an account!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
