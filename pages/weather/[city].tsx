// pages/weather/[city].tsx
import { GetServerSideProps } from 'next';
import { Typography, Container, Card, CardContent, CircularProgress } from '@mui/material';
import { useWeather } from '@/pages/context/WeatherContext';
import { useEffect } from 'react';

interface WeatherProps {
  weatherData: any;
  city: string;
}

export default function WeatherPage({ weatherData, city }: WeatherProps) {
    const { addWeatherData } = useWeather();

    useEffect(() => {
        if (weatherData) {
          addWeatherData(city, {
              max: weatherData.main.temp_max,
              min: weatherData.main.temp_min,
              weather:weatherData
          });
        }
      }, [city, weatherData, addWeatherData]);
  if (!weatherData) {
    return (
      <Container>
        <Typography variant="h4">Weather not found for {city}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Weather in {city}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">{weatherData.weather[0].description}</Typography>
          <Typography>Temperature: {weatherData.main.temp}°C</Typography>
          <Typography>Humidity: {weatherData.main.humidity}%</Typography>
          <Typography>Pressure: {weatherData.main.pressure} hPa</Typography>
          <Typography>Wind Speed: {weatherData.wind.speed} m/s</Typography>
          <Typography>Max: {weatherData.main.temp_max}°C / Min: {weatherData.main.temp_min}°C</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const city = context.params?.city as string;
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );
  
    if (!res.ok) {
      return { props: { weatherData: null, city } };
    }
  
    const weatherData = await res.json();
    return { props: { weatherData, city } };
  };
  