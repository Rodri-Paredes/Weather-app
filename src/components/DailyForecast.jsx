import './dailyforecast.css';


function DailyForecast(props) {
  let days = [];
  if (props.data && props.data.length >= 3) {
    days = [props.data[0], props.data[1], props.data[2]];
  }

  return (
    <div className="DailyContainer">
      {days.map(function(day, index) {
        return (
          <div key={index} className="daily-card">
            <div className='daily-header'>
                 <span className="daily-day">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <img src={day.day.condition.icon} className="daily-icon"  />
            </div>

            <span className="daily-temp daily-min">
              {day.day.mintemp_c}°
            </span>
            <span className="daily-temp daily-max">
              {day.day.maxtemp_c}°
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default DailyForecast;