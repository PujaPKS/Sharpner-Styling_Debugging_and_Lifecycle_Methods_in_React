useReducer Hook -- Explanation and Uses in Code

useReducer is used when we are having some multiple states and all those multiple states are changing multiple aspects of the same change.

For eg. I'm having input element in my DOM. There are 3-4 states that I'm maintaining and they are changing same element of same input inside that DOM.

So if there are multiple states which are affecting your same DOM or if somehow multiple states are inter-related or if they are running at the same time because of some user input or some change event.

So basically when we have so many states in our component and our state dependencied is becoming complex because of that then we need to shift from useState hook to useReducer Hook.

useReducer Hook is a state management hook just like useState hook but it is more powerful than useState.

More powerful means that when we are having such a complex scenario when one state is dependent on some other state or if they are affecting same element in term or if they are running at same time due to some change.

So because of these reasons when number of states have increased and they are affecting each other. In such a scenario useState is not good solution. The other way is to remove complex task we will use useReducer Hook which is more powerful.

useState Hook syntax was like :--->
const [state, setState] = useState(initialState);

useReducer Hook Syntax :---> 
const [state, dispatchFunction] = useReducer(reducerFunction, initialState, initialFunction);

Here in syntax "initialFunction" is optional. We will use when we feel "initialStae" is in complex form.

As soon as "dispatchFunction" is made then the "reducerFunction" is trigered.
"reducerFunction" will receive prevState and action . Syntax of reducerFunction will be like ---> 
reducerFunction (prevState, action) {
    logic to be applied on the code
    returns updated state
}



useReducer Hook is used in "Login.js" file instead of useState Hook to reduce complexity and optimise the code.

