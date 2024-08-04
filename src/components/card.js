import React, { useState } from "react";
import dataSet from "../components/mockData";
import { FaWalking } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";

// import Image from "react/image";

const Card = () => {
  const [data, setData] = useState(dataSet.slice(0, 10));
  return (
    <div>
      <div className="flex-col items-center justify-center w-full px-4">
        <div className=" md:border-b-2 md:w-full md:h-10"></div>
        <div className="bg-white px-4 w-64 md:-mt-5 md:ml-[40%] ">
          <h3 className="font-bold md:text-2xl text-xl">Featured Listings</h3>
        </div>
      </div>
      <div className="flex py-8 md:px-28 px-12  gap-8 my-10 overflow-x-auto scroll-smooth scrollbar-hidden no-scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-80 h-96 bg-white flex-shrink-0 border-2 gap-2 rounded-md shadow-lg"
          >
            <img
              src={`/images/img${index + 1}.jpg`}
              alt="bgs"
              className="w-full h-[50%] rounded-md"
              loading="lazy"
            />
            <div className="p-4 flex-col justify-between">
              <p className="text-left text-lg font-semibold ">{item.name}</p>
              <p className=" text-left text-lg my-3">
                From {""}
                <span className="text-red-600 font-bold"> ${item.amount}</span>
                /week
              </p>
              <div className="bg-sky-600 p-1 w-[80%]">
                <p className=" text-left text-gray-50 ">
                  cheapest in the pass month
                </p>
              </div>
              <div className="text-black flex justify-between mt-4">
                <div className="flex gap-1 items-center">
                  <FaWalking />
                  <p className=" text-left text-black ">{item.duration.walk}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <IoMdTrain />
                  <p className=" text-left text-black ">
                    {item.duration.train}
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaBusSimple />
                  <p className=" text-left text-black ">{item.duration.bus}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
