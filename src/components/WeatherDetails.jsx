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
  return (
    <div
      className="text-[#f3ff14] flex rounded-3xl p-4 h-[80vh]  my-7 capitalize
     shadow-white  shadow-sm w-[70vw] mx-auto bg-gradient-to-br to-[#0396ff25] from-white/20 backdrop-filter"
    >
      {WeatherData ? (
        <>
          <div className="bg-gradient-to-br from-white/10 to-white/15   w-[40vw] rounded-3xl p-4 ml-1">
            <img
              src={WeatherData.current.is_day === 1 ? image : night}
              alt="weather app"
              className="w-[170px] mx-auto mt-5 "
            />
            <div className="flex justify-center items-center gap-1 text-xl mt-5 text-justify">
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

            <div className="grid grid-flow-row grid-cols-2 px-7 text-sm  gap-5 mt-7 items-center justify-center ml-5">
              <div className="font-bold">Latitude :</div>
              <div>{WeatherData.location.lat}</div>
              <div className="font-bold">Longtitude :</div>
              <div>{WeatherData.location.lon}</div>
              <div className="font-bold">Time Zone :</div>
              <div>{WeatherData.location.tz_id}</div>
            </div>
          </div>
          <div className="w-[70vw] p-5 title">
            <h2 className="text-center text-3xl title text-cyan-300">
              Weather Conditions
            </h2>
            <p className="text-center mt-2 ">
              {" "}
              Sky {WeatherData.current.condition.text}
            </p>
            <div className="mx-10 mt-10 gap-7 grid grid-flow-row grid-cols-2  ">
              <div className="flex gap-3  items-center">
                <TbTemperature />
                <h3>Temperature:</h3>
                <p>
                  {WeatherData.current.temp_c}
                  &deg;C / {WeatherData.current.temp_f}&deg;F
                </p>
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
  );
};

export default WeatherDetails;
