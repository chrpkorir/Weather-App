import React from 'react'
;
//@ts-ignore
import ReactAnimatedWeather from 'react-animated-weather';
interface DynamicIconProps {
code:string
}
export interface WeatherType {
    "01d": string
    "01n": string
    "02d": string
    "02n": string
    "03d": string
    "03n": string
    "04d": string
    "04n": string
    "09d": string
    "09n": string
    "10d": string
    "10n": string
    "11d": string
    "11n": string
    "13d": string
    "13n": string
    "50d": string
    "50n": string
  }

export const DynamicIcon: React.FC<DynamicIconProps> = ({code}) => {
    const codeMapping:WeatherType = 
    {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "SLEET",
        "09n": "SLEET",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
      }
      
      
    
      return (
        <ReactAnimatedWeather
        // @ts-ignore
          icon={codeMapping[code]}
          color="black"
         animate={true}
         size={200}
        />
      );
}
