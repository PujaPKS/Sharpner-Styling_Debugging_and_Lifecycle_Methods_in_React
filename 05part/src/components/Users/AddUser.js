import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css'

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
        //form submission logic here
    }
    
  return (
    <Card className='input'>
      <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username'/>

          <label htmlFor='age'>Age</label>
          <input type='number' id='age'/>

      {/* This button is a custom button not default html button and will have all feastures of "Button.js" file*/}
          <Button type='submit'>Add User</Button>

          {/* Way to optimise the custom button and increased reusability*/}
          {/* <Button onClick={clickHandler}>Click Here</Button> */}
      </form>
    </Card>
  )
}

export default AddUser;