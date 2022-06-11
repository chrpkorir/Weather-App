import React from 'react';
import { WeatherResponse } from '../utils/types';
import dayjs from 'dayjs'
import { syncBuiltinESMExports } from 'module';
var localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

interface WeatherProps {
weatherData:WeatherResponse
}

const Weather : React.FC<WeatherProps> = ({weatherData}) => {
 const sunrise=new Date();


  return(
  <div className='h-full w-full flex-center bg-slate-400'>
    <div className='shadow-md shadow-slate-900 rounded-sm p-[10%] bg-slate-300'>
        <div className="font-extrabold text-5xl text-slate-900">{weatherData.name}</div>
        <div className="m-5 font-bold text-lg text-slate-900">
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {dayjs(weatherData.sys.sunrise *1000).format("LTS")}</p>
        <p>Sunset: {dayjs(weatherData.sys.sunset *1000).format("LTS")}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        </div>

    </div>
  </div>
)}

export default Weather


