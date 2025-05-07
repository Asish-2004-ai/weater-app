// pages/weather/current.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const CurrentWeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
      setWeatherData(res.data);
    } catch (err) {
      console.error('Error fetching weather by coordinates', err);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      }, (err) => {
        console.error('Geolocation error', err);
      });
    }
  }, []);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div>
      <Typography variant="h4">Weather in {weatherData.name}</Typography>
      <Typography>Temp: {weatherData.main.temp}°C</Typography>
      <Typography>Description: {weatherData.weather[0].description}</Typography>
    </div>
  );
};

export default CurrentWeatherPage;
