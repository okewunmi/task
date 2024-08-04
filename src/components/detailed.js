import React, { useState, useEffect } from "react";
import dataSet from "../components/mockData";
import { FaWalking } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";

const DetailedCard = () => {
  const [data, setData] = useState(dataSet.slice(10, 20));
  const [sortOption, setSortOption] = useState("Name");

  useEffect(() => {
    let sortedData = [...data];
    if (sortOption === "A-Z") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Z-A") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "Amount (Low-High)") {
      sortedData.sort((a, b) => a.amount - b.amount);
    } else if (sortOption === "Amount (High-Low)") {
      sortedData.sort((a, b) => b.amount - a.amount);
    }
    setData(sortedData);
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className="flex-col items-center justify-center w-full px-4">
        <div className="md:border-b-2 md:w-full md:h-10"></div>
        <div className="bg-white px-4 w-64 md:-mt-5 md:ml-[40%]">
          <h3 className="font-bold md:text-2xl text-xl">Detailed Listings</h3>
        </div>
      </div>
      <div className="flex px-4 md:px-20 mt-10 gap-3 items-center">
        <h3 className="font-bold text-sm md:text-lg">Sort by:</h3>
        <select
          className="w-20 md:w-48 border border-indigo-950 outline-none rounded p-1"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="Name">Name</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Amount (Low-High)">Amount (Low-High)</option>
          <option value="Amount (High-Low)">Amount (High-Low)</option>
        </select>
      </div>

      <div className="flex-col py-8 px-4 md:px-20 mb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full h-auto md:h-72 flex flex-col md:flex-row mb-4 p-4 gap-3 bg-slate-200 shadow-lg"
          >
            <img
              src={`/images/img${index + 1}.jpg`}
              alt="bgs"
              className="w-full md:w-[30%] h-48 md:h-full object-cover"
              loading="lazy"
            />
            <div className="p-4 flex-col justify-between w-full md:w-[50%]">
              <p className="text-left text-xl md:text-2xl font-semibold my-2">
                {item.name}
              </p>
              <p className="text-zinc-500 w-full text-sm md:text-base font-sans text-justify">
                {item.description}
              </p>
              <div className="text-black flex flex-col md:flex-row justify-between my-4">
                <div className="flex gap-1 items-center">
                  <FaWalking />
                  <p className="text-left text-black font-bold">
                    Distance to Campus:
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaWalking />
                  <p className="text-left text-black">{item.duration.walk}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <IoMdTrain />
                  <p className="text-left text-black">{item.duration.train}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaBusSimple />
                  <p className="text-left text-black">{item.duration.bus}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-[80%] gap-4">
                <p className="text-left text-gray-50 text-sm bg-sky-400 p-2">
                  Cheapest in the past month
                </p>
                <p className="text-left text-gray-50 text-sm bg-sky-400 p-2">
                  Price drop
                </p>
              </div>
            </div>
            <div className="p-4 flex-col w-full md:w-[20%] h-full">
              <p className="text-left text-zinc-500 text-sm md:text-base md:my-3 font-mono">
                From{" "}
                <span className="text-red-600 font-bold text-xl md:text-3xl">
                  ${item.amount}
                </span>
                /week
              </p>
              <p className="text-left text-zinc-500 text-sm md:text-base md:mt-24 font-mono">
                Entire Price <span className="ml-14">${item.amount}</span>
              </p>
              <button className="bg-amber-400 py-2 md:py-3 px-3 w-full font-bold mt-4 hover:opacity-70 rounded-md">
                View rooms
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedCard;
