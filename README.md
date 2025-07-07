# 🌤 Weather App Challenge

Build a two-screen weather application using data from [https://www.weatherapi.com](https://www.weatherapi.com). The app should allow users to view and switch between cities, display weather data dynamically, and adapt its appearance based on the time of day.

---

## 🔧 General Requirements

- Use the WeatherAPI to retrieve all weather data.
- The app must consist of only two screens:
  - A **Home screen** with weather data and forecasts.
  - A **City selection screen** to switch between predefined locations.
- The user must be able to switch between the following cities:
  - Cochabamba, Bolivia
  - Madrid, Spain
  - Christchurch, New Zealand
- The selected city must be remembered while navigating between screens.
- The app must automatically detect the browser’s time and switch between **day** and **night** modes by changing only the background image.

---

## 🏠 Home Screen

### Header Section

- Display the name of the selected city and its country.
- Show the current temperature in degrees.
- Include the day’s high and low temperature (H: xx°, L: xx°).

### Current Conditions

- Show additional weather information for the selected city:
  - UV Index
  - Sunrise and sunset times
  - Wind speed in mph
  - Rainfall percentage
  - Feels like percentage
  - Humidity percentage

### Hourly Forecast

- Display the **next 5 hours** of weather forecast (non-scrollable).
- Each hourly item must show:
  - Hour
  - Temperature
  - Corresponding weather icon (e.g. sun, cloud, moon, rain)

### Daily Forecast

- Display the **next 3 days** of forecast (non-scrollable).
- Each daily item must show:
  - Date or weekday name
  - Max and min temperature
  - Weather icon representing the day

### Scroll Behavior

- When the user scrolls down on the Home screen, the top forecast sections should **minimize or collapse** to prioritize viewing more information below.

---

## 🏙 City Selection Screen

- Display all three cities in a list.
- For each city, show:
  - City and country name
  - Current temperature
  - High and low temperature of the day
- Tapping a city should navigate to the Home screen and display weather for that city.

---

## 🖼 UI & Design

- The app should detect whether it’s currently **day or night** based on the local browser time and switch the **background image** accordingly.
- Use clean, elegant, and mobile-friendly UI as shown in the reference screenshots.

---

## 🎨 Figma Design

[Apple Weather App Clone – Figma](https://www.figma.com/design/YySGdU55qtOgDjvV3OnzCg/Apple-Weather-App-Clone--Community-?node-id=202-1190&t=Vid5sQTq3KnJJ9Dz-1)

---

## 🔐 WeatherAPI Credentials

Get the API credentials from the following secure one-time secret link:

[https://eu.onetimesecret.com/secret/2924yadwznxd2cpwk4i94bhwouyyrg7](https://eu.onetimesecret.com/secret/2924yadwznxd2cpwk4i94bhwouyyrg7)
