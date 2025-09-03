
import React from 'react'

const UserContact = ({user}) => {
  return (
    <div>
        <p>Phone no: {user.phone}</p>
        <p>Address: {user.address.address}</p>
        <p>Address City: {user.address.city}</p>
        <p>Country: {user.address.country}</p>
    </div>
  )
}

export default UserContact;
