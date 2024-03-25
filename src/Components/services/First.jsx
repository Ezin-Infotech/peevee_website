import React from "react";

const First = () => {
  return (
    <div>
      <div>
        <div className="p-4 md:mx-32">
          <div className="my-8 md:flex gap-8">
            <div className="p-7  md:w-1/2 bg-[rgba(0,0,0,0.7)] mb-5">
              <p className="text-white text-3xl font-light">OUR SERVICES</p>
              <p className="text-white text-2xl font-light">
                Have questions? Contact us today!
              </p>
            </div>
            <div className="md:w-1/2">
              {/* <img
                src="https://procargo.com/wp-content/uploads/2018/11/Contact-Hdr.jpg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
