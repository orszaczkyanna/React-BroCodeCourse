import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(e){ setNewTask(e.target.value);}

    function addTask(){
        if (newTask.trim().length > 0) {
            setTasks(t => [...t, newTask.trim()]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        // setTasks(tasks.filter((_, i) => i !== index));
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    return(
        <div className={styles.toDoList}>
            <h1>To-Do-List</h1>
            <input
                type="text"
                value={newTask}                
                onChange={handleInputChange} //callback
                placeholder="Enter a task..."
                id="inputTask"/>
            <button className={styles.addButton} onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task, index) => <li key={index}>

                    <span className={styles.text}>{task}</span> 

                    <button
                        className={styles.deleteButton}
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className={styles.moveButton}
                        onClick={() => moveTaskUp(index)}>
                        ☝️
                    </button>
                    <button
                        className={styles.moveButton}
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>)}
            </ol>

        </div>
    )
}

export default ToDoList