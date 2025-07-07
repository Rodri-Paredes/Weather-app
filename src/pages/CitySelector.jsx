import { useNavigate } from "react-router-dom";
import { useWeatherStore } from "../store/weatherStore";
import './cityselector.css';
import { useEffect, useState } from "react";
import { fetchWeather } from "../utils/api";

const cities = [
  { name: "Cochabamba", country: "Bolivia" },
  { name: "Madrid", country: "Spain" },
  { name: "Christchurch", country: "New Zealand" }
];

function CitySelector() {
  const { setCity } = useWeatherStore();
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState({});

  const selectCity = (city) => {
    setCity(city);
    navigate("/");
  };

  useEffect(() => {
    const loadWeather = async () => {
      const dataObj = {};
      for (let city of cities) {

          const data = await fetchWeather(city.name);
          dataObj[city.name] = {
            tempera: data.current.temp_c,
            maximo: data.forecast.forecastday[0].day.maxtemp_c,
            minimo: data.forecast.forecastday[0].day.mintemp_c
          };
      }
      setWeatherData(dataObj);
    };

    loadWeather();
  }, []);

  return (
    <div className="city-selector-container">
      <h2 className="city-selector-title">Cities</h2>
      <div className="city-list">
        {cities.map((c) => {
          const temperatura = weatherData[c.name];
          return (
            <div onClick={() => selectCity(c.name)}className="city-card" >
              <div className="city-info">
                <p>{c.name}</p>
                <p>{c.country}</p>
              </div>
              <div className="city-temp">
                {temperatura ? (
                  <>
                    <span>{temperatura.tempera}°</span>
                    <br />
                    <small>H: {temperatura.maximo}° L: {temperatura.minimo}°</small>
                  </>
                ) : (
                  <span>Ldoading</span>
                )       }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CitySelector;
