import React from "react";

const DateOfBirth = ({ formik }) => {
  let year = Array.from(
    new Array(105),
    (val, index) => formik.values.birthYear - index
  );
  console.log(year);
  return (
    <>
      <div className="">
        <h1>Date Of Birth</h1>
        <div className="flex justify-between items-center my-3">
          <select name="" id="">
            <option
              className="w-[30%]  px-3 py-1 outline-none border border-sky-800 rounded-md"
              value=""
              name="birthMonth"
            ></option>
          </select>

          <input
            className="w-[30%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-3 py-1 outline-none border border-sky-800 rounded-md"
            type="number"
            placeholder="Month"
          />
          <input
            className="w-[30%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-3 py-1 outline-none border border-sky-800 rounded-md"
            type="number"
            placeholder="Year"
            name="birthYear"
          />
        </div>
      </div>
    </>
  );
};

export default DateOfBirth;
