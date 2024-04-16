import './App.css';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
      <h1>My first React Application with Hooks</h1>
      {/* This calls the CounterApp component where all the functionality is */}
      <CounterApp />
    </div>
  );
}

export default App;
