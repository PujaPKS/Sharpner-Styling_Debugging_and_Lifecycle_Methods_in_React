import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css'

const AddUser = (props) => {

  //useState is used to set values of the variable.
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    if(username.trim().length === 0 || age.trim().length === 0){
      return;
    }
    if(+age < 1){
      return;
    }
    // console.log(username , age);

    props.onAddUser(username , age);
    setUsername('');
    setAge('');
  };
    
  return (
    <Card className='input'>
      <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={username} onChange={nameChangeHandler}/>

          <label htmlFor='age'>Age</label>
          <input type='number' id='age' value={age} onChange={ageChangeHandler}/>

      {/* This button is a custom button not default html button and will have all feastures of "Button.js" file*/}
          <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;

