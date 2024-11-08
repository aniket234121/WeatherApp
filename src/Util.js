let apiKey = "31fba65ae78c49d587f95633240811";
class MyError extends Error {
  constructor(msg) {
    super(msg);
  }
}
async function getWeather(city='delhi') {
  try {
    if (city === "") {
      throw new MyError("empty city");
    }
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    if (!response.ok) {
      throw new MyError("Http error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof MyError) {
        return NaN
    } else {
      console.error("error in fetching", error);
    }
    return null;
  }
}
export default getWeather;
