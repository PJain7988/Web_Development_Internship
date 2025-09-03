import React from 'react'
import UserContact from './UserContact';
import { useUser } from '../store/useUser';

// const UserDetails = ({user}) => {
    const UserDetails = () => {
    const {user} = useUser();
    console.log(user,'---user from user details----')
  return (
    <div>
      <p> First Name: {user.firstName}</p>
      <p> Last Name: {user.lastName}</p>
      <p> Maiden Name: {user.maidenName}</p>
      <p>Age: {user.age}</p>
      <p> Email: {user.email}</p>
      <UserContact user= {user}/>   

    </div>
  )
}

export default UserDetails;