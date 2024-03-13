import React, { useState } from "react";

const Card = () => {
    const [expand, setExpand] = useState(false)
  return (
    <div className="m-14 w-fit mx-auto">
      <div className="border shadow-lg mb-8">
        <img
          src="https://procargo.com/wp-content/uploads/2018/11/Air-Freight.jpg"
          alt=""
        />
        <div className="min-h-12 bg-white px-3 ">
          <div className="h-12 flex items-center justify-between" onClick={()=>setExpand(!expand)}>
            <p className="text-gray-500 font-medium">AIR FREIGHT</p>
            <i className="fa-solid fa-circle-plus text-[#3d83e4]" />
          </div>
          <div className={`my-5 ${expand ?'': 'hidden'}`}>
            <p className="text-gray-500 font-light">
                Shipping your freight by air with Pro Cargo will keep goods moving at optimal speed and efficiency. We have contracts with the world’s major air carriers that provide us secured space on many flights each month. Additionally, we are available 24/7 to offer charter flight assistance to meet your requirements. Our global, door-to-door services include customs clearance and inland transport to interior points, as well as coordinating with our sea freight operations for on-forwarding cargo in the most cost-effective manner. Our appointment as an official airline agent by the International Airlines Transport Association (IATA) enables us to issue airway bills on behalf of the airlines.
            </p>
            <ul className="mt-3 ml-5">
              <li className="list-disc text-gray-500 font-light">
                International Air freight service (Standard to Expedited)
              </li>
              <li className="list-disc text-gray-500 font-light">
                Air freight consolidation service.
              </li>
              <li className="list-disc text-gray-500 font-light">
                Airport to Airport / Door to Airport / Door-to-door
              </li>
              <li className="list-disc text-gray-500 font-light">
                Hazardous Goods
              </li>
              <li className="list-disc text-gray-500 font-light">
                Letters of Credit, Document Preparation and Insurance
              </li>
              <li className="list-disc text-gray-500 font-light">
              Carnet Shipments
              </li>
              <li className="list-disc text-gray-500 font-light">
              Multimodal Transportation (Sea/Air/Surface)
              </li>
              <li className="list-disc text-gray-500 font-light">
              Project Cargo
              </li>
              <li className="list-disc text-gray-500 font-light">
              Charter services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
