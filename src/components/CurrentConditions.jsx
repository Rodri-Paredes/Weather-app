import './currentconditions.css';

function CurrentConditions({ data }) {
  const { current, forecast } = data;
  const astro = forecast.forecastday[0].astro;

  const conditions = [
    { label: "UV INDEX", value: current.uv },
    { label: "WIND", value: `${current.wind_mph} mph` },
    { label: "FEELS LIKE", value: `${current.feelslike_c}°` },
    { label: "RAIN FALL", value: `${current.precip_mm} mm` },
    { label: "HUMIDITY", value: `${current.humidity}%` },
    { label: "SUNRISE", value: `${astro.sunrise} / ${astro.sunset}` }
  ];

  return (
    <div className="conditions-grid">
      {conditions.map((conditionm, index) => (
        <div className="condition-card" key={index}>
          <div className="condition-label">{conditionm.label}</div>
          <div className="condition-value">{conditionm.value}</div>
        </div>
      ))}
    </div>
  );
}

export default CurrentConditions;
