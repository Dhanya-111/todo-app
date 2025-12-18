import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoList() {
    const [tasks, setTasks] = useState ([
    //     {
    //     id: 1,
    //     item: 'Doctor Appointment',
    //     completed: true
    // },
    // {
    //     id: 2,
    //     item: 'Meeting at School',
    //     completed: false
    // }
]);
    const [text, setText] = useState ('');

    function addTask(item) {
        if (item.trim().length === 0) {
            return;
        }
        else {
            const newTask = {
                id: Date.now(),
                item,
                completed: false
                };
            setTasks([...tasks, newTask]);
            setText('');
        }
    }

    function deleteTask(id) {
        console.log("id",id);
        console.log("tasks",tasks);
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
        } else {
            return task;
        } 
        }));
    }

    useEffect(() => {
        fetch('/api/initialData')
            .then(
                // (response) => {
                // console.log('response', response);
                // console.log('response.json', response.json());
                response => response.json()
            // }
            )
            .then(
                // (data) => {
                data => setTasks(data)
                // console.log('data', data);
            // }
            );
    }, []);

    return (
        <div className="todo-list">
            <h3>My ToDo List</h3>
            {/* {tasks.map(task => (
                <TodoItem task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>
            ))} */}
            {/* <input type='text' value={text} onChange={e => setText(e.target.value)} /> */}
            <TextField id="outlined-basic" label="Add New" variant="outlined" value={text} onChange={e => setText(e.target.value)}/>
            {/* <button onClick={() => addTask(text)}>Add</button> */}
            <Button id="add-btn" variant="contained" onClick={() => addTask(text)}>Add New</Button>
            <TodoItem tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>
        </div>
        
    );

}

export default TodoList;