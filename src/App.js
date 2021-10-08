import React from 'react';
import './App.css';
import Weather from "./Components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from "./Components/Form";
import {Component} from 'react';



const API_key = "32b751570a15881c46d72b1163e70a64";

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_min: undefined,
            temp_max: undefined,
            description: "",
            error: false

        };

        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-show",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"

        };

    }
    //function to convert kelvin to celsius
        calCelsius (temp){
            let cell = Math.floor(temp - 273.15)
            return cell;
        }

        get_weatherIcon(icons,rangeid){
        switch (true){
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=300 && rangeid <= 321:
                this.setState({icon:this.weatherIcon.Drizzle});
                break;
            case rangeid >=500 && rangeid <= 531:
                this.setState({icon:this.weatherIcon.Rain});
                break;
            case rangeid >=600 && rangeid <= 622:
                this.setState({icon:this.weatherIcon.Snow});
                break;
            case rangeid >=701 && rangeid <= 781:
                this.setState({icon:this.weatherIcon.Snow});
                break;
            case rangeid ===800:
                this.setState({icon:this.weatherIcon.Clear});
                break;
            case rangeid >=801 && rangeid <= 804:
                this.setState({icon:this.weatherIcon.Clouds});
                break;
            default:
                this.setState({icon:this.weatherIcon.Clouds});

        }

        }



    getWeather = async (e) => {
        e.preventDefault()

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

    if(city && country){
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weater?q=${city},${country}&appid=${API_key}`)

        const response = await api_call.json();

        console.log(response);

        this.setState({
            city:`${response.name},${response.sys.country}`,
            celsius: this.calCelsius(response.main.temp),
            temp_min:this.calCelsius(response.main.temp_min),
            temp_max:this.calCelsius(response.main.temp_max),
            description:response.weather[0].description
        });

        this.get_weatherIcon(this.weatherIcon, response.weather[0].id);
    }else{
       this.setState({error: true});

    }
    };
    render() {
        return (
            <div className="App">
                <Form loadweather={this.getWeather}error={this.state.error}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                />


            </div>
        );
    }
}

export default App;
