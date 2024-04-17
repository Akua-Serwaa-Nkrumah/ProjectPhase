import { createStore } from 'redux'; // creates a Redux store

//initializes the state of the redux store
const initialState = {
    tasks: [], //empty initially
    filter: 'all', // currently set to all tasks.
  };

  //the reducer takes the state and action
  function taskReducer(state = initialState, action) {

    //checks type of action to be dispatched and executes it accordingle
    switch (action.type) {
      
      //ADD_TASK returns a new state by first copying the current and adding another task by using the payload function
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };

      //updates task with id == task_id
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };

      //Performs delete task by returning tasks with task_id not equal to task to be deleted.
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };

      //filters the tasks based on the action type (all, complete or incomplete) 
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };

      //returns current state if action does not match any of the dispatch actions defined
      default:
        return state;
    }
  }

const store = createStore(taskReducer); // creates a redux store with specific initial state
export default store;