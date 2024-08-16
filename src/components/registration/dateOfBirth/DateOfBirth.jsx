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
          <select
            className="w-[30%] outline-none  px-3 py-1 appearance-none border border-sky-800 rounded-md"
            name=""
            id=""
          >
            <option
              className="px-3 py-1 border border-sky-800 rounded-md"
              value=""
              name="birthMonth"
            >
              54
            </option>
          </select>
          <select
            className="w-[30%] outline-none px-3 py-1 appearance-none border border-sky-800 rounded-md"
            name=""
            id=""
          >
            <option
              className="px-3 py-1  border border-sky-800 rounded-md"
              value=""
              name="birthMonth"
            >
              54
            </option>
          </select>
          <select
            className="w-[30%] outline-none px-3 py-1 appearance-none border border-sky-800 rounded-md"
            name=""
            id=""
          >
            <option
              className="px-3 py-1  border border-sky-800 rounded-md"
              value=""
              name="birthMonth"
            >
              54
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DateOfBirth;
