import React from 'react';
import { WeatherResponse } from '../utils/types';
import dayjs from 'dayjs'
import { IconContext } from 'react-icons/lib';
import { get_weatherIcon } from './../utils/utils';
import { DynamicIcon } from '../utils/DynamicIcon';

var localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

interface WeatherProps {
weatherData:WeatherResponse
}


const Weather : React.FC<WeatherProps> = ({weatherData}) => {



  return(
  <div className='h-full w-full flex-center bg-slate-400'>
    <div className='shadow-md shadow-slate-900 rounded-sm p-[5%] bg-slate-300 flex'>
        <div className="font-extrabold text-5xl text-slate-900 flex flex-col min-h-[50%]">

        <div className="font-extrabold text-5xl text-slate-900 mb-[20%]">
          {weatherData.name}
          </div>
        
      
          <div className="p-1 font-extrabold text-5xl text-slate-900 h-[60%] bg-red-400 flex-center">
          <IconContext.Provider value={{ size: "100px", className: "table-edit-icons" }} >
          <DynamicIcon name={get_weatherIcon(weatherData.weather[0].id)}/>
          </IconContext.Provider>
          </div>

          </div>
   
        <div className="m-5 font-bold text-lg text-slate-900 flex-col">

        <div className='time-text-container'>
        Temprature:<p className='time-text'> {weatherData.main.temp}</p></div>  
      
      <div className='time-text-container'>
        Sunrise: <p className='time-text'>{dayjs(weatherData.sys.sunrise *1000).format("LTS")}</p >
        </div>

      <div className='time-text-container'>
       Sunset: <p className='time-text'>{dayjs(weatherData.sys.sunset *1000).format("LTS")}</p>
       </div>

      <div className='time-text-container'>
       Description: <p className='time-text'> {weatherData.weather[0].description}</p>
       </div>

        <div className='time-text-container'>
        Humidity: <p className='time-text'> {weatherData.main.humidity}</p>
        </div>

        <div className='time-text-container'> 
        Day: <p className='time-text'> {dayjs().format('dddd')}</p>
        </div>

        <div className='time-text-container'> 
         Date: <p className='time-text'> {dayjs().format('LL')}</p>
         </div>

        </div>

    </div>
  </div>
)}

export default Weather


