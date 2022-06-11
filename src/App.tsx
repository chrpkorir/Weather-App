import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Weather from './components/Weather';



interface Region{
  country: string;
  city: string;
}


export default function App() {

const API_key = "48353e3cf21d50140aa3d4c2e10a9e63";
const [region, setRegion] = useState<Region>({country:"Kenya",city:"Nairobi"})
const [icon, setIcon] = useState<string>("")


 
const { isLoading, error, data, isFetching } = useQuery("weather",
()=>axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=48353e3cf21d50140aa3d4c2e10a9e63`)
.then((res) => res.data))  
  
console.log("data ==== ",data)
if(isLoading){
  return (
    <div className='h-screen w-screen bg-slate-300'>loading ...</div>
  )
}


return (
    <div className='h-screen w-screen bg-slate-300'>
     <Weather weatherData={data}/>
    </div>
  )
}

