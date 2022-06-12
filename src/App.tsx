import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { Form } from './components/Form';
import Weather from './components/Weather';




export interface Region{
  country: string;
  city: string;
}


export default function App() {


const [region, setRegion] = useState<Region>({country:"Kenya",city:"Nairobi"})


const { isLoading, error, data} = useQuery(["weather",region],
()=>axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${region.city},${region.country}&APPID=${process.env.REACT_APP_API_KEY}`)
.then((res) => res.data))  
  
console.log("data ==== ",data)
if(isLoading){
  return (
  <div className='h-screen w-screen bg-slate-300'>loading ...</div>
  )
}

if(error){
  console.log("error fetchig ====",error)
  return (
    // @ts-ignore
  <div className='h-screen w-screen bg-slate-300'>{error.message}</div>
  )
}

return (
    <div className='h-screen w-screen bg-slate-300 '>
    <div className='w-full flex-center fixed top-0 right-0 left-0 z-20 bg-slate-400'> 
    <Form setRegion={setRegion}/> </div>
    <div className='mt-20 '>  <Weather weatherData={data}/></div>
    
   
    </div>
  )
}

