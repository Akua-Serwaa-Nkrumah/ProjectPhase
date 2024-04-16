import React, { useState, useEffect, useRef } from 'react';

//
const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    const incrementButtonRef = useRef();
    const decrementButtonRef = useRef();
    const resetButtonRef = useRef();
  
    useEffect(() => {
      document.title = `Counter: ${counter}`;
    }, [counter]);
  
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    const decrement = () => {
      setCounter(prevCounter => Math.max(prevCounter - 1, 0));
    };
  
    const reset = () => {
      setCounter(0);
    };

    return (
      <div className='container border p-5'>
        <h3>Counter App</h3>
        <hr />
        <h1>Count Value : {counter}</h1>
        <br />
        <div>
            {/* Increases count value by 1 */}
            <button className='btn btn-sm bg-success text-light m-2' ref={incrementButtonRef} onClick={increment}> Increment </button>

            {/*Resets Count to 0 */}
            <button className='btn btn-sm bg-warning text-light m-2' ref={resetButtonRef} onClick={reset}> Reset </button>

            {/* Decreases Count by 1 */}
            <button className='btn btn-sm bg-danger text-light m-2' ref={decrementButtonRef} onClick={decrement}> Decrement </button>
        </div>
      </div>
    )

}

export default CounterApp;