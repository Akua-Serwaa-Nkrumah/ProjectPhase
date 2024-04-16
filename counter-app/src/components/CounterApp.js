import React, { useState, useEffect, useRef } from 'react';

//This function defines the functionality of the counter app
//It performs increment, decremment and reset functions 

const CounterApp = () => {
    const [counter, setCounter] = useState(0); //setCounter sets the counter value, counter value is default 0
    const incrementButtonRef = useRef(); //reference for the increment button
    const decrementButtonRef = useRef(); //reference for the decrement button
    const resetButtonRef = useRef(); //reference for the reset button
  
    //this sets the document title to the current counter value
    useEffect(() => {
      document.title = `Counter: ${counter}`;
    }, [counter]);
  
    //this performs the increment functionality by setting the counter value to the current value + 1
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    //this performs the decrement functionality by setting the counter value to the current value - 1
    const decrement = () => {
      setCounter(prevCounter => Math.max(prevCounter - 1, 0));
    };
  
  
    //this resets the count value to 0
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
            {/* Button to Increase count value by 1 */}
            <button className='btn btn-sm bg-success text-light m-2' ref={incrementButtonRef} onClick={increment}> Increment </button>

            {/*Button to Reset Count to 0 */}
            <button className='btn btn-sm bg-warning text-light m-2' ref={resetButtonRef} onClick={reset}> Reset </button>

            {/*Button to Decrease Count by 1 */}
            <button className='btn btn-sm bg-danger text-light m-2' ref={decrementButtonRef} onClick={decrement}> Decrement </button>
        </div>
      </div>
    )

}

export default CounterApp;