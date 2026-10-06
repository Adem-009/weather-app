'use client';
import Sunny from './img/clear.jpg';
import PartCloud from './img/party.jpg';
import rain from './img/rain.jpg';
import Snow from './img/snow.jpg';
import Cloudy from './img/cloudy.jpg';
import Thender from './img/rainwithtund.jpg';

export default function MainWeather({ cityName, temp }:any) {
  const code = temp.current.weather_code;
  let bg = Cloudy;
  if (code === 0) {
    bg = Sunny;
  } else if (code === 1 || code === 2) {
    bg = PartCloud;
  } else if (code === 3) {
    bg = Cloudy;
  } else if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    bg = rain;
  } else if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
    bg = Snow;
  } else if (code >= 95 && code <= 99) {
    bg = Thender;
  }

  return (
    <div
    style={{backgroundImage:`url(${bg.src})`}}
      className={`bg-cover bg-center  border h-50 border-white/20 shadow-lg w-full max-w-4xl  p-6 my-10 mb-3 rounded-xl flex justify-between items-center px-3 overflow-hidden transition-all duration-300 hover:scale-105`}
    >
    
      <div className="flex md:flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-bold text-white  md:text-3xl">{cityName}</h1>
        <p className="text-lg md:text-2xl">{temp.current.time}</p>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold text-white ">
            {temp.current.temperature_2m}°C
          </h1>
          <div className="flex gap-4">
            <p className="text-xl sm:text-xl md:text-3xl  ">
              {temp.daily.temperature_2m_max[0]}°C<span>/</span>
              {temp.daily.temperature_2m_min[0]}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
