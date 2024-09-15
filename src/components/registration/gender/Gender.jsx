import React from "react";

const Gender = ({ formik }) => {
  return (
    <div className="my-5">
      <span>Select your Gender</span>
      <div className="flex items-center justify-between mt-3">
        <div className="w-[30%] flex items-center justify-between">
          <label htmlFor="male">Male</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            value="male"
            name="gender"
            id="male"
            type="radio"
            className="py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md"
          />
        </div>
        <div className="w-[30%] flex items-center justify-between">
          <label htmlFor="female">Female</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            value="female"
            name="gender"
            id="female"
            type="radio"
            className="py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Gender;
