import React, { useState, useRef } from 'react';

function App() {

  const [fruit, setFruit] = useState("Mango");
  const [animal, setAnimal] = useState("Cat");

  const counterRef = useRef(0);

  const changeFruitHandler = () => {
    setFruit('Apple');
    console.log(counterRef);
  }

  const changeAnimalHandler = () => {
    setAnimal('Dog');
    // counterRef.current = counterRef.current + 1; //want to increase the value by 1 only when Change Animal button is clicked and the counterRef value will be preserved on click of Change Fruit button.
    console.log(counterRef);
  }

  const countChangeHandler = () => {
    counterRef.current = counterRef.current + 1; //Want to increase value when countChangeHandler button is clicked and on click other 2 buttons the value will be preserved on re-rendering also due to useRef hook.
    //On clicking the button also the component animal and fruit is not re-rendered only value is changed.
    console.log(counterRef);
  }

  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={changeFruitHandler}>Change Fruit</button>
      <h1>{animal}</h1>
      <button onClick={changeAnimalHandler}>Change Animal</button>
      <br/>
      <button onClick={countChangeHandler}>Change Count</button>
    </div>
  );
}

export default App;
