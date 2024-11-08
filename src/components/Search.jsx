import React, {  useState, useRef, useEffect,} from "react";
import { IoSearchCircle } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import getWeather from "../Util";

const Search = ({ onDataFetch }) => {
  const inputRef = useRef("");
  const CountryRef=useRef("");
  const [searchedVal, setSearchedVal] = useState("");
  const [data, setData] = useState();  

  const handleClick = () => {
    if (inputRef.current.value) {
      setSearchedVal(inputRef.current.value+" "+CountryRef.current.value);
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
    <div id="search" className="flex px-8 w-screen mt-4 items-center justify-between">
      <div>
        <h1 id="title" className="text-3xl text-[#fbe225] uppercase">
          Weather-App
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <ImLocation2 className="mx-4 text-[#fbe225] text-3xl" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city name"
          className="border-purple-600 border-solid border-2 rounded-3xl mr-3 py-2 px-4
            text-slate-900 focus:outline-yellow-500"
        />
        <input
          ref={CountryRef}
          type="text"
          placeholder="country name"
          className="border-purple-600 border-solid border-2 rounded-3xl mr-3 py-2 px-4 w-48
            text-slate-900 focus:outline-yellow-500"
        />
        <button
          onClick={handleClick}
          className="flex border-4 border-yellow-400 items-center justify-center bg-yellow-400 rounded-3xl py-1 px-2 text-black font-bold hover:bg-white hover:text-yellow-500 hover:border-4 hover:border hover:border-yellow-300"
        >
          Search <IoSearchCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Search;
