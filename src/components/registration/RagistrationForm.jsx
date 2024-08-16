import React from "react";
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
  let formik = useFormik({
    initialValues: initialState,
    validationSchema: formWarning,
    onSubmit: () => {
      console.log("Submited");
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
                    className="w-[30%] outline-none  px-3 py-1 appearance-none border border-sky-800 rounded-md"
                    name="date"
                    id=""
                  >
                    {years.map((item, index) => (
                      <option className="px-3 py-1 border border-sky-800 rounded-md">
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-[30%] outline-none px-3 py-1 appearance-none border border-sky-800 rounded-md"
                    name="month"
                    id=""
                  >
                    {month.map((item, index) => (
                      <option className="px-3 py-1 border border-sky-800 rounded-md">
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-[30%] outline-none px-3 py-1 appearance-none border border-sky-800 rounded-md"
                    name="year"
                    id=""
                  >
                    {date.map((item, index) => (
                      <option className="px-3 py-1 border border-sky-800 rounded-md">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
