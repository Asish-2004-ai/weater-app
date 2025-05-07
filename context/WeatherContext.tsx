import React, { createContext, useState, useContext } from 'react';

type WeatherInfo = {
  [cityName: string]: {
    min: number;
    max: number;
    weather: string;  // ✅ added weather here
  };
};

interface WeatherContextType {
  weatherData: WeatherInfo;
  addWeatherData: (city: string, data: { min: number; max: number; weather: string }) => void; // ✅ added weather param
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherInfo>({});

  const addWeatherData = (city: string, data: { min: number; max: number; weather: string }) => {
    setWeatherData(prev => ({ ...prev, [city]: data }));
  };

  return (
    <WeatherContext.Provider value={{ weatherData, addWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeather must be used inside WeatherProvider');
  return context;
};
