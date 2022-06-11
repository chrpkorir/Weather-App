import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';



interface Region{
  country: string;
  ciry: string;
}


export default function App() {

const API_key = "32b751570a15881c46d72b1163e70a64";
const [region, setRegion] = useState<Region>({country:"Kenya",ciry:"Nairobi"})
const [icon, setIcon] = useState<string>("")

const api_call =()=> {
  axios.get(`http://api.openweathermap.org/data/2.5/weater?q=${region.city},${region.country}&appid=${API_key}`)
  .then((res) => res.data)}
const { isLoading, error, data, isFetching } = useQuery("weather",api_call)  
  

return (
    <div className='h-screen w-screen bg-slate-300'>
    <div className='h-full w-full bg-slate-600 flex-center'>App</div>
</div>
  )
}

