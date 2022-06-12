import React,{useState} from 'react'
import { Region } from '../App'



interface FormProps {
setRegion: React.Dispatch<React.SetStateAction<Region>>
}

export const Form: React.FC<FormProps> = ({setRegion}) => {
const [input, setInput] = useState<Region>({city:"Nairobi",country:''}) 

const handleSubmit = (e: any) => {
e.preventDefault();
setRegion(input)
   }

const handleChange = (e: any) => {
const { value } = e.target;
setInput({
...input,
[e.target.id]: value,
});
 }; 
 
 
return (

<div  className="p-2 w-full  flex-center">
<form  
onSubmit={handleSubmit}
className="p-2 w-full sm:w-[50%] rounded-md flex">

<input 
 type="text"
 placeholder="city"
 className="p-2 w-[90%] m-1 rounded-md "
 id="city"
onChange={handleChange}
/>
<button
className='px-2 bg-slate-500 text-black rounded-md'
>search
</button>
</form>
 </div>
);
}
