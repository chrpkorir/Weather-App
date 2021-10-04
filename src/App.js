import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import Weather from "./Components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import tasks from "./Components/task";
function App() {
    const [lat, setLat] = useState([]);
    const [long, setLong] =useState([]);
    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function (position){
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

        });
        await fetch(`$(process.env.REACT_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
        }
        fetchData();
    }, [lat,long])

  return (
    <div className="App">
        <tasks/>
        {/*{(typeof data.main !== 'undefined') ? (*/}
        {/*    <Weather weatherData={data}/>*/}
        {/*): (*/}
        {/*    <div></div>*/}
        {/*)}*/}

    </div>
  );
}

export default App;
