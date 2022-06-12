import React from 'react';
import { WeatherResponse } from '../utils/types';
import dayjs from 'dayjs'
import { calCelsius } from './../utils/utils';
import { DynamicIcon } from '../utils/DynamicIcon';

var localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

interface WeatherProps {
weatherData:WeatherResponse
}


const Weather : React.FC<WeatherProps> = ({weatherData}) => {


console.log("weather icon is ==== ",weatherData.weather[0].icon)
  return(
  <div className='h-full w-full flex-center bg-slate-400'>

    <div className='shadow-md shadow-slate-900 rounded-sm p-2 bg-slate-300 
     flex-col w-[90%] sm:w-[40%]'>

        <div className="font-extrabold text-5xl text-slate-900 flex-col">
        <div className="font-extrabold text-5xl text-slate-900">
          {weatherData.name}
          </div>
        
      
          <div className="p-1 font-extrabold text-5xl text-slate-900 h-[60%]  
          flex-center flex-col">
          <div className='description'>
          <p className='description-text'> {weatherData.weather[0].description}</p>
       </div>
  
          <DynamicIcon code={weatherData.weather[0].icon}/>

          </div>

          </div>
   
        <div className="font-bold text-lg text-slate-900 flex-col h-[20%] w-full">

        <div className="temp-humidity">

        <div className="temp-humidity-mini">
        <div className='temperature'>
        Temp:<p className='temp-humidity-text'> {calCelsius(weatherData.main.temp)} C°</p></div>  
        
 

       <div className='humidity'>
        Humidity: <p className='temp-humidity-text'> {weatherData.main.humidity}%</p>
        </div>
        </div>

        <div className="temp-humidity-mini">

       <div className='temperature'>
        Min:<p className='temp-humidity-text'> {calCelsius(weatherData.main.temp_min)} C°</p>
       </div> 

        <div className='temperature'>
        Max:<p className='temp-humidity-text'> {calCelsius(weatherData.main.temp_max)} C°</p>
        </div>  
       
      </div>

       </div>



       <div className="day-date">
        <div className='day'> 
         <p className='day-date-text'> {dayjs().format('dddd')}</p>
        </div>

        <div className='date'> 
         <p className='day-date-text'> {dayjs().format('LL')}</p>
         </div>
         </div>
     </div>

     <div className="sunrise-sunset">

     <div className='sunrise'>
        Sunrise: <p className='sunrise-sunset-text'>{dayjs(weatherData.sys.sunrise *1000).format("LT")}</p >
        </div>

      <div className='sunset'>
       Sunset: <p className='sunrise-sunset-text'>{dayjs(weatherData.sys.sunset *1000).format("LT")}</p>
       </div>
     </div>

    </div>
  </div>
)}

export default Weather


