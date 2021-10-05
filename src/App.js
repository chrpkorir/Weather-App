import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import Weather from "./Components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import {Component} from 'react';

const API_key = "P9df0b2f8cc5f6fc2a9e9e68cd5b30e86";

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

        }
        this.getWeather();


        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-show",


        }
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
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
            case rangeid >=200 && rangeid <= 232:
                this.setState({icon:this.weatherIcon.Thunderstorm});
                break;
        }

        }



    getWeather = async () => {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weater?q=London,uk&appid=${API_key}`)

      const response = await api_call.json();

      console.log(response);
      this.setState({
          city:response.name,
          country:response.sys.country,
          celsius: this.calCelsius(response.main.temp),
          temp_min:this.calCelsius(response.main.temp_min),
          temp_max:this.calCelsius(response.main.temp_max),
          description:response.weather[0].description
      })
    }
    render() {
        return (
            <div className="App">
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                />

            </div>
        );
    }
}

export default App;
