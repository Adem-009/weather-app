'use client';
import '../app/globals.css';

export default function NextDays({ temp, getWeatherIcon }:any) {
  const days = [
    {
      date: temp.daily.time[1],
      max: temp.daily.temperature_2m_max[1],
      min: temp.daily.temperature_2m_min[1],
      code: temp.daily.weather_code[1],
    },
    {
      date: temp.daily.time[2],
      max: temp.daily.temperature_2m_max[2],
      min: temp.daily.temperature_2m_min[2],
      code: temp.daily.weather_code[2],
    },
    {
      date: temp.daily.time[3],
      max: temp.daily.temperature_2m_max[3],
      min: temp.daily.temperature_2m_min[3],
      code: temp.daily.weather_code[3],
    },
    {
      date: temp.daily.time[4],
      max: temp.daily.temperature_2m_max[4],
      min: temp.daily.temperature_2m_min[4],
      code: temp.daily.weather_code[4],
    },
    {
      date: temp.daily.time[5],
      max: temp.daily.temperature_2m_max[5],
      min: temp.daily.temperature_2m_min[5],
      code: temp.daily.weather_code[5],
    },
    {
      date: temp.daily.time[6],
      max: temp.daily.temperature_2m_max[6],
      min: temp.daily.temperature_2m_min[6],
      code: temp.daily.weather_code[6],
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-6  justify-between gap-2 my-4 w-full max-w-3xl ">
      {days.map((day, index) => {
        const weatherInfo = getWeatherIcon(day.code);
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white w-full max-w-1.5/12 rounded-lg text-center h-25 transition-all duration-300 hover:scale-105"
          >
            <h1>{day.date}</h1>
            <h1 className="my-2">{weatherInfo.icon}</h1>
            <div className="flex justify-center gap-5 my-3">
              <h2>{day.max}</h2>
              <h2>{day.min}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
