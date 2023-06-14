import React from "react";

export default function Calculator() {
  return (
    <div className="absolute z-50 top-2 left-3 flex flex-col shadow-md mb-3 p-3 bg-base-500 border-none text-white rounded">
      <h2 className="text-2xl mb-3">Distance: <span className="float-right">N/A</span></h2>
      <hr className="mb-5 bg-base-100" />

      <div className="flex justify-between mb-3">
        <input type="text"
          className="bg-base-700 shadow appearance-none rounded w-full p-3 text-gray-300 mx-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="From"
        />
        <input type="text"
          className="bg-base-700 shadow appearance-none rounded w-full p-3 text-gray-300 mx-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="To"
        />
         
      </div>
      
      <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded">
          Calculate
        </button>
     
    </div>
  );
}
