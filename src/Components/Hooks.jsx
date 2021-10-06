import React, {useCallback} from 'react';
import {useState, useEffect} from "react";

// Hooks - allow function components to have state and respond to lifecycle events
//Access lifecycle hooks
const CounterWithNameAndUseEffect = () =>{
    const [ count, setCount] = useState(0)
    const [name , setName] = useState("Fei")

    useEffect(() => {
        console.log(`Hi ${name} you clicked ${count} times`)
    },)

    // handle events in function component
const Button = () =>{
        let name = '' // ... add logic
        const handleClick = useCallback(() => {
        //    ...do something
        })
    return <button onClick={useCallback}/>
}

//     //custom hooks
//     const useGetData() {
// //...
//         return data
//     }
//     const useGetUser(username) {
//     //...const user = fetch(...)
//     //...const userData = ...
//         return [user, userData]
//     }
//     const MyComponent = () =>{
//         const data = useGetData()
//         const [user, userdata] = useGetUser('Fei')
//     //    ...
//
//     }

    return(
        <div>
            <p>Hey {name} You clicked {count} times</p>
            <button onClick={() => setCount( count + 1)}>Click me</button>
            <button onClick={() => setName( name === 'Fei'?'Roger':'Fei')}>Change name</button>
        </div>

    )
}
export default CounterWithNameAndUseEffect;