
//function to convert kelvin to celsius
   export const calCelsius = (temp:number)=>{
        let cell = Math.floor(temp - 273.15)
        return cell;
    }

    export const get_weatherIcon=(rangeid:number)=>{
    switch (true){
        case rangeid >=200 && rangeid <= 232:
         return "TiWeatherStormy"
       

      case rangeid >=300 && rangeid <= 321:
      return "TiWeatherShower"
    

        case rangeid >=500 && rangeid <= 531:
          return "TiWeatherDownpour"
     
        case rangeid >=600 && rangeid <= 622:
           return "TiWeatherSnow"
       
        case rangeid >=701 && rangeid <= 781:
            return "TiWeatherSnow"


        case rangeid ===800:
             return "TiWeatherSunny"


        case rangeid >=801 && rangeid <= 804:
             return "TiWeatherCloudy"
          

        default:
            return "TiWeatherCloudy"

    }

    }


    
