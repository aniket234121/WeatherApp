import React, { useState, useRef, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";
import getWeather from "../Util";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
const Search = ({ onDataFetch }) => {
  const inputRef = useRef("");
  const CountryRef = useRef("");
  const [searchedVal, setSearchedVal] = useState("");
  const [data, setData] = useState();

  const handleClick = () => {
    if (inputRef.current.value) {
      setSearchedVal(inputRef.current.value + " " + CountryRef.current.value);
    }
  };

  useEffect(() => {
    // Fetch initial weather data for "Delhi" on component mount
    async function fetchInitialWeather() {
      const data = await getWeather("Delhi India");
      setData(data);
      onDataFetch(data); // Send data to App on initial fetch
    }
    fetchInitialWeather();
  }, []);

  useEffect(() => {
    // Fetch weather data based on the searched value
    async function fetchWeather() {
      const data = await getWeather(searchedVal);
      setData(data);
      onDataFetch(data); // Send data to App whenever new search is made
    }
    if (searchedVal) {
      fetchWeather();
    }
  }, [searchedVal]);

  return (
    <div
      id="search"
      className="flex px-8 w-screen mt-4 items-center justify-between sm:flex-row flex-col gap-4 sm:px-4"
    >
      <div className="">
        <h1
          id="title"
          className="md:text-3xl text-md text-[#fbe225] uppercase sm:text-2xl text-2xl"
        >
          Weather-App
        </h1>
      </div>

      <div className="flex items-center justify-center md:w-[65%] sm:w-[70%] flex-col sm:flex-row w-[80%]  gap-2 sm:gap-0">

        <div className="flex items-center justify-between w-full sm:w-[70%] md:w-[35vw]">
          <MdMapsHomeWork   className="mr-2 text-[#fbe225cd] lg:text-3xl  text-2xl md:text-3xl" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter city name"
            className="border-purple-600 border-solid border-2 rounded-3xl sm:mr-0 mr-3 py-2 px-4 w-full
            text-slate-900 focus:outline-yellow-500"
          />
        </div>


        <div className="flex items-center justify-center w-full sm:w-[50%] md:w-[35vw]">
          <FaMapMarkedAlt className="mr-2 text-[#fbe225cd] lg:text-3xl md:text-xl text-2xl sm:hidden" />

          <input
            ref={CountryRef}
            type="text"
            placeholder="country name"
            className="border-purple-600 border-solid border-2 rounded-3xl mr-3 sm:mx-1 py-2 px-4 w-full
            text-slate-900 focus:outline-yellow-500 "
          />
        </div>


        <button
          onClick={handleClick}
          className="flex border-4 mt-1 sm:mt-0 sm:mx-1 border-yellow-400 items-center justify-center w-[50%] sm:w-[25%] 
          sm:text-sm bg-yellow-400 rounded-3xl py-1  px-2 text-black font-bold hover:bg-white hover:text-yellow-500 
          hover:border-4 hover:border-yellow-300 md:text-md md:py-[0.15rem]"
        >
          Search <IoSearchCircle className="md:text-3xl text-3xl " />
        </button>


      </div>
    </div>
  );
};

export default Search;
