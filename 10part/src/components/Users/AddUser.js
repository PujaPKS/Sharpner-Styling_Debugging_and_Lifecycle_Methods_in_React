// Write your code at relevant places in the code below:

import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  //useState is used to set values of the variable.
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  
  const addUserHandler = (event) => {
    event.preventDefault();
    
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid username and age(non-empty values)'
      });
      return;
    }
    if(+age < 1){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid age( > 0)'
      });
      return;
    }
    // console.log(username , age);
    
    props.onAddUser(username , age);
    setUsername('');
    setAge('');
  };
  
  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  
  const errorHandler = () => {
    setError(null);
  }
    
  return (
    <div>
      {error && (
        <ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}/>
      )}
      {/* <ErrorModal title={'Invalid Input'}  message={'Please enter a valid input value.'}/> */}
      <Card className='input'>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' value={username} onChange={nameChangeHandler}/>

            <label htmlFor='age'>Age</label>
            <input type='number' id='age' value={age} onChange={ageChangeHandler}/>

            <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser;

