'use client';
import SearchWeather from '@/components/SearchWeather';
import MainWeather from '@/components/MainWeather';
import DetailWeather from './DetailWeather';
import NextDays from './NextDays';
import WelcomeScreen from './WelcomeScreen';
import { useState } from 'react';
export function getWeatherIcon(code: number) {
  switch (code) {
    case 0:
      return { icon: '☀️' };
    case 1:
    case 2:
    case 3:
      return { icon: '⛅' };
    case 51:
    case 61:
      return { icon: '🌧️' };
    case 71:
      return { icon: '❄️' };
    default:
      return { icon: '☁️' };
  }
}
export default function WeatherApp() {
  /* states */
  const [temp, setTemp] = useState<any>(null);
  const [select, setSelect] = useState('');
  const [cityName, setCityName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  /* states// */
  /* Get Api */
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!select.trim()) return;

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(select)}&count=1&language=en&format=json`,
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];
      setCityName(`${name}, ${country}`);

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      const weatherJson = await weatherRes.json();

      setTemp(weatherJson);
    } catch (error) {
      console.error('حدث خطأ أثناء جلب البيانات:', error);
    }
  };
  /* Get Api// */
  const handleInputChange = async (value: string) => {
    setSelect(value);
    if (value.trim().length > 1) {
      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(value)}&count=5`,
        );
        const data = await res.json();
        setSuggestions(data.results || []);
      } catch (err) {
        console.error('خطأ في جلب الاقتراحات', err);
      }
    } else {
      setSuggestions([]);
    }
  };
  const handleSelectCity = (city: any) => {
    setSelect(`${city.name}, ${city.country}`);
    setSuggestions([]); //
  };
  const getWeatherBg = (code: number | null | undefined) => {
    if (code === null || code === undefined) {
      return 'from-slate-900 via-blue-950 to-indigo-950';
    }

    switch (code) {
      case 0:
         return 'from-sky-400 via-blue-500 to-indigo-600';
      case 1:     
      case 2:
        return 'from-slate-500 via-blue-400 to-sky-300';
      case 3:
      case 45:
      case 48:
        return 'from-slate-700 via-slate-800 to-zinc-900';
      case 51:
      case 53:
      case 55:
      case 61:
      case 63:
      case 80:
      case 81:
        return 'from-gray-700 via-gray-800 to-blue-900';
      case 71:
      case 73:
      case 75:
        return 'from-blue-200 via-indigo-300 to-slate-400';
      default:
        return 'from-blue-600 to-indigo-900';
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${getWeatherBg(temp?.current?.weather_code)} min-h-screen flex flex-col items-center  h-full sm:h-screen md:h-screen`}
    >
      <h1 className=" mb-6 mt-12 text-3xl md:text-4xl font-bold">
        How`s the sky looking today?
      </h1>
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center  ">
        <SearchWeather
          select={select}
          setSelect={handleInputChange}
          handleSearch={handleSearch}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectCity}
          
        />
        {temp == null ? (
          <WelcomeScreen />
        ) : (
          <>
            <MainWeather cityName={cityName} temp={temp} />
            <DetailWeather temp={temp} />
            <NextDays temp={temp} getWeatherIcon={getWeatherIcon} />
          </>
        )}
      </div>
    </div>
  );
}
