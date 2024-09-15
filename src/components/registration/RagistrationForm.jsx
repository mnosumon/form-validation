import React, { useState } from "react";
import { useFormik } from "formik";
import Gender from "./gender/Gender";
import { formWarning } from "../../warning/formWarning";

let initialState = {
  fullName: "",
  email: "",
  password: "",
  date: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};
const RagistrationForm = () => {
  let [age, setAge] = useState("");
  let formik = useFormik({
    initialValues: initialState,
    validationSchema: formWarning,
    onSubmit: () => {
      let currentDate = new Date();
      let pickedDate = new Date(
        formik.values.year,
        formik.values.month - 1,
        formik.values.date
      );

      let adult = new Date(1970 + 18, 0, 1);
      let old = new Date(1970 + 70, 0, 1);

      if (currentDate - pickedDate < adult) {
        return setAge("You are not 18+");
      } else if (currentDate - pickedDate > old) {
        return setAge("You are also 70+");
      } else {
        return setAge("");
      }
    },
  });

  let storeYear = new Date().getFullYear();
  let years = Array.from(new Array(105), (val, index) => storeYear - index);
  let month = Array.from(new Array(12), (val, index) => 1 + index);
  let dates = () => {
    return new Date(formik.values.year, formik.values.month, 0).getDate();
  };
  let date = Array.from(new Array(dates()), (val, index) => 1 + index);

  let { errors, touched } = formik;

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
                className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
                  errors.fullName && touched.fullName ? "mb-1" : "mb-3"
                } text-lg font-sans`}
                placeholder="Enter your name"
              />
              {touched.fullName && errors.fullName && (
                <div className="text-sm  py-2 text-red-500">
                  {errors.fullName}
                </div>
              )}
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                value={formik.values.email}
                name="email"
                type="email"
                className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
                  errors.email && touched.email ? "mb-1" : "mb-3"
                } text-lg font-sans`}
                placeholder="Enter your email"
              />
              {touched.email && errors.email && (
                <div className="text-sm py-2 text-red-500">{errors.email}</div>
              )}
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                value={formik.values.password}
                name="password"
                type="password"
                className={`w-full px-5 py-2 outline-none border border-sky-800 rounded-md ${
                  errors.password && touched.password ? "mb-1" : "mb-3"
                } text-lg font-sans`}
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <div className="text-sm  py-2 text-red-500">
                  {errors.password}
                </div>
              )}
              <Gender formik={formik} />
              <div className="">
                <h1>Date Of Birth</h1>
                <div className="flex justify-between items-center my-3">
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                    value={formik.values.date}
                    name="date"
                    className="border border-yellow-500 rounded-md  w-[30%] outline-none p-2 appearence-none"
                  >
                    {date.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                    value={formik.values.month}
                    name="month"
                    className="border border-yellow-500 rounded-md w-[30%] outline-none p-2 appearence-none"
                  >
                    {month.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                    value={formik.values.year}
                    name="year"
                    className="border border-yellow-500 rounded-md  w-[30%] outline-none p-2 appearence-none"
                  >
                    {years.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
                {age && (
                  <p className="text-sm font-gilroyRegular py-2 text-red-500">
                    {age}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="text-white text-lg rounded-md bg-orange-600 px-7 py-3 w-full"
              >
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
