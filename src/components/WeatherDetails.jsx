import React from "react";
import image from "../assets/cloudy.png";
import night from "../assets/night.png";
import error from "../assets/404.png";
import { FaWind } from "react-icons/fa";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiCubeforce } from "react-icons/gi";
import { TfiDirection } from "react-icons/tfi";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { MdDisabledVisible } from "react-icons/md";
import { BsThermometerSnow } from "react-icons/bs";
import { GiHeatHaze } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";
const WeatherDetails = ({ WeatherData }) => {
  // console.log(WeatherData);
  function convertToDMS(deg) {
    const d = Math.floor(deg); // Get the degree part
    const minFloat = (deg - d) * 60;
    const m = Math.floor(minFloat); // Get the minutes part
    const s = ((minFloat - m) * 60).toFixed(2); // Get the seconds part, rounded to 2 decimal places

    return `${d}° ${m}' ${s}"`;
  }
  return (
   <div className="w-screen flex justify-center items-center md:mt-5">
     <div
      className="text-[#f3ff14] flex flex-col rounded-3xl p-4 h-fit md:h-[80vh] my-7 capitalize md:flex-row
     shadow-white  shadow-sm w-[90vw]  bg-gradient-to-br to-[#0396ff25] from-white/20 backdrop-filter"
    >
      {WeatherData ? (
        <>
          <div className="bg-gradient-to-br from-white/10 to-white/15   w-full lg:w-[50vw] rounded-3xl p-4 h-fit md:h-full pb-6">
            <img
              src={WeatherData.current.is_day === 1 ? image : night}
              alt="weather app"
              className="w-[170px] mx-auto mt-5 "
            />
            <div className="flex justify-center items-center gap-1 text-md sm:text-xl mt-5 text-justify">
              <h2 className="italic inline-block  mr-1 ">
                {WeatherData.location.name}{" "}
              </h2>
              <span className="uppercase font-bold">
                {WeatherData.location.country}
              </span>
            </div>
            <p className="text-center text-sm uppercase mt-1 ">
              {WeatherData.location.region}
            </p>
            <p className="text-center text-sm uppercase  m-1">
              {WeatherData.current.is_day === 1 ? "Day" : "Night"}
            </p>
            <p className="text-center text-sm uppercase mt-5 text-white">
              {WeatherData.location.localtime}
            </p>

            <div className="grid grid-flow-row grid-cols-2 px-2 text-sm md:gap-2 gap-3 mt-7 items-center justify-center ml-5 md:ml-0">
              <div className="font-bold sm:pl-14 md:pl-5">Latitude :</div>
              <div className=" sm:pl-14  md:pl-5">{convertToDMS(WeatherData.location.lat)}</div>
              <div className="font-bold sm:pl-14  md:pl-5">Longtitude :</div>
              <div className=" sm:pl-14  md:pl-5">{convertToDMS(WeatherData.location.lon)}</div>
              <div className="font-bold sm:pl-14  md:pl-5">Time Zone :</div>
              <div className=" sm:pl-14  md:pl-5">{WeatherData.location.tz_id}</div>
            </div>
          </div>


          <div className="w-full p-5 title">
            <h2 className="text-center text-lg title text-cyan-300 sm:text-2xl lg:text-3xl">
              Weather Conditions
            </h2>
            <p className="text-center mt-2 ">
              {" "}
              Sky {WeatherData.current.condition.text}
            </p>

            <div className="text-[14px] sm:ml-5  gap-3 mt-4 xl:mt-10 md:mt-4 sm:gap-4 sm:mt-5 lg:mt-7 lg:gap-7 
            md:gap-5 md:mx-10 grid md:grid-cols-1 lg:grid-cols-2
            grid-flow-row sm:grid-cols-2 grid-cols-1 text-xs lg:text-[0.8rem] xl:text-lg">
              <div className="flex gap-3  items-center">
              <TbTemperature  />
                <h3>
                  Temperature :
                  <span>
                    {" " + WeatherData.current.temp_c}
                    &deg;C / {WeatherData.current.temp_f}&deg;F
                  </span>
                </h3>
              </div>
              <div className="flex gap-3  items-center">
                <FaWind />
                <h3>Wind:</h3>
                <p>
                  {WeatherData.current.wind_kph} kph /{" "}
                  {WeatherData.current.wind_mph} mph
                </p>
              </div>
              <div className="flex gap-3  items-center">
                <WiHumidity />
                <h3>Humidity :</h3>
                <p>{WeatherData.current.humidity}</p>
              </div>
              <div className="flex gap-3  items-center">
                <FaArrowUpFromGroundWater />
                <h3>Precepitation :</h3>
                <p>{WeatherData.current.precip_in}</p>
              </div>

              <div className="flex gap-3  items-center">
                <GiCubeforce />
                <h3>Pressure :</h3>
                <p>{WeatherData.current.pressure_in} in</p>
              </div>
              <div className="flex gap-3  items-center">
                <TfiDirection />
                <h3>Wind Direction :</h3>
                <p>
                  {WeatherData.current.wind_degree}&deg;{" "}
                  {WeatherData.current.wind_dir}
                </p>
              </div>
              <div className="flex gap-3  items-center">
                <MdDisabledVisible />
                <h3>Visibility :</h3>
                <p>
                  {WeatherData.current.vis_km +
                    " km / " +
                    WeatherData.current.vis_miles +
                    " mil"}
                </p>
              </div>
              <div className="flex gap-3  items-center">
                <GiHeatHaze />
                <h3>Heat Index :</h3>
                <p>{WeatherData.current.heatindex_c}&deg;C</p>
              </div>
              <div className="flex gap-3  items-center">
                <PiHandCoins />
                <h3>feels Like :</h3>
                <p>{WeatherData.current.feelslike_c}&deg;C</p>
              </div>
              <div className="flex gap-3  items-center">
                <BsThermometerSnow />
                <h3>Wind Chill:</h3>
                <p>
                  {WeatherData.current.windchill_c}&deg;C /{" "}
                  {WeatherData.current.windchill_f}&deg;F
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mx-auto title">
            Please enter valid location
          </h1>
          <img className="w-[400px] mt-3" src={error} alt="not found error " />
        </div>
      )}
    </div>
   </div>
  );
};

export default WeatherDetails;
