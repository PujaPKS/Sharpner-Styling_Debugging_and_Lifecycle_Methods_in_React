// Write your code here:

import React from 'react';
import './UsersList.css'
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className='users'>
        <ul>
            {props.users.map((user) =>{
                <li key={user.name}>{user.name} ({user.age} years old)</li>
            })}
        </ul>
    </Card>
  )
}

export default UsersList;