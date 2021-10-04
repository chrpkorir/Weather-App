import React, {Component} from 'react';
// Lists
const tasks = [
    { text: "Buy Flowers", status:"todo"},
    { text:"Clean house", status: "done"},

]
const taskLists = tasks.map( tasks =>{
    return(
        <p>{tasks.text} - {tasks.status}</p>
    )
})

// Keys

const tasks = [
    {id: "1", text: "Buy flowers", status: "done"},
    {id: "3", text: "D the assignments", status: "done"},
]

const tasksList = tasks.map(task => {
    return (
        <p key={task.id}>{task.text} - {task.status}</p>
    )

export default tasks;