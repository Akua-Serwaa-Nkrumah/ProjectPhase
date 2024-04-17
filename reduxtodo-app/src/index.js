import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

```
The Provider store wraps the entire application and allows the components to access the Redux store. The store is passed as a prop to the Provider component, to enable the components access the state and dispatch actions.

```