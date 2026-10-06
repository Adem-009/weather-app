'use client';
export default function DetailWeather({ temp }:any) {
  if (!temp) {
    return <div>loading</div>;
  }
  const details = [
    { title: 'Feels Like', result: `${temp.current.apparent_temperature}C° ` },
    { title: 'Humidity', result: `${temp.current.relative_humidity_2m}%` },
    { title: 'Wind', result: `${temp.current.wind_speed_10m}Km/h` },
    { title: 'Precipitation', result: `${temp.current.precipitation}Mm` },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2  justify-between w-full max-w-3xl ">
      {details.map((detail, index) => {
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-full h-25 rounded-lg text-white pl-1 transition-all duration-300 hover:scale-105"
          >
            <h1 className="text-2xl">{detail.title}</h1>
            <h2 className="text-2xl my-4">{detail.result}</h2>
          </div>
        );
      })}
    </div>
  );
}
