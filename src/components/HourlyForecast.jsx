import './hourlyforecast.css';

function HourlyForecast({ data }) {
  const now = new Date().getHours();
  const nextHours = data.slice(now, now + 5);

  return (
    <div className="hourly-container">
      {nextHours.map((hour) => (
        <div key={hour.time_epoch} className="hourly-box">
          <span className="hour">{new Date(hour.time).getHours()}:00</span>
          <img src={hour.condition.icon} alt="weather" className="hourly-icon" />
          <span className="temp">{hour.temp_c}°</span>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
