
interface WeatherIcons{
    Thunderstorm:string,
    Drizzle:string,
    Rain:string,
    Snow:string,
    Atmosphere:string,
    Clear:string,
    Clouds:string
  }


  const weatherIcon:WeatherIcons = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-show",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"

};
interface GetIconProps{
    icons:string,
    rangeid:number,
    setIcon: React.Dispatch<React.SetStateAction<string>>
}
//function to convert kelvin to celsius
   export const calCelsius = (temp:number)=>{
        let cell = Math.floor(temp - 273.15)
        return cell;
    }

    export const get_weatherIcon=({icons,rangeid,setIcon}:GetIconProps)=>{
    switch (true){
        case rangeid >=200 && rangeid <= 232:
           setIcon(weatherIcon.Thunderstorm)
           break;

        case rangeid >=300 && rangeid <= 321:
          setIcon(weatherIcon.Drizzle)
            break;

        case rangeid >=500 && rangeid <= 531:
           setIcon(weatherIcon.Rain)
            break;

        case rangeid >=600 && rangeid <= 622:
           setIcon(weatherIcon.Snow)
            break;

        case rangeid >=701 && rangeid <= 781:
            setIcon(weatherIcon.Snow)
            break;

        case rangeid ===800:
             setIcon(weatherIcon.Clear)
            break;

        case rangeid >=801 && rangeid <= 804:
             setIcon(weatherIcon.Clouds)
             break;

        default:
            setIcon(weatherIcon.Clouds)

    }

    }
