import { useEffect } from "react"
import { useWeatherStore } from "../store/weatherStore"
import { fetchWeather } from "../utils/api"
import { useNavigate } from 'react-router-dom'
import HeaderSection from "../components/HeaderSection"
import CurrentConditions from "../components/CurrentConditions"
import HourlyForecast from "../components/HourlyForecast"
import DailyForecast from "../components/DailyForecast"
import './home.css';

function Home() {
  const { city, weatherData, setWeatherData } = useWeatherStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchWeather(city).then((data) => {
      if (data.error) {
       
        setWeatherData(null)
      } else {
        setWeatherData(data)
      }
    })
  }, [city])

if (!weatherData || !weatherData.forecast || !weatherData.current || !weatherData.location) {
  return <div className="home-container">Cargando datos del clima...</div>;
}

  return (
    <div >
<button onClick={() => navigate('/cities')} className="button">
  Cambiar ciudad
</button>
    

      <HeaderSection data={weatherData} />

      <HourlyForecast data={weatherData.forecast.forecastday[0].hour} />
      <DailyForecast data={weatherData.forecast.forecastday} />
            <CurrentConditions data={weatherData} />
    </div>
  )
}

export default Home
