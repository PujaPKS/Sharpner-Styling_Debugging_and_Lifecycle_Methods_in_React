import React from 'react';
import Card from '../UI/Card';
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

          <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser;