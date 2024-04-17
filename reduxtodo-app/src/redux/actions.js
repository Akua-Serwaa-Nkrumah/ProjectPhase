//when called pushes (action_type and task/task_id depecnding on action_type) to the reducer

export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const updateTask = (task) => ({
    type: 'UPDATE_TASK',
    payload: task,
  });
  
  export const removeTask = (taskId) => ({
    type: 'REMOVE_TASK',
    payload: taskId,
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });