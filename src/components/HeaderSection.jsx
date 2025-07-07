function HeaderSection({ data }) {
  const { location, current, forecast } = data
  const today = forecast.forecastday[0].day

  return (
<div className="header">
  <h1>{location.name}</h1><h5>{location.country}</h5>
  <p className="temp">{current.temp_c}°</p>
  <p className="range">H: {today.maxtemp_c}° • L: {today.mintemp_c}°</p>
</div>

  )
}

export default HeaderSection
