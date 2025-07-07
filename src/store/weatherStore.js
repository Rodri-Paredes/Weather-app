import { create } from 'zustand'

const storedCity = localStorage.getItem('city') || 'Cochabamba'

export const useWeatherStore = create((set) => ({
  city: storedCity,
  weatherData: null,
  setCity: (city) => {
    localStorage.setItem('city', city)
    set({ city })
  },
  setWeatherData: (data) => set({ weatherData: data }),
}))