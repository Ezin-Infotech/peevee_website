import React from "react";

const Request = () => {
  return (
    <div className="">
      <div className=" p-4  mx-2 md:mx-32 mt-4  text-start   pb-12 ">
        <h1 className="text-center font-semibold  text-2xl text-[#333;]">
          SEND US A REQUEST
        </h1>
        <h2 className="text-[#333;] text-2xl font-semibold ">Contact Form</h2>
        <div className="">
          <form action="" className="">
            <div className="md:flex md:space-x-4">
              <input
                type="text"
                className="w-full md:w-1/2 mt-2  p-3 bg-[#eee] outline-none"
                placeholder="What is Your Name?"
              />
              <input
                type="text"
                className=" w-full md:w-1/2 mt-2  p-3 bg-[#eee] outline-none"
                placeholder="What is Your Best Email?"
              />
            </div>
            <div className=" text-end">
              <button className="mt-4 bg-[#3d83e4] p-2 px-8 py-2 rounded-lg text-white">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
