import React from "react";
import { useFormik } from "formik";
import Gender from "./gender/Gender";

let initialState = {};
const RagistrationForm = () => {
  let formik = useFormik({
    initialValues: initialState,
    onSubmit: () => {
      console.log("Submited");
    },
  });
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-1/2 mx-auto  shadow-md rounded-md">
          <div className="w-[48%]"></div>
          <div className="w-[48%] p-5">
            <h1 className="text-2xl font-mono font-bold mb-5">Registration</h1>
            <form onSubmit={formik.handleSubmit} action="">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                value={formik.values.fullName}
                name="fullName"
                type="text"
                className="w-full px-5 py-2 outline-none  border border-sky-800 rounded-md mb-3 text-lg font-sans"
                placeholder="Enter your name"
              />
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                value={formik.values.email}
                name="email"
                type="email"
                className="w-full px-5 py-2 outline-none  border border-sky-800 rounded-md mb-3 text-lg font-sans"
                placeholder="Enter your email"
              />
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                value={formik.values.password}
                name="password"
                type="password"
                className="w-full px-5 py-2 outline-none  border border-sky-800 rounded-md mb-3 text-lg font-sans"
                placeholder="Enter your password"
              />
              <Gender formik={formik} />
              <button className="text-white text-lg rounded-md bg-orange-600 px-7 py-3 w-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RagistrationForm;
