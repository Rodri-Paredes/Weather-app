const API_KEY = 'b9584a117dad4d0fbe8154433250607'

export async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=4&aqi=no&alerts=no`
  )
  return await response.json()
}
