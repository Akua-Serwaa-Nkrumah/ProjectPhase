import React from 'react';
import { connect } from 'react-redux';
import { updateTask, removeTask, setFilter } from '../redux/actions';

const TaskList = ({ tasks, updateTask, removeTask, setFilter }) => {
    const handleTaskStatusChange = (taskId) => {
        const updatedTask = tasks.find((task) => task.id === taskId);
        updatedTask.completed = !updatedTask.completed;
        updateTask(updatedTask);
    };

    const handleTaskDeletion = (taskId) => {
        removeTask(taskId);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <select onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                            }}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleTaskStatusChange(task.id)}>
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button onClick={() => handleTaskDeletion(task.id)}  style = {{background :'#d32f2f'}}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};


const mapStateToProps = (state) => {
    const { tasks, filter } = state;

    let filteredTasks = tasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
        filteredTasks = tasks.filter((task) => !task.completed);
    }

    return {
        tasks: filteredTasks,
    };
};

export default connect(mapStateToProps, { updateTask, removeTask, setFilter })(TaskList);