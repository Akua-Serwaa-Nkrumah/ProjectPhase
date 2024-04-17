import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

//
const TaskForm = ({ addTask }) => {
  // inital value of taskTitle is empty and setTaskTitle is used to update taskTitle
  const [taskTitle, setTaskTitle] = useState('');

  //handles update of taskTitle. Sets taskTitle to current task value
  const handleTaskTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  //adds a task and by default is set to incomplete
  const handleTaskSubmit = (event) => {
    event.preventDefault();

    //checks if input is not just whitespaces or an empty string then goes ahead to add task.
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: new Date().getTime().toString(),
        title: taskTitle,
        completed: false,
      };
      addTask(newTask);
      setTaskTitle('');
    }
  };

  //form to receive input task and adds to set of tasks
  return (
    <form onSubmit={handleTaskSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={handleTaskTitleChange}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default connect(null, { addTask })(TaskForm);