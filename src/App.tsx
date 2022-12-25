import React from 'react';
import './App.css';
import {TaskType, ToDoList} from "./Components/ToDoList/todolist";

function App() {
    let tasks1: Array<TaskType> = [
        {id: 1, title: "CSS&HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
    let tasks2: Array<TaskType> = [
        {id: 1, title: "Terminate", isDone: true},
        {id: 2, title: "Create", isDone: true},
        {id: 3, title: "Not Move", isDone: false}
    ];


    return (
        <div className="App">
            <ToDoList title="What to Lern" tasks={tasks1}/>
            <ToDoList title="M" tasks={tasks2}/>

        </div>
    );
}


export default App;
