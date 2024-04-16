<bold> Counter App </bold>

Description

This App is a basic counter app that performs increment, decrement and reset functionalities.

1. Increment button, on click, increments the count value by 1.

2. Decrement button, on click, decrements the count value by 1. Here, the threshold is 0 and hence count value does not go below 0.

3. The Reset value resets the count to 0.

Things to NOTE:

1. The useState Hook : It is used to create a state variable,here counter, and its corresponding setter function, setCounter. counter holds the current value of the counter, and calling setCounter allows you to update its value. By using useState, you can manage and update the state of the counter in a functional component.

2. The useEffect Hook: used to perform side effects in a functional component. In this case, it is used to update the document title whenever the counter value changes. By providing a dependency array [counter], the effect callback function will be executed whenever the counter value changes. This keeps the document title in sync with the counter value.

3. The useRef Hook: is used to create a mutable ref object. Here, three instances of useRef are used to create references for the buttons: incrementButtonRef, decrementButtonRef, and resetButtonRef. These refs can be assigned to the ref attribute of the corresponding buttons to access their underlying DOM elements. It allows you to interact with the buttons programmatically, such as accessing their properties or attaching event listeners. 

4. The CounterApp component is a functional component that encapsulates the counter functionality. It renders the counter value, along with three buttons: "Increment," "Decrement," and "Reset." The increment function is called when the "Increment" button is clicked, the decrement function is called when the "Decrement" button is clicked, and the reset function is called when the "Reset" button is clicked. These functions update the counter state variable accordingly.

Enjoy using the app.